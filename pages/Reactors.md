# 反应堆 :id=reactors

反应堆是一种快速且高效的[发电机](/Electric-Machines#energy-generation)。  
目前有2种类型的反应堆。它们都需要被水包围。上方与下方不需要水。

## 反应堆访问接口 :id=reactor-access-port

反应堆访问接口可以在[货运管理](/Cargo-Management)分类中找到。  
它必须放置在反应堆上方3格的位置，这样就可以使用货运系统来和反应堆进行交互。  
你可以使用它来向反应堆添加燃料/冷却剂，或提取副产品。

## 反应堆类型 :id=reactor-types

| 类型  | 能量 | 存储 | 燃料 | 冷却剂 | 副作用 |
| :--- | :-: | :-: | ---- | ----- | ----- |
| 核反应堆 | 16 J/s |  1.0x  | 铀、镎、高纯度铀 | [反应堆冷却剂](/Coolant-Cells) | 无 |
| 下界之星反应堆 | 40 J/s |  3.0x  | 下界之星 | [下界冰冷却剂](/Coolant-Cells) | 附近的实体会获得凋零效果 |

## 配置 :id=example-setup

![反应堆配置](https://cdn.jsdelivr.net/gh/Slimefun/Wiki@master/images/multiblock-reactor.png)  

可以看到，反应堆在中间，四周被水包围。反应堆访问接口则在反应堆上方3格处。

?> 石英块与玻璃在上图中仅作为装饰。它们不是必须的。
