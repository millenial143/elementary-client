import * as PIXI from "pixi.js";
import Entity from "../Entity/Entity";
import {Container} from "pixi.js";

export default interface Scene extends Entity{
    sceneContainer: Container;
    drawEntity():void;
}