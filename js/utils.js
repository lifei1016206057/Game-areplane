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
    if (a.x > b.x && a.x < b.x + b.width) {
        if (a.y > b.y && a.y < b.y + b.height) {
            log("相撞")
            return true;
        }
    }
    return false;
}

//随机数
const randomNumber = function(start, end) {
    var n = start +  Math.random()*(end - start)
    return Math.floor(n)
}