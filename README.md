# Reproducible AI Systems

Curated accepted answers from GitHub Discussions, transformed into reproducible case studies.  
Each entry includes the original discussion link, a solution excerpt, and reproducibility placeholders.  
This aligns with EU Open Science standards of transparency and validation.

---

## Case Study 1: I am having a very hard time understanding things. Someone please point me in the right direction.
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

## Case Study 2: Not Able to Get in my HacktoberFest Account
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

## Case Study 3: TLS certificate is being provisioned. This may take up to 15 minutes to complete.
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

## Case Study 4: About git.hubp.de
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

## Case Study 5: Paymeny declined
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

## Case Study 6: Fork Missing in Tree View of Fork Insights Tab
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

## Case Study 7: AGENTS.md is not considering by default when I start a new chat
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

## Case Study 8: Can’t figure out why my API won’t accept orders
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

## Case Study 9: Why does search not find this repo?
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

## Case Study 10: Signing macos apps in a GitHub action for test runs only
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

## Case Study 11: quota management is obscure to me
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

## Case Study 12: Dependency graph
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

## Case Study 13: How to enable SSH access for an AlmaLinux 9 devcontainer?
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

## Case Study 14: NextJS, search form page, results page
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

## Case Study 15: Why did I get a GitHub Spark access email if it’s still rolling out?
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

## Case Study 16: what does secret scanning scan history return?
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

## Case Study 17: Why copilot chat in Linux doesn't have option to change model?
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

## Case Study 18: 非本人操作，我的仓库莫名其妙突然出现了test-action-1758516670662814635
**Repository:** community/community

**Original Discussion:** [View discussion](https://github.com/orgs/community/discussions/174911)  
**Accepted Answer:** [Direct link](https://github.com/community/community/discussions/174911#discussioncomment-14527021)

**Answer Excerpt:**  
看起来是有人用你的账户凭据或授权的应用在你名下创建了仓库 默认的 GITHUB_TOKEN 只能在当前仓库内操作 创建新仓库通常需要你的登录状态 个人访问令牌 或安装的 GitHub App 的权限 所以最可能是令牌或应用被滥用 先做账号安全处置 开启双重验证或添加通行密钥 立刻更改密码并在所有设备退出登录 撤销所有活跃会话和已记住的设备 检查凭据与集成 在开发者设置里撤销并重新生成所有个人访问令牌 删除不认识的 SSH 和 GPG 密钥 查看已授权的 OAuth 应用和已安装的 GitHub Apps 移除任何不需要或来源不明的项 轮换组织和仓库里的所有 Secrets 查看证据与清理 打开安全日志和审计日志并按时间筛出 Create repository 和 Actions 相关事件 核对是哪个令牌或应用发起 在触发异常的仓库里检查最近的工作流定义和第三方 actions 把 Acti...

**Validation:**  
Steps to confirm this solution works.

**Reproducibility Notes:**  
Environment assumptions, scripts, or datasets needed.

---

## Case Study 19: manual workflow in features brach
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

## Case Study 20: Date and time format
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

## Case Study 21: GitHub Copilot Usage Externally
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

## Case Study 22: Github Action on PR merged and Environment question
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

## Case Study 23: Agentes de IA com Python
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

## Case Study 24: Can't set different model per mode
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

## Case Study 25: if: ${{ github.event_name == 'workflow_call' }} not working in reuseable workflow
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

## Case Study 26: not receiving PR review requested notifications and cant find location to enable it
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

## Case Study 27: Audit logs for certain actions show Unknown IP address
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


_Total curated accepted answers: 27_
