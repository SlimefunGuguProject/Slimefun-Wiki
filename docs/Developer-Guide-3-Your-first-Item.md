# 开发指南（3. 你的第一个物品）

这是我们的开发指南的第三章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

## 1. 回顾 {#1-a-little-recap}

```java
package ...;

import ...;

public class SlimefunAddon extends JavaPlugin implements SlimefunAddon {

    @Override
    public void onEnable() {
        Config cfg = new Config(this);
        // ...
    }

    @Override
    public void onDisable() {
        // ...
    }

    @Override
    public JavaPlugin getJavaPlugin() {
        return this;
    }

    @Override
    public String getBugTrackerURL() {
        return null;
    }
}
```

这一部分的所有代码都添加在 `onEnable()` 方法中，在 `Config` 的定义之后。  
让我们开始吧。

:::tip

在接下来的文章中，你可能会看到分类与物品组这两个名词。在 Slimefun 中，这两个东西的意思是一样的。  
这是由于旧版本中的 Slimefun 称之为分类 `Category`，而在 2021 年 9 月更新后，分类改名为物品组 `ItemGroup`。

:::

## 2. 创建物品组（ItemGroup） {#2-creating-an-itemgroup}

你可能已经知道，Slimefun 指南中有很多物品组，例如：工具、武器等。  
你应该给你的附属创建自己的物品组。  
我们将从这里开始。

物品组的构建函数拥有 2 个参数：

- `id` 代表物品组的标识符，每个物品组都有一个独立的名字，我们使用 `NamespacedKey` 来作为标识符。
- `item` 代表物品组的展示物品，这个物品将在 Slimefun 指南中展示。

### 物品组的 ID {#our-id}

我们先从 ID 讲起。  
我们需要创建一个新的 `NamespacedKey` 来作为物品组的 ID。一个 `NamespacedKey` 是一个使用任意小写字母、数字、逗号、下划线的组合作为键（key），你的插件名作为命名空间（namespace）的标识符。

你插件中的每一个物品组的 ID 都必须唯一。

我们将使用 `cool_category` 作为 `NamespacedKey` 的 key 部分。
在 `onEnable()` 方法中，像这样，创建一个 `NamespacedKey`：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
```

`this` 是对你的附属主类的引用。

### 物品组的物品 {#our-item}

现在，我们来到物品组的物品部分。  
我们将使用 `CustomItemStack` 类来作为物品。（需要导入 `io.github.thebusybiscuit.slimefun4.libraries.dough.items.CustomItemStack` 类）  
你可以像这样创建一个物品：

```java
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
```

你也可以直接在物品名称中使用颜色代码。  
完整的 Material 列表可以在 [Spigot 的 Javadocs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) 中查询。

### 整合 {#full-assembly}

最后，我们来创建一个物品组。引入 `io.github.thebusybiscuit.slimefun4.api.items.ItemGroup`，并在 `onEnable()` 方法中添加以下代码来创建一个物品组：

```java
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
```

现在，我们的物品组创建完成，完整的代码应该看起来像这样：

```java
@Override
public void onEnable() {
    Config cfg = new Config(this);
    NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
    CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
    ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
    // ...
}
```

但是，这个物品组现在还不会出现在 Slimefun 指南中，因为里面没有任何物品，会被隐藏。  
我们需要向其添加一个物品。

## 3. 创建一个物品 {#3-creating-an-item}

现在，我们已经设置好物品组，是时候来创建一个真正的物品了。  
在这一部分中，我们会创建一个非常简单的物品，没有任何功能。我们会在第四部分中添加功能。  
不过，我们先要注重于物品本身。

在 Slimefun 中创建物品并不像造火箭那么难，但是你仍然需要注意。我们需要创建一个 `SlimefunItem` 类（`io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem`）。

该类的构造函数拥有 4 个参数：

- `itemGroup` 是该物品所属的物品组，在这里我们将使用之前创建的物品组。
- `itemStack` 是该`SlimefunItem` 所使用的 `SlimefunItemStack`。我们会在稍后说明。
- `recipeType` 说明该物品所使用的配方类型。换句话说，就是合成该物品所需的机器。
- `recipe` 是一个长度为 9 的 `ItemStack` 数组，描述了 3x3 的配方。

### 物品 {#the-itemstack}

由于我们之前已经创建好了物品组，现在我们直接开始创建 `SlimefunItemStack`。
`SlimefunItemStack` 类拥有很多构造函数，建议先看看它们，并找到最适合需求的。

在本指南中，我们会使用以下构造函数：  
`new SlimefunItemStack(id, material, name, lore...);`

首先，我们需要给 `SlimefunItemStack` 提供`id`。
`id` 就是一个大写字母、数字、下划线任意组合而成的一个字符串。例如：`MY_ADDON_ITEM`  
物品的 ID 必须是全局唯一的（包括本体与所有附属），所以请选择最适合物品的 ID。

:::tip

许多附属向物品 ID 前加上与插件名有关的前缀，这有助于避免 ID 冲突的情况发生。例如，网络的所有物品 ID 的前缀都是 `NTW_`。

:::

`material` 是物品的类型。  
完整的 Material 列表可以在 [Spigot 的 Javadocs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) 中查询。

对于 `name`，我们可以指定一个名称，也可以使用颜色代码。  
`name` 之后，可以接着 0 行或更多的物品描述（lore），同样支持颜色代码。

完整的 `SlimefunItemStack` 定义应该看起来像这样：

```java
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.EMERALD, "&a炫酷的绿宝石", "", "&7听说很值钱");
```

对于物品描述，我让第一行留空了。这不是必须的，但这样可以与其他 Slimefun 物品的描述格式保持一致。

### 配方 {#the-recipe}

对于配方类型 `RecipeType`，我们将使用标准的 `RecipeType.ENHANCED_CRAFTING_TABLE`，这意味着该物品将在[增强型工作台](/Enhanced-Crafting-Table)中制作。  
我们会在指南后面的部分详细讲解配方类型。

现在，我们来定义配方。我们将会使用长度为 9 的 `ItemStack` 数组作为配方：

```java
ItemStack[] recipe = {...};
```

9 个物品分别表示了增强型工作台的发射器中 3x3 的每个格子（从左到右，从上到下）。  
在本指南中，我们将让钻石摆放成 X 型。  
当然，你可以使用任意形状的配方。

```java
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               new ItemStack(Material.DIAMOND),    null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
```

:::warning 重要提示:

你可以使用 `SlimefunItems.ITEM_ID` 来使用 Slimefun 中的物品作为配方的一部分。

:::

现在，让我们把配方中心的物品替换成黑金刚石：

```java
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
```

## 4. 添加你的物品 {#4-adding-your-item}

要创建一个物品，你可以使用这样的代码：

```java
SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, recipeType, recipe);
```

最后，我们得注册该物品，才能让物品出现在 Slimefun 指南中出现。我们需要调用 `sfItem.register(this)` 方法。  
该物品现在也可以在指定的机器中合成了。  
`this` 指代的是你的粘液附属 `SlimefunAddon` 主类。

让我们来回顾一下之前的步骤：

1. 创建了一个物品组`ItemGroup`
   a. 使用`CustomItemStack`作为展示物品
2. 创建了一个粘液物品`SlimefunItem`
   a. 使用自定义配方
   b. 使用`SlimefunItemStack`来指定物品 ID、材料、显示名与说明

以下是目前为止所有的代码（在 `onEnable()` 方法中）：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品SlimefunItem的物品SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.EMERALD, "&a炫酷的绿宝石", "", "&7听说很值钱");
// 3x3 的有序合成配方
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
sfItem.register(this);
// 注册物品
```

### 季节性分类与锁定分类 {#seasonal-and-locked-categories}

你也可以创建一个季节性分类 `SeasonalItemGroup` 或者锁定分类 `LockedItemGroup`，而不是普通的分类 `ItemGroup`。  
这种分类需要指定等级。该等级决定了分类在 Slimefun 指南中的出现位置。等级越低的分类，会显示在更前面。

- 季节性分类 `SeasonalItemGroup` 仅在全年中指定的月份显示在 Slimefun 指南中，其余时间将会被隐藏。
- 锁定分类 `LockedItemGroup` 将需要其父分类（可以有多个）中的物品全部解锁后，才能查看该分类。

```java
Month month = Month.JAN; // 来自 java.time.Month 中的任意月份
SeasonalItemGroup group = new SeasonalItemGroup(categoryId, categoryItem, tier, month);
```

```java
// 该物品组需要 `parentItemGroupA` 与 `parentItemGroupB` 全部解锁后才能访问。
LockedItemGroup category = new LockedItemGroup(categoryId, categoryItem, tier, parentItemGroupA.getKey(), parentItemGroupB.getKey());
```
