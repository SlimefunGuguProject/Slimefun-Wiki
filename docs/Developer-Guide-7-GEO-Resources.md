# 开发指南（7. 自然资源）

这是我们的开发指南的第七章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

## 1. 回顾 {#1-a-recap}

在上一章中，我们讲解了如何创建自定义头颅并将其用于物品和分类中。  
今天，我们将扩展这些知识并创建一种新的矿石，这个矿石可以通过[自然资源开采机](/GEO-Miner)获得。  
在我们继续之前，先回顾一下之前的代码：

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4非常炫酷的分类");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// 粘液物品 SlimefunItem 的物品 SlimefunItemStack
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

## 2. 创建一个新物品 {#2-creating-a-new-item}

自然资源显然也需要一个物品，所以我们将从这里开始。  
我们将从之前的代码开始，然后在其下方创建一个新的物品。

但是，稍等...首先我们需要想出一种资源。  
假如我们能创建一种只在末地维度中出现的矿石？末地矿石？是的，我们就用这个。  
我们在 `onEnable()` 方法中，之前的代码下面添加：

```java
// ...

SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5末地矿石", "", "&r这是一种很酷的矿石", "&r在末地种通过自然资源开采机获得");
```

我们将使用一个自定义的头颅纹理，但是我会缩短纹理的字符串，以使其更易读。  
现在我们已经创建好`ItemStack`了，可以开始创建物品了。我们将使用之前创建的物品组。

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5末地矿石", "", "&r这是一种很酷的矿石", "&r在末地中通过自然资源开采机获得");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, ..., ...);
enderOre.register();
```

现在，你可能注意到，最后两个参数仍然缺失。  
我们不希望我们的物品被合成，我们希望通过自然资源开采机获得，同时在指南中也显示出来。  
为此，我们可以使用配方类型 `RecipeType.GEO_MINER`。  
然而...使用这个配方类型**不会**自动将我们的物品添加到自然资源开采机中，我们仍然需要在下一步中完成这一操作。  
这个配方类型只是作为*展示物品*使用，以告知用户如何获得它。因此，我们不需要配方。
但是，我们仍然需要传递一个长度为 9 的配方数组，所以我们只需要创建一个空的 9 格数组即可。

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5末地矿石", "", "&r这是一种很酷的矿石", "&r在末地中通过自然资源开采机获得");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

现在，我们的物品差不多完成了，并且已经完成了注册。  
但是，我们仍然需要为自然资源开采机创建资源，这就是我们接下来要做的事情。

## 3. 创建一个自然资源（GEOResource） {#3-creating-a-georesource}

我们需要创建一个新的类来实现。  
创建一个新的类/文件，给它起一个有意义的名字，我们就叫它 **EnderOreResource**。

```java
public class EnderOreResource {

}
```

然后，我们需要实现自然资源的行为，自然资源开采机使用一个名为 `GEOResource` 的接口来实现这一点。  
只需要将该接口实现到你的类中，并记得导入该接口。

```java
public class EnderOreResource implements GEOResource {

}
```

你的 IDE 可能会开始警告你缺少方法。  
每当你实现一个接口时，你都必须实现它的方法。你可以在我们的 [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/api/geo/GEOResource.html) 中看到所有来自 `GEOResource` 的方法。
我们将从简单的开始。我们需要实现的第一个方法是 `getName()`，该方法将返回我们资源的名称。这是在[进行 GPS 扫描后所看到的资源名称]。

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "末地矿石";
  }

}
```

接下来，我们需要实现 `isObtainableFromGEOMiner()` 方法，该方法用于确定是否应将此资源添加到自然资源开采机中。  
对于我们来说，这是肯定的，所以我们返回 `true`。

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "末地矿石";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }

}
```

现在我们来到生成器设置。我们有两种方法来处理这个：`getDefaultSupply(...)` 用于确定给定环境和生物群系的默认数量。  
我们还有一个方法 `getMaxDeviation()`，用于确定该资源允许偏离默认数量的最大偏差。

为了给你一个确切的例子来说明什么是偏差：如果我们在末地中的区块的默认数量是 20 个末地矿石，而我们的最大偏差设置为 2，那么，  
那么，实际上，一个区块中的数量将在 20 到 22 个末地矿石之间变化。如果偏差设置为 4，那么它将在 20 到 24 个末地矿石之间变化。把它想象成奖励物品的最大数量。

:::warning 注意

偏差必须是正整数，否则这一项自然资源无法被注册。

:::

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "末地矿石";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // 环境（Environment）即世界类型：主世界 NORMAL / 下界 NETHER / 末地 THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    } else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

现在，我们的末地矿石将在末地的每个区块中生成 20 到 28 个，而在其他世界中不会生成。  
现在我们只需要实现 `getKey()` 和 `getItem()` 方法。为此，我们需要一个 `NamespacedKey`，它需要我们的插件实例。  
我们也需要我们之前定义的 `ItemStack`。

为了方便，我们来创建一个构造函数。  
构造函数是一种特殊的方法，当创建该类的新实例时，就会调用它。你可以使用它来控制在执行 `new SomeClass(...)` 时需要哪些参数。  
让我们在类的顶部创建一个新的构造函数：

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource() {
    
  }

  // ... 其他方法在此之后
```

现在，我们可以给构造函数一些参数，记住我们需要我们的插件实例和我们的 `ItemStack`。  
所以我们只需要创建两个参数，一个是 `Plugin` 类型，一个是 `ItemStack` 类型。

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource(Plugin plugin, ItemStack item) {
    
  }

  // ... 其他方法在此之后
```

现在，我们只需要将我们的插件实例和 `ItemStack` 存储在类的*成员变量*中，这意味着类中的任何内容都可以访问这个变量。  
我们将使用 `final` 关键字，这意味着这实际上是一个常量，在被创建后无法被修改。我们可以在类的顶部设置这个常量，也可以在构造函数中初始化它。  
你只需要记住，你不能在初始化后重新分配一个 `final` 变量。

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
  }

  // ... 其他方法在此之后
```

我们还需要将物品存储为常量变量。

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }

  // ... 其他方法在此之后
```

现在，可以实现剩下的两个方法了。

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // 注意：需要在此处添加 .clone() 方法，
    // 我们不想返回原始的物品。
    return item.clone();
  }

  // ... 其他方法在此之后
```

## 4. 最终注册 {#4-final-registration}

现在，我们创建了一个新的 `SlimefunItem` 和一个新的 `GEOResource`。我们只需要注册自然资源。回到主类中，进入 `onEnable()` 方法。

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5末地矿石", "", "&r这是一种很酷的矿石", "&r在末地中通过自然资源开采机获得");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

我们需要创建一个新的 `EnderOreResource` 类的实例并注册它。

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5末地矿石", "", "&r这是一种很酷的矿石", "&r在末地中通过自然资源开采机获得");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();

EnderOreResource enderOreResource = new EnderOreResource(this, enderOreItem);
enderOreResource.register();
```

之前我们在 `EnderOreResource` 类中创建的构造函数需要两个参数，`this` 传递的是插件实例，`ItemStack` 则是我们的 `SlimefunItemStack`。  
现在，我们已经完成了！我们的资源现在可以正常生成，且可以在末地中通过自然资源开采机开采了。  
这是完整的 `EnderOreResource` 类：

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // 注意：需要在此处添加 .clone() 方法，
    // 我们不想返回原始的物品。
    return item.clone();
  }

  @Override
  public String getName() {
    return "末地矿石";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // 环境（Environment）即世界类型：主世界 NORMAL / 下界 NETHER / 末地 THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

如果你有任何问题，可以随时在 Discord 服务器的 `#programming-help` 频道中询问。
