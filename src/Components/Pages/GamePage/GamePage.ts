import Component from "../../index";
import Game from "../../../Game/Game";

export default class GamePage extends Component{

    private game;

    constructor() {
        super();
        this.game = new Game();
    }

    render(): HTMLElement {
        this.container.append(this.game.getGameCanvas());
        return this.container;
    }
}