# 开发指南（4b. 放射性和凋零免疫） {#4b-radioactive-and-witherproof}

这是我们的开发指南的第四章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

!> 第四章分成了两个部分，这是第二部分。

## 1. 第四章第一部分的回顾 {#1-a-recap-of-part-4a}

第四章第一部分对于这一部分并不是**必须**的。  
但是我们在那里介绍了一些非常重要的原则，在这里也需要用到，所以我们不会再重复解释一遍。如果有什么不清楚的地方，请查看[第四章第一部分](/Developer-Guide-(4a-Right-Clicks))。

好的，上一次我们创建了一个自定义蛋糕，当你尝试吃它时会让你着火。  
但是它也会在你手持并右键点击时给你1级经验等级。  
为了做到这一点，我们介绍了类的概念，更具体地说，我们教会了你如何创建一个扩展`SlimefunItem`的类。

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemUseRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // 这会阻止玩家食用该蛋糕
        event.cancel();
        // 现在，设置玩家着火5秒
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // 如果在这里调用 event.cancel() 会阻止玩家放置蛋糕
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

我们可以暂时忽略`preRegister()`和`onBlockRightClick()`方法，这些在第四章第一部分已经讲过了。

## 2. 物品属性 {#2-item-attributes}

Slimefun物品可以有功能（称为物品处理器`ItemHandlers`），但它们也可以有一些属性（称为物品属性`ItemAttributes`）。  
请注意，这些属性与Minecraft的属性系统无关。

物品属性`ItemAttribute`可以添加到`SlimefunItem`中，例如，我们可以让我们的蛋糕具有放射性。  
让我们的蛋糕也具有放射性，好吗？

要想添加一个物品属性，只需要将它添加到你的类声明中。  
但是物品属性是接口，而不是类。所以你需要在这里使用关键字`implements`。  
正如我们在上一部分中所讲的：类只能有一个直接父类。但是它们可以实现任意数量的接口。  
让我们实现`Radioactive`接口。现在你的代码应该看起来像这样：

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

记得导入接口。  
但是我们还没有完成，每个接口通常定义了一组我们需要自己实现的方法。  
你的IDE应该已经提示你这样做了。

在`Radioactive`接口中，只有一个方法：`getRadioactivity()`。像这样实现该方法：

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
      // ?
    }
    
    // ...
    
}
```

现在我们需要给这个方法一些事情去做。  
这个方法期望我们返回一个`Radioactivity`类型的值。  
`Radioactivity`是一个枚举（enum）。枚举（或者"Enumerations"）是一种不能那么容易创建的类。  
枚举有有限数量的可能状态，每个状态都被保存为一个常量，可以通过`EnumName.CONSTANT_NAME`访问。

你可以在我们的[Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/Radioactivity.html)中看到该枚举的所有常量。

我们将使用`Radioactivity.HIGH`，这是一个常量，表示高放射性。  
只需要返回该常量即可。

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    // ...
    
}
```

现在你的物品已经具有放射性了，它会伤害玩家并要求他们穿上防护服。  
但是我们的玩家并不知道这个物品具有放射性…

## 3. 更改物品的描述 {#3-changing-the-item-lore}

让玩家了解你的物品的最好方法是通过物品描述（lore）。  
让我们回到插件主类的`onEnable()`方法。

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品SlimefunItem的物品SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.CAKE, "&4火焰蛋糕", "", "&c小心！");
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

让我们更改物品的描述。目前的描述为：`&c小心！`。  
我们想要包含一个关于放射性的提示。  
幸运的是，Slimefun 有一个内置的方法可以做到这一点。

有一个静态方法叫做`LoreBuilder.radioactive(...)`，它接受一个`Radioactivity`的常量作为参数。  
我们可以使用它来创建一个关于放射性的字符串。这将是与 Slimefun 标准物品使用的相同字符串。  
如果你想更进一步，你也可以使用静态常量`LoreBuilder.HAZMAT_SUIT_REQUIRED`，它会警告玩家需要穿上防护服。
让我们来做这些吧。

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品SlimefunItem的物品SlimefunItemStack
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

现在，我们的物品有合适的描述了。

## 4. 实现任何其他物品属性 {#4-implementing-any-other-itemattribute}

实现任何`ItemAttribute`的过程都是一样的。  
我们一直建议使用`LoreBuilder`类或手动告知用户这些属性。

你可以在[Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/ItemAttribute.html)上找到所有可用的物品属性的完整列表，点击**All Known Subinterfaces**。

作为一个小小的奖励，让我们来实现`WitherProof`属性。  
这个属性将阻止凋灵摧毁我们的方块。  
让我们回到我们的类并实现该接口。你可以使用逗号来连接不同的接口。

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

现在，过程是一样的，`WitherProof`也有一个方法需要实现。  
该方法叫做`onAttack()`，当凋灵试图摧毁这个方块时，它将被执行。  
仅仅实现这个方法就可以阻止凋灵摧毁方块了。  
实现这个方法后，你的代码应该看起来像这样：

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
    
    }
    
    // ...
    
}
```

方法的参数`block`和`wither`分别对应凋灵试图摧毁的方块和试图摧毁该方块的凋灵。  
你可以将该方法留空，该接口无论如何都会取消该事件。

当然，你可以在该方法中做一些事情，例如生成一个粒子（particle）。  
或者，一个更好的注意，让我们在凋灵试图摧毁我们珍贵的蛋糕时，立即杀死它。

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    // ...
    
}
```

将凋灵的生命值设置为0将立即杀死它。  
现在，让我们回顾一下完整的`FireCake`类。

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemUseRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // 这会阻止玩家食用该蛋糕
        event.cancel();
        // 现在，设置玩家着火5秒
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // 如果在这里调用 event.cancel() 会阻止玩家放置蛋糕
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

现在，我们拥有一个蛋糕，它：

- 会让你在试图食用时着火
- 当你携带它时，它拥有放射性
- 当你手持并右键点击时，会给予你1级经验等级
- 立即杀死任何试图摧毁它的凋灵

我认为这是一个非常酷的物品，尽管它有点…奇怪和不寻常。  
如果你有任何问题，欢迎在 Discord 的`#programming-help`频道提问。

?> 点击继续阅读[第五章](/Developer-Guide-(5-Researches))
