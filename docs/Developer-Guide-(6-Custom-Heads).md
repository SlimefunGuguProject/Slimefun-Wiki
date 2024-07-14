# 开发指南（6. 自定义头颅） {#developer-guide-6-custom-heads}

这是我们的开发指南的第六章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

## 1. 回顾 {#1-our-usual-recap}

在上一部分中，我们讲解了如何创建研究。  
这是我们上次创建的完整代码：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品SlimefunItem的物品SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.CAKE, "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
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

今天，我们来为我们的物品组和物品使用自定义头颅。

## 2. 介绍 {#2-introduction}

正如你们所知道的：Minecraft支持使用任何玩家的头颅作为物品或方块。  
这甚至包括不再使用的皮肤的头颅。  
有很多数据库收集或整理了一些很酷的头颅列表。

在本指南中，我们将使用[minecraft-heads.com](https://minecraft-heads.com/)，它是一个非常方便和大型的头颅数据库网站。  
当然，任何收集或生成头颅的工具或网站都可以使用。

请注意，我们与这个网站没有任何关系，这只是一个例子和我们的个人推荐。  
如果你知道一个更好的工具或网站，可以随意使用它。

## 3. 获取纹理 {#3-getting-the-texture}

要在游戏中使用头颅，你需要指向它应该使用的皮肤。  
Minecraft 使用一个 URL 来从`https://textures.minecraft.net/texture/`服务器来获取皮肤。这个 URL 不是以纯文本的形式存储的，而是作为 JSON 字符串的一部分，并编码为 Base64。

如果你有任何不了解的地方，不用担心，你只需要知道每个皮肤都可以用一个[Base64](https://en.wikipedia.org/wiki/Base64)字符串来表示。  
我们接下来将需要找到所需头颅皮肤的 Base64 字符串。

### 3.1. 自己创建一个头颅 {#31-creating-a-head-yourself}

如果你想创建自己的纹理，它就像让你创建你的角色皮肤一样简单。  
在这里，我们会提供一个 [Minecraft Wiki](https://minecraft.gamepedia.com/Skin#Creating_a_skin) 的链接，但我相信你已经熟悉这个了。

由于今天我们只涉及使用头颅，身体、手臂和腿部对我们来说都不重要。  
重要的是你可以按照你的喜好来纹理化头颅部分。  
你已经做好了你的纹理吗？好的，很好！

你可以使用 [Minecraft-Heads 提供的自定义头颅生成器](https://minecraft-heads.com/custom-heads/heads-generator)，来为你生成一条可获取头颅物品的`give`指令。  
它看起来像这样：  
`/give @p skull 1 3 {display:{Name:"Test"},SkullOwner:{Id:"6e094b8b-8c7c-4ee4-b039-bd99a95a7666",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="}]}}}`

现在，注意这条指令中的数据。有一个名为`Properties`的字段，后面跟着一个`textures`对象。  
这是我们所需的。更准确地说：实际上是我们所需的`Value`。  
所以，当我们删除其他所有内容后，我们得到了这个：  
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

这正是我们需要的 Base64 字符串。  
我们将在后面的部分介绍如何使用。

## 3.2. 使用 minecraft-heads.com 的头颅 {#32-using-a-head-from-minecraft-heads-com}

当然，你可以从`give`指令中提取任何纹理，就像上面看到的那样。  
但是 minecraft-heads.com 已经为他们收集的每个头颅提供了我们所需要的 Base64 字符串。

你可以在[Custom heads](https://minecraft-heads.com/custom-heads)部分中浏览，找到你想要使用的头颅。  
当你找到一个你喜欢的头颅时，你可以点击它并向下滚动，你应该会看到一个包含一个字符串的`Value`字段，它看起来像这样：
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

这正是我们需要的 Base64 字符串。  
我们现在可以在下一步中使用这个字符串来满足我们的需求。

!> **免责声明**：从网站上获取皮肤非常容易，但请记住：标记出处。我们建议，在你的项目页面上，注明你从哪里获取的这些皮肤。这不是任何法律建议，但是在你的项目页面上为你从哪里获取的这些皮肤添加一个来源是一个好主意。

## 4. 使用你的纹理作为物品组 {#4-using-your-texture-for-an-item-group}

这是我们早些时候用到的代码：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

我们想要修改这一部分，使用我们的纹理来代替钻石。  
Slimefun 提供了一个快速简单的方法：`SlimefunUtils.getCustomHead(...)`。  
注意，你需要**导入**`io.github.thebusybiscuit.slimefun4.utils.SlimefunUtils`。

这个方法接受一个 Base64 字符串，然后返回一个`ItemStack`版本的头颅。  
`CustomItemStack`的构造函数也允许我们指定一个`ItemStack`，而不是一个`Material`。  
让我们来试试吧：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SlimefunUtils.getCustomHead(...), "&4非常炫酷的分类");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

现在，我们需要将我们之前获得的 Base64 字符串传递给该方法。

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SlimefunUtils.getCustomHead("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4非常炫酷的分类");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

这样，我们的物品组就显示为头颅了。

## 5. 使用你的纹理作为物品 {#5-using-your-texture-for-items}

现在，我们来看看如何使用我们的纹理来代替物品。  
这是我们之前的代码：

```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

如果我们的蛋糕真的看起来像一个危险的蛋糕，那不是很棒吗？  
使用`SlimefunItemStack`时，这更容易。我们只需要将我们的材料（`Material.CAKE`）替换为我们的纹理的 Base64 字符串。

```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

现在，我们完成了！  
这是完整的代码：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4非常炫酷的分类");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// 粘液物品SlimefunItem的物品SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4火焰蛋糕", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

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

如果你有任何问题，可以随时在 Discord 服务器的`#programming-help`频道中询问。

?> 点击继续阅读[第七章](/Developer-Guide-(7-GEO-Resources))
