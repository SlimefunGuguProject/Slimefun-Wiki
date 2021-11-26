# 扩充 Wiki :id=expanding-the-wiki

如果你想帮助扩充官方 Wiki，请点击[这里](https://github.com/Slimefun/Slimefun4/wiki/Expanding-the-Wiki)。

----

如果你想帮助我们扩充本 Wiki，请阅读以下内容。

你需要拥有一个 GitHub 账号并登录，才能继续接下来的所有步骤。  
如果你还没有注册，你可以点击这里立即[加入 GitHub](https://github.com/join)。

<details>
<summary>目录</summary>

- [步骤1: Fork 我们的 Wiki 仓库](#step-1-forking-the-repository)
- [步骤2: 进行更改](#step-2-making-your-changes)
    - [2.1 创建新页面](#_21-creating-a-new-page)
    - [2.2 编辑现有页面](#_22-editing-existing-pages)
    - [2.3 上传图片](#_23-uploading-images)
- [步骤3: 文档准则](#step-3-general-guidelines-dos-and-donts)
- [步骤4: 提交 Pull request](#step-4-making-a-pull-request)

</details>

## 步骤1: Fork 我们的 Wiki 仓库 :id=step-1-forking-the-repository

你需要打开本 Wiki 的 [GitHub 仓库](https://github.com/ybw0014/Slimefun-Wiki)。
然后，你可以在右上角找到**Fork**按钮。点击该按钮，选择要Fork到的账号（如果你有多个账号）。

![Fork](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-fork.png)

然后，进入下个步骤。

## 步骤2: 进行更改 :id=step-2-making-your-changes

现在，你已经 Fork 了本 Wiki 的仓库，你可以对其中的内容进行更改。

!> 你目前做出的任何改动都**不会**影响到本 Wiki 的内容，直到你向我们提交你的更改。请继续查看下面的步骤。

你可以选择添加内容，或修改已有内容。如果你熟悉使用Git或带有Git功能的编辑器，你可以略过大部分内容。

我们仍建议你遵循我们的指示（特别是有关内容的规则），避免你提交的更改被退回。

### 2.1 创建新页面 :id=21-creating-a-new-page

访问你 Fork 的 Wiki 仓库，你可以在首页或仓库列表（在 GitHub 中点击右上角的头像，然后选择 **Your repositories** ）中找到。

然后，打开`pages`目录。

![pages目录](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-pages.png)

在右上角点击`Add file`，在下拉菜单中点击`Create new file`。

![创建新文件](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-new-file.png)

文件名必须遵遁以下规则：

* 文件名必须以`.md`结尾
* 文件名不能包含空格、特殊字符以及其他奇怪的字符
* 应使用连字符`-`来代替空格
* 如果[官方Wiki](https://github.com/Slimefun/Slimefun4/wiki)中已有你要介绍的物品对应的页面，文件名必须与[官方Wiki](https://github.com/Slimefun/Slimefun4/wiki)的完全相同。例如，官方Wiki中淘金盘页面的文件名为"Gold-Pan.md"，那么本Wiki中的淘金盘页面文件名应同样使用"Gold-Pan.md"。

这些是有效的文件名："Walking-Sticks.md", "Expanding-the-Wiki.md", "Gold-Pan.md", "Home.md"

在输入完文件名后，你可以开始编辑页面内容了。

我们使用Markdown来编写页面。如果你不了解什么是Markdown，你可以点击[这里](https://ybw0014.net/post/markdown)查看教程。  
由于本Wiki由[docsify](https://docsify.js.org/#/zh-cn/)负责渲染，你还可以使用docisfy的[文档助手](https://docsify.js.org/#/zh-cn/helpers)。  

以下是编辑文档时应注意的规则：

* 所有文档应使用4格空格缩进
    * 如果你完全按照本教程进行，你使用的是 GitHub 的在线编辑器，需要手动修改缩进设置。可以在编辑区域右上角找到缩进模式（*Indent mode*）与缩进大小（*Indent size*）
    * 如果你使用的编辑器支持`.editorconfig`，你无需担心
* 任何标题的下一行必须是空行
* 标题后方需添加 `:id=` 确保标题的链接与[官方Wiki](https://github.com/Slimefun/Slimefun4/wiki)同步 ([文档助手](https://docsify.js.org/#/zh-cn/helpers?id=%e8%ae%be%e7%bd%ae%e6%a0%87%e9%a2%98%e7%9a%84-id-%e5%b1%9e%e6%80%a7))
* 避免使用除`<details>`和`<summary>`以外的HTML标签
    * 换行应在行末添加两个空格`  `，而不是`<br>`标签
* 适当使用`?>`与`!>`强调内容 ([文档助手](https://docsify.js.org/#/zh-cn/helpers?id=%e5%bc%ba%e8%b0%83%e5%86%85%e5%ae%b9))
* 图片相关规则请查看[这里](#_23-uploading-images)

!> 确保你通过底部的 `Commit new file` 来提交你添加的文件

### 2.2 编辑现有页面 :id=22-editing-existing-pages

访问你 Fork 的 Wiki 仓库，你可以在首页或仓库列表（在 GitHub 中点击右上角的头像，然后选择 **Your repositories** ）中找到。

然后，打开`pages`目录。

![pages目录](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-pages.png)

打开任何你想要编辑的文件，你可以在内容区域右上角找到编辑按钮。

![编辑文件](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-edit.png)

现在，你可以编辑页面内容了。

你应该在2.1步骤中查看编辑文档应遵守的规则。

!> 确保你通过底部的 `Commit changes` 来提交你编辑的文件

### 2.3 上传图片 :id=23-uploading-images

访问你 Fork 的 Wiki 仓库，你可以在首页或仓库列表（在 GitHub 中点击右上角的头像，然后选择 **Your repositories** ）中找到。

然后，打开`images`目录。

![images目录](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-images.png)

在右上角点击`Add file`，在下拉菜单中点击`Upload files`。

![上传图片](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-upload-image.png)

你应该确保图片遵循以下规则：

* 静态图片应使用PNG格式，动态图片应使用GIF格式
* 图片名称只能使用小写英文字母与连字符`-`。这些是有效的图片名："enhanced-crafting-table.png", "gold-pan-usage.png", "exoticgarden-apple-tree.png"
* 如要使用官方 Wiki 中的图片，无需在本 Wiki 中上传

选择或拖拽图片到指定区域，然后点击下方的`Commit changes`按钮来上传图片。
现在，你可以在文档中插入你上传的图片了。

我们推荐你使用jsDelivr的CDN来加载上传的图片，你可以使用以下内容来添加在本 Wiki 中上传的图片:

```markdown
![这里填写图片注释](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/这里填写图片文件名)
```

如需使用官方 Wiki 中的图片，添加以下内容至文档中:

```markdown
![这里填写图片注释](https://cdn.jsdelivr.net/gh/Slimefun/Wiki@master/images/这里填写图片文件名)
```

## 步骤3: 文档准则 :id=step-3-general-guidelines-dos-and-donts

以下是你在创建/编辑 Wiki 文档时应该或不应该做的事情。

### 你应该: :id=dos

* 总是在头部添加标题
* 编写有趣且详细的内容
* 尽量使用图片来展示主题
* 总是使用图片标签来展示图片 (详见: [2.3 上传图片](#_23-uploading-images))
* 裁剪图片，仅保留图片中重要的部分，玩家不需要看到你华丽的钻石房子背景
* 在文档中适当使用小标题
* 当多个内容相似的物品不需要太多详细解释时，可以将他们放在同一个页面中
* 尽量保持客观，以中立的方式介绍

### 你不应该: :id=donts

* 链接到外部图片，应上传图片或使用官方 Wiki 中的图片
* 使用任何材质包，应使用 Minecraft 默认材质使所有图片风格保持一致
* 在图片中包含任何服务器信息，例如服务器水印、名称、IP等
* 上传你没有权利使用的图片
* 涉及过多附属插件的内容，应以粘液科技内容为主
* 从本 Wiki 中删除任何页面或图片，如果你要这么做，请提供详细的原因
* 包含任何工作场所不宜（NSFW）、裸体、色情、歧视、暴力、政治内容

## 步骤4: 提交 Pull request :id=step-4-making-a-pull-request

访问你 Fork 的 Wiki 仓库，你可以在首页或仓库列表（在 GitHub 中点击右上角的头像，然后选择 **Your repositories** ）中找到。

点击上方的 `Pull requests` 标签页，然后点击右侧绿色的按钮`New pull request`来创建 Pull request。

![Pull request](https://cdn.jsdelivr.net/gh/ybw0014/Slimefun-Wiki@master/images/github-tutorial-pr.png)

尽量详细地描述一下你对 Wiki 作出的修改，然后点击 `Create pull request` 按钮提交。

感谢你对本 Wiki 作出的贡献!

## 步骤5: 对 Pull request 进行更改 :id=step-5-making-changes-to-your-pull-request

如果你已经提交了 Pull request，但你仍想更改一些文件，你可以重复[步骤2](#step-2-making-your-changes)。

你做出的更改将会自动更新至 Pull request，直到其被合并或关闭。

当我们要求你进行修改时，你应该了解该步骤中的内容，这非常重要。
