/**
 * Created by lifei on 2017/10/2.
 */

//通用函数
const log = console.log.bind(console);

//导入图片
const imageFormPath = function(path) {
    var img = new Image();
    img.src = path;
    return img;
}

//碰撞函数
const rectIntersects = function(a, b) {
   
    a.top = a.y
    a.left = a.x 
    a.right = a.x + a.width
    a.bottom = a.y + a.height

    b.top = b.y
    b.left = b.x 
    b.right = b.x + b.width
    b.bottom = b.y + b.height
        if (a.bottom < b.top || a.left > b.right || a.top > b.bottom || a.right < b.left) {
        return false
    } else {
        return true
    }
}

//随机数
const randomNumber = function(start, end) {
    var n = start +  Math.random()*(end - start)
    return Math.floor(n)
}