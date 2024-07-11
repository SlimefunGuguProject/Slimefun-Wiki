---
sidebar_label: 帮我们翻译 Slimefun！
---

# 翻译 Slimefun {#translating-slimefun}

:::info

本页面适用于官方版 Slimefun。如果你使用的是汉化版 Slimefun，你可以无视本页面。

:::

翻译 Slimefun 一直是一个难题，因为多年前的代码中存在一些错误的设计选择。  
但从2020年2月开始，后续的版本都支持翻译。

:::tip 重要提示

现在，你只能翻译聊天消息、分类名称与合成方式。你无法翻译物品名称。  
翻译物品名称需要对代码进行大量重写，可能需要一年或更多时间来完成。  
请不要询问任何关于翻译物品名称的问题。请耐心等待，谢谢配合！

:::

## 更改你的服务器语言 {#changing-your-server-language}

你可以在 `config.yml` 中更改服务器的默认语言:

```yaml
options:
  language: en
```

将 `en` 替换为你想选择的语言对应的语言代码。你可以在本页下方找到所有支持的语言。

请注意，这会覆盖 `messages.yml` 文件。

如果你希望自定义所选语言的消息，只需要在更改完语言并重启服务器后编辑 `messages.yml` 即可。

`messages.yml` 只有在你决定更改服务器的默认语言后被更新。
向 `messages.yml` 新增的内容将会附加在文件尾部，不会出现问题。

## 更改你的个人语言 {#changing-your-personal-language}

每一位玩家都可以选择他们的偏好语言。每个人的偏好语言默认同步服务器的语言设置。

如果你有很多国际友人玩家，他们可以使用他们的偏好语言设置覆盖默认的语言设置。

只需要打开 Slimefun 指南的“设置”页（当手上拿着 Slimefun 指南时，可以通过 *Shift + 右键*打开），然后你可以找到一个地球图标或旗帜，点击它来选择语言。

## 可用语言 {#available-languages}

请注意，只有标注为**已发布**的语言可以安全地运行在您的服务器上。

未发布的语言仍在等待审核或暂未翻译完成。

Slimefun 的开发版本可能已支持部分未发布的语言。
**不要将未发布的语言设置为服务器的默认语言！**

欢迎参与翻译！

| 已发布 | 语言 | 语言代码 |
| --- | ---------- | --- |
| :heavy_check_mark: | English | `en` |
| :heavy_check_mark: | [German](https://crowdin.com/project/slimefun/de) | `de` |
| :heavy_check_mark: | [French](https://crowdin.com/project/slimefun/fr) | `fr` |
| :heavy_check_mark: | [Italian](https://crowdin.com/project/slimefun/it) | `it` |
| :heavy_check_mark: | [Spanish](https://crowdin.com/project/slimefun/es) | `es` |
| :x: | [Polish](https://crowdin.com/project/slimefun/pl) | `pl` |
| :heavy_check_mark: | [Swedish](https://crowdin.com/project/slimefun/sv) | `sv` |
| :x: | [Dutch](https://crowdin.com/project/slimefun/nl) | `nl` |
| :heavy_check_mark: | [Russian](https://crowdin.com/project/slimefun/ru) | `ru` |
| :heavy_check_mark: | [Hungarian](https://crowdin.com/project/slimefun/hu) | `hu` |
| :x: | [Greek](https://crowdin.com/project/slimefun/el) | `el` |
| :heavy_check_mark: | [Czech](https://crowdin.com/project/slimefun/cs) | `cs` |
| :x: | [Latvian](https://crowdin.com/project/slimefun/lv) | `lv` |
| :heavy_check_mark: | [Slovak](https://crowdin.com/project/slimefun/sk) | `sk` |
| :heavy_check_mark: | [Chinese (China)](https://crowdin.com/project/slimefun/zh-CN) | `zh-CN` |
| :heavy_check_mark: | [Chinese (Taiwan)](https://crowdin.com/project/slimefun/zh-TW) | `zh-TW` |
| :x: | [Portugese (Portugal)](https://crowdin.com/project/slimefun/pt) | `pt` |
| :heavy_check_mark: | [Portugese (Brazil)](https://crowdin.com/project/slimefun/pt-BR) | `pt-BR` |
| :heavy_check_mark: | [Vietnamese](https://crowdin.com/project/slimefun/vi) | `vi` |
| :heavy_check_mark: | [Indonesian](https://crowdin.com/project/slimefun/id) | `id` |
| :x: | [Hebrew](https://crowdin.com/project/slimefun/he) | `he` |
| :heavy_check_mark: | [Arabic](https://crowdin.com/project/slimefun/ar) | `ar` |
| :x: | [Danish](https://crowdin.com/project/slimefun/da) | `da` |
| :x: | [Finnish](https://crowdin.com/project/slimefun/fi) | `fi` |
| :x: | [Norwegian](https://crowdin.com/project/slimefun/no) | `no` |
| :heavy_check_mark: | [Ukrainian](https://crowdin.com/project/slimefun/uk) | `uk` |
| :x: | [Afrikaans](https://crowdin.com/project/slimefun/af) | `af` |
| :x: | [Malay](https://crowdin.com/project/slimefun/ms) | `ms` |
| :heavy_check_mark: | [Japanese](https://crowdin.com/project/slimefun/ja) | `ja` |
| :x: | [Persian](https://crowdin.com/project/slimefun/fa) | `fa` |
| :heavy_check_mark: | [Thai](https://crowdin.com/project/slimefun/th) | `th` |
| :heavy_check_mark: | [Tagalog](https://crowdin.com/project/slimefun/tl) | `tl` |
| :x: | [Romanian](https://crowdin.com/project/slimefun/ro) | `ro` |
| :x: | [Bulgarian](https://crowdin.com/project/slimefun/bg) | `bg` |
| :heavy_check_mark: | [Turkish](https://crowdin.com/project/slimefun/tr) | `tr` |
| :heavy_check_mark: | [Korean](https://crowdin.com/project/slimefun/ko) | `ko` |
| :x: | [Macedonian](https://crowdin.com/project/slimefun/mk) | `mk` |
| :x: | [Croatian](https://crowdin.com/project/slimefun/hr) | `hr` |
| :x: | [Belarusian](https://crowdin.com/project/slimefun/be) | `be` |

### 想要帮我们翻译吗? {#you-want-to-help-us-translate}

只需要点击你想要帮助翻译的语言，你会被重定向到 [Crowdin](https://crowdin.com/project/slimefun/)。所有的翻译内容都托管在此。

在你完成翻译后，点击 **Create review request** 以提交你的翻译。

我们会审核你的更改，并将它们添加到本插件中。

### 没有看到你的语言? {#you-dont-see-your-language}

如果我们尚未支持你的语言，请访问我们的 [Discord服务器](https://discord.gg/slimefun)。

在 `#questions` 频道中告诉我们你想要用你的语言帮我们翻译 Slimefun。但请注意，不要 ping 任何管理员，我们会看到你的消息的。请耐心等待，我们需要时间来处理你的请求。
