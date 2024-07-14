# 附魔书整合机 {#book-binder}

附魔书整合机是一个[电力机器](/Electric-Machines#machines)。它可以合并不同附魔书上的附魔，与铁砧类似。

## 等级 {#book-binder-tiers}

当前只有 1 个等级的附魔书整合机。  
合并持续时间取决于附魔的数量和等级。

**电力消耗**：16 J/t

## 设置 {#book-binder-settings}

默认情况下，合并的附魔不会超过原版限制的等级。
然而，服主可以选择更改这些设置，以增加等级上限，或不设置上限。

| 项目                       | 描述                                     | 类型  | 默认值     |
|--------------------------|----------------------------------------|-----|---------|
| bypass-vanilla-max-level | 启用后，附魔等级可以超过原版限制。                      | 布尔值 | `false` |
| has-custom-max-level     | 启用后，通过 `custom-max-level` 来设置新的附魔等级上限。 | 布尔值 | `false` |
| custom-max-level         | 附魔等级上限。                                | 整数  | 15      |

:::tip

在 `/plugins/Slimefun/Items.yml` 中修改机器相关的设置。

:::
