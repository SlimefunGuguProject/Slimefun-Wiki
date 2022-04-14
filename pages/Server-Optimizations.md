# 服务器优化指南 :id=server-optimizations

Slimefun 是一个大型插件，因此一定会对服务器性能产生影响。  
该插件自2013年以来，一直在进行改进和优化，但根据插件以及附属使用情况的不同，对服务器的影响也不同。

这篇文章可以让你发掘插件的瓶颈与限制，并指导你优化服务器以及 Slimefun 设置，让插件尽可能流畅地运行。  
以下是一些重要的关于如何优化服务器以及 Slimefun 设置的提示:

## 1. 注意服务器性能

服务器优化方面最重要的就是获得信息。  
你需要知道查看什么信息可以提升服务器的性能，这是一些你应该熟悉的重要工具:

### a) 服务器性能分析 (/timings)

Spigot 与 Paper 都拥有性能分析工具，你可以通过 `/timings` 指令来运行性能分析工具。  
该工具可以让你深入了解服务器所面临的问题，甚至可以让你查看每个插件、每个任务的情况。

!> 注意: 理解服务器分析报告是一件困难的事。

请查阅 [spigotmc.org 上 wiki 的文章](https://www.spigotmc.org/wiki/timings/) 来了解性能分析工具是如何运作的。

但要注意的是，报告中的数字并不一定重要。特别是启动任务可能会显示为红色，但它们并不会对服务器产生影响，因为它们只会在启动时运行。

### b) Slimefun 性能分析 (/sf timings)

Slimefun 同样提供了自己的性能分析工具，能让你找到服务器卡顿的根源。  
使用 `/sf timings` 指令可以让你了解哪些区块，哪些机器，甚至哪些附属对性能的影响较大。  
试试这个指令，你应该熟悉一下。  
你肯定会看到不同的 Slimefun 内容与附属的内容。

### c) 来自插件的性能分析

除了服务器提供的性能分析工具外，还有一些第三方工具可以帮助你以及开发者从代码层面来定位服务器卡顿的原因。  
我们推荐使用[:zap: Spark by @Luck](https://www.spigotmc.org/resources/spark.57242/)。  
Spark 提供的报告已经帮助我们解决了一些优化问题，并找到了服务器的瓶颈。这是一个对于服主和开发者都非常好用的插件。

## 2. 选择正确的服务器软件 :id=2-choosing-the-right-server-software

选择正确的服务器软件对于服务器优化非常重要。

由于CraftBukkit已停止更新，[Spigot](https://www.spigotmc.org/) 已成为标准的服务器软件。但还有其他的替代品可供选择。

[Paper](https://papermc.io/) 是 Spigot 的 fork 版本，并且拥有更好的性能，以及更详细的性能分析报告。  
Slimefun 中的 **货运网络** 在 [Paper](https://papermc.io/) 得到了优化能运行得更好。  

当然，还有其他的服务器软件也提供了性能优化，我们建议你详细了解那些软件然后再进行选择。

如果你可以选择服务器所使用的 Java 版本，我们建议你尽量使用最新版本的 Java。

当你选择了合适的服务器软件后，你应该花一点时间来进行配置。  
这有一些可以查看的指南：
* [减少服务器卡顿](https://www.spigotmc.org/wiki/reducing-lag/) (SpigotMC Wiki)
* [服务器优化指南](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) (由 @Celbrimbor 发布于 SpigotMC 论坛)
* [优化 Java 的垃圾回收](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/) (@aikar 的个人博客)

## 3. 不要使用 /reload

!> 永远不要使用 `/reload`

无论你添加了新的插件，或修改了配置文件，请重新启动服务器。使用 `/reload` 会导致严重的[内存泄漏](https://en.wikipedia.org/wiki/Memory_leak)，严重影响服务器的性能。无论何时，你都不应该使用 `/reload`。

许多插件都不会处理服务器重载(`/reload`)，而 Slimefun 正是其中之一，你应该重启服务器。

## 4. 禁用向后兼容

Slimefun 已经存在了很长一段时间，许多服务器都安装了本插件。  
在**2019年夏天之前**的服务器会拥有很多旧版本 Slimefun 物品。  
这些物品使用旧版物品判断机制，依赖于比较，非常慢，非常低效。  
每次玩家使用背包中的物品，Slimefun 都会将其与所有 Slimefun 物品进行比较，这包括附属插件中的物品。  
尽管比较的操作比较快，但物品数量多了也会降低性能。

新版的物品采用了 NBT 标签，可以让插件直接了解玩家手中的物品。  
相对于比较机制来说，这是一个非常迅速的操作。  
然而，我们并不想让那些旧物品无法使用，我们仍然会进行比较操作，以对那些旧物品兼容。

如果你确定服务器中没有2019年夏天之前的物品，你完全可以禁用向后兼容，来使用全新的 NBT 标签。  
这将极大的优化服务器的性能。  
但要注意的是，任何2019年夏天前的物品都会无法使用。

你可以在 `plugins/Slimefun/config.yml` 中通过设置 `backwards-compatibility` 为 `false` 来关闭向后兼容（现版本默认禁用）。

```yaml
options:
  backwards-compatibility: false
```

## 5. 降低 Tick 速率 :id=5-slower-tick-rates

Slimefun 方块都以固定的速率运行，默认情况下，Slimefun 每 10 tick (20 tick = 1 秒) 执行一次 Tick 操作。  
增加 Tick 的间隙来**也许**可以优化服务器性能。  
然而，你不应该把这个值设置的太大，否则玩家可能会抱怨机器运行太慢。

你可以在 `plugins/Slimefun/config.yml` 中设置 Tick 速率。我们建议保持现在默认的 10，或改为曾经的默认值 12。

```yaml
URID:
  custom-ticker-delay: 10
```

与上方设置类似，Slimefun 会周期性的检查玩家的盔甲，来提供特定的药水效果。  
默认情况下，该设置为 10 tick (20 tick = 1 秒)。  
如有需要，你也可以更改该设置。

```yaml
options:
  armor-update-interval: 10
```

## 6. 处理货运网络

货运网络是已知的影响性能较大的部分。  
尽管货运一直在进行优化，但仍会时不时出现一些问题。

在合并了 [#2106](https://github.com/Slimefun/Slimefun4/pull/2106) 后，货运在使用 [Paper](https://papermc.io/) 后得到了极大的优化。你可以在 [步骤2](#2-choosing-the-right-server-software) 中了解更多相关信息。

以下是两种可以限制货运网络的方法，可以让玩家少放置货运节点。

### a) 设置货运上限

你可以在 `plugins/Slimefun/config.yml` 中设置每个电力网络以及货运网络中节点的最大数量。  
默认值 200 对于玩家来说是一个非常慷慨的数字，减少这个数值可以优化性能。  
注意，该限制会在寻找联通的网络时应用，但这并不代表一个网络中的节点数量限制。

```yaml
networks:
  max-size: 200
```

### b) 设置货运延迟

通常，货运网络被视为另一种定时机器 (参见 [步骤5](#5-slower-tick-rates))。  
但你可以通过设置延迟，让货运运行得更慢。  
该设置会让货运网络跳过指定数量的 tick 后执行操作。设置为0可以让货运网络在每个 tick 都运行。  
设置为1则会让货运网络每秒运行一次，设置为2则每次运行会间隔2个 tick，以此类推。

由于这个设置与 Slimefun tick 速率有关，过大的值会严重影响玩家的游戏体验。
我们推荐设置该值为1，且仅必要时才增加该值。

```yaml
networks:
  cargo-ticker-delay: 1
```

## 7. 启用自动更新

最后，一个提升性能最有效的方法就是一直启用 Slimefun 的自动更新。  
我们经常会分发补丁，修复以及一些性能优化来让插件变得更好（无论是内容，还是性能）。

你应该一直使用最新的版本，所以我们建议你在配置文件 `plugins/Slimefun/config.yml` 中启用自动更新：

```yaml
options:
  auto-update: true
```
