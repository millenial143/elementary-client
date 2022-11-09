import * as PIXI from "pixi.js";

export default interface Entity{
    drawEntity(x?: number, y?:number):void;
}