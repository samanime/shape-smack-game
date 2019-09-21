export default class StateManager {
    states = [];
    current = null;

    addState = (state) => {
        this.states[state.constructor.NAME] = state;
    };

    changeState = (name) => {
        this.current = this.states[name];
        this.current.onEnter();
    };
}