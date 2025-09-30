const fs = require("fs");

const endpoint = "https://api.github.com/graphql";
const token = process.env.GH_TOKEN;

const query = `
query {
  user(login: "Aqib121201") {
    discussionComments(first: 50, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        url
        body
        createdAt
        isAnswer
        discussion {
          title
          repository { nameWithOwner }
        }
      }
    }
  }
}
`;

async function ghRequest(query) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${txt}`);
  }
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function main() {
  if (!token) throw new Error("Missing GH_TOKEN env");

  const data = await ghRequest(query);
  const nodes = (data.user?.discussionComments?.nodes || []).filter(n => n.isAnswer);

  let md = `# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into reproducible case studies.
Each entry includes the original discussion link, a solution excerpt, and placeholders for validation and reproducibility.

---

`;

  let count = 0;
  for (const c of nodes) {
    count++;
    const excerpt = c.body.replace(/\r?\n+/g, " ").slice(0, 400);
    md += `## Case Study ${count}: ${c.discussion.title}
**Repository:** ${c.discussion.repository.nameWithOwner}

**Original Discussion:** [View here](${c.url})

**Answer Excerpt:**
${excerpt}...

**Validation:**
Steps to confirm this solution works.

**Reproducibility Notes:**
Environment assumptions, scripts, or datasets needed.

---

`;
  }

  md += `\n_Total curated answers: ${count}_\n`;
  fs.writeFileSync("README.md", md);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
