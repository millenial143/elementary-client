import * as PIXI from "pixi.js";
import { io } from "socket.io-client";
import AppTools from "./Packages/Tools/AppTools";
import Hexagon from "./Packages/Entity/Field/Hexagon";
import ResizeTools from "./Packages/Tools/ResizeTools";
import screenConfig from './screen_config.json'
import Field from "./Packages/Entity/Field/Field";
import Menu from "./Packages/Scenes/Menu/Menu";

window.process = {} as any;

// and the root stage PIXI.Container.

/*document.body.appendChild(AppTools.app.view as HTMLCanvasElement);
ResizeTools.scaleToWindow(AppTools.app.view);*/

export default class Game{
    private gameCanvas;

    constructor() {
        this.gameCanvas = AppTools.app.view as HTMLCanvasElement;
        ResizeTools.scaleToWindow(AppTools.app.view);
    }

    getGameCanvas(){
        return this.gameCanvas;
    }
}