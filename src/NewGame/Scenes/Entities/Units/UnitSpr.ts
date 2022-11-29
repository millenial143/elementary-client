import Entity from "../Entity";

export default class UnitSpr extends Entity{
    constructor(scene: any, x: any, y: any, key: any, type: any, xCords: number, yCords: number) {
        super(scene, x, y, key, type);
        this.setData('xCords', xCords);
        this.setData('yCords', yCords);
    }
}