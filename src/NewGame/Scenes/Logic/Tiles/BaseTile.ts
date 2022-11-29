import Tile from "./Tile";
import Action from "../Action";
import Game from "../../../Game";

export default class BaseTile extends Tile{

    constructor(x: number, y: number, type: string, playerNumber: number = 0, actions: any) {
        super(x, y, type, playerNumber);
        this.actions = actions;
    }


}