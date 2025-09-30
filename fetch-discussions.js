const fs = require("fs");
const path = require("path");

const endpoint = "https://api.github.com/graphql";
const token = process.env.GH_TOKEN;
const username = "Aqib121201"; // change if needed

const query = `
query($q: String!, $after: String) {
  search(type: DISCUSSION, query: $q, first: 50, after: $after) {
    pageInfo { hasNextPage endCursor }
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

async function gh(query, variables) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables })
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const oneLine = s => (s || "").replace(/\r?\n+/g, " ").trim();

async function fetchAllAccepted() {
  const q = `is:discussion answered-by:${username}`;
  let after = null, all = [];
  while (true) {
    const data = await gh(query, { q, after });
    all.push(...(data.search.nodes || []));
    if (!data.search.pageInfo.hasNextPage) break;
    after = data.search.pageInfo.endCursor;
  }
  // keep only discussions where your answer is the accepted one
  return all.filter(d => d.answer && d.answer.author && d.answer.author.login.toLowerCase() === username.toLowerCase());
}

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

async function main() {
  if (!token) throw new Error("Missing GH_TOKEN env");
  ensureDir("cases");

  const discussions = await fetchAllAccepted();

  // Build README
  let md = `# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into **reproducible case studies**.
Each entry links to a detailed case with validation and reproducibility notes.
This aligns with EU Open Science and reproducibility standards.

![Update Discussions](https://github.com/${username}/Reproducible-AI-Systems/actions/workflows/update.yml/badge.svg)

## Indexed Case Studies
`;

  let i = 0;
  for (const d of discussions) {
    i++;
    const slug = String(i).padStart(3, "0");
    const file = `cases/case-${slug}.md`;

    const excerpt = oneLine(d.answer.body).slice(0, 600);

    const caseMd = `# Case ${slug}: ${d.title}

**Repository** ${d.repository.nameWithOwner}  
**Discussion** ${d.url}  
**Accepted Answer** ${d.answer.url}  
**Date** ${new Date(d.answer.createdAt).toISOString().slice(0,10)}

---

## Problem
Brief restatement of the issue from the discussion.

## Solution I provided
${d.answer.body}

## Validation
Steps to confirm resolution. Include commands and expected outputs.

## Reproducibility Notes
OS and versions  
Dependencies and tokens  
Edge cases and rollback

## Evidence
Paste console logs or screenshots in \`evidence/\` and link them here.

`;

    fs.writeFileSync(file, caseMd);
    md += `1. [Case ${slug}: ${d.title}](${file}) — ${excerpt}...\n`;
  }

  md += `\n_Total curated accepted answers: ${i}_\n`;
  fs.writeFileSync("README.md", md);
  console.log(`Wrote README and ${i} case files.`);
}

main().catch(e => { console.error(e); process.exit(1); });
