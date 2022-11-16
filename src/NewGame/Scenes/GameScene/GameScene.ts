import Tile from "../Entities/Map/Tiles/Tile";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export default class GameScene extends Phaser.Scene{
    private square: any;
    private tiletest: any;

    constructor() {
        super(sceneConfig);
    }

    public preload(){
        this.load.image('tile', 'assets/field/hexagon/tile1-dist.png');
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
       // this.add.image(100, 100,'tile');
       // this.physics.add.existing(this.square);

        this.tiletest = new Tile(this, 400, 100, 'tile', 'Tile');
       // this.scale.startFullscreen();
    }

    public update() {
        // TODO
    }

    updateGameState(){

    }
}