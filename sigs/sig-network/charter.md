# 架构章程

本章程遵循 [SIG治理文档] 中描述的约定，并使用 [SIG章程指南] 中概述的角色和组织管理。

## 范围

[SIG-Network] 维护并发展了 [DragonOS] 网络方面相关的设施。

### 属于 [SIG-Network] 的范围

#### [DragonOS] 内核网络模块

- 于 [`DragonOS`] / [`kernel`] / [`src`] / [`net`] 下的源码
- 以及需要调用以上源码的部分

#### 有关 [DragonOS] 网络方面相关的问题

- 有关未能实现的功能、特性
- 使用 [DragonOS] 过程中出现的系统内的网络相关问题

### 不属于当前SIG的范围

- 因外部系统导致的，使用 [DragonOS] 异常的网络问题（如自身网络环境差）
- 获取 [DragonOS] 源码或镜像失败的相关网络问题

## 角色和组织管理

该部分遵循 [SIG治理文档] 中描述的角色和组织管理，并 **不对** [SIG治理文档] 描述的角色职责进行更改。

### 主席的额外职责

<!-- > 这部分根据每个SIG自己来定 -->

- 在每次 SIG 会议之前管理和策划与所有子项目相关的项目板，以便进行讨论
- 确保在会议前 24 小时填写议程，否则会议将被取消
- 尽可能在活动和社区会议上报告 SIG 状态
- 积极促进 SIG 的多样性和包容性
- 遵守 Kubernetes 行为准则，尤其是在个人行为和责任方面

### 与 [SIG治理文档] 的差异

与 [SIG治理文档] 无差异。

### 子项目创建

参见 [SIG治理文档的子项目创建部分]

[SIG治理文档]: /governance/sig-governance/README.md
[SIG治理文档的子项目创建部分]: /governance/sig-governance/README.md#子项目创建
[SIG章程指南]: /governance/sig-governance/sig-charter-guide.md
[`DragonOS`]: https://github.com/DragonOS-Community/DragonOS
[`kernel`]: https://github.com/DragonOS-Community/DragonOS/tree/master/kernel
[`src`]: https://github.com/DragonOS-Community/DragonOS/tree/master/kernel/src
[`net`]: https://github.com/DragonOS-Community/DragonOS/tree/master/kernel/src/net
[SIG-Network]: ./README.md
[DragonOS]: https://dragonos.org/