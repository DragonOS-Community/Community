# SIG-Main架构章程
## 范围
### 属于SIG-Main的范围
kernel中目前还没有被拆分出SIG的有：
- filesystem 文件系统
- driver 驱动系统
- exception 异常处理系统
- ipc 进程间通信
- process 进程
- sched 调度
- time 时钟
### 不属于SIG-Main的范围
目前已经被拆分为独立SIG的有：
- [SIG-Cloud_Provider](https://bbs.dragonos.org.cn/g/SIG-Cloud_Provider/members) 云提供商
- [SIG-Infracstructure](https://bbs.dragonos.org.cn/g/SIG-Infracstructure/members) 基础建设
- [SIG-Observation.Test](https://bbs.dragonos.org.cn/g/SIG-Observation.Test/members) 可监测及测试
- [SIG-Virtualization](https://bbs.dragonos.org.cn/g/SIG-Virtualization/members) 虚拟化
- [SIG-Network](https://bbs.dragonos.org.cn/g/SIG-Network/members) 网络
- SIG-MM 内存管理

与将DragonOS移植到云服务器上相关的兼容性等相关的属于[SIG-Cloud_Provider](https://bbs.dragonos.org.cn/g/SIG-Cloud_Provider/members)
与测试有关的问题**属于**[SIG-Observation.Test](https://bbs.dragonos.org.cn/g/SIG-Observation.Test/members)
与虚拟化有关的**属于**[SIG-Virtualization](https://bbs.dragonos.org.cn/g/SIG-Virtualization/members)
与网络相关的部分**属于**[SIG-Network](https://bbs.dragonos.org.cn/g/SIG-Network/members)
与基础建设有关的问题**属于**[SIG-Infracstructure](https://bbs.dragonos.org.cn/g/SIG-Infracstructure/members)
与内存管理相关的部分**属于**SIG-MM
以上范围均**不属于**[SIG-Main](https://bbs.dragonos.org.cn/g/SIG-Main/members)。
## 角色和组织管理
该部分遵循循[SIG治理文档](https://community.dragonos.org/governance/sig-governance/)中描述的角色和组织管理，不对[SIG治理文档](https://community.dragonos.org/governance/sig-governance/)描述的角色职责进行更改
## 子项目创建
参见[SIG治理文档的子项目创建部分](https://community.dragonos.org/governance/sig-governance/#%E5%AD%90%E9%A1%B9%E7%9B%AE%E5%88%9B%E5%BB%BA)