import {CANVAS_HEIGHT, CANVAS_WIDTH, FPS, HIDE_MOUSE_CLASS} from './constants';
import StartState from './states/StartState';
import GameOverState from './states/GameOverState';
import GameState from './states/GameState';
import Point from './Point';
import InputManager from './InputManager';
import StateManager from './StateManager';
import ImageManager from './ImageManager';

const root = document.querySelector('#root');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const inputManager = new InputManager();
const stateManager = new StateManager();
const imageManager = new ImageManager();

stateManager.addState(new StartState());
stateManager.addState(new GameState());
stateManager.addState(new GameOverState());
stateManager.changeState(StartState.NAME);

root.appendChild(canvas);
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

canvas.addEventListener('mousemove', (event) => {
    inputManager.updateMousePosition(new Point(event.offsetX, event.offsetY));
});

canvas.addEventListener('click', (event) => {
    inputManager.updateLastClick(new Point(event.offsetX, event.offsetY));
});

const tick = () => {
    canvas.classList.remove(HIDE_MOUSE_CLASS);
    stateManager.current.tick({
        canvas,
        inputManager,
        stateManager,
        imageManager
    });

    draw();

    setTimeout(tick, 1000 / FPS);
};

const draw = () => {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    stateManager.current.draw(context);
};

tick();