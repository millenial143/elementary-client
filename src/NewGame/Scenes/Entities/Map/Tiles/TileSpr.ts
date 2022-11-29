import GameObject = Phaser.GameObjects.GameObject;
import Entity from "../../Entity";

export default class TileSpr extends Entity{
    get hoverTint(): number {
        return this._hoverTint;
    }
    get stateTint(): number {
        return this._stateTint;
    }

    private _stateTint: number = 0x000000;
    private _hoverTint: number = 0x9f9f9f;

    constructor(scene: any, x: any, y: any, key: any, type: any, xCords: number, yCords: number) {
        super(scene, x, y, key, type);
        this.setData('xCords', xCords);
        this.setData('yCords', yCords);
    }

    setDefaultStateTint(){
        this._stateTint = 0xffffff;
        this._hoverTint = 0x9f9f9f;

        this.setTint(this._stateTint);
    }

    setChooseStateTint(){
        this._stateTint = 0xe6af75;
        this._hoverTint = 0xe6af75 + 0x9f9f9f;

        this.setTint(this._stateTint);
    }
}