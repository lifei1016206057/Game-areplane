/**
 * Created by lifei on 2017/10/2.
 */

   var Const = {
        width: 300,
        height: 500,
        paused: false,
        fps: 60,
        sence: null,
        senceTitle: null,
        senceEnd: null,
        sence_num: 1,
        sence_all: 0,
        speed: {
            areplane: 5,
        }
    }




var levels = [
    [
        {x: 0, y: 0},
        {x: 50, y: 0},
        {x: 100, y: 0},
        {x: 150, y: 0},
        {x: 200, y: 0},
        {x: 250, y: 0},
        {x: 300, y: 0},
        {x: 350, y: 0},
    ],
    [
        {x: 0, y: 0},
        {x: 50, y: 0},
        {x: 100, y: 0, life: 2},
        {x: 150, y: 0},
        {x: 200, y: 0, life: 2},
        {x: 250, y: 0},
        {x: 300, y: 0, life: 2},
        {x: 350, y: 0},


        {x: 0, y: 30},
        {x: 50, y: 30, life: 2},
        {x: 100, y: 30},
        {x: 150, y: 30, life: 2},
        {x: 200, y: 30},
        {x: 250, y: 30, life: 2},
        {x: 300, y: 30},
        {x: 350, y: 30},
    ],
    [    {x: 0, y: 0},
        {x: 50, y: 0},
        {x: 100, y: 0, life: 3},
        {x: 150, y: 0},
        {x: 200, y: 0},
        {x: 250, y: 0, life: 3},
        {x: 300, y: 0},
        {x: 350, y: 0, life: 3},


        {x: 0, y: 30},
        {x: 50, y: 30},
        {x: 100, y: 30, life: 3},
        {x: 150, y: 30},
        {x: 200, y: 30, life: 3},
        {x: 250, y: 30},
        {x: 300, y: 30, life: 3},
        {x: 350, y: 30},


        {x: 0, y: 60},
        {x: 50, y: 60, life: 3},
        {x: 100, y: 60},
        {x: 150, y: 60},
        {x: 200, y: 60, life: 3},
        {x: 250, y: 60},
        {x: 300, y: 60, life: 3},
        {x: 350, y: 60},
    ],
];

levels = JSON.stringify(levels);