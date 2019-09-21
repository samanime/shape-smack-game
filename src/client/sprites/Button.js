import Sprite from './Sprite';

export default class Button extends Sprite {
    backgroundColor = '#FFF';
    strokeColor = '#333';
    textColor = '#000';
    text = '';

    constructor({ x, y, width, height, backgroundColor, strokeColor, textColor, text } = {}) {
        super();

        x && (this.x = x);
        y && (this.y = y);
        width && (this.width = width);
        height && (this.height = height);
        backgroundColor && (this.backgroundColor = backgroundColor);
        strokeColor && (this.strokeColor = strokeColor);
        textColor && (this.textColor = textColor);
        text && (this.text = text);
    }

    draw = (context) => {
        context.fillStyle = this.backgroundColor;
        context.strokeStyle = this.strokeColor;

        context.fillRect(this.x, this.y, this.width, this.height);

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = this.textColor;
        context.fillText(this.text,
            this.x + this.width / 2,
            this.y + this.height / 2 + 5
        );
    };
}