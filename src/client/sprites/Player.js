import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';
import { clamp } from '../math';
import Sprite from './Sprite';

export default class Player extends Sprite {
    static SIZE = 71;

    image;

    width = Player.SIZE;
    height = Player.SIZE;
    x = CANVAS_WIDTH / 2 - this.width / 2;
    y = CANVAS_HEIGHT / 2 - this.height / 2;

    updatePosition = ({ x: centerX, y: centerY }) => {
        this.x = centerX - this.width / 2;
        this.y = centerY - this.height / 2;
    };

    draw = (context) => {
        if (this.image && this.image.width > 0) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
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
        }
    };
}