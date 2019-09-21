import State from './State';
import GameOverState from './GameOverState';
import Enemy from '../sprites/Enemy';
import { CANVAS_WIDTH, HIDE_MOUSE_CLASS, MISS_LIMIT } from '../constants';
import Player from '../sprites/Player';

export default class GameState extends State {
    static NAME = 'game';

    player = new Player();
    enemies = [];
    score = 0;
    misses = 0;

    constructor() {
        super();
    }

    onEnter = () => {
        this.enemies.splice(0, this.enemies.length);
        this.score = 0;
        this.misses = 0;
    };

    tick = ({ canvas, stateManager, inputManager, imageManager }) => {
        canvas.classList.add(HIDE_MOUSE_CLASS);

        if (!this.player.image) {
            this.player.image = imageManager.loadImage('/public/images/player.png');
        }

        this.player.updatePosition(inputManager.mousePosition);

        if (Math.random() < .2) {
            this.enemies.push(Enemy.create(imageManager.loadImage('/public/images/enemy.png')));
        }

        this.enemies.forEach((enemy, index) => {
            enemy.x += enemy.speedX;
            enemy.y += enemy.speedY;

            const playerHitRect = this.player.hitRect(enemy);
            const canvasHitRect = enemy.hitRect({ x: 0, y: 0, width: canvas.width, height: canvas.height });

            if (playerHitRect.hit || !canvasHitRect.hit) {
                this.enemies.splice(index, 1);

                if (playerHitRect.hit) {
                    this.score++;
                } else {
                    this.misses++;

                    if (this.misses >= MISS_LIMIT) {
                        stateManager.changeState(GameOverState.NAME);
                    }
                }
            }
        });
    };

    draw = (context) => {
        this.drawScore(context);
        this.drawMisses(context);
        this.enemies.forEach((enemy) => enemy.draw(context));
        this.player.draw(context);
    };

    drawScore = (context) => {
        context.fillStyle = '#333';
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.font = '20px Arial, Helvetica, sans-serif';
        context.fillText(`Score: ${this.score}`, 10, 10);
    };

    drawMisses = (context) => {
        context.fillStyle = '#333';
        context.textBaseline = 'top';
        context.textAlign = 'right';
        context.font = '20px Arial, Helvetica, sans-serif';
        context.fillText(`Misses: ${this.misses}`, CANVAS_WIDTH - 10, 10);
    };
}