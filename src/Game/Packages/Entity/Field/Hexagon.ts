import Entity from "../Entity";
import {Application, Assets, Graphics, Sprite} from "pixi.js";
import * as PIXI from "pixi.js";
import hexConfig from '../../../Resourses/hex_config.json';
import AssetTools from "../../Tools/AssetTools";
import MathTools from "../../Tools/MathTools";
import AppTools from "../../Tools/AppTools";

export default class Hexagon implements Entity{
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    async drawEntity(x:number, y:number) {
        const sprite = Sprite.from(await AssetTools.texture);
        AppTools.app.stage.addChild(sprite);
        sprite.position.set(x, y);
        sprite.width = hexConfig.width;
        sprite.height = MathTools.getHexHeight(hexConfig.width);

    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }
}