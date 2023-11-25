# 开发指南 (1. 项目配置)

这是我们的开发指南的第一部分，你可以在[这里](/Developer-Guide)查看目录。

## 1. 必要工具 :id=1-the-necessary-tools

在开发之前，你需要安装以下工具：

1. Java JDK 16+
2. 任意 Java IDE （强烈建议使用 IntelliJ IDEA）
3. Apache Maven （IntelliJ IDEA 自带）
4. Git （推荐，用于版本管理）

我们不会详细阐述如何下载并安装这些工具，请自行百度解决。  
当你安装完这些工具后，进入下一步。

## 2. 创建一个新的GitHub仓库 :id=2-create-a-new-github-repository

完成该步骤需要你拥有一个GitHub账号，我们为你制作了一个漂亮的 Slimefun 附属模版。  
你可以访问我们的[模版](https://github.com/Slimefun/Addon-Template)，点击"Use this template"来使用该模版新建你的仓库。  
你需要在页面中填写你的附属名称（英文），以及其他的选项。

当你填写完毕后，点击"Create repository from template"即可。

## 3. 设置项目 :id=3-setting-up-your-project

现在，你的项目拥有了一个GitHub仓库，你可以将它克隆到本地并导入到IDE中了。  
你应该去了解一下如何使用你在第一部分中选择的IDE导入项目。  
确保你在IDE中配置好你的项目，之后你需要推送内容到GitHub。

### Maven

现在，我们需要简单地聊一下Maven。

Maven是一个许多Java项目使用的依赖管理器。我们的模版项目已经包含了一个配置好的Maven设置。  
但你需要确保你的项目被IDE正确地读取为Maven项目。你可以去了解如何在你的IDE中配置Maven项目。  
你的项目将使用Maven进行编译、打包，如果你想分享或发布你的附属，你需要Maven。

### 协议 :id=license

你应该给你的项目选择一个协议。我们建议你选择一个开源协议，这样任何人都可以给你的项目贡献代码。  
你可以在[ChooseALicense.com](https://ChooseALicense.com/)网站来选择适合你项目的开源协议。  
如果你不想为了选择开源协议而烦恼，我们建议你使用[MIT 协议](https://choosealicense.com/licenses/mit/)。

要选择协议，只需要在你的项目根目录中新建一个文件"LICENSE"（没有后缀），并将协议文本复制到该文件中即可。

### 自述文件 :id=readme

你的项目需要一个自述文件。  
我们的模版项目的自述文件介绍了如何配置你的项目（在指南第四部分也会涉及到）。  
但你应该在自述文件中介绍你的项目，并包括一些相关的链接，比如发布帖或下载链接。

自述文件会在用户访问你的仓库时展示，所以把它弄得漂亮点。

## 4. 重要步骤 :id=4-very-important-step

这一步非常重要。  
现在，你的项目仍然有许多需要替换的地方。
打开项目根目录中的`pom.xml`，在文件头部，你应该可以看到这4个部分

### 你的 groupId :id=your-groupid

每一个Java项目都有一个包名（package id）或组名（group id）。  
该名称是为了识别你是一个个人开发者，或者代表一个组织。  
该名称必须为全部小写，以下是一些例子：

- `me.ybw0014`（me开头的通常代表个人）
- `dev.ybw0014`（如果你拥有网站，使用你网站域名的倒序）
- `com.google.example`（如果你属于某个组织，例如Google，则使用这种格式。不要假冒任何组织，只有当你的项目是以组织名义制作时才使用该格式）
- `io.github.ybw0014`（如果你的仓库在GitHub托管并开源，你可以使用该格式）

对于大多数开发者来说，我们建议使用`me.你的名字`来作为包名（记住，全部小写，使用`_`来表示空格）。  

!> 记住这个包名，我们稍后会用到。

### 你的 projectId :id=your-projectid

每一个Java项目都有一个项目名（project id）。  
项目名将与包名一起组合为你的包标识符，它应该是唯一的。

你的项目名应该与项目名称一致，例如`CoolAddon`。  
需要注意，项目名不一定像组名一样要全部小写。  

!> 记住这个项目名，我们稍后会用到。

### 你的 pom.xml :id=your-pomxml

`pom.xml`是任何Maven项目的心脏。  
现在，你需要用到之前定下的包名与项目名。  
你的`pom.xml`文件开头应该有以下内容：

```xml
    <modelVersion>4.0.0</modelVersion>
    <groupId>me.CHANGEME</groupId>
    <artifactId>SlimefunAddon</artifactId>
    <version>1.0.0</version>
```

将`groupId`与`artifactId`分别改为你的包名与项目名。  
现在，你的`pom.xml`文件开头应该看起来像这样：

```xml
    <modelVersion>4.0.0</modelVersion>
    <groupId>me.ybw0014</groupId>
    <artifactId>CoolAddon</artifactId>
    <version>1.0.0</version>
```

!> 不要忘记包名与项目名，后面还会用到。

### 你的 plugin.yml :id=your-pluginyml

`plugin.yml`是任何Bukkit插件的心脏。  
你可以在`src/main/resources/plugin.yml`查看。  
它看起来像这样：

```yml
name: SlimefunAddon
version: ${project.version}
author: CHANGEME
description: A generic Slimefun4-Addon
website: https://github.com/Slimefun/Addon-Template

main: me.CHANGEME.slimefunaddon.SlimefunAddon
depend: [Slimefun]

api-version: 1.14
```

1. 将`name`设置为你的项目名。
2. 将`author`设置为你的名字。
3. 在`description`中简单介绍一下你的插件。
4. 设置你项目的主页`website`，你可以移除这一行，或者填写项目的GitHub/Spigot页面地址。

最**重要**的一步，将`main`改为以下内容：  
main: `包名` + . + `项目名` (全部小写) + . + `项目名`

这一步可能会让你摸不着头脑，所以我们提供了一个例子：

包名：net.guizhanss  
项目名：GuizhanCraft  
main: net.guizhanss.guizhancraft.GuizhanCraft

你的`plugin.yml`现在应该看起来像这样：

```yml
name: GuizhanCraft
version: ${project.version}
author: ybw0014
description: 一个有用的附属
website: https://github.com/GuizhanCraft/GuizhanCraft

main: net.guizhanss.guizhancraft.GuizhanCraft
depend: [Slimefun]

api-version: 1.14
```

还有最后一步，这一部分就完成了。

### 你的代码包 :id=your-package

我们将开始接触一些代码文件。  
我们还没有开始真正的写代码，但是我们仍然需要对代码包进行配置，来匹配之前作出的更改。

打开目录`src/main/java`，你应该看到一个像这样的包：`me.CHANGEME.slimefunaddon`。  
重命名这个包为：`包名` + . + `项目名` (全部小写)。  
如果按照之前的例子来说，就是`net.guizhanss.guizhancraft`。

打开这个包，你可以看到`SlimefunAddon.java`文件。将这个文件重命名为`项目名.java`（记得保留后缀）。  
现在这个文件名应该看起来像这样：`GuizhanCraft.java`。

如果你设置好了Git仓库，那么你应该可以提交（commit）并推送（push）你的修改到GitHub仓库了。  
网上有非常多的教程。你应该经常提交并推送你的更改，这样你本地的进度能够与GitHub仓库同步。这也能方便其他人参与到你的项目中。  

一切就绪！你已经完成附属的配置。

## 5. 锁定你的依赖版本 :id=5-locking-your-dependency-versions

官方模版与汉化模版均已锁定Slimefun的版本，因此你无需考虑这一部分。如需阅读，请访问[此处](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(1-Project-Setup)#5-locking-your-dependency-versions)。

?> 点击继续阅读[第二部分](/Developer-Guide-(2-Creating-the-Addon))
