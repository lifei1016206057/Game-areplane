/*
* @Author: lifei
* @Date:   2017-10-17 15:46:56
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-30 14:57:09
*/

'use strict';
class Enemy extends autoElement{
    constructor(name, x) {
        super(name)
       	this.setup(x)
    }
    setup(x) {

    	super.setup()
    	this.width = 50
        this.height = 50
        this.x = x || 0
    }
    move() {
        this.y += this.speed
        if (this.y > Const.height) {
            this.y = -800
            this.x = randomNumber(0, Const.width - this.width)
        }
    }
    update() {
        super.update()
        
    }
}

class Enemies {
	constructor() {
		this.element = []
		this.setup()
	}
    update() {
        this.element.forEach(function(v, i) {
            v.update()
        })
    }
	setup() {
		var enemyNum = Object.keys(Const.enemyNum)

        var self = this
        enemyNum.forEach(function(v, j) {
            log(v)
            for(var i = 0; i < Const.enemyNum[v]; i++) {
                let __temp = new Enemy(v ,randomNumber(0, Const.width - 50))
                self.element.push(__temp)
            }
        })
	}
	move() {
		this.element.forEach(function(v, i) {
			v.move()
		})
	}
}