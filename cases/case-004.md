# Case 004: 非本人操作，我的仓库莫名其妙突然出现了test-action-1758516670662814635

**Repository** community/community  
**Discussion** https://github.com/orgs/community/discussions/174911  
**Accepted Answer** https://github.com/community/community/discussions/174911#discussioncomment-14527021  
**Date** 2025-09-27

---

## Problem
State the minimal reproducible problem in one paragraph.

## Solution I provided
看起来是有人用你的账户凭据或授权的应用在你名下创建了仓库 默认的 GITHUB_TOKEN 只能在当前仓库内操作 创建新仓库通常需要你的登录状态 个人访问令牌 或安装的 GitHub App 的权限 所以最可能是令牌或应用被滥用 先做账号安全处置 开启双重验证或添加通行密钥 立刻更改密码并在所有设备退出登录 撤销所有活跃会话和已记住的设备 检查凭据与集成 在开发者设置里撤销并重新生成所有个人访问令牌 删除不认识的 SSH 和 GPG 密钥 查看已授权的 OAuth 应用和已安装的 GitHub Apps 移除任何不需要或来源不明的项 轮换组织和仓库里的所有 Secrets 查看证据与清理 打开安全日志和审计日志并按时间筛出 Create repository 和 Actions 相关事件 核对是哪个令牌或应用发起 在触发异常的仓库里检查最近的工作流定义和第三方 actions 把 Actions 策略改为只允许 GitHub 官方和受信任来源并且用提交哈希固定版本 移除可疑的自托管运行器 预防后续风险 为敏感操作启用额外保护规则 为默认分支开启受保护分支 最小化 GITHUB_TOKEN 和部署密钥的权限范围 如果需要进一步排查 把异常仓库名 发生时间 相关日志条目打包提交给 GitHub 支持 他们可以协助定位具体令牌或应用来源 如果这解决了你的问题请将此答案标记为有帮助 方便他人找到

## Validation
Commands to run and expected output.

## Reproducibility Notes
OS and versions · Dependencies · Edge cases and rollback

## Evidence
Attach logs/screenshots under `evidence/` and link here.

