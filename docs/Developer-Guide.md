---
sidebar_label: 编写自己的附属插件
---

# 开发者指南 {#developer-guide}

官方开发者指南：[Developer Guide (英文)](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide)

-----

欢迎来到我们的开发者指南！  
该页面仍在完善中。开发者指南是一个庞大的主题，估计需要很长一段时间才能完成。

## 阅读条件/适用人群 {#prerequisites}

在你阅读开发者指南之前，请先阅读这一部分的内容。

我们尝试面向所有阶段的开发人员，甚至是仅有很少经验的新手。  
然而，我们并不想重复造轮子，网上已经有很多学习 Java 以及编写 Bukkit 插件的教程。

我们将默认你已经了解 Java、Maven、Git 以及面向对象编程（Object-orientation Programming）的相关知识。  
如果你没有听说过这些，那么建议你先了解相关的知识，然后再来看本指南。

我们会尽最大的努力解释，所以请仔细阅读所有的页面。  
你可以在官方 Discord 服务器的 `#programming-help` 频道来咨询编程相关的问题，记得用英文。  
点击这里加入官方 Discord 服务器：[点击前往](https://discord.gg/slimefun)

你也可以查看我们的 [Javadocs](https://slimefun.github.io/javadocs) 以获取有关我们 API 设计的技术信息，但我们仍建议你先阅读本指南。

如果你完全没有任何 Java 基础，但又想编写附属，那么你可以尝试使用 [SlimeCustomizer 自定义粘液附属](https://slimefun-addons-wiki.guizhanss.cn/slime-customizer/)。自定义粘液附属的技术需求只有 Yaml 文件编写，不需要任何的 Java 知识。

## 目录 {#table-of-contents}

1. [项目配置](/Developer-Guide-1-Project-Setup)
2. [创建附属](/Developer-Guide-2-Creating-the-Addon)
3. [你的第一个物品](/Developer-Guide-3-Your-first-Item)
4. 为你的物品添加特性
   - [右键点击物品或方块时执行操作](/Developer-Guide-4a-Right-Clicks)
   - [让物品具有放射性和防凋灵](/Developer-Guide-4b-Radioactive-and-WitherProof)
5. [添加自己的研究](/Developer-Guide-5-Researches)
6. [自定义头颅](/Developer-Guide-6-Custom-Heads)
7. [添加自然资源到自然资源开采机](/Developer-Guide-7-GEO-Resources)
8. 创建电力机器
   - 创建简单的输入/输出机器（即将到来）
   - 创建自己的发电机（即将到来）
9. [编译并测试附属](/Developer-Guide-9-Compiling)

*. [发布你的附属](/Developer-Guide-Publishing)
