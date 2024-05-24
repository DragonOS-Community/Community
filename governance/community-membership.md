# 社区成员资格

| 名称 | 责任 | 要求 | 被定义在 |
| --- | ---- | --- | ------- |
| Maintainer | 为子项目或任务设定方向和优先级 | 对子项目表现出责任感和出色的技术判断力 | 对应的SIG的描述文件的子项目Maintainer列表 |
| Approver | 审查并批准PR | 在该子项目上经验丰富的积极审阅者和贡献者 | 对应的SIG的描述文件的Approver列表 |
| Reviewer | 审查并批准PR | 在子项目中有贡献，且在该子项目具有2次评审历史。 | 对应的SIG的描述文件的Reviewer列表 |
| Member | 社区的积极贡献者 | 对项目作出积极贡献，且被2位Reviewer联合推荐 | DragonOS-Community的GitHub组织成员 |
| Contributor | 参与社区 | 任何参与代码/非代码贡献的人 | 无 |

## 新贡献者

[新贡献者]应该受到现有成员的欢迎，帮助完成PR工作流程，并引导到相关的文档和沟通渠道。

## 已经参与的社区成员

社区的核心成员需要展现出对本文档原则的遵循，对项目组织、角色、政策、流程、惯例等的了解，以及技术或写作能力。特定角色的期望、责任和要求将在下面详细列出。


## Member

成员是社区中的 [持续活跃] 贡献者。他们可以有议题和PR分配给他们，通过GitHub团队参与SIGs，并且他们的PR会自动运行预提交测试。成员被期望继续作为社区的活跃贡献者。

被定义在： DragonOS Community GitHub组织的成员

### 要求
- 在其GitHub账户上启用[双因素认证]
- 为项目或社区做出**多次贡献**，足以展示对项目的**持续和长期承诺**。贡献应包括但不限于：
  - 在GitHub上编写或审查PR，至少有一个**已合并**的PR。
    **注意：** PR必须展示持续的积极承诺。一些例子包括：
    - 一个经过数周协调共识的项目
    - 数量较多的小型PR，时间跨度为数周到数月
    - 数量较少的复杂或技术性PR，需要与社区成员合作解决一个问题（例如：回归、错误修复等）
  - 在GitHub上提交或评论问题
  - 为SIG、子项目或社区讨论做出贡献（例如：会议、论坛等）
- follow [DragonOS Community的GitHub组织]
- 在[DragonOS论坛]上拥有账户
- 阅读过[贡献者指南]
- 积极为1个或更多子项目做出贡献。
- 由2位审查者推荐。**注意推荐的以下要求**：
  - 推荐者必须与潜在成员有密切互动——例如：代码/设计/提案审查，协调问题等。
  - 推荐者必须在[DragonOS Community的GitHub组织]内的至少一个SIG中是审查者或批准者或更高级别的技术职位。
  - 推荐者尽量来自不同的单位（如果条件允许的话）
- **在DragonOS-Community/teams_data仓库中[提出一个issue][membership request]**
  - 确保您的推荐者在问题中被@提及
  - 完成issue清单上的每一项
  - 确保包含的贡献列表代表您在项目上的工作。
- 让推荐您加入社区的审查者回复`+1`，以同意推荐。
- 一旦您的推荐者回应，您的请求将由SIG管理人员负责审查。如果申请表中，有任何缺失的信息，您需要将其补充完整，否则无法通过审核。


### 责任和权限

- 对分配给他们的问题和Pull Request（PR）做出回应。
- 对他们作为成员的SIG团队被提及时做出回应。
- 对自己贡献的代码持续负责（除非明确转让所有权）。
- 代码经过充分测试。
- 测试一致通过。
- 在代码被接受后，解决发现的问题或错误。
- 他们可以被分配到问题和PR，并且人们可以通过 `r? @member的github用户名` 请求该成员进行评审。
- 可以为他们的PR自动运行测试.
- 成员可以使用 `@dragonosbot close` 等命令来关闭PR。

注意： 经常贡献代码的成员应当要主动进行代码审查，并努力成为他们活跃的子项目的主要reviewer。

## Reviewer

审查者能够对子项目中的一部分代码进行质量和正确性的审查。他们对代码库和软件工程原则都有深入的了解。

**被定义在：** 对应的SIG的描述文件的Reviewer列表

Reviewer称号限定于代码库的一部分。

**注意：** 接受代码贡献至少需要一个Approver以及分配的Reviewer。

### 要求

一个人如果要成为Reviewer，那么他应该：

- 成为成员至少1个月
- 至少作为5个PR的主要审查者，这些PR针对的是代码库
- 审查或合并至少10个重要PR到代码库
- 对代码库有深入了解
- 由子项目Approver或更高级别的技术人员推荐
  - 没有其他批准者的反对
  - 通过更新SIG的README文件的PR来完成
- 可以自我提名，也可以由本项目的一个Approver提名，或者由机器人提名

### 责任与权限

以下是某人作为Reviewer的责任与权限：

- Code Reviewer状态可能是接受大型代码贡献的前提条件
- 通过[code reviews]负责项目的质量控制
  - 关注于代码质量和正确性，包括测试和代码结构
  - 也可能审查更全面的问题，但这不是必需的
- 预期将根据[社区期望]对审查请求做出响应
- 分配与擅长的子项目相关的PR进行审查
- 分配与擅长的子项目相关的测试bug
- 被授予对DragonOS仓库的“读取访问”权限
- 在PR和issue comment中可能会获得一个徽章

## Approver

Approver能够审查和批准代码贡献。代码审查专注于代码质量和正确性，而批准则专注于对贡献的整体接受，
包括：向后/向前兼容性，遵守API和标志约定，细微的性能和正确性问题，与系统其他部分的交互等。

**被定义在：** 对应的SIG的描述文件的Approver列表

Approver状态限定于代码库的一部分。

### 要求

一个人如果要成为Approver，那么他应该：

- 至少1个月作为代码库的审查者
- 至少作为10个重要PR的主要审查者，这些PR针对的是代码库
- 审查或合并至少20个PR到代码库
- 由子项目Maintainer或SIG主席提名
  - 没有其他子项目所有者的反对
  - 通过更新SIG的README文件的PR来完成


### 责任与权限

以下适用于一个人作为Approver的责任与权限：

- Approver状态可能是接受大型代码贡献的前提条件
- 展示出良好的技术判断力
- 通过[code reviews]负责项目的质量控制
  - 关注于对贡献的整体接受，例如与可扩展性、其他特性的依赖性、向后/向前兼容性、API和标志定义等
- 预期将根据[社区期望]对审查请求做出响应
- 指导Contributor和Reviewer
- 可以批准代码贡献以供合并


## 子项目Maintainer

**被定义在：** 对应的SIG的描述文件的子项目Maintainer列表

详细责任及权限定义在SIG治理文档的 [子项目Maintainer] 部分。


## 非活跃成员

**成员是社区中的持续活跃贡献者。**

维护一个健康社区的核心理念是鼓励积极参与。随着时间的推移，人们的关注点会发生变化，我们不期望他们永远积极地贡献。

然而，成为DragonOS社区的GitHub组织 的一员，意味着拥有[一些权限]。这些能力不应该被那些不熟悉DragonOS项目当前情况的人使用。

因此，那些长时间离开项目且没有任何活动的成员**将被从 DragonOS社区的GitHub组织 中移除**，并且在他们重新熟悉项目的当前状态后，将需要再次通过组织成员资格审查及晋升流程。


### 如何衡量非活跃状态

非活跃成员被定义为在12个月内对任何DragonOS组织内**没有**贡献的DragonOS组织成员。

在长时间离开项目且没有活动之后，这些成员需要重新熟悉项目的当前状态，才能有效地做出贡献。


[新贡献者]: /contributors/README.md
[双因素认证]: https://help.github.com/articles/about-two-factor-authentication
[贡献者指南]: /contributors/README.md
[DragonOS论坛]: https://bbs.dragonos.org.cn
[DragonOS Community的GitHub组织]: https://github.com/DragonOS-Community
[membership request]: https://github.com/DragonOS-Community/teams_data/issues/new?assignees=&labels=A-github-membership&projects=&template=membership.yml&title=REQUEST%3A+New+membership+for+%3Cyour-GH-handle%3E
[持续活跃]: #如何衡量非活跃状态
[code reviews]: TODO
[子项目Maintainer]: /governance/sig-governance/README.md#子项目Maintainer
[一些权限]: #责任与权限
