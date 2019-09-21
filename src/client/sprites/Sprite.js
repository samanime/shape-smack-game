import {getHitRect, isPointHit} from '../math';

export default class Sprite {
    x = 0;
    y = 0;
    width = 0;
    height = 0;

    draw = () => {};

    isPointHit = ({ x, y }) =>
        isPointHit(this, { x, y });

    hitRect = (rect) =>
        getHitRect(this, rect);
}