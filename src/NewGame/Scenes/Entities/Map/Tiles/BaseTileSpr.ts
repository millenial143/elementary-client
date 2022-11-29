import Tile from "./TileSpr";
import TileSpr from "./TileSpr";

export default class BaseTileSpr extends TileSpr{
    constructor(scene: any, x: any, y: any, xCords: number, yCords: number, playerNumber: number) {
        super(scene, x, y, 'base-tile' + playerNumber.toString(), 'base', xCords, yCords);
    }
}