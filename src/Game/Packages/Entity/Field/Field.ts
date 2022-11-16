import Hexagon from "./Hexagon";
import Entity from "../Entity";
import {Application} from "pixi.js";
import hexConfig from '../../../Resourses/hex_config.json';
import MathTools from "../../Tools/MathTools";
import PlainTile from "./Tiles/PlainTile";
import BaseTile from "./Tiles/BaseTile";
import * as PIXI from "pixi.js";


export default class Field implements Entity{
    private container = new PIXI.Container();
    private size: number;
    private fields: Hexagon[];
    constructor(size: number) {
        this.size = size;
        this.fields = [];

        this.container.sortableChildren = true
    }
    // создает обьекты клеток
    generateField(tiles: any){
        for (let i = 0; i < tiles.length; i++){
            switch (tiles[i].type){
                case ('plain'):
                    this.fields.push(new PlainTile(tiles[i].x, tiles[i].y));
                    break
                case ('base'):
                    this.fields.push(new BaseTile(tiles[i].x, tiles[i].y, tiles[i].baseSide));
                default:
                    break
            }

        }
    }
    // рисует клетки если они есть
    async drawEntity(x: number, y: number) {
        let hexHeight = Number(this.fields[0].getSpriteHeight());
        let hexWidth = Number(this.fields[0].getSpriteWidth());
        y += hexHeight * (this.size);
        if (this.fields.length > 0) {
            for (let i = 0; i < this.fields.length; i++) {
                let cont = await this.fields[i].drawEntity(
                    x - (-this.fields[i].x * hexWidth * 3 / 4 + this.fields[i].y * hexWidth * 3 / 4),
                    y - (this.fields[i].x * hexHeight / 2 + this.fields[i].y * hexHeight / 2));
                cont.zIndex = (y - (this.fields[i].x * hexHeight / 2 + this.fields[i].y * hexHeight / 2));
                this.container.addChild(cont);
            }
        }
        return this.container;
    }

    getHexagon(x: number, y: number){
        return this.fields.find((o) => o.x == x && o.y == y);
    }
}