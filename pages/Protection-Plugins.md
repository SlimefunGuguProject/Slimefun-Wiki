# Protection Plugins :id=protection-plugins

!> 本页面暂未翻译

Slimefun4 supports a lot of protection plugins out of the box.<br>
This is done in order to prevent players from abusing Slimefun Items to grief other people.<br>
This article contains a list of all supported protection plugins as well as instructions on how to add support for your plugin.

## Supported Protection Plugins
The following plugins are supported by default.<br>
Plugins that support offline players will even provide support for Programmable Androids if the owner of that android is offline.<br>
If a plugin does not support offline players, then your android will always require you to be online in order to function properly

:heavy_check_mark: = Full Support<br>
:heavy_minus_sign: = Partial Support (e.g. only in unprotected regions)<br>
:x: = No Support<br>
N/A = Not applicable

| Plugin | Support for Players | Support for Offline Players | Support for PvP | Support for Entities
| ------------------ | :----: | :----: | :----: | :---: |
| ASkyBlock | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: |
| BentoBox | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| BlockLocker | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| ChestProtect | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| FactionsUUID | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| FunnyGuilds | :heavy_check_mark: | :x: | :heavy_minus_sign: | :heavy_minus_sign: |
| GriefPrevention | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: |
| LandLord | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Lands | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Lockette | :heavy_check_mark: | :heavy_check_mark: | N/A | N/A |
| LWC | :heavy_check_mark: | :heavy_minus_sign: | N/A | N/A |
| PlotSquared | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| PreciousStones | :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: |
| RedProtect | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: |
| Towny | :heavy_check_mark: | :x: | :heavy_minus_sign: | :heavy_minus_sign: |
| WorldGuard | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### You cannot see your protection plugin?
Either the plugin offers no integration, support for it hasn't been added by the author of that plugin or it is actually supported.<br>
A lot of plugins actually require WorldGuard or other plugins from the above list and use that plugin in the background.<br>
If a plugin does not show up in this list, then please ask the author of that plugin if it uses another protection plugin in the background.

If it does not, then feel free to link them this article as we will walk over how to add support later.

## Supported Protection Loggers
Slimefun4 also supports a few protection loggers.<br>
These loggers can for example allow you to rollback certain actions, such as blocks destroyed in an unusual manner by Slimefun Items.<br>
Here is a list of all plugins we support by default.

| Plugin | Support for broken Blocks | Support for placed Blocks |
| ------------------ | :----: | :----: |
| CoreProtect | :heavy_check_mark: | :heavy_check_mark: |
| LogBlock | :heavy_check_mark: | :x: |

## Adding Support for your protection plugin
Protection Integration is handled in CS-CoreLib2 (https://github.com/TheBusyBiscuit/CS-CoreLib2).<br>
To add support for your own plugin, all you have to do is make a Pull Request to that repository.<br>
Here is what you need to do:
1. Add your plugin as a dependency to the [pom.xml](https://github.com/TheBusyBiscuit/CS-CoreLib2/blob/master/pom.xml)
2. Create a new class that extends [ProtectionModule.java](https://github.com/TheBusyBiscuit/CS-CoreLib2/blob/master/src/main/java/io/github/thebusybiscuit/cscorelib2/protection/ProtectionModule.java) and add it to the [modules - package](https://github.com/TheBusyBiscuit/CS-CoreLib2/tree/master/src/main/java/io/github/thebusybiscuit/cscorelib2/protection/modules)
3. Override the required methods; make sure to distinguish between the different types of [ProtectableAction.java](https://github.com/TheBusyBiscuit/CS-CoreLib2/blob/master/src/main/java/io/github/thebusybiscuit/cscorelib2/protection/ProtectableAction.java); also consider to add support for offline players or make an instanceof-check if not.
4. Load an instance of your class when your plugin loads in [ProtectionManager.java](https://github.com/TheBusyBiscuit/CS-CoreLib2/blob/master/src/main/java/io/github/thebusybiscuit/cscorelib2/protection/ProtectionManager.java)
5. Submit a [Pull Request](https://github.com/TheBusyBiscuit/CS-CoreLib2/pulls) to CS-CoreLib2
