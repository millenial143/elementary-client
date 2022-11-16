import GameObject = Phaser.GameObjects.GameObject;
import Entity from "../../Entity";

export default class Tile extends Entity{
    constructor(scene: any, x: any, y: any, key: any, type: any) {
        super(scene, x, y, key, type);
    }
}