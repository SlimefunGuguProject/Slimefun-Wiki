# 开发指南（2. 创建附属）

这是我们的开发指南的第二章，你可以在[这里](/Developer-Guide)查看目录。
如果你还没有看过之前的内容，请先阅读它们。

## 1. 你的主类 :id=1-your-main-class

你的项目已经设置好了，现在可以开始编写代码了。

打开主类，它现在看起来像这样：

```java
package ...;

import ...;

public class ExampleAddon extends JavaPlugin implements SlimefunAddon {

    @Override
    public void onEnable() {
        // ...
    }

    @Override
    public void onDisable() {
        // 禁用插件的逻辑...
    }

    @Override
    public String getBugTrackerURL() {
        // 你可以在这里返回你的问题追踪器的网址，而不是 null
        return null;
    }

    @Override
    public JavaPlugin getJavaPlugin() {
        /*
         * 你需要返回对你插件的引用。
         * 如果这是你插件的主类，只需要返回 "this" 即可。
         */
        return this;
    }

}
```

`package`关键字定义了该类所在的包。  
`import`关键字告诉Java该类引用了哪些外部类，你会看到很多来自`io.github.thebusybiscuit.slimefun4...`或`org.bukkit...`的引用。  
这是因为，你在开发时会用到这些类。

接下来，是你的主类定义，类名与你的文件名一致（不包含后缀），然后是`extends JavaPlugin`，表示这是一个Bukkit插件。  
最后的`implements SlimefunAddon`表示这是一个 Slimefun 附属。

这个类包含两个方法。  
`onEnable`将在插件启用时被执行，通常包含各种初始化操作。
`onDisable`将在插件禁用时被执行，通常是服务器关闭时。你现在可以暂时忽略这些东西。

## 2. `onEnable`方法 - `Config`类 :id=2-the-onenable-method---config

在模版中，`onEnable`方法已经包含了许多的东西。  
我们会依次解释每一部分，但我们现在先讲解最开始的部分。

```java
@Override
public void onEnable() {
    // 从 config.yml 中读取插件配置
    Config cfg = new Config(this);
}
```

你可以使用`Config`类，并使用`new Config(this)`来从配置文件中读取配置。  
`src/main/resources/config.yml`文件是默认的配置文件内容。

`Config`类来自 Slimefun/dough，因此你通常不会在其它非 Slimefun 项目中看到它。  
你可以直接从配置文件中使用指定的获取类来获取指定的值：

```java
cfg.getBoolean("path.to.your.boolean");
cfg.getString("path.to.your.string");
```

你可以使用`Config`来设置可以让服主自由调整的值。

!> **重要提示**：如果你的IDE抱怨找不到`Config`类，那么你需要从`io.github.thebusybiscuit.slimefun4.libraries.dough.config`包中来引用该类。  
你需要引用每一个你用到的外部类。

?> 点击继续阅读[第三章](/Developer-Guide-(3-Your-first-Item))
