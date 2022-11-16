import * as PIXI from "pixi.js";
import { io } from "socket.io-client";
import AppTools from "./Packages/Tools/AppTools";
import Hexagon from "./Packages/Entity/Field/Hexagon";
import ResizeTools from "./Packages/Tools/ResizeTools";
import screenConfig from './screen_config.json'
import Field from "./Packages/Entity/Field/Field";
import Menu from "./Packages/Scenes/Menu/Menu";
import AssetTools from "./Packages/Tools/AssetTools";
import Turn from "./Packages/Turn/Turn";

window.process = {} as any;

// and the root stage PIXI.Container.

/*document.body.appendChild(AppTools.app.view as HTMLCanvasElement);
ResizeTools.scaleToWindow(AppTools.app.view);*/

export default class Game{
    private static gameCanvas = AppTools.app.view as HTMLCanvasElement;
    private static field = new Field(5);
    private static turn: Turn;
  //  private static bases: Base[] = [];
    private static playerNumber: number;

    static endTurn(){


    }

    static drawField(){
        ResizeTools.scaleToWindow(AppTools.app.view);
    }

    static getGameCanvas(){
        return Game.gameCanvas;
    }

    static updateGameState(field: any, gameState: any){

        this.turn = new Turn();
        const commands = gameState.clientCommands;
        console.log(commands);
        if (commands){
            for (let i = 0; i < commands.length; i++){
                const name = commands[i].name;
                switch (name){

                    default: break
                }
            }
        }
    }

    static async initializeGameState(field: any, gameState: any) {
        console.log('initializeGameState')
        this.playerNumber = gameState.playerNumber;
        // render field
        Game.field.generateField(field.tiles);
        AppTools.app.stage.addChild(await Game.field.drawEntity(innerWidth / 2 - AssetTools.hexagonTexture1.width / 2, 430));
    }

    static deleteGameState(){

    }
}