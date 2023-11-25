# 安装 Slimefun :id=installing-slimefun

## 准备 :id=prerequisites

你需要一个 Spigot 或 Paper 服务器 (推荐使用最新版本) 才能安装 Slimefun。  
尽管我们只在 Paper 与 Spigot 上进行测试，这两种服务端的衍生版本应该也能使 Slimefun 正常运行。

我们推荐使用 Paper，你可以[点击此处](https://papermc.io/downloads)前往下载。

### 下载官方版 Slimefun 4 :id=slimefun-4-downloads

**请注意，如果你没有特殊需求，建议你使用汉化版。**

<details>
<summary>点击展开</summary>

你可以在 Slimefun 的两个分支中选择，["稳定版"分支](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/stable/) 或 ["开发版"分支](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/)。
稳定版本通常经过长时间的完整测试。开发版则是你可以获取的 Slimefun 最新版本。
如果你的服务器非常依赖 Slimefun 的可用版本，请选择稳定版。
但是，如果你想通过报告问题（issues）并帮助我们定位这些问题来对 Slimefun 做出贡献，请使用开发版。（来自稳定版的问题汇报会被忽略，因为它们已经过时了）
你可以点击任何一个 Slimefun 版本查看此版本支持的 Minecraft 版本。

**我们通常推荐开发版本而不是稳定版本，因为它们是 Slimefun 的最新版本。稳定版通常一个月只更新一次，或者以更低的频率更新。所以修复可能需要相当长的时间才能应用到稳定版本。**

</details>

### 下载汉化版 Slimefun 4 :id=slimefun-4-cn-downloads

由于目前物品名称写死在代码中，Slimefun 官方版的中文仅包含消息、分类以及研究部分的汉化。大部分物品与界面仍然是英文的。  
要汉化这些内容，需要修改相关的代码。由 StarWishsama 维护的汉化版 Slimefun 目前已在 GitHub 与 MCBBS 发布。

汉化版拥有3个分支：

- ["正式版"分支（release）](https://builds.guizhanss.cn/StarWishsama/Slimefun4/release)是每月发布一次（可能以更低的频率更新）新版本的分支，包含较长时间的测试，功能较为稳定。  
- ["公测版"分支（Beta）](https://builds.guizhanss.cn/StarWishsama/Slimefun4/master)对应着上游的开发版分支。
- ["内测版"分支（Insider）](https://builds.guizhanss.cn/sf-subscription)为订阅用户可获取的分支，包含最新的功能与问题修复。该分支的内容会在至少15天后同步到公测版。[点击查看](https://builds.guizhanss.cn/sf-subscription)订阅计划。

**虽然汉化版的问题追踪器同时接受最新的开发版与正式版问题汇报，但仍然建议你使用开发版。**

MCBBS帖子：[点击前往](https://www.mcbbs.net/thread-827594-1-1.html)  
GitHub仓库：[点击前往](https://github.com/StarWishsama/Slimefun4)  
正式版下载：[点击前往](https://builds.guizhanss.cn/StarWishsama/Slimefun4/release)  
开发版下载：[点击前往](https://builds.guizhanss.cn/StarWishsama/Slimefun4/master)

当然，如果你的服务器已在使用官方版 Slimefun，也可以选择[另一种方法](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=827594&pid=21840915)进行汉化。

## 如何安装 :id=how-to-install

将 Slimefun4 的 jar 文件放到你服务器的`/plugins/`文件夹中。
然后，重启你的服务器。

!> 不要使用 /reload，因为它会导致严重的内存泄露。

重启服务器后，你应该注意到在服务器根目录有一个新文件夹`/data-storage/`。这个文件夹包含了所有的 Slimefun 数据。
如果你计划升级或移动服务器，或创建备份，你应该同时备份这个文件夹，这**非常重要**，因为删除它会导致所有的 Slimefun 数据（比如解锁的物品、机器数据）丢失。

## 配置 Slimefun :id=configuring-slimefun

该部分将默认你已经在你的服务器上成功安装了 Slimefun4。

当你查看 Slimefun 插件的文件夹时，你会注意到不同的 `.yml` 文件. 使用你最喜欢的文本编辑器查看`config.yml`。
译者个人推荐使用 [VSCode](https://code.visualstudio.com/)。

本文件中大部分内容都很容易理解，包括启用物品、Slimefun 研究在创造模式中的表现。
Slimefun 会定期检查更新并自动安装更新。如果你希望禁用此功能，或您的主机禁止使用类似的功能，设置 `auto-update` 为 `false`。

**Items.yml** 允许你**全局**启用或禁用部分物品。如果你安装了多个 Slimefun 附属插件，这个文件将会很大。
所以，如果你准备启用或禁用某些物品，建议你一次不要安装很多附属，缓慢添加。

**messages.yml** 包含 Slimefun 的所有消息数据。你可以编辑当某事件发生时，插件向玩家发送的消息。

**Researches.yml** 允许你编辑 Slimefun 中解锁研究所需的经验值，以及研究的名字。
如果你想让玩家一开始就能使用所有的 Slimefun 物品，你也可以禁用所有研究。

**permissions.yml** 允许你为 Slimefun 物品定义权限节点，根据用户的权限来限制物品的使用。

在更改配置后，你必须保存配置文件，然后重启服务器。再次强调，**不要使用 /reload**。
如果你遇到了问题，并且使用了`/reload`，你只需要停止服务器并重启，这能解决大部分问题。

### 服务器优化 :id=server-optimizations

这有一篇关于如何 [优化你的 Slimefun 服务器](/Server-Optimizations) 的文章。

## 附属插件 :id=additional-addons

如果你想添加附属插件，访问[这个页面](/Addons)以查看所有与你当前 Slimefun4 版本兼容的附属插件。

这些附属插件需要 Slimefun4，并会在服务器的`/plugins/`文件夹中中创建它们自己的文件夹。

这些插件的配置文件一般都是简单易懂的。
请记住，你可以在 Slimefun 的 **Items.yml** 文件中禁用任何来自附属插件的物品。
