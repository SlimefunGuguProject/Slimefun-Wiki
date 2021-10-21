# 安装 Slimefun :id=installing-slimefun

## 准备 :id=prerequisites

你需要一个 Spigot 或 Paper 服务器 (推荐使用最新版本) 才能安装 Slimefun。<br>
尽管我们只在 Paper 与 Spigot 上进行测试，这两种服务端的复刻(fork)应该也能使 Slimefun 正常运行。

### 下载官方版 Slimefun 4 :id=slimefun-4-downloads

你可以在 Slimefun 的两个分支中选择, ["稳定版"分支](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/stable/) 或 ["开发版"分支](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/)。
稳定版本通常经过长时间的完整测试。开发版则是你可以获取的Slimefun最新版本。
如果你的服务器非常依赖 Slimefun 的工作版本，请选择稳定版。
但是，如果你想通过报告问题 (issues) 并帮助我们定位这些问题来对 Slimefun 做出贡献，请考虑使用开发版。(来自稳定版的Bug汇报可能会被忽略，因为它们已经过时了)
你可以点击任何一个 Slimefun 版本查看此版本支持的 Minecraft 版本。

**我们通常推荐开发版本而不是稳定版本，因为它们是 Slimefun 的最新版本。稳定版通常一个月只更新一次，或者以更低的频率更新。所以修复可能需要相当长的时间才能应用到稳定版本。**

### 下载汉化版 Slimefun 4 :id=slimefun-4-cn-downloads

由于目前物品名称写死在代码中，要汉化 Slimefun 物品需要修改物品相关的代码。由 StarWishsama 维护的内核汉化版 Slimefun 目前已在 GitHub 与 MCBBS 发布。

MCBBS帖子：[点击前往](https://www.mcbbs.net/thread-827594-1-1.html)  
GitHub仓库：[点击前往](https://github.com/StarWishsama/Slimefun4)  
下载地址：[点击前往](https://github.com/StarWishsama/Slimefun4#%e4%b8%8b%e8%bd%bd-Slimefun4)

当然，如果你的服务器已在使用官方版 Slimefun，也可以选择[另一种方法](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=827594&pid=21840915)进行汉化。

## 如何安装 :id=how-to-install

将 Slimefun4 的 jar 文件放到你服务器的 */plugins/* 文件夹中。
然后，重启你的服务器。

!> 不要使用 /reload, 因为它会导致严重的内存泄露。

重启服务器后，你应该注意到在服务器根目录有一个新文件夹 */data-storage/* 。这个文件夹包含了所有的 Slimefun 数据。
如果你计划升级或移动服务器，或创建备份，你应该同时备份这个文件夹，这**非常重要**，因为删除它会导致所有的 Slimefun 数据 (比如等级，解锁的物品) 丢失。

## 配置 Slimefun :id=configuring-slimefun

这一部分假设你已经在你的服务器上安装了 Slimefun 4。

当你查看 Slimefun 插件的文件夹时，你会注意到不同的 .YML 文件. 使用你最喜欢的文本编辑器查看 *config.yml* 。
个人推荐使用 [VSCode](https://code.visualstudio.com/)。

本文件中大部分内容都很容易理解，包括启用物品、Slimefun 研究在创造模式中的表现。
Slimefun 会定期检查更新并自动安装更新。如果你希望禁用此功能，或您的主机禁止使用类似的功能，设置`auto-update`为`false`。

**Items.yml** 允许你**全局**启用或禁用部分物品。如果你安装了多个 Slimefun 附属插件，这个文件将会很大。
所以，建议你花一点时间慢慢安装附属插件，如果你计划再次启用或禁用部分物品。

**messages.yml** 包含所有在使用 Slimefun 时的消息数据。你可以编辑当某事件发生时，插件向玩家发送的消息。

**Researches.yml** 允许你编辑 Slimefun 中解锁研究所需的经验值，以及研究的名字。
如果你想让玩家一开始就能使用所有的 Slimefun 物品，你也可以禁用所有研究。

**permissions.yml** 允许你为 Slimefun 物品定义权限节点，根据用户的权限来限制物品的使用。

必须保存更改，然后重启服务器。再次强调，**不要使用 /reload**。
如果你遇到了问题，并且使用了/reload，你只需要停止服务器并重启，这能解决大部分问题。

### 服务器优化 :id=server-optimizations

这有一篇关于如何 [优化你的 Slimefun 服务器](/Server-Optimizations) 的文章。

## 附属插件 :id=additional-addons

如果你想添加附属插件, 访问[这个页面](/Addons)以查看所有与你当前Slimefun4版本兼容的附属插件。

这些附属插件需要 Slimefun4，并会在服务器的 */plugins/* 文件夹中中创建它们自己的文件夹。

这些插件的配置文件一般都是简单易懂的。
请记住，你可以在 Slimefun 的 **Items.yml** 文件中禁用任何来自附属插件的物品。
