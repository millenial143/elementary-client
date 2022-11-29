export default class Move{
    get unitId(): string {
        return this._unitId;
    }
    private _unitId: string;
    private action: any;
    private target: [number, number] = [0, 0];

    constructor(unitId: string, action: any, target: [number, number]) {
        this._unitId = unitId;
        this.action = action;
        this.target[0] = target[0];
        this.target[1] = target[1];
    }

}