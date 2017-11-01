/**
 * Created by lifei on 2017/10/11.
 */
/**
 * Created by lifei on 2017/10/10.
 */



class Sence_base{
    constructor(game) {
        this.game = game || new GuaGame("#id-canvas")
    }
    clear() {
        this.game.context.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    }
    draw() {

    }
    update() {

    }
}

class Sence_title extends Sence_base {
    constructor(game) {

        super(game)

        this.gamestart = Information("按 k 开始游戏", 200, 200)


        var self = this;
        this.game.registryAction("k", () => {
            this.game.newSence();
        })
       
       
        this.game.replaceSence(this);
    }
    draw() {
        this.game.drawText(this.gamestart);
    }

}
