# 常见问题 (FAQ) :id=faq

## 我如何下载/安装 Slimefun 或它的附属插件? :id=how-can-i-download-install-slimefun-or-its-addons

要想下载并安装 Slimefun，你可以查看[这篇指南](/Installing-Slimefun)。
你可以在[附属插件](/Addons)页面中找到 Slimefun4 的附属插件列表。

你可以像安装 Slimefun 一样安装这些插件，只需要将它们放在你服务器的`/plugins/`目录内。

## 我可以在单人模式世界中安装 Slimefun 吗? :id=can-i-install-slimefun-on-a-singleplayer-world

不能。

Slimefun 是一个 Bukkit / Spigot 插件，所以你需要一个基于 Bukkit 的 Minecraft 服务器来运行它。创建一个服务器非常简单，你可以在网上找到许多教程。如果你只想自己玩 Slimefun，你可以在你自己的电脑上创建一个服务器，安装插件，并使用地址`localhost`来连接到它。如果没有额外配置，你的服务器只能在本地网络中可见，网络中的其他人将无法访问你的服务器。

## Slimefun 支持 Minecraft XXX 版本吗? :id=will-slimefun-be-available-for-minecraft-version-xyz

Slimefun 目前支持 Minecraft 1.14 及以上的每个版本。每当 Minecraft 发布新版本时，你可以放心地等待对此 Minecraft 版本的支持。我们的项目有超过100名贡献者，通常会很快支持新版本。

## 我遇到了一个 Slimefun 的错误/Bug :id=i-have-an-errorbug-with-slimefun

### 对于官方版 Slimefun :id=official-slimefun

首先，加入我们的[Discord服务器](https://discord.gg/slimefun)，并进入`#bug-discussions`频道。我们需要确认是否是 Bug，用户错误，或者是预期的行为。请注意，我们**不接受在discord中的bug汇报，只接受来自GitHub的**。根据我们积累的经验，10个"bug"中的9个是因为使用了旧版本的插件，所以请先在我们的discord服务器中与其他人讨论这个问题，让我们的开发者能够专注于已确认的Bug汇报。

现在，请在`#bug-discussions`频道向我们提供以下信息:

1. 运行 `/sf versions` 然后向我们发送截图。我们需要知道你正在使用哪个版本，否则，我们无法帮到你。
"最新版本"对我们没有任何帮助。所以，请运行该指令。如果你没有运行该指令的权限，请 Shift + 右键 点击你的 Slimefun 指南，你可以在顶部中间的格子找到正在使用的版本。

2. 检查控制台，看看是否有错误？ (如果有，请发布在 <https://pastebin.com/>)

3. 接下来该怎么办?

请访问[此页面](/How-to-report-bugs)了解更多关于汇报问题的指南。

当你把所有的信息发送给我们后，我们的工作人员或社区成员会帮助你。**请不要 ping 任何人！** 如果超过15分钟没有人回应，你可以 ping `@Helpful`权限组的人员获取帮助。请耐心等待，如果你 ping 了任何一位成员(**特别是工作人员**)，你可能被警告或被踢出服务器。

### 对于内核汉化版 Slimefun :id=chinese-slimefun

在内核汉化版的[问题追踪器](https://github.com/StarWishsama/Slimefun4/issues)中汇报问题。

你可以加入反馈QQ群，如果你不会使用GitHub或没有GitHub账号。（找不到在哪？我不告诉你）

## 护身符与末影护身符有什么区别? :id=whats-the-difference-between-the-talisman-and-ender-talisman

末影护身符会在末影箱中时生效，普通的[护身符](/Talismans)需要你将其放在物品栏中。

## 护身符可以堆叠吗? :id=can-you-stack-talismans

护身符物品是可以堆叠的，但多个护身符并不会增强它们的效果。  
然而，某些护身符在你使用后会消失，所以有多个护身符可以延长使用的时间。

## 我可以拿石块做什么? :id=what-can-i-do-with-stone-chunks

4个石块可以通过[压缩机](/Compressor)变成圆石。

## 如何根据世界禁用物品? :id=how-do-i-disable-items-per-world

你可以根据世界禁用物品。在 `/plugins/Slimefun/world-settings/` 找到需要调整设置的世界文件，然后设置物品 ID 为 `false` 禁用。

如果你想在世界中禁用**所有**物品，只需要设置`enabled`为`false`。

## 如何禁用所有或单个研究? :id=how-to-disable-all-or-individual-researches

你可以在`/plugins/Slimefun/Researches.yml`文件中设置`enable-researching`为`false`来禁用所有的研究。

在该研究设置文件内，你也可以禁用某些研究或者修改研究的的花费。

## Slimefun 使用多少内存? :id=how-much-ram-does-slimefun-use

我们无法提供一个准确的，甚至估计的值。我们不知道你的其他插件、附属插件、服务器软件、服务器版本的情况。我们在每个版本中都有可能加入对内存使用有影响的改动。我们推荐在任何无论是否安装 Slimefun 的服务器上分配 **至少** 4GB 内存。

## XXX 该怎么用? :id=how-does-xyz-work

如果你想知道某个物品该如何使用，请阅读[官方Wiki](https://github.com/Slimefun/Slimefun4/wiki)或本Wiki。你可以使用搜索功能来查找你需要的物品。

!> **注意**：Wiki 仍缺少页面。它是由社区管理的。如果你想向 Wiki 添加内容，请参阅[这篇指南](/Expanding-the-Wiki)。

## 怎么修复 Slimefun 物品? :id=how-do-i-repair-slimefun-items

你需要[自动铁砧](/Auto-Anvil)与[强力胶布](/Miscellaneous-Items)。

## 我可以给 Slimefun 物品附魔吗? :id=can-i-enchant-slimefun-items

你只能使用[自动附魔机](/Auto-Enchanter)来对Slimefun的物品附魔。

## 反应堆中的冷却剂可以持续多久? :id=how-long-does-coolant-last-in-reactors

无论是哪种类型的反应堆(普通或下界冰)，冷却剂都持续 25 秒。这里是每份燃料对应所需的冷却剂数量表：

| 燃料      | 持续时间        | 冷却剂类型 | 冷却剂数量|
| --------- | ------------- | --------- | ------- |
| 铀        | 20分钟 (1200秒) | 普通      | 48      |
| 镎        | 10分钟 (600秒)  | 普通      | 24      |
| 高纯度铀   | 25分钟 (1500秒) | 普通      | 60      |
| 下界之星   | 30分钟 (1800秒) | 下界冰     | 72     |

## 是 Slimefun 还是 SlimeFun? :id=is-it-slimefun-or-slimefun

是 Slimefun。将来的某一天，所有人都会知道正确的拼写，也许在将来的某一天，也许...
