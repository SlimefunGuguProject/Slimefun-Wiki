# 传送装置 :id=teleporter

![传送装置](https://cdn.jsdelivr.net/gh/Slimefun/Wiki@master/images/Teleporter.png 'size=50%')

传送装置是一个基于 GPS 的多方块结构机器。

## 建造 :id=obtaining

一个传送装置由中心的[GPS 传送矩阵](/GPS-Teleporter-Matrix)、周围环绕的8个[GPS 信号塔](/GPS-Teleporter-Pylon)与传送矩阵上放置的[GPS 激活设备](/GPS-Activation-Device)组成。

## 使用 :id=usage

传送装置可以传送到由[GPS 设置路径点工具](/GPS-Marker-Tool)或[GPS 应急发射器](/GPS-Emergency-Transmitter)设置的路径点。

传送花费的时间由与路径点之间的距离和[GPS网络复杂度](/GPS-Transmitter)决定。

如果网络复杂度低于100，传送时间总是50秒。

如果网络复杂度高于100，传送时间将由以下公式计算得出（单位：秒）：

![传送时间公式](https://cdn.jsdelivr.net/gh/Slimefun/Wiki@master/images/TeleportEquation.png)

其中`Distance`为与路径点之间的距离，`Complexity`为网络复杂度。`Distance`最多为1万，若超出该距离，或者传送装置的位置与路径点不在同一世界中，或者由该公式计算得出的传送时间超过20.5秒，则传送时间将固定为20.5秒。
