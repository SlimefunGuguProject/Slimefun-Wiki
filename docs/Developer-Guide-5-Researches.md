# 开发指南（5. 研究）

这是我们的开发指南的第五章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

## 1. 回顾 {#1-a-little-recap}

之前的三个部分都是关于创建 Slimefun 物品的。  
我们涵盖了很多概念，一开始可能会有点压力。所以我们先放松一下。  
今天我们来讲讲研究。

我们会回到主类的 `onEnable()` 方法中。  
在添加完所有的物品之后，它应该看起来像这样：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组 ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品 SlimefunItem 的物品 SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// 3x3 的有序合成配方
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
// 我们现在正在使用自己的类
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);
```

也许你已经创建了更多的物品。

## 2. 创建研究（Research） {#2-creating-a-research}

创建研究与创建任何 Java 对象一样简单。  
我们将从创建一个新的研究对象开始。

```java
Research research = new Research(...);
```

研究 `Research` 的构造函数接受 4 个参数：`NamespacedKey` 的 ID、整数 ID、显示名称和默认花费。  
`NamespacedKey` 应该对你来说很熟悉了，所以我们从创建它开始。我们将使用 `this` 和小写的 ID 来引用我们的插件。

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, ?, ?, ?);
```

现在，来谈论一下整数 ID。  
这个 ID 有点复杂。它已经被 `NamespacedKey` 取代，但是我们仍然需要它。

:::info

目前，官方版 Slimefun 仍然依赖数字 ID 来识别不同的研究。  
汉化版在 2023.06 之后已不再依赖数字 ID。如果你的附属仅面向汉化版，你可以随意填写并无视下面小段的内容。

:::

只要记住，这个 ID 会在某个时刻被移除，因为它是一个非常糟糕的识别研究的方式。  
也就是说，你的整数 ID **必须是唯一的**。它必须在所有附属中都是唯一的。  
尽量想出一个其他人还没有使用过的随机数。这不是一个很好的方式，它源于附属出现之前的时代。  
我们正在努力移除这个数字 ID。但是目前，你需要数字 ID。而且在任何时候都不要更改它。

在这个例子中，我们将简单地选择 123 作为我们的 ID。（注意，123 已经被 Slimefun 使用了，所以不要使用它。选择一个比较大的数字。）

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, ?, ?);
```

现在我们来谈论一下显示名称。研究的显示名称将在玩家解锁研究时显示给玩家。  
它应该反映出它所代表的物品，但不一定要是文字对应。  
你可以自由地想出一些关于你的物品的双关语或有趣的文字，来传达关于你的物品的信息。

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "示例研究", ?);
```

最后，我们需要为这个研究定义一个默认花费。  
注意，这只是**默认**的花费，服务器管理员可以随时在配置文件中更改它。  
我们将简单地指定 10 等级的经验等级作为这个示例的花费。

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "示例研究", 10);
```

我们的研究马上就要完成了。  
现在我们只需要将我们的物品添加到这个研究中。

## 3. 将物品添加到研究中 {#3-adding-items-to-our-research}

我们可以通过调用 `Research#addItems(...)` 来添加物品到研究中。  
这个方法有可变数量的参数，可以添加任意数量的 Slimefun 物品。

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "示例研究", 10);

// 使用逗号分隔不同的物品
research.addItems(item1, item2, item3, ...);
```

在我们的例子中，我们只有一个火焰蛋糕物品。  
所以，我们只需要将它添加到研究中。

```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "你不会想吃这些东西的", 10);
research.addItems(cake);
```

现在，最后一步：注册研究。  
我们只需要在我们的研究对象上调用 `.register()` 方法。

```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "你不会想吃这些东西的", 10);
research.addItems(cake);

research.register();
```

我们~~滴任务~~完成了！

## 4. 我们添加了一个研究 {#4-we-added-a-research}

这是我们目前所有的代码：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组 ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品 SlimefunItem 的物品 SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// 3x3 的有序合成配方
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
// 我们现在正在使用自己的类
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "你不会想吃这些东西的", 10);
research.addItems(cake);

research.register();
```

我们现在有一个很棒的火焰蛋糕和一个与之相关的研究。  
现在，玩家将需要解锁这个研究，才能访问这个物品。  
如果你有任何问题，可以随时在 Discord 服务器的 `#programming-help` 频道中询问。
