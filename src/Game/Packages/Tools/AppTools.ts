import {Assets, Texture} from "pixi.js";
import * as PIXI from "pixi.js";

export default class AppTools{
    static app = new PIXI.Application({
        /*width: screenConfig.width,
        height: screenConfig.height,*/
        backgroundColor: 0x061639,
        autoDensity: true,
        resizeTo: window,
    });
}