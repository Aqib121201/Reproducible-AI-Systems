# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into reproducible case studies.  
Each entry includes the original discussion link, a solution excerpt, and reproducibility placeholders.  
This aligns with EU Open Science standards of transparency and validation.

---

## Case Study 1: How to organize multiple projects within an Organization on GitHub?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179050)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179050#discussioncomment-14904053)

**Answer Excerpt:**  
You can’t make folders inside an organization. Each project should be its own repo that’s the normal setup on GitHub.If your SVN projects have multiple source sets, you can split them into separate repos or keep them together in one repo if they’re tightly linked. For shared code, use a common repo or submodules. Keep things simple one repo per real project usually works best....

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 2: How to conditionally run steps in a workflow based on the value of an environment variable set
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179271)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179271#discussioncomment-14924479)

**Answer Excerpt:**  
Your step runs because the string "false" is still treated as true in GitHub Actions try it  ```yaml if: ${{ fromJSON(env.DEPLOY_IMAGES_TO_AZURE) }} ```  or use a boolean input and check it like this  ```yaml if: ${{ inputs.deploy }} ```  if you find this solution helpful upvote this and please follow me it boosts my confidence...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 3: Releases is duplicated
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179273)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179273#discussioncomment-14924583)

**Answer Excerpt:**  
If the API shows two releases it’s a GitHub backend bug not cacheDelete the release keep the tag then recreate it or use a new tag Contact GitHub Support with the API response so they can fix it...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 4: Best practices for migrating from SVN to GitHub
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179231)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179231#discussioncomment-14924549)

**Answer Excerpt:**  
No you don’t need to register them firstJust make sure your authors.txt file maps SVN usernames to the correct GitHub emails like `svnuser = Full Name <email@domain.com>`When you push the repo to GitHub it’ll automatically link commits to any GitHub account using that emailIf some emails don’t match any account they’ll still show up as plain text authors...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 5: How to use 2FA without signing up for an online account?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179118)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179118#discussioncomment-14908410)

**Answer Excerpt:**  
No, you don’t need a YubiKey. Just use an offline authenticator app like Aegis or Raivo. If you want a YubiKey, you’ll need to buy one yourself GitHub doesn’t provide them....

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 6: Can an input parameter be used for an automatic deployment?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179119)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179119#discussioncomment-14908415)

**Answer Excerpt:**  
No, `inputs` only work with `workflow_dispatch`. For auto triggers like push or PR, just hardcode a default and override it only when `workflow_dispatch` runs....

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 7: iPad full screen support
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/179097)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/179097#discussioncomment-14903967)

**Answer Excerpt:**  
No real full screen mode yet. Safari’s top bar can’t be removed, and Add to Home Screen doesn’t work because of the login redirect. Best you can do is turn on Request Desktop Website go split view for a second, then back that hides the bar for a bit.Otherwise, use Blink Shell or VS Code Remote Tunnels for true full screen access....

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 8: project idea question_mind map file manager
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/178721)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/178721#discussioncomment-14859542)

**Answer Excerpt:**  
Yeah, that idea could work. A visual file manager showing folders as a mind map would help developers see big projects more clearly.Start small build a tree view using React and maybe D3.js or React Flow for visualization. You can add a simple code editor later using Monaco the one VS Code uses.Focus on smooth folder navigation first, then share a prototype to get feedback.If this helps, mark it h...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 9: Copilot issues
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/178850)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/178850#discussioncomment-14876934)

**Answer Excerpt:**  
Yeah, that’s just the Copilot command limit kicking in it resets once your billing cycle renews, usually monthly. There’s no manual way to get credits back right now, even if the AI burned through them doing junk.You can check your reset date in your GitHub Copilot billing page. If you hit the limit a lot, it helps to keep shorter chats or restart sessions when Copilot starts going off track it te...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 10: core.debug fails silently
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/178475)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/178475#discussioncomment-14849187)

**Answer Excerpt:**  
This isn’t repo level policy. You’re hitting the workflow command size limit: `core.debug()` writes a single “::debug::…” line to the runner, and very large payloads can be dropped silently. Different runner/toolkit versions make this show up in one repo and “work” (often truncated) in another.  log just the length of your JSON and a tiny prefix/suffix. If the short bits show but the full blob doe...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 11: Please simplify generation of granular tokens
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/178653)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/178653#discussioncomment-14851604)

**Answer Excerpt:**  
Yeah, totally get that right now, there’s no CLI support for creating granular tokens, only through the web UI. That’s why it feels so clunky for local setups.  The closest workaround is to create a classic automation token scoped just for read:packages and use that in your .npmrc or .env. It doesn’t expire every 90 days, so it saves you from repeating the steps. If you’re worried about security, ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 12: How to find my history of forked repo
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177599)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177599#discussioncomment-14740858)

**Answer Excerpt:**  
Try checking your pull request history first. If you ever made a PR from that fork, it will still show the original repo even if your fork is gone.  If you never made a PR, run this in your terminal if you have GitHub CLI ,i have coded this for you  ```bash gh api /users/YOUR_USERNAME/events --paginate | jq -r 'select(.type=="ForkEvent") | .repo.name' ```  It lists the repos you recently forked.  ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 13: Hosting
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177265)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177265#discussioncomment-14714856)

**Answer Excerpt:**  
It looks like the setup page can’t see your GitHub repos yet. This usually happens because the hosting site doesn’t have permission to access your GitHub account.  Click the Edit GitHub permissions link you see there. That takes you to GitHub where you can check and allow access to the repo you want to use. Make sure to pick the right one or allow access to all your repos.  Once you save that, go ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 14: NextJS, failed to fetch ' Open Sans' from Google Fonts on build
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177046)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177046#discussioncomment-14700369)

**Answer Excerpt:**  
The most likely fix is that the app still tries to load the Google hosted font somewhere. Remove any next font google import and any link tag to fonts.googleapis.com, then use a local font with next font local so the build and runtime never go online. To confirm it worked, reload with devtools open and check the network tab shows no requests to fonts.googleapis.com and that your woff2 files load f...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 15: Workflow matrix with extra data
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177251)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177251#discussioncomment-14714871)

**Answer Excerpt:**  
You can’t use nested objects directly in a matrix like that because GitHub Actions only supports flat key and list structures in the matrix definition. But you can still pair related values by defining multiple lists and matching them with `include`.  try coding something like this ```yaml jobs:   build:     strategy:       matrix:         include:           - flavor: one             data: |      ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 16: Pages from Private repo if student status expires?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177270)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177270#discussioncomment-14714852)

**Answer Excerpt:**  
If your student Pro account expires and drops back to the free plan, the private Pages site will stop being served. The repository itself will stay intact, but Pages will no longer publish from it since private Pages require a Pro or higher plan.  The site will show a 404 until you either upgrade again or make the repository public. Once you switch it to public, GitHub will automatically redeploy ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 17: Architectural Discussion: Best way to cap file upload sizes in Go to prevent OOM/DoS?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177001)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177001#discussioncomment-14700482)

**Answer Excerpt:**  
The single most reliable fix is to cap the request body at the handler boundary with http.MaxBytesReader and stop reading when the limit is hit, then stream the file to disk instead of using io.ReadAll. To confirm it works, post a file just over the limit and verify the endpoint returns 413 and your process memory stays flat.  i have coded a bit for you ```go package main  import ( 	"errors" 	"io"...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 18: Flutter Project Build Issue
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/176745)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/176745#discussioncomment-14671266)

**Answer Excerpt:**  
The most likely fix is that the simulator build is still using Xcode 9.3 under the hood even if you installed newer tools. That produces pods compiled against the wrong SDK and the compiler cannot find the `cloud_firestore` module. Point the command line tools to the current Xcode, clear DerivedData and pods, then rebuild so everything targets the iOS 18 simulator SDK.  Open a terminal and run thi...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 19: Prevent actions on forks
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/176925)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/176925#discussioncomment-14700561)

**Answer Excerpt:**  
This happens because when you update a pull request from a fork GitHub runs the workflow in the fork’s context but keeps you as the committer on that temporary merge commit. Since the workflow fails in the fork you get the notification.  The clean way to stop it is to disable actions on forks in the repository settings. Go to your repository then Settings Actions General and under Fork pull reques...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 20: What it means that a AI model is in a preview?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/177077)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/177077#discussioncomment-14700238)

**Answer Excerpt:**  
When a model is marked as preview it means it is an early public version being tested before full release. GitHub and OpenAI use previews to collect feedback and measure performance under real usage before deciding if it becomes the standard model.  A preview model may change more often or behave differently between sessions because it is still being tuned. It can also be replaced or taken offline...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 21: I am having a very hard time understanding things. Someone please point me in the right direction.
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175680)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175680#discussioncomment-14592861)

**Answer Excerpt:**  
It sounds like what is making things complicated is that you are seeing many different names and products all at once. The good news is you do not need all of them to begin programming.  The single most important thing is to create one GitHub account. That is your place to keep code online and share it. On your computer install Git, which is the tool that actually tracks changes to files. With tho...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 22: Not Able to Get in my HacktoberFest Account
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/176827)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/176827#discussioncomment-14671282)

**Answer Excerpt:**  
Once a GitHub account is deleted, all its linked authorizations, including Hacktoberfest connections, are permanently lost. Hacktoberfest identifies users through their GitHub ID, not just the email address, so even if you recreated the same username or used the same email, it will be treated as a completely new account.  You won’t be able to recover the old Hacktoberfest account because it was ti...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 23: TLS certificate is being provisioned. This may take up to 15 minutes to complete.
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/176744)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/176744#discussioncomment-14671257)

**Answer Excerpt:**  
This message usually means GitHub Pages has detected your custom domain but has not yet been able to verify it through DNS for SSL provisioning. Even if your A and CNAME records look correct, the DNS changes might not have fully propagated through the global network.  You can confirm the setup by running `dig yourdomain.com` and `dig www.yourdomain.com` from a terminal. Both should return GitHub’s...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 24: About git.hubp.de
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175897)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175897#discussioncomment-14601807)

**Answer Excerpt:**  
That site is not part of GitHub. The only official GitHub domains are github.com and subdomains ending in githubusercontent.com or github.dev. The address git.hubp.de is unrelated and likely a third-party mirror or imitation site. It is safest to assume it is not authorized to host your content.  To confirm, check the SSL certificate and whois record of the domain. You will see it is not owned by ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 25: Paymeny declined
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175858)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175858#discussioncomment-14597035)

**Answer Excerpt:**  
The most reliable next step is to remove the saved payment method from your GitHub billing settings and re-add it using a different browser or a private window. This bypasses cached payment data that can cause processor rejections even when the card is valid. It also ensures that 3D Secure verification can complete if your bank requires it.  After you re-add the card, try a small manual charge by ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 26: Fork Missing in Tree View of Fork Insights Tab
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175749)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175749#discussioncomment-14592815)

**Answer Excerpt:**  
This is expected. The Forks tree view is built from the network graph and only renders forks that have diverged from the parent. A brand new fork with no commits and no visible divergence is collapsed out of the tree. If the org fork is private or internal it will also be hidden from the public Insights page for privacy reasons.  The most likely fix is to have the org fork push at least one commit...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 27: AGENTS.md is not considering by default when I start a new chat
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175649)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175649#discussioncomment-14584341)

**Answer Excerpt:**  
The most likely fix is to turn on AGENTS.md support in VS Code. This feature is experimental and off by default, so Copilot will ignore the file until you enable it. In VS Code settings set chat.useAgentsMdFile to true and keep AGENTS.md at the root of your workspace. After that Copilot will load those instructions automatically for each new chat in that workspace.  To validate it quickly add a si...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 28: Can’t figure out why my API won’t accept orders
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175554)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175554#discussioncomment-14574303)

**Answer Excerpt:**  
The most likely fix is that your key does not have write scopes for orders even though it works for reads. Many commerce APIs allow reads with a basic key but require a separate secret or a key with explicit write permissions for order creation. Create a new credential with write access to orders and inventory in the provider dashboard, rotate it into your app, and restart the process. This resolv...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 29: Why does search not find this repo?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175430)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175430#discussioncomment-14569004)

**Answer Excerpt:**  
GitHub’s search does not surface every fork by default. When a repository is a fork, the search index usually treats the original repository as canonical. That means if you search for the name you will normally see the root project, not each fork. If the parent repo has since been archived or is no longer available, the fork still exists but may not appear in the global search results because fork...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 30: Signing macos apps in a GitHub action for test runs only
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175498)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175498#discussioncomment-14568956)

**Answer Excerpt:**  
The simplest way to get macOS unit tests running on the hosted runner is to avoid signing entirely for the test build. For unit tests you can tell Xcode not to sign and not to look for a provisioning profile. This works because code signing is only required when you need to run a signed app bundle or distribute it. Most unit test bundles can compile and run without a signing identity on CI.  Try t...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 31: quota management is obscure to me
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175265)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175265#discussioncomment-14553484)

**Answer Excerpt:**  
The most likely explanation is that the 300 premium requests are tied to a fixed monthly quota window, not to your billing date. The “month” in the error message means a rolling usage window that resets on the first day of the calendar month (UTC), regardless of when you were billed. That is why you saw the message immediately after being charged and why waiting for your billing anniversary did no...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 32: Dependency graph
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175401)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175401#discussioncomment-14569020)

**Answer Excerpt:**  
The dependency graph in GitHub Insights only shows **direct dependents**. That means it lists the repositories that declare your package as a dependency in their manifest. It does not expand that out to every indirect consumer further down the chain.  You can validate this by looking at a package you know is widely used. In its dependency graph you’ll see only the projects that explicitly referenc...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 33: How to enable SSH access for an AlmaLinux 9 devcontainer?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175344)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175344#discussioncomment-14570155)

**Answer Excerpt:**  
@esthezia The next step is to stop trying to reach SSH over the app.github.dev URL. Those forwarded URLs only proxy HTTP. Raw SSH there will time out even if sshd is healthy. Keep sshd in your devcontainer and use the GitHub CLI tunnel for SSH and file copy. Your scp failure is because OpenSSH now defaults to SFTP and your container does not expose the SFTP subsystem. Add it and create the sshd ru...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 34: NextJS, search form page, results page
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175326)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175326#discussioncomment-14553358)

**Answer Excerpt:**  
The simplest way to handle this in the App Router is to use query parameters. Your search form submits to a results route with the query string attached. The results page then reads searchParams from Next’s page props. This works without lifting state between pages and is the most common pattern in App Router.  Here is a minimal example.  `app/search/page.tsx`  ```tsx "use client";  import { useRo...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 35: Why did I get a GitHub Spark access email if it’s still rolling out?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175153)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175153#discussioncomment-14542718)

**Answer Excerpt:**  
The Spark rollout is staged which means some parts of the system are live before the product is visible everywhere. The email you received was triggered early but your account has not yet been fully enabled. That is why the welcome link loads the holding page instead of the Spark workspace.  This happens when the marketing system and the feature flag system are not in sync. The email is correct in...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 36: what does secret scanning scan history return?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175077)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175077#discussioncomment-14534645)

**Answer Excerpt:**  
Secret scanning scan history returns the machine-readable identifier of the pattern, which is `pattern_slug`. That is what you will see in the API response.  The docs sometimes show `pattern_name` in examples for readability, but the actual response object includes the slug. You can map slugs back to human-friendly names using the patterns API if you need to display them.  If this solved your issu...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 37: Why copilot chat in Linux doesn't have option to change model?
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/175031)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/175031#discussioncomment-14532092)

**Answer Excerpt:**  
The model selector is being rolled out gradually and is not yet available on all platforms. On Linux the chat panel currently defaults to the standard Copilot model and does not expose the dropdown. You can still control the experience by keeping your VS Code and the Copilot extension updated. The selector will appear once the rollout reaches your environment.  If this solved your issue please mar...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 38: manual workflow in features brach
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174939)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174939#discussioncomment-14527010)

**Answer Excerpt:**  
Your workflow is in a feature branch. The Actions tab only lists workflows from the default branch. Until the file exists on the default branch it will not show up for manual runs.  Add a manual trigger to the workflow and merge it to the default branch under .github/workflows with a .yml or .yaml extension. Then use Run workflow to choose your feature branch as the ref.  Here is a minimal example...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 39: Date and time format
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174591)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174591#discussioncomment-14505338)

**Answer Excerpt:**  
Right now GitHub always shows times in 12-hour AM/PM format in the UI and there isn’t a setting to switch it to 24-hour format even when you hover over timestamps The only customization available is changing your time zone in profile settings but not the display format So the answer is no you can’t change it today If you want 24-hour format the way to move it forward is to post a feature request t...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 40: GitHub Copilot Usage Externally
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174484)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174484#discussioncomment-14492792)

**Answer Excerpt:**  
GitHub Copilot is only offered as an IDE extension and through the GitHub.com interface. there is no official public API that you can legally call from your own apps or projects. using it externally by trying to reverse engineer or proxy its traffic would be against the terms of service if you want to integrate AI into your own project you need to use an API service that is explicitly licensed for...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 41: Github Action on PR merged and Environment question
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174474)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174474#discussioncomment-14492811)

**Answer Excerpt:**  
Yes. You can run the deployment from the target branch or use pull_request_target so the job runs with the base branch context. Both approaches work and one is safer for accessing protected environments and secrets Option one use push on the target branch After a PR is merged GitHub creates a push to the target branch. Create a workflow that triggers on push to the target branch for example main a...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 42: Agentes de IA com Python
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174123)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174123#discussioncomment-14462091)

**Answer Excerpt:**  
Olá LeandroRespondendo direto e prático Sim é totalmente possível criar um agente em Python que use LangChain ou outras ferramentas e que converse pelo WhatsApp consultando um banco de dados para responder sobre estoque ou qualquer outra informação Fluxo simples de implementação Arquitetura básica Crie um webhook que receba mensagens do WhatsApp envie esse texto para seu backend onde o agente roda...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 43: Can't set different model per mode
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174282)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174282#discussioncomment-14471249)

**Answer Excerpt:**  
Right now Copilot does not let you assign different models to different custom modes. The model selection is global for your whole Copilot session so when you switch it for one mode it applies everywhere. Roo Code has that flexibility but Copilot does not support it yet. At the moment the only option is to manually change the model when you switch modes. If you find this solution helpful upvote th...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 44: if: ${{ github.event_name == 'workflow_call' }} not working in reuseable workflow
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174203)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174203#discussioncomment-14467169)

**Answer Excerpt:**  
When a workflow runs as a reusable workflow the context is not the same as a normal event run so checking github.event_name == 'workflow_call' inside the called workflow does not work as you expect. The clean way is to pass the event type down as an input when you call the reusable workflow and then check that input inside. Example caller workflow jobs:   call-build:     uses: ./.github/workflows/...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 45: not receiving PR review requested notifications and cant find location to enable it
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/173820)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/173820#discussioncomment-14437431)

**Answer Excerpt:**  
To get notified when someone requests your review you need to adjust two things First go to the repository page click Watch at the top right and choose Watching or Custom then make sure Pull requests is enabled Second go to your GitHub Settings → Notifications and under Participating and @mentions make sure email or web is checked so review requests are delivered to your inbox Also check the PR it...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 46: Audit logs for certain actions show Unknown IP address
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/173723)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/173723#discussioncomment-14423055)

**Answer Excerpt:**  
Yes  this is expected behavior, not a bug. Some audit log events (like pull_request_review_comment.create) are generated by server-side actions in GitHub’s infrastructure, not by a direct client request from a user device. Because of that, GitHub cannot attach a client IP, so the log shows Unknown IP address.  It’s not an error in your setup  other user-initiated events (push, sign-in, etc.) will ...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---


_Total curated accepted answers: 46_
