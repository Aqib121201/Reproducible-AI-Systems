

const fs = require("fs");
const path = require("path");

const endpoint = "https://api.github.com/graphql";
const token = process.env.GH_TOKEN;
const username = "Aqib121201";         // <— set your handle
const repoSlug = "Reproducible-AI-Systems";

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
function sanitize(t) {
  return (t || "")
    .replace(/if this (solved|helps?).*?(upvote|follow|star).*?$/gi, "")
    .replace(/please (follow|star|upvote).*?$/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}
function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

async function fetchAllAccepted() {
  const q = `is:discussion answered-by:${username}`;
  let after = null, all = [];
  while (true) {
    const data = await gh(query, { q, after });
    all.push(...(data.search.nodes || []));
    if (!data.search.pageInfo.hasNextPage) break;
    after = data.search.pageInfo.endCursor;
  }
  return all.filter(d => d.answer && d.answer.author &&
    d.answer.author.login.toLowerCase() === username.toLowerCase());
}

// tiny SVG bar chart (no deps)
function makeBarChart(perRepo) {
  const entries = Object.entries(perRepo).sort((a,b)=>b[1]-a[1]).slice(0,12);
  const width = 760, barH = 22, gap = 8, left = 220, top = 40;
  const max = Math.max(1, ...entries.map(([,v])=>v));
  const height = top + entries.length*(barH+gap) + 20;
  let bars = `
    <style>
      .title{font:700 16px system-ui,Segoe UI,Ubuntu,Helvetica,Arial}
      .lbl{font:500 12px system-ui,Segoe UI,Ubuntu,Helvetica,Arial; fill:#333}
      .val{font:600 12px system-ui,Segoe UI,Ubuntu,Helvetica,Arial; fill:#111}
    </style>
    <text x="20" y="24" class="title">Per-repository coverage (top 12)</text>`;
  entries.forEach(([name,val],i)=>{
    const y = top + i*(barH+gap);
    const w = Math.max(4, Math.round((val/max)*(width-left-40)));
    const safe = name.length>28 ? name.slice(0,25)+"…" : name;
    bars += `
      <text x="20" y="${y+15}" class="lbl">${safe}</text>
      <rect x="${left}" y="${y}" width="${w}" height="${barH}" rx="4" fill="#6aa6ff"/>
      <text x="${left+w+8}" y="${y+15}" class="val">${val}</text>`;
  });
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="per repo coverage chart">
    <rect width="100%" height="100%" fill="#fff" rx="8"/>
    ${bars}
  </svg>`;
}

async function main() {
  if (!token) throw new Error("Missing GH_TOKEN env");

  ensureDir("cases");
  ensureDir("assets");
  ensureDir("evidence");
  if (!fs.existsSync("evidence/.keep")) fs.writeFileSync("evidence/.keep","");

  const discussions = await fetchAllAccepted();

  // metrics
  const perRepo = {};
  let last30 = 0;
  const cutoff = Date.now() - 30*24*60*60*1000;
  discussions.forEach(d=>{
    perRepo[d.repository.nameWithOwner]=(perRepo[d.repository.nameWithOwner]||0)+1;
    if (new Date(d.answer.createdAt).getTime() >= cutoff) last30++;
  });

  // chart
  const svg = makeBarChart(perRepo);
  fs.writeFileSync("assets/per_repo.svg", svg);

  // README header with badges and highlights
  let md = `# Reproducible AI Systems

[![Workflow](https://github.com/${username}/${repoSlug}/actions/workflows/update.yml/badge.svg)](https://github.com/${username}/${repoSlug}/actions)
![Cases](https://img.shields.io/badge/accepted_cases-${discussions.length}-blue)
![Last_30_days](https://img.shields.io/badge/last_30_days-${last30}-informational)
![License](https://img.shields.io/badge/license-Apache--2.0-success)

A curated archive of my **accepted GitHub Discussions answers**, rewritten as **reproducible case studies** with validation steps.
This project operationalizes EU **Open Science** practices for developer tooling and trustworthy AI.

## Highlights
- Total accepted answers: **${discussions.length}**
- New in last 30 days: **${last30}**
- Repositories covered: **${Object.keys(perRepo).length}**
- Last update: **${new Date().toISOString().slice(0,19)}Z**

## Alignment
TU Darmstadt reproducibility & benchmarking · LMU/Helmholtz AI open-science and transparent ML methods.

## Coverage
<img src="assets/per_repo.svg" alt="per repository coverage chart">

<details>
<summary><b>Indexed Case Studies</b> — click to expand</summary>

`;

  // cases
  let i = 0;
  for (const d of discussions) {
    i++;
    const slug = String(i).padStart(3,"0");
    const file = `cases/case-${slug}.md`;
    const cleanBody = sanitize(d.answer.body);
    const excerpt = sanitize(oneLine(cleanBody)).slice(0, 600);

    const caseMd = `# Case ${slug}: ${d.title}

**Repository** ${d.repository.nameWithOwner}  
**Discussion** ${d.url}  
**Accepted Answer** ${d.answer.url}  
**Date** ${new Date(d.answer.createdAt).toISOString().slice(0,10)}

---

## Problem
State the minimal reproducible problem in one paragraph.

## Solution I provided
${cleanBody}

## Validation
Commands to run and expected output.

## Reproducibility Notes
OS and versions · Dependencies · Edge cases and rollback

## Evidence
Attach logs/screenshots under \`evidence/\` and link here.

`;
    fs.writeFileSync(file, caseMd);
    md += `1. [Case ${slug}: ${d.title}](${file}) — ${excerpt}...\n`;
  }

  md += `\n</details>\n`;
  md += `\n—\n\n*This archive updates daily via GitHub Actions. Each case is designed to be auditable and classroom-ready.*\n`;
  fs.writeFileSync("README.md", md);
  console.log(`Wrote README, ${i} cases, and assets/per_repo.svg`);
}

main().catch(e=>{ console.error(e); process.exit(1); });
