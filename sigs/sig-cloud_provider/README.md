# 介绍README

[SIG-Cloud Provider](./README.md)维护了将[DragonOS](https://dragonos.org/)移植到主要云服务提供商（如[腾讯云](https://cloud.tencent.com/)和[AWS](https://cn.aliyun.com/)）平台的项目。其目标是确保DragonOS在这些云平台上的兼容性、性能优化和稳定运行。

[SIG架构章程](./charter.md)定义了[SIG-Cloud Provider](./README.md)的范围和治理相关的内容。

## 会议

- SIG定期会议：**北京时间 周五 10:00**（每两周一次）
  - 会议记录和议程（这里要指向对应的文档连接）
  - 会议视频（指向DragonOS社区官方bilibili账号下，每个SIG的合集链接）

## SIG管理层

### 主席

SIG主席负责管理SIG的运营和流程

- 曾俊，[@ZZJJWarth](https://github.com/ZZJJWarth)，华南理工大学 
- 黄铭涛，[@1037827920](https://github.com/1037827920)，华南理工大学

## 联系方式

- BBS 板块：[最新SIG - Cloud Provider话题 - DragonOS开源社区](https://bbs.dragonos.org.cn/c/sig-cloud/11)

- Github团队
  - [@DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS)

- PMC联络人：[@ZZJJWarth](https://github.com/ZZJJWarth) [@1037827920](https://github.com/1037827920)

## 工作组 

暂无工作组

## 子项目列表

**VirtIO-blk支持**

- Maintainer
  - 曾俊，[@ZZJJWarth](https://github.com/ZZJJWarth)

## 子项目列表的详细信息

### VirtIO-blk支持

#### 概述

在[腾讯云](https://cloud.tencent.com/)环境中，AHCI磁盘不被使用，而是采用了VirtIO磁盘。VirtIO是一种高效的虚拟化接口标准。在此子项目中，将实现DragonOS对VirtIO-blk磁盘的支持，确保其在[腾讯云](https://cloud.tencent.com/)上能够正常运行

目标

确保[DragonOS](https://dragonos.org/)能够识别并使用VirtIO-blk磁盘