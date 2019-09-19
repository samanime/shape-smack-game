import Player from './Player';
import Enemy from './Enemy';
import { CANVAS_HEIGHT, CANVAS_WIDTH, FPS } from './constants';
import { getHitRect } from './math';

const root = document.querySelector('#root');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const player = new Player();
const enemies = [];
let score = 0;
let misses = 0;

root.appendChild(canvas);
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

canvas.addEventListener('mousemove', (event) => {
    player.updatePosition(event.offsetX, event.offsetY);
});

const tick = () => {
    if (Math.random() < .2) {
        enemies.push(Enemy.create());
    }

    enemies.forEach((enemy, index) => {
        enemy.x += enemy.speedX;
        enemy.y += enemy.speedY;

        const playerHitRect = getHitRect(player, enemy);
        const canvasHitRect = getHitRect(enemy, { x: 0, y: 0, width: canvas.width, height: canvas.height });

        if (playerHitRect.hit || !canvasHitRect.hit) {
            enemies.splice(index, 1);

            if (playerHitRect.hit) {
                score++;
            } else {
                misses++;
            }
        }
    });

    draw();

    setTimeout(tick, 1000 / FPS);
};

const draw = () => {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    drawScore();
    drawMisses();
    enemies.forEach((enemy) => enemy.draw(context));
    player.draw(context);
};

const drawScore = () => {
    context.fillStyle = '#333';
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.font = '20px Arial, Helvetica, sans-serif';
    context.fillText(`Score: ${score}`, 10, 10);
};

const drawMisses = () => {
    context.fillStyle = '#333';
    context.textBaseline = 'top';
    context.textAlign = 'right';
    context.font = '20px Arial, Helvetica, sans-serif';
    context.fillText(`Misses: ${misses}`, CANVAS_WIDTH - 10, 10);
};

tick();