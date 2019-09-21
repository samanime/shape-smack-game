import Point from './Point';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';

export default class InputManager {
    lastClick = null;
    mousePosition = new Point(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    updateMousePosition = ({ x, y }) => {
        this.mousePosition = new Point(x, y);
    };

    updateLastClick = ({ x, y }) => {
        this.lastClick = new Point(x, y);
    };

    clearLastClick = () => {
        this.lastClick = null;
    }
}