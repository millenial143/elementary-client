import TestUnitSpr from "../../Entities/Units/TestUnitSpr";

export default abstract class Unit{
    get sprite(): any {
        return this._sprite;
    }

    set sprite(value: any) {
        this._sprite = value;
    }

    private _sprite: any = undefined;

    protected posX: number;
    protected posY: number;
    protected side: number;
    protected id: string;
    protected type;
    constructor(x: number, y: number, side: number, type: string, id: string) {
        this.posX = x;
        this.posY = y;
        this.side = side;
        this.type = type;
        this.id = id;
    }

    getId(){
        return this.id;
    }

    abstract drawUnit(scene: any): void;
}