---
title: 使用git管理代码
icon: gears
order: 2
category:
  - 第一阶段 - 开发环境
tag:
  - git
---

目标：通过场景化方式，学习实用的git的命令。

## 准备

### 安装配置git
- [git下载地址](https://git-scm.com/download/win)
- [gitee配置key](https://help.gitee.com/repository/ssh-key/generate-and-add-ssh-public-key)

### 仓库准备
在`gitee`上新建空仓库后，会看到下面的提示。

全局配置：
```bash
git config --global user.name "xxx"
git config --global user.email "xxx@yy.com"
```

创建git仓库`tgit`：
```bash
mkdir tgit
cd tgit
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin git@gitee.com:account/tgit.git
git push -u origin "master"
```

:::tip 已有仓库的情况
```bash
cd existing_git_repo
git remote add origin git@gitee.com:account/tgit.git
git push -u origin "master"
```
:::

### 已有仓库克隆

## 一次完整的操作
### 提交修改

### 拉取远端

## git的管理思路
- 分布式的版本管理
- 本地、远端
- 分支
- 四种状态：Untracted、Unmodify、Modified、Staged
- 好用的工具`tig`

## 分支

### 什么时候用分支?
- 一个feature
- 一个bug fix
- 多版本差异并行
- 私人专用

分支的代码修改尽量具有高内聚性，容易理解、方便合并、减少冲突。

### 创建分支
分支是由某一个`基础分支`，或者`基础历史提交`来创建的。
- `git checkout -b master`

### 推送分支
- `push`

### 分支合并
- `rebase`
- `merge`

### 删除分支
- 本地分支删除, `branch -D`
- 远端分支删除, `push --delete`

## 修改历史提交
- `rebase`
- `reset`, [hard vs soft vs mixed](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard)
- `force`推送
- 拉取远端的`force`推送

## 修改同步其它分支
- cherry-pick


### 冲突
- `rebase` 后的冲突
- `pull` 后的冲突
