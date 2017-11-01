/*
* @Author: lifei
* @Date:   2017-10-18 16:04:22
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-27 17:22:47
*/

'use strict';
class Bullet extends autoElement {
	constructor(x, y) {
		super("bullet")
		this.setup()
		this.x = x
		this.y = y
	}
	setup() {
		super.setup()
	}
	move() {
		this.y += this.speed
	}
	
}