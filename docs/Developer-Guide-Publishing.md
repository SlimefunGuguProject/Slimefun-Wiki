# 开发指南（发布） {#developer-guide-publishing}

这是我们的开发指南的**最后一部分**，你可以在[这里](/Developer-Guide)查看目录。

## 准备工作 {#prerequisites}

要想发布你的附属，你不需要太多的东西。  
实际上，你只需要编写完你的附属。但是，这里有一些提示和最佳实践。  
当你觉得自己的附属已经准备好发布时（尽早发布总比太晚发布要好），请尽量记住以下几点：

### 1. 你的项目有一个许可证（`LICENSE`）文件 {#1-your-project-has-a-license-file}

如果你的项目没有许可证，那么默认为**保留所有权利**。  
即使你想将项目的所有权利都保留给自己，明确地声明这一点也是一个好主意。

如果你需要帮助选择许可证，请查看[ChooseALicense.com](https://choosealicense.com/)。

### 2. 你知道如何编译你的项目 {#2-you-know-how-to-compile-your-project}

为了让你的附属能上传并发布，你需要分发你的附属的编译好的 `.jar` 文件。  
如果你使用 Maven 来管理你的项目（正如我们在[第一部分](/Developer-Guide-(1-Project-Setup))所建议的），你只需要在项目的根目录中运行以下指令：

```bash
mvn clean package
```

这将会在项目文件夹中的 `target/` 文件夹中生成一个 `.jar` 文件，这便是编译好的附属。

### 3. 你的项目有一个好的描述 {#3-your-project-has-a-good-description}

每个项目都应该有一个好的描述。  
告诉用户安装你的附属会得到什么。  
记得提供命令、权限和功能列表！

你可以在你的 GitHub 仓库中创建 `README.md` 文件，或者在项目主页中提供描述，或者两者都有！

## 上传项目 {#uploading-the-project}

要上传你的项目，你首先需要选择一个平台来分发它。  
你完全可以自己选择你的项目应该上传到哪里。

最流行的分发平台包括：

- [SpigotMC](https://www.spigotmc.org/resources/)
- [BukkitDev](https://dev.bukkit.org/bukkit-plugins)
- [PaperMC 论坛](https://papermc.io/forums/c/plugin-releases/15)
- [Polymart](https://polymart.org/resources)
- [GitHub Releases](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)

你还可以使用 Slimefun 相关的分发平台：

- [TheBusyBicuit's builds page](https://github.com/TheBusyBiscuit/builds#how-to-add-your-own-repository)：一个自动从 GitHub 公开仓库拉取代码并自增构建版本号的站点（现已废弃，因 GitHub Pages 存储达到上限而无法再更新）
- [Blob Build](https://blob.build/developers)：一个可自行上传构建的站点，作为 *TheBusyBiscuit's builds page* 的替代品。
- [鬼斩构建站](https://github.com/ybw0014/guizhan-builds-2/blob/master/README_repos.md)：一个自动从 GitHub 公开仓库拉取代码并自增构建版本号的站点。

## 宣传你的项目 {#spreading-the-word}

一旦你的项目上传成功，就告诉其他人吧！

我们推荐所有的附属开发者在官方 Wiki 与中文 Wiki 的[附属页面](/Addons)上展示附属。  
详见[扩充 Wiki](/Expanding-the-Wiki)。

你也可以在我们的 [Discord 服务器](https://discord.gg/slimefun)上宣传你的项目。  
上传视频或截图来吸引用户！不过，请不要 ping 任何人。
