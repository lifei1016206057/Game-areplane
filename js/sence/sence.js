/**
 * Created by lifei on 2017/10/10.
 */

class Sence extends Sence_base {

    //i代表关卡数
    constructor(game, i) {      
        super(game)

        this.bulletFps = Const.bulletFps
        // this.paddle = Paddle();
        // this.ball = Ball();
        // this.blocks = loadleve(i)
         this.backdrop = Backdrop();
        this.clouds =new Clouds();

        //敌机元素在this.enemies.element数组里
        this.enemies = new Enemies()

        this.player =new Player();
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
        game.registryAction(" ", () => {

            this.player.fire(this.game);

            // this.bulletFps--
            // if ( this.bulletFps <= 0) {
            //     this.player.fire(this.game);
            //     this.bulletFps = Const.bulletFps
            // }
        })
        
        this.__initDrag()
    }

   
    update() {
        this.game.updateAll()
        // this.player.update()
        this.clouds.move()
        this.enemies.move()
        this.player.bulletsMove()
    }
    draw() {
        this.game.drawAll()
    }

    __initDrag() {
        var ball = this.ball;
        var blocks = this.blocks
        var game = this.game
        var paddle = this.paddle 


         //小球拖拽
        // game.canvas.addEventListener("mousedown", function(event) {
        //     var x = event.offsetX;
        //     var y = event.offsetY;
        //     if (ball.haspoint(x, y)) {
        //         ball.enabledrag = true;
        //         log("开始拖拽",  ball.enabledrag)
        //     }
        // })
        // game.canvas.addEventListener("mousemove", function(event) {
        //     var x = event.offsetX;
        //     var y = event.offsetY;
        //     if(ball.enabledrag) {
        //         ball.x = x;
        //         ball.y = y;
        //     }
        // })
        // game.canvas.addEventListener("mouseup", function(event) {
        //     log("up", event)
        //     ball.enabledrag = false;
        // })
    }
}

