# 游戏引擎文件简介
一个简单的游戏引擎
## index.html 主入口文件
## img: 图片文件夹
放游戏元素

## js: javascript文件夹
### data: 数据文件夹
游戏的各项参数,比如任务位置,大小,速度.关卡信息等
### element: 元素文件夹
游戏里的会动的,不会懂得都放在这里.有一个基础元素类autoElement.
创建元素时,用autoElement作为原型.
```
//里面的super();this.setup(),setup函数里的super.setup是必须的
//super(name)的参数是元素图片的名字
class Clouds extends autoElement{
    constructor() {
        super("clouds")		
        this.setup()
    }
    setup() {
        super.setup()
        this.width = Const.width
        this.height = 300
    }
}
```
### sence: 场景文件夹
现在有开始场景类sence_title,游戏场景类sence,结束场景类sence_title三个.
### guagame.js 画布文件
画布类
### level.js 场景文件
关卡类
### main.js js入口文件
### utils.js 常用函数文件
放置一些常用的通用函数
