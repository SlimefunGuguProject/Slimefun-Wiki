# 指令 {#commands}

本页包含有关 Slimefun 的指令信息。
尽管 Slimefun4 中的指令并不多，但了解这些指令仍然很重要。

你可以使用前缀 `/slimefun` 或 `/sf`。两者都可以使用。
为了方便，我们将使用 `/sf`。

\<\> = 必填  
[] = 可选

## 普通玩家指令 {#commands-for-plugin-users}

| 指令 | 说明 | 所需权限 |
| ----------- | ------------------- | --------- |
| /sf help | 显示所有指令 | 无 |
| /sf guide | 获得粘液指南书物品 | slimefun.command.guide |
| /sf stats | 显示你当前的状态、称号、已花费的经验值、解锁的进度 | 无 |
| /sf search \<搜索内容\> | 打开指南并显示搜索界面 | slimefun.command.search |
| /sf open_guide | 直接打开粘液指南书 | slimefun.command.open_guide |

:::warning

默认情况下，只有以下权限被授予玩家：

- `slimefun.command.guide`
- `slimefun.command.search`

:::

## 管理员指令 {#commands-for-administrators}

| 指令 | 说明 | 所需权限 |
| ----------- | ------------------- | --------- |
| /sf give \<玩家\> \<物品 ID\> [数量] | 给予指定物品给指定玩家 | slimefun.cheat.items |
| /sf cheat | 打开作弊菜单，可直接获取物品 | slimefun.cheat.items |
| /sf versions | 显示 Slimefun 版本与附属信息 | slimefun.command.versions |
| /sf research \<玩家\> \<研究 / all / reset\> | 为指定玩家解锁指定研究/所有研究/重置所有研究。 | slimefun.cheat.researches |
| /sf stats \<玩家\> | 显示指定玩家的当前状态、称号、已花费的经验值、解锁的进度 | slimefun.stats.others |
| /sf teleporter [玩家] | 显示你的或指定玩家的所有传送点 | slimefun.command.teleporter |
| /sf timings | 显示粘液刻的统计信息 | slimefun.command.timings |
| /sf debug_fish | 获得调试工具 | slimefun.debugging |
| /sf backpack \<玩家\> \<ID\> | 给予你用于恢复指定玩家的指定背包的备用背包，应仅用于恢复背包物品 | slimefun.command.backpack |
| /sf charge | 给你手中的物品完全充电 | slimefun.command.charge |
| /sf id | 获得手中粘液物品的 ID | slimefun.command.id |
| /sf cleardata \<世界\> \<\*/block/oil\> | 清除指定世界的 Slimefun 数据（方块/石油） | slimefun.command.clear_data |

:::warning

以下指令仅汉化版可用：

- `/sf id`
- `/sf cleardata`

:::
