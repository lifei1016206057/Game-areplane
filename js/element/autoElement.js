/*
* @Author: lifei
* @Date:   2017-10-17 16:49:27
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-20 17:13:18
*/

'use strict';
class autoElement {
    constructor(name) {
       this.name = name
       this.setup()
    }
    update() {
        this.speed = Const.speed[this.name]
    }
    setup() {
    	var image = imageFormPath("img/" + this.name + ".png")
        this.x = 0
        this.y =  0
        this.width = image.width
        this.height = image.height
        this.speed = Const.speed[this.name]
        this.image = image
    }
    move() {
        this.y += this.speed
        if (this.y > Const.height) {
            this.y = -300
        }
    }
}
