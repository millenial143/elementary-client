import Hexagon from "../Hexagon";
import * as PIXI from "pixi.js";
import AssetTools from "../../../Tools/AssetTools";

export default class PlainTile extends Hexagon{

    constructor(x: number, y: number) {
        super(x, y);
        this.sprite = new PIXI.Sprite(AssetTools.hexagonTexture1);
    }
}