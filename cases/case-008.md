# Case 008: Github Action on PR merged and Environment question

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/174474  
**Accepted Answer** https://github.com/community/community/discussions/174474#discussioncomment-14492811  
**Date** 2025-09-24

---

## Problem
Brief restatement of the issue from the discussion.

## Solution I provided
Yes. You can run the deployment from the target branch or use pull_request_target so the job runs with the base branch context. Both approaches work and one is safer for accessing protected environments and secrets
Option one use push on the target branch
After a PR is merged GitHub creates a push to the target branch. Create a workflow that triggers on push to the target branch for example main and run your build and deploy there. Because the workflow runs on the target branch environment protection rules apply as expected and secrets are available only when the branch is allowed to use that environment

Option two use pull_request_target for pre merge actions that need secrets
pull_request_target runs the workflow in the context of the base branch rather than the fork or head branch. That means you can access protected environment secrets and it respects environment protection rules while avoiding running untrusted workflow code from the PR. Be careful not to checkout and run arbitrary PR code before verifying the PR since that would reintroduce the same security risk

How to detect merged vs closed
When using pull_request_target check that github event indicates merged for closed events (github.event.pull_request.merged equals true) so you only deploy on merges and not on simple closes

What is not safe
Do not run a workflow that comes from the source branch or a fork if it needs access to secrets or protected environments unless you explicitly allow that branch in the environment protection rules. Changes in the target branch could exist that are not in the source branch so building and deploying from the target branch after the merge is the safest way to ensure you are deploying the actual code that will run in production

Recommendation
Use a push based workflow on the target branch for the actual build and deploy. Use pull_request_target if you need to run checks that require secrets during the PR lifecycle but avoid checking out and executing PR code before appropriate validation

if you find this solution helpful upvote this and please follow me it boost my confidence


## Validation
Steps to confirm resolution. Include commands and expected outputs.

## Reproducibility Notes
OS and versions  
Dependencies and tokens  
Edge cases and rollback

## Evidence
Paste console logs or screenshots in `evidence/` and link them here.

