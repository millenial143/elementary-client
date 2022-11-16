import Entity from "../Entity";
import AppTools from "../../Tools/AppTools";
import {Polygon, Sprite} from "pixi.js";
import hexConfig from "../../../Resourses/hex_config.json";

export default class Unit implements Entity{
    protected texture: any;
    protected sprite: any;

    constructor() {
    }

    drawEntity(x?: number, y?: number) {
        if (this.sprite){
            AppTools.app.stage.addChild(this.sprite);
            this.sprite.position.set(x, y);
        }
    }
}