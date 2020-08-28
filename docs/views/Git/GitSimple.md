# Git 简单命令

## 流程图

![git流程图](\blog\imgs\git\git1.png)



## 下面介绍基本Git基本命令

> ### 设置信息



#### 设置用户信息

```git
	git config --global username "yourName"

​	git config --global user.email "yourEmail"
```

#### 查看配置信息

```git
	git config --list
	git config user.name
```

> ### 获取Git仓库的两种方式

1. 本地初始化一个Git仓库

   ```
   git init
   ```

   

2. 从远程仓库克隆

   ```
   git clone <远程仓库地址>
   ```

> ### 下面介绍一下版本库、工作目录以及暂存区



#### 版本库

概念：Git版本库就像是一个数据库，其中包含所有用来维护与管理项目的修订版本和历史的信息。

（**所有数据都在工作目录根目录下一个名为.git的隐藏子目录中**）

#### 工作目录

概念：即你平时存放代码的地方，其实就是一个文件夹

（**包含.git文件夹的目录**）

#### 暂存区

概念：用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息

（**.git文件夹中的index文件就是暂存区**）

> 代码提交顺序视图

![git提交顺序](\blog\imgs\git\git2.png)

> Git目录下的文件状态

![文件状态](\blog\imgs\git\git3.png)

#### 查看文件状态

```
git status
git status -s   //使输出更简洁
```

#### 将未跟踪文件加入暂存区

```
git add "fileName"
```

#### 将暂存区的文件取消暂存

```
git reset "fileName"
```

#### 将暂存区的文件修改提交到本地仓库

```
git commit
git commit -m "log"
```

#### 删除文件

```
git rm "fileName"
```

#### 创建一个.gitignore文件

```
touch .gitignore //用于忽略一些不用控制的文件
```

#### 查看日志记录

```
git  log
```

#### 查看远程仓库

```
git remote
git remote -v //查看详细
git remote show <name>  //更详细
```

#### 添加一个新的远程仓库

```
git remote add <shortName> <url>
```

#### 移除远程仓库关联

```
git remote rm <shortName>
```

#### 从远程仓库获取最新版本（不自动合并）

```
git fetch
```

#### 合并

```
git merge <分支>
```

#### 从远程仓库获取最新版本并合并

```
git pull
git pull --allow-unrelated-histories //如果本地仓库有文件会不能成功拉去，则使用这个
```

#### 向远程仓库推送代码

```
git push
```



### 分支

#### 列出分支

```
git branch //列出所有本地分支
git branch -r //列出所有远程分支
git branch -a //列出所有本地分支和远程分支
```

#### 创建分支

```
git branch <分支名称>
```

#### 切换分支

```
git checkout <分支名称>
```

#### 推送分支至远程仓库

```
git push origin <分支名称>
```

#### 合并分支

```
git merge <分支名称>
```

***如果合并出现冲突，则需要手动修改文件，并用git add 告诉手动合并成功***

#### 删除分支

1. 删除本地分支

   ```
   git branch -d <分支名称>
   ```

   ***如果要删除的分支中进行了一些开发操作，执行上面的删除命令并不会删除成功，如果坚持要删除此分支，可以将命令中-d的操作改为-D***

2. 删除远程分支

   ```
   git push origin -d <分支名称>
   ```



### 标签

概念：记录某个分支某个特定时间点的状态

优点：通过标签，可以很方便的切换到标记时状态

（类似于版本）

#### 列出所有标签

```
git tag
```

#### 查看标签信息

```
git show [tagName]
```

#### 新建一个标签

```
git tag [tagName]
```

#### 将标签推送至远程仓库

```
git push [romote] [tagName]
```

#### 检出标签

新建一个分支，指向某个标签

```
git checkout -b [branch] [tagName]
```

#### 删除标签

```
git tag -d [tagName] //删除本地标签
git push origin:refs/tags/[tagName] //删除远程标签
```



## 总结

以上就是通常会用到的一些Git命令，这些命令应该熟练掌握，以上只是叙述，所以应该自己亲自去实操一下，这样对掌握这些命令更有帮助。当你掌握了这些命令后，你可以下载Git图形化界面操作的软件进行编辑。下面推荐两个

TortoiseGit：[TortoiseGit](https://tortoisegit.org/download/)

gitkraken:[gitkraken](https://www.gitkraken.com/)