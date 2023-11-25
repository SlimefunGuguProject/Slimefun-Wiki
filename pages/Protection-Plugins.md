# 保护插件 :id=protection-plugins

Slimefun 支持许多现有的保护插件。  
这将避免滥用 Slimefun 物品并影响到其他玩家。  
本页面中列出了所有已经支持的保护插件，以及如何向 Slimefun 添加你的保护插件。

## 支持的保护插件 :id=supported-protection-plugins

我们默认支持这些保护插件。  
支持离线玩家的保护插件可以让机器人在拥有者不在线时也可以运作。  
如果保护插件不支持离线玩家，机器人需要拥有着在线才能正常工作。

:heavy_check_mark: = 完全支持  
:heavy_minus_sign: = 部分支持（例如，仅在受保护的区域） 
:x: = 不支持  
N/A = 不可用

| 插件 | 支持玩家 | 支持离线玩家 | 支持 PvP | 支持实体
| ------------------ | :----: | :----: | :----: | :---: |
| ASkyBlock | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: |
| BentoBox | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| BlockLocker | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| ChestProtect | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| FactionsUUID | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| FunnyGuilds | :heavy_check_mark: | :x: | :heavy_minus_sign: | :heavy_minus_sign: |
| GriefPrevention | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: |
| LandLord | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Lands | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Lockette | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| LWC | :heavy_check_mark: | :heavy_minus_sign: | N/A | N/A |
| PlotSquared | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| PreciousStones | :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: |
| RedProtect | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: |
| Towny | :heavy_check_mark: | :x: | :heavy_minus_sign: | :heavy_minus_sign: |
| WorldGuard | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### 没有看到你使用的保护插件? :id=you-cannot-see-your-protection-plugin

这可能是因为该插件还没有对 Slimefun 提供支持，或依赖其他已经支持的保护插件。  
有一部分插件需要 WorldGuard 或其他上述列表中已经列出的插件作为前置插件。  
如果插件没有展示在列表中，请向插件作者询问是否使用了另外一个保护插件作为前置。

如果没有，欢迎向作者发送本页面的链接，我们将在后面讲述如何添加保护插件的支持。

## 支持的日志插件 :id=supported-protection-loggers

Slimefun 同样支持部分日志插件。
这些日志允许你追踪玩家的某些操作，例如不小心使用 Slimefun 物品破坏方块。  
以下是我们支持的日志插件列表:

| 插件 | 支持破坏方块 | 支持放置方块 |
| ------------------ | :----: | :----: |
| CoreProtect | :heavy_check_mark: | :heavy_check_mark: |
| LogBlock | :heavy_check_mark: | :x: |

## 添加对你的保护插件的支持 :id=adding-support-for-your-protection-plugin

请阅读[原文](https://github.com/Slimefun/Slimefun4/wiki/Protection-Plugins#adding-support-for-your-protection-plugin)。
