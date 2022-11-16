import Hexagon from "../Hexagon";
import * as PIXI from "pixi.js";
import AssetTools from "../../../Tools/AssetTools";

import {Polygon} from "pixi.js";
import hexConfig from "../../../../Resourses/hex_config.json";

export default class BaseTile extends Hexagon{
    private baseSide: number;
    private baseSprite;
    constructor(x: number, y: number, baseSide:number) {
        super(x, y);
        this.sprite = new PIXI.Sprite(AssetTools.hexagonTexture1);
        this.baseSprite = new PIXI.Sprite(AssetTools.baseTest);
        this.baseSide = baseSide;
    }

    async drawEntity(x:number, y:number) {
        this.container.addChild(this.sprite);
        this.container.addChild(this.baseSprite);
        //this.container.sortableChildren = true
        //this.baseSprite.zIndex = 1000;
        this.baseSprite.position.set(this.sprite.width / 2 - this.baseSprite.width / 2, -15);

        this.container.on('click', () => {
            console.log('click on' + ' ' + this._x + ' ' + this._y);
        })
        this.container.interactive = true;
        this.container.position.set(x, y);

        this.container.hitArea = new Polygon(hexConfig.points);
        // AppTools.app.stage.addChild(this.container);

        return this.container;
    }
}