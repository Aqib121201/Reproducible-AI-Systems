# Case 001: Why did I get a GitHub Spark access email if it’s still rolling out?

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/175153  
**Accepted Answer** https://github.com/community/community/discussions/175153#discussioncomment-14542718  
**Date** 2025-09-29

---

## Problem
Brief restatement of the issue from the discussion.

## Solution I provided
The Spark rollout is staged which means some parts of the system are live before the product is visible everywhere. The email you received was triggered early but your account has not yet been fully enabled. That is why the welcome link loads the holding page instead of the Spark workspace.

This happens when the marketing system and the feature flag system are not in sync. The email is correct in that you are on the access list but the backend is still rolling out activation. Once your account is flipped on you will be able to use Spark with the same link.

There is nothing you need to do on your side. Just wait a little and check again. The message you see is the normal placeholder until your account is active.

If this solved your issue please mark the answer as helpful so others can find it.


## Validation
Steps to confirm resolution. Include commands and expected outputs.

## Reproducibility Notes
OS and versions  
Dependencies and tokens  
Edge cases and rollback

## Evidence
Paste console logs or screenshots in `evidence/` and link them here.

