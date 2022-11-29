export default class Tile{
    get sprite(): any {
        return this._sprite;
    }

    set sprite(value: any) {
        this._sprite = value;
    }
    private _sprite: any;
    private x: number;
    private y: number;
    private type: string;
    protected playerNumber: number;
    protected actions: any;

    constructor(x: number, y: number, type: string, playerNumber: number = 0) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.playerNumber = playerNumber;
    }

    getType(){
        return this.type;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getPlayerNumber(){
        return this.playerNumber;
    }

    getActions(){
        return this.actions;
    }
}