# GitHub 工作流程

本文旨在向您介绍DragonOS社区的GitHub工作流程。包括一些用于帮助你维持本地环境与社区上游仓库同步的建议，还有一些git提交规范等等。

**本文以DragonOS主仓库为例，社区的其他仓库亦适用此工作流程**

[[toc]]

## 1. 在GitHub上创建一个Fork

1. 打开 https://github.com/DragonOS-Community/DragonOS
2. 点击页面右上角的`Fork`按钮，在你自己的账户下创建一个fork

## 2. 克隆主仓库到你的电脑

把**主仓库**克隆到你的电脑（注意不是你账户下Fork后的仓库）

```shell

git clone https://github.com/DragonOS-Community/DragonOS
# 或者是 git clone git@github.com:DragonOS-Community/DragonOS

cd DragonOS

```

接着，添加你fork的仓库，假设你的名字叫`zhangsan`，那么就执行以下命令：

*注意替换url为你账号下的仓库的链接*

```shell

git remote add zhangsan https://github.com/zhangsan/DragonOS
# 或者是 git remote add zhangsan git@github.com:zhangsan/DragonOS

# 设置永远不推送到远程的master分支
git remote set-url --push origin no_push

# 确认你设置的远程已经生效
git remote -v

```

## 3. 创建工作分支

**请记住：** 永远不要在你本地的master分支上进行提交。请保持master分支与社区仓库的master一致。

在开发之前，需要创建新的分支。每个PR都要使用一个新的、干净的分支。

首先，请切换到本地的master分支（或者main分支），然后让它与远程同步。

```shell
git fetch origin
gir checkout master
```

创建你的工作分支：

```shell
git checkout -b patch-my-feature
```

请注意，分支名字应当能简短的说明这个pr是干啥的。

接着，你就可以开始开发了！

## 4. 使你的分支与远程最新的代码保持同步

在开发过程中，您需要周期性的从社区主仓库合并代码到你本地的工作分支。如果您长期不同步主仓库代码，那么就会产生很多的冲突，甚至导致您的更改难以合并到主仓库。

在执行以下命令之前，请您先切换到您的开发分支，然后执行以下命令：

```shell
git fetch origin
git rebase origin/master
```

请注意，不要使用`git pull`来合并主仓库代码到你的开发分支。请务必使用以上命令。因为，`git pull` 
会创建merge commits，这会让提交历史变得混乱，使得您的PR的commit历史记录就变得难以理解了。

## 5. 提交你的更改

一般来说，直接提交就行。

```shell
git commit
```

你可能会经常把你的更改进行commit，以便能够回退更改.

## 6. 推送到GitHub

当你的PR已经完成，能够准备进行审查的时候，请你把工作分支推送到你在GitHub上的仓库。

以上面的远程`zhangsan`为例，命令如下：

```shell
git push zhangsan patch-my-feature
```

## 7. 创建新的Pull Request

1. 打开你在GitHub上Fork的仓库 `https://github.com/<username>/DragonOS`
2. 点击右上角的`Compare & Pull Request`按钮，然后选择分支`patch-my-feature`，目标为社区主仓库的`master`分支（或`main`分支）。
3. 关于Pull Request的进一步要求，请查看[Pull Request流程介绍]
4. 请注意：在提交PR前，请确保您已[关闭GitHub的匿名邮箱功能](./cheat-sheet.md#关掉匿名邮箱)，否则您的PR将无法通过审查。

[Pull Request流程介绍]: /contributors/pull-requests.md
