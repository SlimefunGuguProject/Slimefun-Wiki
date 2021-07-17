# 常见问题 :id=common-issues

!> 本页面暂未完成翻译

<details>
<summary>目录</summary>

- [Floating tags](#floating-tags)
- [Unplaceable blocks](#unplaceable-blocks)
- [Circuit Boards not dropping](#circuit-boards-not-dropping)

</details>

This page contains useful information about common in game issues and how to resolve them.<br>
Most of the following will require varying degrees of permission only staff members may have: make sure to link people higher up in your staff team here if you don't!

**WARNING: some issues have more than one viable solution, indicated by a division in stages from the least to the most intrusive; it is HIGHLY recommended you try all previous stages before you follow any further approach as lower stages are less risky and will solve most occurencies anyways. If you've tried everything in the list with no success, consider [filing a bug report!](https://github.com/Slimefun/Slimefun4/wiki/How-to-report-bugs)**

## Floating tags
Some Slimefun items automatically create floating tags when placed, in particular the [Energy Regulator](https://github.com/Slimefun/Slimefun4/wiki/Energy-Regulator) and the [Cargo Manager](https://github.com/Slimefun/Slimefun4/wiki/Cargo-Manager).<br>
These tags are supposed to disappear when breaking the machine but sometimes things can go wrong and you're left with some text that just doesn't want to go away. How can you solve this?

_Note: make sure this isn't due to a ghost block (check "Unplaceable Blocks")!_

### How to fix this (Stage 1)
Remove any regulators/managers below the floating tag, then stand close to it and run this as operator:
>/execute as <your_name> at @s run execute as @e[type=armor_stand,nbt={Invisible:1b},distance=..3] run data merge entity @s {Invisible:0}

You can now punch the armor stand to destroy it. You may need to punch out multiple stands as they may have been spawned and stacked onto each other depending on which plugins you use.

*Tip: it is recommended using MyCommands, CommandOverride or similar plugins and setting an alias, easier to remember and teach (an example could be /holokill).*

### How to fix this (Stage 2)
Switch to spectator mode via
>/gamemode spectator

You should see the invisible armor stand and better gauge where the feet are; using this information, place a new regulator just below the tag on the first block not occupied by the armor stand itself (get one via /sf cheat).<br>
The regulator will try to place its own armor stand which will replace the corrupt ones and behave normally: you should now be able to remove the regulator you've just placed, removing all tags.

### How to fix this (Stage 3)
If the hologram keeps respawning you're very likely to be dealing with a ghost block like the ones dealt with under Unplaceable blocks, with the only difference it's also spawning a hologram because it's one of the items listed up top.
Simply follow the procedure to get rid of any ghost block and you should be golden.

## Unplaceable blocks
If you encounter a location that seems empty but will cancel your action when you try to place any block there you're probably looking at a ghost Slimefun block.<br> This means a Slimefun item used to be placed there (usually an [android](https://github.com/Slimefun/Slimefun4/wiki/Androids) or a [cargo component](https://github.com/Slimefun/Slimefun4/wiki/Cargo-Management)) and its data was not correctly removed.

### How to fix this (Isolated block)
Get a debug fish by running the following as operator:
>/sf debug_fish

_(Optional): Use the shift right click function to place a dummy head where the ghost block is and try to punch it out: if a Slimefun head drops you're sure to have a ghost block (the opposite is not necessarily true as the ghost Slimefun item could've been a full block and not a head, it's less likely though and just good to get a confirmation if possible)._

Shift right click to place a dummy head, then shift left click it: an animation of the head being broken and the event being canceled should be seen and you'll get a message in chat; this will remove whatever data is still linked to the location.

Punch out the dummy head.

### How to fix this (Cluster of blocks)
This is very similar to the procedure for isolated blocks: in this case instead of placing all the dummy heads one by one you can run WorldEdit commands to speed up the placing process.

Use WorldEdit to select the cluster of blocks and its surroundings and execute:
>//set stone

As per the isolated blocks procedure, shift right click all the incriminated spots to remove any data they may retain.

Remove the stone by executing:
>//undo

## Circuit Boards not dropping
If you kill Iron Golems and they don't seem to drop any Iron Golems, it may be due to a conflicting plugin.<br>
Plugins like **MobStacker** or similar are known to have a lot of issues with custom item drops.

### How to fix this (Stage 1)
The best solution to this problem is to enable custom item drops in that plugins config, if such an option exist.<br>
Or ask the authors of that plugin whether there is a way to toggle this behaviour.

### How to fix this (Stage 2)
A more drastic approach would be to switch over to a Mob-Stacking plugin that supports custom drops.<br>
_At this point we do not have a list of mob-stacking plugins that are confirmed to work with Slimefun, if you use a plugin that works without any issues, feel free to name it right here. See [Expanding the Wiki](https://github.com/Slimefun/Slimefun4/wiki/Expanding-the-Wiki)_
{"mode":"full","isActive":false}