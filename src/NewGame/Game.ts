import Phaser from "phaser";
import GameScene from "./Scenes/GameScene/GameScene";

export default class Game{

    private static gameStarted = false;
    private static gameSceneConfig = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        parent: document.querySelector('.app') as HTMLElement,
        scene:  GameScene,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: document.querySelector('.app') as HTMLElement,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1920,
            height: 1080,
        },
        /*  scene: {
              preload: preload,
              create: create,
              update: update
          }*/
    };

    private static gameScene = new Phaser.Game(Game.gameSceneConfig);

    static updateGameState(field: any, gameState: any){


    }


    static deleteGameState(){

    }
}