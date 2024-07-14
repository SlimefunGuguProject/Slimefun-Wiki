# 开发指南（4a. 右键点击） {#Developer-Guide-4a-Right-Clicks}

这是我们的开发指南的第四章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

:::info

第四章分成了两个部分，这是第一部分。

:::

## 1. 上次我们做了什么 {#1-what-we-did-last-time}

在上一部分，我们学习了如何创建自己的 Slimefun 物品、物品组与配方。  
如果你还没有看过上一部分，请先阅读它，否则你将无法继续下去。

现在我们继续上一部分的内容。这是来自上一部分的代码（应该在 `onEnable` 方法中）：

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
```

现在，你可以编译你的附属，并在游戏中测试它。详情请参阅[编译](/Developer-Guide-9-Compiling)部分。  
如你所见，我们创建的 Slimefun 物品已经出现在 Slimefun 指南中，并且可以被合成了。  
但是，这个物品现在没有什么价值，因为它什么也不做。  
我们来改变一下吧。

## 2. 扩展 SlimefunItem {#2-extending-slimefunitem}

在之前的部分中，我们使用了 `SlimefunItem` 类来创建我们的物品。这并没有错，但是它默认不会做任何事情。  
所以，我们需要创建自己的类。  
这应该非常简单，你将经常需要创建类。

在这个教程中，我们将创建一个在你尝试吃它时会让你着火的蛋糕。  
让我们叫它 `FireCake`。现在，创建 `FireCake` 类。  
你的类一开始应该是一个空白的画布，看起来像这样：

```java
public class FireCake {

}
```

在 Java 或其他面向对象编程语言中，类（Class）可以相互继承。  
你可以把类看作是对象的模版。`SlimefunItem` 类基本上就是我们将要创建的任何物品的模版。  
现在我们创建了自己的类，这就是一个全新的对象模版。但是我们可以扩展 `SlimefunItem` 模版，这将确保使用我们的类创建的物品具有与 `SlimefunItem` 类创建的物品相同的功能。

同样的，你的插件的主类只是 Bukkit 的 `JavaPlugin` 类的扩展，这是所有插件的模版。  
你的主类扩展了该插件，然后你的服务器根据你定义的模版创建了一个插件对象。

我希望这不会让你太困惑，现在我们需要做的是：  
我们希望我们的 `FireCake` 类扩展 `SlimefunItem` 类，使其继承自该类。  
为此，我们使用 `extends` 关键字，后面跟着父类（`SlimefunItem`）。注意，任何类只能有一个父类。

```java
public class FireCake extends SlimefunItem {

}
```

现在你的 IDE 可能会开始在这一点上给你报错。  
我们需要一个构造函数。构造函数定义了对象**如何**从这个“模版”创建。  
而`SlimefunItem`构造函数需要一些参数，所有子类都需要提供这些参数。

如果我们回想一下之前的代码，构造函数看起来像这样：

```java
new SlimefunItem(itemGroup, itemStack, recipeType, recipe);
```

在我们的新类中，我们可以简单地复制这个构造函数并将所有参数传递给父类的构造函数。

:::tip

通常父类被称为**超类**，它们的构造函数被称为**超构造函数**。

:::

我们只需要使用`super`关键字并传递参数，构造函数现在看起来像这样：

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

现在我们的类基本上已经设置好了。  
我们甚至可以回到我们的主类并使用我们的类，试一试。

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4非常炫酷的分类");
// 创建物品组ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// 粘液物品SlimefunItem的物品SlimefunItemStack
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4火焰蛋糕", "", "&c小心！");
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

:::warning 非常重要

你需要将 `SlimefunItemStack` 的材料设置为 `Material.CAKE`，否则你将无法吃掉它。

:::

## 3. 添加一个物品处理器（BlockUseHandler） {#3-adding-an-item-handler-blockusehandler}

现在，我们已经替换了类，附属应该像预期的那样工作。但是，什么也没有改变。  
到目前为止，我们所做的只是添加了一个新的类，它的行为与 `SlimefunItem` 完全相同。  
我们需要为类添加实际的功能。

在 Slimefun 中，我们可以通过物品处理器 `ItemHandler`（[Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/api/items/ItemHandler.html)）来添加功能。  
有几种可供选择的 `ItemHandler` 类型，你可以在我们的 Javadocs 中找到完整的列表，位于 *All Known Subinterfaces* 中。

要想添加 `ItemHandler`，我们需要回到我们的自定义物品类中。

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

我们将**覆盖（Override）** 一个来自 `SlimefunItem` 的方法，叫做 `preRegister()`。  
这个方法在物品注册之前被调用，这确保了我们的处理器被正确添加。  
注意，覆盖的方法应该有一个 `@Override` 注解，如下所示：

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        // 我们将在此处添加物品处理器
    }
    
}
```

你可以添加任意数量的物品处理器，但是要小心，有些处理器有非常严格的要求。  
例如，你只能将 `BowShootingHandler` 添加到弓上，而不能添加到其他任何物品上。

我们将要选择的物品处理器是：`BlockUseHandler`，当玩家右键点击我们的方块时，将会调用 `BlockUseHandler`。
类似的，`ItemUseHandler` 在玩家手持该物品右键点击时被调用。

现在，我们找到 `preRegister()` 方法。  
首先，我们声明一个新的 `BlockUseHandler`。  
但是不要在右边写任何东西。

然后，我们可以通过调用 `addItemHandler(...)` 来添加我们的处理器。

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}
```

很好，我们现在成功地将 `BlockUseHandler` 添加到了我们的物品中。  
除了…我们还没有创建 `BlockUseHandler`。

`BlockUseHandler` 是一个只有一个方法的接口。接口基本上只是我们的模版的模版。  
它们是类（Class）的模版，但不实现（implement）它们。把它们看作是一种骨架。

只有一个方法的接口被称为**功能接口（Functional Interface）**，因为它们只有一个方法，所以它们可以像方法一样被调用。  
注意，这里用的是“像”，而不是“作为”。因为从 Java 8 开始，我们可以引用一个方法，然后简单地将其作为接口实现。

如果你需要一个关于所有这些的详细解释，请尝试在互联网上搜索 “Java 8 Lambdas”、“Java 8 method references” 和 “Java 8 functional interfaces”。  
为了这篇指南的目的，你只需要知道你的物品处理器可以通过一个方法来实现，我们可以引用这个方法。

`BlockUseHandler` 的方法接受一个 `PlayerRightClickEvent` 作为参数。  
所以我们可以简单地创建一个带有这个参数的新方法。

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}

// Note that the method name does not matter here
private void onBlockRightClick(PlayerRightClickEvent event) {
    // This method will now be called whenever this Block is right-clicked.
}
```

现在，回到这一部分：

```java
BlockUseHandler blockUseHandler = ???;
```

我们现在需要引用我们的方法，告诉我们的插件在使用该方块时调用此方法。  
要引用同一类中的方法，我们可以使用 `this::methodname`。注意，这**不会**执行该方法。  
该方法只会被引用并作为 `BlockUseHandler` 在我们的例子中传递。  
所以我们可以简单地在这里引用我们的 `onBlockRightClick` 方法。

```java
BlockUseHandler blockUseHandler = this::onBlockRightClick;
```

完整的代码现在看起来像这样：

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
    
    }
    
}
```

现在我们可以在 `onBlockRightClick` 方法中做一些事情了。  
让我们阻止玩家吃这个蛋糕。我们可以使用 `event.cancel()` 来做到这一点。

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // 这会阻止玩家食用该蛋糕
    event.cancel();
}
```

然后，我们需要让食用的玩家着火。  
Bukkit 使用[游戏刻](https://zh.minecraft.wiki/w/%E5%88%BB#%E6%B8%B8%E6%88%8F%E5%88%BB%E4%B8%8E%E8%AE%A1%E7%AE%97%E9%80%9F%E7%8E%87)来确定玩家应该燃烧多长时间。一刻等于 1/20 秒。  
所以 20 个刻将意味着 1 秒。如果我们将 x 乘以 20，我们就可以让他们着火 x 秒。

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // 这会阻止玩家食用该蛋糕
    event.cancel();
    // 现在，设置玩家着火5秒
    event.getPlayer().setFireTicks(5 * 20);
}
```

现在我们的火焰蛋糕已经完成了。  
在游戏中测试一下，制作蛋糕并看看你是否着火了。

:::warning 非常重要

你需要将 `SlimefunItemStack` 的材料设置为 `Material.CAKE`，否则你将无法吃掉它。

:::

## 4. 添加多个物品处理器（ItemUseHandler） {#4-adding-multiple-item-handlers-itemusehandler}

你可以添加任意数量的物品处理器。例如，你可以添加一个 `ItemUseHandler`，当玩家手持蛋糕右键点击时，会触发 `ItemUseHandler`。

现在，我们将添加一个新的方法（也带有 `PlayerRightClickEvent` 参数），并将其作为 `ItemUseHandler` 添加。  
让我们对玩家友好一点，当玩家手持蛋糕右键点击时，给予他 1 级的经验等级。

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

好的，现在我们的蛋糕可以让玩家着火并获得 1 级的经验等级了。  
如果你有任何问题，欢迎在 Discord 的 `#programming-help` 频道提问。  
我希望这篇指南对你有所帮助，期待着看到你的附属！

