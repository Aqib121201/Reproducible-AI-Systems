const fs = require("fs");

const endpoint = "https://api.github.com/graphql";
const token = process.env.GH_TOKEN;
const username = "Aqib121201"; // <-- change if your GitHub handle is different

// GraphQL query with pagination
const query = `
query($q: String!, $after: String) {
  search(type: DISCUSSION, query: $q, first: 50, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ... on Discussion {
        title
        url
        repository { nameWithOwner }
        answer {
          author { login }
          body
          url
          createdAt
        }
      }
    }
  }
}
`;

async function ghRequest(query, variables) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GitHub API ${res.status}: ${txt}`);
  }
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

function oneLine(s) {
  return s.replace(/\r?\n+/g, " ").trim();
}

async function main() {
  if (!token) throw new Error("Missing GH_TOKEN env");
  const searchQuery = `is:discussion answered-by:${username}`;

  let cursor = null;
  let allDiscussions = [];

  while (true) {
    const data = await ghRequest(query, { q: searchQuery, after: cursor });
    const page = data.search.nodes || [];
    allDiscussions.push(...page);

    if (!data.search.pageInfo.hasNextPage) break;
    cursor = data.search.pageInfo.endCursor;
  }

  const discussions = allDiscussions.filter(
    d => d.answer && d.answer.author && d.answer.author.login.toLowerCase() === username.toLowerCase()
  );

  let md = `# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into reproducible case studies.  
Each entry includes the original discussion link, a solution excerpt, and reproducibility placeholders.  
This aligns with EU Open Science standards of transparency and validation.

---

`;

  let i = 0;
  for (const d of discussions) {
    i++;
    const excerpt = oneLine(d.answer.body).slice(0, 400);
    md += `## Case Study ${i}: ${d.title}
**Repository:** ${d.repository.nameWithOwner}

**Original Discussion:** [View discussion](${d.url})  
**Accepted Answer:** [Direct link](${d.answer.url})

**Answer Excerpt:**  
${excerpt}...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

`;
  }

  md += `\n_Total curated accepted answers: ${i}_\n`;
  fs.writeFileSync("README.md", md);

  console.log(`✅ Wrote ${i} accepted answers to README.md`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
