/*
* @Author: lifei
* @Date:   2017-10-13 14:24:37
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-30 14:42:12
*/

'use strict';
//白云
/**
 * Created by lifei on 2017/10/2.
 */

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

class Backdrop extends autoElement {
    constructor() {
        super("background")
        this.setup()
    }
    setup() {
        super.setup()
        this.x = 0
        this.y = 0
        this.width = Const.width
        this.height = Const.height
    }
}

