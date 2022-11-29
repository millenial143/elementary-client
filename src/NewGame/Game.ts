import Phaser from "phaser";
import GameScene from "./Scenes/GameScene/GameScene";
import GameState from "./Scenes/Logic/GameState";
import ClientSocket from "../Net/Sockets/ClientSocket";
import Turn from "./Scenes/Logic/Turn";

export default class Game{
    static get gameState(): GameState {
        return this._gameState;
    }

    private static gameStarted = false;
    private static _gameState: GameState = new GameState();

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

    public static gameGame: Phaser.Game;

    static addGameCanvas(){
        Game.gameGame = new Phaser.Game(Game.gameSceneConfig);
    }

    static updateGameState(field: any, units: any, side: number){
        this._gameState.update(field, units, side);
        GameScene.drawGameState(Game._gameState);
    }

    static executeClientCommands(cmds: any){
      //  console.log(cmds)
        for (let i = 0; i < cmds.length; i++){
         //   console.log(cmds[i])
            switch (cmds[i].name){
                case ('SummonUnit'):
                   // console.log('add test unit')
                    let unit = this.gameState.addUnit(cmds[i].properties.unit)
                    GameScene.drawSummonedUnit(unit);
                    break
                default:
                    break
            }

        }
    }

    static deleteGameState(){

    }

    static endTurn(){
        ClientSocket.socket?.emit('endTurn', {
            moves: Turn.getMoves()
        })
        Turn.deleteMoves();
    }
}