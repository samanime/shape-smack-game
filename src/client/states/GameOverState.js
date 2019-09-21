import State from './State';
import GameState from './GameState';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';
import Button from '../sprites/Button';

export default class GameOverState extends State {
    static NAME = 'gameOver';

    playButton;

    constructor() {
        super();

        this.createPlayButton();
    }

    createPlayButton() {
        const playButtonOptions = {
            width: 400,
            height: 100,
            backgroundColor: '#228DCA',
            textColor: '#FFF',
            text: 'PLAY AGAIN'
        };

        Object.assign(playButtonOptions, {
            x: CANVAS_WIDTH / 2 - playButtonOptions.width / 2,
            y: CANVAS_HEIGHT / 2 - playButtonOptions.height / 2 + 100
        });

        this.playButton = new Button(playButtonOptions);
    }

    tick = ({ inputManager, stateManager }) => {
        if (inputManager.lastClick && this.playButton.isPointHit(inputManager.lastClick)) {
            inputManager.clearLastClick();
            stateManager.changeState(GameState.NAME);
        }
    };

    draw = (context) => {
        context.font = '100px Arial, Helvetica, sans-serif';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        context.fillStyle = '#333';

        context.fillText('Game Over', CANVAS_WIDTH / 2, 100);

        context.font = '40px Arial, Helvetica, sans-serif';
        context.fillText(`Score: ${1}`, CANVAS_WIDTH / 2, 250);

        this.playButton.draw(context);
    }
}