import Field from "./Field";
import Tile from "../Entities/Map/Tiles/TileSpr";
import Unit from "./Units/Unit";
import TestUnit from "./Units/TestUnit";

export default class GameState{
    private side: number;
    private field: Field;
    private units: Unit[] = [];

    constructor() {
        this.field = new Field();
        this.side = 0;
    }

    update(field: any, units: any, side: number){
        this.side = side;
        // field upd
        this.field = new Field();
        for (let i = 0; i < field.length; i++){
            let side = field[i].baseSide;
            if (side){
                this.field.addTile(
                    field[i].x,
                    field[i].y,
                    field[i].type,
                    side,
                    field[i].actions
                )
            } else  {
                this.field.addTile(
                    field[i].x,
                    field[i].y,
                    field[i].type
                )
            }

        }

        // units upd
    }

    addUnit(unit: any){
        let newUnit;
        switch (unit.type){
            case ('testUnit'):
                newUnit = new TestUnit(unit.posX, unit.posY, unit.side, unit.id);
                break
            default:
                break
        }

        this.units.push();
        return newUnit;
    }

    getField(){
        return this.field;
    }

    getSide(){
        return this.side;
    }
}