# Case 005: manual workflow in features brach

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/174939  
**Accepted Answer** https://github.com/community/community/discussions/174939#discussioncomment-14527010  
**Date** 2025-09-27

---

## Problem
State the minimal reproducible problem in one paragraph.

## Solution I provided
Your workflow is in a feature branch. The Actions tab only lists workflows from the default branch. Until the file exists on the default branch it will not show up for manual runs. Add a manual trigger to the workflow and merge it to the default branch under .github/workflows with a .yml or .yaml extension. Then use Run workflow to choose your feature branch as the ref. Here is a minimal example you can commit to the default branch. ```yaml name: Manual check on: workflow_dispatch: jobs: echo: runs-on: ubuntu-latest steps: - name: Show ref run: | echo "Ref is $GITHUB_REF" ``` This appears in the Actions tab once it is on the default branch. You can then pick your feature branch in the Run workflow dropdown. If you prefer the CLI you can run it with gh workflow run "Manual check" --ref your-feature-branch. If this solved your issue please mark the answer as helpful so others can find it

## Validation
Commands to run and expected output.

## Reproducibility Notes
OS and versions · Dependencies · Edge cases and rollback

## Evidence
Attach logs/screenshots under `evidence/` and link here.

