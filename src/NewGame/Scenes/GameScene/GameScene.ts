
import GameState from "../Logic/GameState";
import TileSpr from "../Entities/Map/Tiles/TileSpr";
import PlainTileSpr from "../Entities/Map/Tiles/PlainTileSpr";
import Game from "../../Game";
import BaseTileSpr from "../Entities/Map/Tiles/BaseTileSpr";

import hexConfig from '../../Resourses/hex_config.json'
import GamePage from "../../../Components/Pages/GamePage/GamePage";
import Tile from "../Logic/Tiles/Tile";
import Turn from "../Logic/Turn";
import Unit from "../Logic/Units/Unit";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export default class GameScene extends Phaser.Scene{

    private static tilesSprites: TileSpr[] = [];

    private static gameState: GameState;
    private static shouldDrawGameState = false;
    private static shouldDrawUnit: Unit[] = [];

    private static tileSprites: any[] = [];
    constructor() {
        super(sceneConfig);
    }

    public preload(){
        this.load.image('plain-tile', 'assets/field/hexagon/tile1-dist.png');
        this.load.image('base-tile1', 'assets/field/base/base1.png');
        this.load.image('base-tile2', 'assets/field/base/base2.png');
        this.load.image('test-unit', 'assets/units/testunit/testunit.png');
    }

    public create() {
        // this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
       // this.add.image(100, 100,'tile');
       // this.physics.add.existing(this.square);

       // let tiletest = new PlainTileSpr(this, 400, 100, 1, 1);
       // this.scale.startFullscreen();
    }

    public update() {
        // TODO
        if (GameScene.shouldDrawGameState){
            this.drawField(GameScene.gameState);
            GameScene.shouldDrawGameState = false;
        }

        if (GameScene.shouldDrawUnit.length > 0){
            this.drawUnit(GameScene.shouldDrawUnit[GameScene.shouldDrawUnit.length - 1]);
            GameScene.shouldDrawUnit.splice(GameScene.shouldDrawUnit.length - 1, 1);
        }
    }

    public static drawGameState(gameState: GameState){
        GameScene.gameState = gameState;
        GameScene.shouldDrawGameState = true
    }

    // #### TILES ####
    // #### TILES ####
    // #### TILES ####

    // set listeners for chosen move of unit
    public static addTurnListenerTiles(tiles: Tile[], action: any, moveOrigin: Tile | undefined){
        //GameScene.updateFieldEvents();

        // add cancel if choose wrong field or if choose right field
        let allTiles = GameScene.gameState.getField().getTiles();
        for (let i = 0; i < allTiles.length; i++){
            allTiles[i].sprite.on('pointerdown', () => {
                GameScene.updateFieldEvents();
            });
        }

        if (action.code == 'SummonUnit'){
            for (let i = 0; i < tiles.length; i++){
                tiles[i].sprite.on('pointerdown', () => {
                    if (moveOrigin){
                        Turn.addMove(moveOrigin.getType() + moveOrigin.getPlayerNumber(), action, [tiles[i].getX(), tiles[i].getY()]);
                    }
                });
            }
        }

    }

    // set default field listeners (reinit tiles sprites)
    private static updateFieldEvents(){
        let tiles = GameScene.gameState.getField().getTiles();
        for (let i = 0; i < tiles.length; i++){
            GameScene.addUpdateUnitEvent(tiles[i]);
        }
    }

    // add default listeners for tile sprites (init sprites)
    private static addUpdateUnitEvent(tile: Tile){
        tile.sprite.setInteractive(new Phaser.Geom.Polygon(hexConfig.points), Phaser.Geom.Polygon.Contains);
        tile.sprite.off('pointerdown');
        tile.sprite.off('pointerover');
        tile.sprite.off('pointerout');
        // choose tile for some actions
        tile.sprite.on('pointerdown', () => {
            for (let i = 0; i < GameScene.tileSprites.length; i++){
                GameScene.tileSprites[i].setDefaultStateTint();
            }
            GamePage.updateUnitInfo(tile.getX(), tile.getY(), tile.getType(), false);
        })
        // change tint when mouseover
        tile.sprite.on('pointerover', () => {
            tile.sprite.setTint(tile.sprite.hoverTint);
        })
        tile.sprite.on('pointerout', () => {
            tile.sprite.setTint(tile.sprite.stateTint);
        })

        tile.sprite.setDefaultStateTint();
    }

    private drawField(gameState: GameState){
        const field = gameState.getField();
        const tiles = field.getTiles();
        let hexHeight = 85 - 5;
        let hexWidth = 160;
        let y = 530;
        let x = 960;
        y += hexHeight * (field.getSize());
        if (tiles.length > 0) {
            for (let i = 0; i < tiles.length; i++) {
                let tile: any = undefined;
                let screenX = x - (-tiles[i].getX() * hexWidth * 3 / 4 + tiles[i].getY() * hexWidth * 3 / 4);
                let screenY = y - (tiles[i].getX() * hexHeight / 2 + tiles[i].getY() * hexHeight / 2);

                switch (tiles[i].getType()) {
                    case ('plain'):
                        tile = new PlainTileSpr(this, screenX, screenY, tiles[i].getX(), tiles[i].getY());
                        tiles[i].sprite = tile;
                        break;
                    case ('base'):
                        tile = new BaseTileSpr(this, screenX, screenY, tiles[i].getX(), tiles[i].getY(), tiles[i].getPlayerNumber());
                        tiles[i].sprite = tile;
                        break;
                    default:
                        break;
                }
                if (tile){
                    GameScene.addUpdateUnitEvent(tiles[i])

                   //  tile.input.hitArea.setTo(...hexConfig.points);
                }

                //GameScene.tilesSprites.push()
            }
        }
    }


    static getTilesByCoords(tiles: [number, number][]): Tile[]{
        let tileArr: Tile[] = [];
        for (let i = 0; i < tiles.length; i++){
            let tile = GameScene.gameState.getField().getTile(tiles[i][0], tiles[i][1]);
            if (tile){
                tileArr.push(tile);
            }
            tileArr.push();
        }
        return tileArr;
    }


    // #### UNITS ####
    // #### UNITS ####
    // #### UNITS ####

    public static drawSummonedUnit(unit: Unit | undefined){
        if (unit){
            GameScene.shouldDrawUnit.push(unit);
        }
    }

    private drawUnit(unit: Unit){
        console.log(unit);
        if (!unit.sprite){
            unit.drawUnit(this);
        }
    }
}