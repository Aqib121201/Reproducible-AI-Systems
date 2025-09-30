# Case 002: what does secret scanning scan history return?

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/175077  
**Accepted Answer** https://github.com/community/community/discussions/175077#discussioncomment-14534645  
**Date** 2025-09-28

---

## Problem
Brief restatement of the issue from the discussion.

## Solution I provided
Secret scanning scan history returns the machine-readable identifier of the pattern, which is `pattern_slug`. That is what you will see in the API response.

The docs sometimes show `pattern_name` in examples for readability, but the actual response object includes the slug. You can map slugs back to human-friendly names using the patterns API if you need to display them.

If this solved your issue please mark the answer as helpful so others can find it.


## Validation
Steps to confirm resolution. Include commands and expected outputs.

## Reproducibility Notes
OS and versions  
Dependencies and tokens  
Edge cases and rollback

## Evidence
Paste console logs or screenshots in `evidence/` and link them here.

