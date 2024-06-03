# SIG-Network

<!-- > 这个目录下是SIG信息的模版，当你申请成立新的SIG的时候，需要填写相关的内容。 -->

<!-- （这里是一段SIG的简介）SIG-template维护了XXXXX，它的目标是XXXX。 -->


该 [章程](charter.md) 定义了 [SIG-Network] 的范围和治理相关的内容。

## 会议

- SIG定期会议：**北京时间 周五 10:00** （每两周一次）
  - 会议记录和议程 （这里要指向对应的文档链接）
  - 会议视频 （指向DragonOS社区官方bilibili账号下，每个SIG的合集链接）


## SIG管理层

### 主席

SIG 主席负责管理 SIG 的运营和流程。
- 戴吕琛，[`@Samuka007`]，华南理工大学

### 技术负责人

- 付鼎拔，[`@Saga1718`]，华南理工大学
- 蔡俊源，[`@smallcjy`]，华南理工大学

## 联系方式

- BBS版块：[DragonOS开源社区 - SIG - Network](https://bbs.dragonos.org.cn/c/sig-net)
- Github Team: [`@DragonOS-Community`] / [`SIG-Network`]
- PMC联络人：[`@Samuka007`]

## 工作组

~~以下是SIG-template参与并支持的 [工作组]~~ 

暂无工作组

<!-- - [示例工作组] -->

## 子项目列表

以下 [子项目] 归 [SIG-Network] 所有:

### Loopback网卡实现

Loopback网卡是一个虚拟网络设备，主要用于在本地机器上进行网络通信。

#### 子项目Maintainer

- 蔡俊源, [`@smallcjy`]

### 网络资源管理限制优化

epoll 是一种高效的 I/O 事件通知机制，当系统资源受到限制时，epoll 在管理 socket 时可能会出现一些问题。

#### 子项目Maintainer

- 付鼎拔, [`@Saga1718`]

## 子项目的详细信息

### Loopback网卡实现
> 详见 [实现Loopback回环网卡设备及其驱动 - DragonOS开源社区](https://bbs.dragonos.org.cn/t/topic/238)

LoopbackDevice的实现分为四层：
- #### Loopback层
  实现的核心。其定义Loopback设备的数据结构，采用 `VecDeque<Vec>` 用来储存接受的数据包和代发送的数据包。

- #### LoopbackInterface层
  负责实现网卡接口设备的基本功能，实现Device、NetDevice、KObject的接口函数。

- #### LoopbackDeviceInnerWapper层
  用于封装底层，具有更好的封装性。

- #### LoopbackDeviceInner层
  负责实现网卡的基本功能，发包，收包等。

### 网络资源管理限制优化
> 详见 [[Bug] 是否考虑资源限制对 epoll管理socket存在问题 - DragonOS开源社区](https://bbs.dragonos.org.cn/t/topic/235)

#### Socket管理
负责socket的创建、绑定、监听和接受连接。

#### Epoll管理
负责epoll实例的创建、管理和删除，确保事件正确注册和处理。

#### 问题描述与跟踪
使用 strace 跟踪 epoll_ctl 和 epoll_wait 等系统调用，调查 cgroup 或mmap map_fixed 等资源限制有关功能缺失对 epoll 和 socket 管理的影响。

<!-- 引用 -->
[工作组]: /governance/dev-group.md#WG（工作组）
[子项目]: /governance/dev-group.md#子项目
[示例工作组]: /wgs/wg-template/README.md
[SIG-Network]: ./README.md
[`@DragonOS-Community`]: https://github.com/DragonOS-Community
[`SIG-Network`]: https://github.com/orgs/DragonOS-Community/teams/sig-network
[`@Samuka007`]: https://github.com/Samuka007
[`@Saga1718`]: https://github.com/Saga1718
[`@smallcjy`]: https://github.com/smallcjy
