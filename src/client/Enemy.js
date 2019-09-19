import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { clamp } from './math';

export default class Enemy {
    static SIZE = 40;

    static create = () => {
        const enemy = new Enemy();
        let max;

        switch(Math.floor(Math.random() * 4)) {
            case 0: // TOP
                max = CANVAS_WIDTH - enemy.width;

                enemy.speedY = 10;
                enemy.y = -enemy.height;
                enemy.x = clamp(Math.floor(Math.random() * max + 1), 0, max);
                break;
            case 1: // BOTTOM
                max = CANVAS_WIDTH - enemy.width;

                enemy.speedY = -10;
                enemy.y = CANVAS_HEIGHT;
                enemy.x = clamp(Math.floor(Math.random() * max + 1), 0, max);
                break;
            case 2: // LEFT
                max = CANVAS_HEIGHT - enemy.height;

                enemy.speedX = 10;
                enemy.x = -enemy.width;
                enemy.y = clamp(Math.floor(Math.random() * max + 1), 0, max);
                break;
            case 3: // RIGHT
                max = CANVAS_HEIGHT - enemy.height;

                enemy.speedX = -10;
                enemy.x = CANVAS_WIDTH;
                enemy.y = clamp(Math.floor(Math.random() * max + 1), 0, max);
                break;
        }

        return enemy;
    };

    width = Enemy.SIZE;
    height = Enemy.SIZE;
    x = 0;
    y = 0;
    speedX = 0;
    speedY = 0;

    draw = (context) => {
        context.fillStyle = '#FD0000';
        context.strokeStyle = '#333';

        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x, this.y, this.width, this.height);
    };
}