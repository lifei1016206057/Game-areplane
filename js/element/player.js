/*
* @Author: lifei
* @Date:   2017-10-13 14:25:05
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-20 17:17:31
*/

'use strict';

/**
 * Created by lifei on 2017/10/2.
 */

//撞球对象

class Player {
    constructor() {
        var image = imageFormPath("img/player.png")
        this.x = 150
        this.y =  250
        this.width = 40
        this.height = 40
        this.speed = Const.speed.player
        this.image = image
        this.bullets = []
        this.bulletFps = Const.bulletFps
    }
    update() {
        this.speed = Const.speed.player
    }
    fire(game) {
        this.bulletFps--
        if (this.bulletFps <= 0) {
            this.bulletFps = Const.bulletFps
            var x = this.x + this.width/2
            var y = this.y
            var _b = new Bullet(x, y)
            this.bullets.push(_b)
            game.addElements(this.bullets)
        }
    }
    bulletsMove() {
        this.bullets.forEach(function(v, i) {
            v.move()
        })
    }
    moveUp() {
        this.y -= this.speed*1
    }
    moveDown() {
        this.y += this.speed*1
    }
    moveLeft() {
        this.x -= this.speed*1
    }
    moveRight() {
        this.x += this.speed*1
    }
}

// var Areplane = function() {
//     var image = imageFormPath("img/player.png");
//     var o = {
//         x: 150,
//         y: 250,
//         width: 40,
//         height: 40,
//         image: image,
//         enabledrag: false,
//     }
//     return o
   
// }
