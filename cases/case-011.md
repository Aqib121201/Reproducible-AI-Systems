# Case 011: if: ${{ github.event_name == 'workflow_call' }} not working in reuseable workflow

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/174203  
**Accepted Answer** https://github.com/community/community/discussions/174203#discussioncomment-14467169  
**Date** 2025-09-21

---

## Problem
Brief restatement of the issue from the discussion.

## Solution I provided
When a workflow runs as a reusable workflow the context is not the same as a normal event run so checking github.event_name == 'workflow_call' inside the called workflow does not work as you expect. The clean way is to pass the event type down as an input when you call the reusable workflow and then check that input inside.
Example caller workflow
jobs:
  call-build:
    uses: ./.github/workflows/reusable.yml
    with:
      caller_event: ${{ github.event_name }}
Example reusable workflow
on:
  workflow_call:
    inputs:
      caller_event:
        required: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: upload artifact only when called
        if: ${{ inputs.caller_event == 'workflow_call' }}
        uses: actions/upload-artifact@v4
        with:
          name: ${{ env.ARTIFACT_NAME }}
          path: ${{ env.ARTIFACT_PATH }}
This way you know exactly when the workflow is being invoked by another workflow and can branch your logic reliably. Also avoid putting if on the job that calls a reusable workflow because that condition is evaluated in the caller not in the callee.
if you find this solution helpfull upvote this and please follow me it boost my confidence

## Validation
Steps to confirm resolution. Include commands and expected outputs.

## Reproducibility Notes
OS and versions  
Dependencies and tokens  
Edge cases and rollback

## Evidence
Paste console logs or screenshots in `evidence/` and link them here.

