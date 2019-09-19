import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { clamp } from './math';

export default class Player {
    static SIZE = 40;

    width = Player.SIZE;
    height = Player.SIZE;
    x = CANVAS_WIDTH / 2 - this.width / 2;
    y = CANVAS_HEIGHT / 2 - this.height / 2;

    updatePosition = (centerX, centerY) => {
        this.x = centerX - this.width / 2;
        this.y = centerY - this.height / 2;
    };

    draw = (context) => {
        context.fillStyle = '#228DCA';
        context.strokeStyle = '#333';

        context.beginPath();
        context.arc(
            clamp(this.x + this.width / 2, this.width / 2, CANVAS_WIDTH - this.width / 2),
            clamp(this.y + this.height / 2, this.height / 2, CANVAS_HEIGHT - this.height / 2),
            Player.SIZE / 2,
            0,
            2 * Math.PI
        );
        context.fill();
        context.stroke();
    };
}