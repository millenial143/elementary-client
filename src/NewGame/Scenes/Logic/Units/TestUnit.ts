import Unit from "./Unit";
import TestUnitSpr from "../../Entities/Units/TestUnitSpr";
import Game from "../../../Game";
import GameScene from "../../GameScene/GameScene";

export default class TestUnit extends Unit{
    constructor(x: number, y: number, side: number, id: string) {
        console.log('new test unit!')
        super(x, y, side, 'testUnit', id);

    }

    drawUnit(scene: any) {
        this.sprite = new TestUnitSpr(scene, this.posX, this.posY);
    }

}