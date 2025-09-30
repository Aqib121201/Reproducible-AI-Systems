import { request, gql } from "graphql-request";
import fs from "fs";

const endpoint = "https://api.github.com/graphql";
const token = process.env.GH_TOKEN;

const query = gql`
{
  user(login: "Aqib121201") {
    discussionComments(first: 50, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        url
        body
        createdAt
        isAnswer
        discussion {
          title
          repository {
            nameWithOwner
          }
        }
      }
    }
  }
}
`;

async function main() {
  const headers = { Authorization: `Bearer ${token}` };
  const data = await request(endpoint, query, {}, headers);

  let md = `# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into reproducible case studies.  
Each entry contains the original discussion link, my solution excerpt, and reproducibility placeholders.  
This aligns with EU Open Science standards of transparency and validation.

---

`;

  let count = 0;
  data.user.discussionComments.nodes
    .filter(c => c.isAnswer)
    .forEach((c) => {
      count++;
      md += `## Case Study ${count}: ${c.discussion.title}\n`;
      md += `**Repository:** ${c.discussion.repository.nameWithOwner}\n\n`;
      md += `**Original Discussion:** [View here](${c.url})\n\n`;
      md += `**Answer Excerpt:**\n${c.body.substring(0, 400)}...\n\n`;
      md += `**Validation:**\nSteps to confirm this solution works (to be expanded).\n\n`;
      md += `**Reproducibility Notes:**\nEnvironment assumptions, scripts, or datasets needed (to be added).\n\n`;
      md += "---\n\n";
    });

  md += `\n_Total curated answers: ${count}_\n`;

  fs.writeFileSync("README.md", md);
}

main().catch(err => console.error(err));
