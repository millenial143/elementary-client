import GameObject = Phaser.GameObjects.GameObject;
import Tile from "./Tiles/Tile";
import PlainTile from "./Tiles/PlainTile";
import BaseTile from "./Tiles/BaseTile";


export default class Field{
    private size = 5;
    private tiles: Tile[] = [];


    addTile(x: number, y: number, type: string, playerNumber: number = 0, actions: any = []){
        switch (type){
            case ('plain'):
                this.tiles.push(new PlainTile(x, y, 'plain'));
                break
            case ('base'):
                this.tiles.push(new BaseTile(x, y, 'base', playerNumber, actions));
                break
            default:
                break
        }
    }

    getTiles(){
        return this.tiles;
    }

    getTile(x: number, y: number){
        return this.tiles.find(o => o.getX() == x && o.getY() == y);
    }

    getSize(){
        return this.size;
    }
}