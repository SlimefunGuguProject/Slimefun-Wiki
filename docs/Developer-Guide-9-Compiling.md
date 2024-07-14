# 开发指南（9. 编译） {#developer-guide-9-compiling}

这是我们的开发指南的一部分，你可以在[这里](/Developer-Guide)查看目录。

本指南假设你使用 Maven 来管理你的项目。

## 编译 {#compiling}

为了测试你的附属，你需要将附属编译成一个 `.jar` 文件（服务器可识别为插件的文件）。  
如果你使用 Maven 来管理你的项目（正如我们在[第一部分](/Developer-Guide-(1-Project-Setup))所建议的），你只需要在项目的根目录中运行以下指令：

```bash
mvn clean package
```

这将会在项目文件夹中的 `target/` 文件夹中生成一个 `.jar` 文件，这便是编译好的附属。

IntelliJ 同样也提供了编译插件的方法。  
在编辑器窗口的右侧，点击 `Maven` 按钮。（如果没有这个按钮，请在顶部导航栏中导航到 `View > Tool Windows > Maven`）  
现在，在项目文件夹中，打开 `Lifecycle` 文件夹并双击 `clean`。一旦完成，再双击 `package`。  
这样，编译好的 `.jar` 文件可以在项目的 `target/` 文件夹中找到。

## 创建一个测试环境 {#creating-a-testing-environment}

接下来，我们需要创建一个测试环境，这样我们就可以测试我们的附属了。  
我们建议你使用 [Paper](https://papermc.io/downloads) 作为你的服务器软件。  
需要注意的是，Slimefun 及其附属只支持 Paper 及其衍生版本。

服务端是一个 `.jar` 文件。  
在某个地方创建一个新的文件夹，专门用于你的服务器，并将下载的服务端 `.jar` 文件放入文件夹中。

现在，打开命令行并切换到服务器文件夹，然后运行以下命令：

```bash
java -jar [jar文件名].jar
```

这会在服务器目录中创建一个 `eula.txt` 文件。你必须打开并将最后一行的 `false` 改为 `true`，才能运行你的服务器。  
现在，重新运行上面的命令，这将启动你的服务器。

你现在可以看到一个新的文件夹 `plugins/`，这是你将放置 Slimefun、你的附属以及其他插件的地方。  
将 Slimefun 以及你的附属的 `.jar` 文件放入这个文件夹中。

在控制台中运行 `stop` 命令，然后重新运行服务器。如果一切正常，那么你的服务器应该已经在运行你的附属了。

## 尝试你的附属 {#trying-out-your-addon}

现在，你可以启动 Minecraft 并加入正在运行的服务器了。  
在*多人游戏*选项卡中，添加一个新的服务器，地址为 `localhost`。  
你应该可以加入一个带有 Slimefun 和你的附属的服务器。为了验证这一点，运行 `/sf versions` 来显示 Slimefun 和已安装的附属。  
如果你的附属出现了，那么就是成功了！

## 重新编译 {#recompiling}

假如你对你的附属进行了更改，无论是添加新物品还是修复错误，你都需要重新编译你的附属。

在你进行更改后，再次运行 `mvn clean package` 或者使用 IntelliJ 的 Maven 插件来编译你的附属。  
然后，重新编译的 `.jar` 文件可在 `target/` 文件夹中找到。  
现在，停止服务器，删除旧的附属 `.jar` 文件，并放入新的 `.jar` 文件。然后重新运行服务器。

如果你有任何问题，可以随时在 Discord 服务器的 `#programming-help` 频道中询问。

## 发布 {#publishing}

如果你希望发布你的附属，你可以阅读[这篇指南](/Developer-Guide-Publishing)。
