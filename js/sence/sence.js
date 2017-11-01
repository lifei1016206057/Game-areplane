/**
 * Created by lifei on 2017/10/10.
 */

 //打砖块小球拖拽功能
function ballDrap() {  
    var ball = this.ball;
    var game = this.game

    game.canvas.addEventListener("mousedown", function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        if (ball.haspoint(x, y)) {
            ball.enabledrag = true;
            log("开始拖拽",  ball.enabledrag)
        }
    })
    game.canvas.addEventListener("mousemove", function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        if(ball.enabledrag) {
            ball.x = x;
            ball.y = y;
        }
    })
    game.canvas.addEventListener("mouseup", function(event) {
        log("up", event)
        ball.enabledrag = false;
    })
}



class Sence extends Sence_base {

    //i代表关卡数
    constructor(game, i) {      
        super(game)
        this.game = game
        
        this.areplone()
    }

   
    update() {
        this.game.updateAll()
        // this.areploneUpdate()
    }
    draw() {
        this.game.drawAll()
    }

    //打飞机
    areplone() {
        var game = this.game
        //背景
        this.backdrop =new Backdrop();

        //元素
        this.bulletFps = Const.bulletFps    //子弹频率
        this.clouds =new Clouds();          //云

        //敌机元素在this.enemies.element数组里
        this.enemies = new Enemies()        //敌机

        this.player =new Player();          //玩家
        this.game.addElements(this.backdrop, this.clouds, this.player, this.enemies.element)    


        //注册移动事件
        game.registryAction("a", () => {
            this.player.moveLeft();
        })
        game.registryAction("d", () => {
            this.player.moveRight();
        })
        game.registryAction("w", () => {
            this.player.moveUp();
        })
        game.registryAction("s", () => {
            this.player.moveDown();
        })
        game.registryAction("l", () => {
            this.player.fire(this.game)
        })
        window.addEventListener("keydown", (event) => {
            if (event.key === "b") {
                Const.debug = !Const.debug
                log("debug", Const.debug )
            }
        })
    }
    areploneUpdate() {
        this.enemies.element.forEach( (v, i) => {
            if (this.enemies.length <= 6) {
                this.enemies = new Enemies()
                 this.game.addElements(this.enemies.element)    
            }
            this.player.bullets.forEach(function(b, j) {
                if (rectIntersects(v, b)) {
                        v.kill()
                        b.kill()
                }
            })
        })
    }

    //打砖块
    doBall() {

    }
}



