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

## 了解ssh
虚拟机网络使用桥接模式。在linux中看自己的IP:
```bash
ip a|grep 192
```

在linux terminal下安装：
```bash
# 更新库
sudo apt update
# 更新软件
sudo apt upgrade
# 安装ssh server
sudo apt install openssh-server

# 查看ssh状态，是否为running
service ssh status
```

windows客户端连接：
```bash
ssh ubuntu_user_name@ip_addr

# 要求输入密码
```

[免密配置](https://www.jianshu.com/p/e9db116fef8c)

## git的管理思路
- 分布式的版本管理
- 本地、远端
- 分支
- 四种状态：Untracked、Unmodify、Modified、Staged
- 好用的工具`tig`

## 准备

### 安装配置git
- [git下载地址](https://git-scm.com/download/win)
- [gitee配置key](https://help.gitee.com/repository/ssh-key/generate-and-add-ssh-public-key)

### shell基础命令
- cd，切换目录
- ls -alh, 列出当前目录文件（夹）
- mkdir，创建目录
- touch，创建空文件
- rm -r, 删除文件或目录，如果目录下有文件可以加-f, force强制删除

:::warning 不要使用下面命令
```bash
rm -rf /
```
删除根目录，将导致系统异常不可用
:::

### 中文路径乱码
```bash
git config --global core.quotepath false
```

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

## 查看状态
```bash
# 查看分支
git branch -avv
# 查看远端
git remote -v
# 查看修改状态
git status
# 查看提交历史，N表示最近的N次
git log [-N]
# 也可以用tig查看,q键退出
```

## 忽略文件
使用`.gitignore`文件，排除不关心的文件


## 添加/删除远端
```bash
git remote add xxxname url
git remote remove xxxname
```

## 正常修改提交（无冲突）
```bash
# 添加修改到staged
git add .
# commit到本地库, -m 后面跟上提交描述
git commit -m ""
# 推送到远端
git push
```

## 分支创建修改提交
```bash
# 基于当前所处分支，创建新的分支xxx
git checkout -b xxx
# 修改一些正常文件，然后add, commit,此处略
...
# 由于远端没有分支，push要加上推送到上游
git push --set-upstream origin xxx
# 以后有分支了，就不用加upstream了
```

## 提交前文件丢弃
```bash
# git status文件是红色的，未加入staged的文件，想回退到未修改状态。
# `.`号可以替换为具体的文件名或目录
git checkout .
# git status文件是绿色的，已加入staged的文件，想回退到modified状态。
git reset .
# 或者根据提示信息，输入
git restore --staged .
```

## 克隆、切换分支
```bash
# clone
git clone

# 分支之间的切换
git checkout xxx
```

## 删除分支
```bash
# 删除本地xxx分支
git branch -D xxx
# 删除远端orign的xxx分支
git push origin --delete xxx
```

## 修改合并到前一次提交
```bash
# 合并上一次提交
git commit --amend -m "message..."

# 推送, 强制
git push -f
```

## 拉取远端的force提交
```
# 优先使用git fetch
# 或者使用git pull,发生冲突，然后用git merge --abort，退出合并
# 重新设置HEAD头
git reset origin/b1 --hard
```

## reset回退历史


## 修改提交记录
### 修改提交日志
### 合并、删除提交

## 操作同一分支，push由于冲突拒绝推送
### 方式一，提交merge
### 方式二，rebase

## 操作不同分支，merge冲突

## 操作不同分支，提交前rebase解决冲突

## 远端有仓库，本地有代码，如何关联git

### 第一种方式
```bash
# 把仓库拉到新目录
git clone xxurl  new_dir
# 把代码考到新目录
cp -r solution_dir new_dir
# 在新目录中做代码修改提交
```

### 第二种方式
```bash
# 初始化本地库
git init
# 添加远端
git remote add origin git@gitee.com:neochin/xxxx.git
# 第一次提交产生本地master分支
vim README.md
git add README.md
git commit -m "readme"
git branch -avv
# 本地master分支与远端master分支关联
git branch --set-upstream-to=origin/master master
# rebase基于远端提交记录
git rebase origin/master
# 提交代码
git add .
git commit --amend -m "first code"
git push -f
```
