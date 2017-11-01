/*
* @Author: lifei
* @Date:   2017-10-13 14:24:37
* @Last Modified by:   lifei
* @Last Modified time: 2017-10-17 17:24:12
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

var Backdrop = function() {
    var image = imageFormPath("img/background.png");
    var o = {
        x: 0,
        y: 0,
        width: Const.width,
        height: Const.height,
        image: image,
    }
    return o;
}

