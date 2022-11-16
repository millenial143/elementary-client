import Component from "../../index";
import Game from "../../../Game/Game";

import './GamePage.css';

export default class GamePage extends Component{

    private endTurnButton;

    constructor() {
        super();
        this.endTurnButton = document.createElement('div');
        this.endTurnButton.classList.add('end-turn-button');
    }

    render(): HTMLElement {
        this.endTurnButton.addEventListener('click', () => {
            Game.endTurn()
        })
        this.container.append(Game.getGameCanvas());
        Game.drawField();
        return this.container;
    }
}