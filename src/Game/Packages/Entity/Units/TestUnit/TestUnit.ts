import Unit from "../Unit";
import AssetTools from "../../../Tools/AssetTools";
import {Sprite} from "pixi.js";

class TestUnit extends Unit{
    constructor() {
        super();
        this.texture = AssetTools.unitTest;
        if (this.texture){
            this.sprite = Sprite.from(this.texture);
        }
    }
}