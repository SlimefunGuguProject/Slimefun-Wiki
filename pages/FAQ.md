# 常见问题 (FAQ) :id=faq

!> 本页面暂未完成翻译

<details>
<summary>目录</summary>

- [我如何下载/安装 Slimefun 或它的附属插件?](#how-can-i-download-install-slimefun-or-its-addons)
- [我可以在单人模式世界中安装 Slimefun 吗?](#can-i-install-slimefun-on-a-singleplayer-world)
- [Will Slimefun be available for Minecraft version XYZ?](#will-slimefun-be-available-for-minecraft-version-xyz)
- [I have an error/bug with Slimefun](#i-have-an-errorbug-with-slimefun)
- [What's the difference between the talisman and ender talisman?](#whats-the-difference-between-the-talisman-and-ender-talisman)
- [Can you stack Talismans?](#can-you-stack-talismans)
- [What can I do with stone chunks?](#what-can-i-do-with-stone-chunks)
- [How do I disable items per-world?](#how-do-i-disable-items-per-world)
- [How much RAM does Slimefun use?](#how-much-ram-does-slimefun-use)
- [How does XYZ work?](#how-does-xyz-work)
- [How do I repair Slimefun items?](#how-do-i-repair-slimefun-items)
- [Can I enchant Slimefun items?](#can-i-enchant-slimefun-items)
- [Is it Slimefun or SlimeFun](#is-it-slimefun-or-slimefun)

</details>

## 我如何下载/安装 Slimefun 或它的附属插件? :id=how-can-i-download-install-slimefun-or-its-addons

To download and install Slimefun you can refer to [this guide here](https://github.com/Slimefun/Slimefun4/wiki/Installing-Slimefun).  
You can find Addons for Slimefun4 on our ["Addons" - page](https://github.com/Slimefun/Slimefun4/wiki/Addons).<br>
You can install these just like you did with Slimefun, putting them in the `/plugins/` folder of your Server.

## 我可以在单人模式世界中安装 Slimefun 吗? :id=can-i-install-slimefun-on-a-singleplayer-world

No.<br>
Slimefun is a Bukkit / Spigot plugin, so it requires you to have a Bukkit-based Minecraft Server running. Creating such a Server is very easy though, you will be able to find lots of tutorials online. If you want to enjoy Slimefun all on your own, set up a new Minecraft Server on your computer, install the plugin and connect to it using the address `localhost`. Without any extra efforts your server won't be visible to others outside of your local network anyway.

## Will Slimefun be available for Minecraft version XYZ? :id=will-slimefun-be-available-for-minecraft-version-xyz

Slimefun has been consistently available for every Minecraft version from MC 1.5 onwards, so I would say you can rest assured that it will come out for that Minecraft version too. With over 100+ contributors to the project, the chances are high someone is gonna update it to work with that version.

## I have an error/bug with Slimefun

Ok, first things first, join our [Support Server](https://discord.gg/fsD4Bkh) if you aren't in it already and go to `#bug-discussions`. We need to determine if it is a bug, user error or intended behaviour. Note that we **do not accept bug reports on discord, only on GitHub**. But experience has shown that 9 of 10 "bugs" tend to be the result of really outdated plugin versions or similar, so please try to discuss these issues with others on our discord server first, so that developers can focus on confirmed bug reports.

Now, send us the following information (in the `#bug-discussions` channel):
1. Run /sf versions and send us a screenshot. We need the exact versions you are using, otherwise, we will not be able to help you.
"latest" is not helping us at all. So please run that command. (If you don't have access to this command then Shift-Right-Click your Slimefun Guide, you can find your versions in the uppermost middle slot.)

2. Check your console, are there any errors? (If so, then post them via https://pastebin.com/)

3. What do you intend to happen and what is happening?

Please also refer to [this page](https://github.com/Slimefun/Slimefun4/wiki/How-to-report-bugs) for a much more in-depth guide on how to report issues.

Once you've sent us all this info then one of our staff or a community member will help you. **Do not ping any role or members**. If some time has passed (15+ mins) then you may ping the helpful role (`@Helpful`). Being impatient and pinging roles/members (**especially staff**) may get you warned or kicked.

## What's the difference between the talisman and ender talisman?
The Ender Talismans work even while in the Ender Chest however the normal [Talismans](https://github.com/Slimefun/Slimefun4/wiki/Talismans) requires for it to be in your inventory.

## Can you stack Talismans?
Talismans by themselves are stackable items but having more than one Talisman of the same type will not increase their effects.<br>
However, some Talismans get consumed when you use them, so having multiple of these handy will last you longer obviously.

## What can I do with stone chunks?
4 Stone Chunks can be put into the [Compressor](https://github.com/Slimefun/Slimefun4/wiki/Compressor) to craft one cobblestone.

## How do I disable items per-world?
You can disable items per-world by finding said world file in the folder `/plugins/Slimefun/world-settings/` and by setting any item ID to false.

If you wish to disable **all** items in the world by setting `enabled` to false.

## How to disable all or individual researches?
You can disable all researching (All items are researched by default) by going to the research file `/plugins/Slimefun/Researches.yml` and setting `enable-researching` to `false`

In the same research file, you can also disable specific researches or modify the cost of them. 

## How much RAM does Slimefun use?
You can't give an exact number or really even an estimate, we don't know your other plugins, addons, your server software, server version and we may even change things per-build which can affect RAM usage. We can recommend **at least** 4GB for any server though with or __without__ Slimefun.

## How does XYZ work?
If you'd like to know how an item works please refer to [our wiki](https://github.com/Slimefun/Slimefun4/wiki).
> **Note**: The Wiki is still missing pages and is community ran! If you can help add content then please refer to [this guide](https://github.com/Slimefun/Slimefun4/wiki/Expanding-the-Wiki)

## How do I repair Slimefun items?
You will need to use the [Auto-Anvil](https://github.com/Slimefun/Slimefun4/wiki/Auto-Anvil) and [Duct Tape](https://github.com/Slimefun/Slimefun4/wiki/Duct-Tape).

## Can I enchant Slimefun items?
You can only enchant an Item from Slimefun by using an [Auto-Enchanter](https://github.com/Slimefun/Slimefun4/wiki/Auto-Enchanter).

## How long does coolant last in reactors?
Coolant lasts for 25 seconds no matter the type (normal or Nether Ice). Here is a table with the required amount of coolant per piece of fuel:
| Fuel            | Duration    | Coolant type | Coolant amount |
| --------------- | ----------- | ------------ | -------------- |
| Uranium         | 20m (1200s) | Normal       | 48             |
| Neptunium       | 10m (600s)  | Normal       | 24             |
| Boosted Uranium | 25m (1500s) | Normal       | 60             |
| Nether Star     | 30m (1800s) | Nether Ice   | 72             |

## Is it Slimefun or SlimeFun
It's Slimefun, one day everyone will know the correct spelling... one day... maybe... who knows honestly.
