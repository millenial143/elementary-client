import Entity from "../Entity";
import {Application, Assets, Graphics, Polygon, Sprite, Texture} from "pixi.js";
import * as PIXI from "pixi.js";
import hexConfig from '../../../Resourses/hex_config.json';
import spriteConfig from '../../../Resourses/sprite_config.json';
import AssetTools from "../../Tools/AssetTools";
import MathTools from "../../Tools/MathTools";


export default class Hexagon implements Entity{
  //  private static texture1 = AssetTools.hexagonTexture1;
   // private sprite1 = Sprite.from(AssetTools.hexagonTexture1);
    protected container = new PIXI.Container();
    protected sprite = new PIXI.Sprite(AssetTools.hexagonTexture1);

    protected _x: number;
    protected _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    async drawEntity(x:number, y:number) {
        this.container.addChild(this.sprite);

        this.container.on('click', () => {
            console.log('click on' + ' ' + this._x + ' ' + this._y);
        })
        this.container.interactive = true;
        this.container.position.set(x, y);

        this.container.hitArea = new Polygon(hexConfig.points);
       // AppTools.app.stage.addChild(this.container);
        return this.container;
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

    getSpriteWidth(){
        return hexConfig.width;
    }

    getSpriteHeight(){
        return hexConfig.height;
    }

    getSprite(){
        return this.sprite;
    }
}