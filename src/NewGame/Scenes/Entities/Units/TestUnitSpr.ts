import UnitSpr from "./UnitSpr";
import GameState from "../../Logic/GameState";
import Game from "../../../Game";

export default class TestUnitSpr extends UnitSpr{
    constructor(scene: any, xCords: number, yCords: number) {
        console.log('new test unit sprite!')
        super(
            scene,
            Game.gameState.getField().getTile(xCords, yCords)?.sprite.x,
            Game.gameState.getField().getTile(xCords, yCords)?.sprite.y,
            'test-unit',
            'test',
            xCords,
            yCords
        );
    }
}