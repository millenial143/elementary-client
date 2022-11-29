import Component from "../../index";


import './GamePage.css';
import Game from "../../../NewGame/Game";
import GameScene from "../../../NewGame/Scenes/GameScene/GameScene";
import Turn from "../../../NewGame/Scenes/Logic/Turn";
import Entity from "../../../NewGame/Scenes/Entities/Entity";
import Tile from "../../../NewGame/Scenes/Logic/Tiles/Tile";

/*function endTurn() {
    console.log('qweqwe')
    Game.endTurn();
    GamePage.endTurnDisable();
}*/

export default class GamePage extends Component{

    private static chosenTile: Tile | undefined = undefined;

    private static unitInfo = document.createElement('div');
    private static endTurnButton = document.createElement('div');

    constructor() {
        super();
        GamePage.endTurnButton.classList.add('end-turn-button');
        GamePage.endTurnButton.innerHTML = 'Закончить ход';

        GamePage.unitInfo.classList.add('unit-info');
    }

    static updateUnitInfo(x: number, y: number, fieldType: string, isUnit: boolean){
        // chose tile or unit for moves
        if (!isUnit){
            GamePage.chosenTile = Game.gameState.getField().getTile(x, y);
        } else {
            // name.innerHTML = 'unit-name';
        }
        GamePage.unitInfo.innerHTML = '';
        // name
        let name = document.createElement('div');
        name.classList.add('unit-info-name');
        if (!isUnit){
            name.innerHTML = 'Поле';
        } else {
            name.innerHTML = 'unit-name';
        }

        // field name
        let fieldName = document.createElement('div');
        fieldName.classList.add('unit-info-field-name');
        switch (fieldType) {
            case 'plain':
                fieldName.innerHTML = 'Равнина';
                break;
            case 'base':
                fieldName.innerHTML = 'Круг призыва';
                break;
            default:
                break;
        }

        // coords
        let coords = document.createElement('div');
        coords.classList.add('unit-info-coords');
        coords.innerHTML = `${x} ${y}`

        // move buttons
        let buttons = [];
        if (GamePage.chosenTile){
            let actions = GamePage.chosenTile.getActions();
            if (actions){
                for (let i = 0; i < actions.length; i++){
                    let moveButton = document.createElement('div');
                    moveButton.classList.add('unit-info-move-button');
                    moveButton.innerHTML = actions[i].code;
                    moveButton.addEventListener('click', () => {
                        // get tiles by range
                        let actionTilesCoords: [number, number][] = [];
                        let r = actions[i].range;

                        //actionTilesCoords.push([x + (r), y + (r)]);
                        for (let i = 0; i <= r; i++){
                            for (let j = 0; j <= r; j++){
                                actionTilesCoords.push([x + (r - i), y + (r - j)]);
                                actionTilesCoords.push([x - (r - i), y - (r - j)]);
                                if (i < r && j < r){
                                    if (i < (r - 1) || j < (r - 1)){
                                        actionTilesCoords.push([x + (r - i), y - (r - j)]);
                                        actionTilesCoords.push([x - (r - i), y + (r - j)]);
                                    }
                                }
                            }
                        }
                        // delete origin tile coords
                        for (let i = 0; i < actionTilesCoords.length; i++){
                            if (actionTilesCoords[i][0] == x && actionTilesCoords[i][1] == y){
                                actionTilesCoords.splice(i, 1);
                            }
                        }

                        // color tiles
                        console.log(actionTilesCoords);
                        let tiles = GameScene.getTilesByCoords(actionTilesCoords);
                        for (let i = 0; i < tiles.length; i++){
                            if (tiles[i].sprite){
                                tiles[i].sprite.setChooseStateTint();
                            }
                        }

                        GameScene.addTurnListenerTiles(tiles, actions[i], GamePage.chosenTile);
                    })
                    buttons.push(moveButton);
                }
            }
        }


        /*if (!isUnit){
            moveButton1.innerHTML = 'summon-test-unit'
            moveButton1.addEventListener('click', () => {
                Turn.addMove();
            })
        } else {
           // name.innerHTML = 'unit-name';
        }
        moveButton1.classList.add('unit-info-move-button');*/

        //GamePage.unitInfo
        GamePage.unitInfo.append(name);
        GamePage.unitInfo.append(fieldName);
        GamePage.unitInfo.append(coords);
        //GamePage.unitInfo.append(moveButton1);
        for (let i = 0; i < buttons.length; i++){
            GamePage.unitInfo.append(buttons[i]);
        }
    }

    static endTurnAvalible(){
      //  GamePage.endTurnButton.removeEventListener('click', () => {
        //    Game.endTurn();
       // });
        GamePage.endTurnButton.classList.remove('disable');
    }

    static endTurnDisable(){
       // GamePage.endTurnButton.addEventListener('click', endTurn);
        GamePage.endTurnButton.classList.add('disable');
    }

    render(): HTMLElement {
           /*this.container.append(Game.getGameCanvas());*/
        // let game = new Game();
        GamePage.endTurnButton.addEventListener('click', () => {
            Game.endTurn();
            GamePage.endTurnDisable();
        });
        GamePage.endTurnAvalible();
        this.container.append(GamePage.unitInfo)
        this.container.append(GamePage.endTurnButton)
        return this.container;
    }
}