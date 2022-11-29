import Tile from "./TileSpr";
import TileSpr from "./TileSpr";

export default class PlainTileSpr extends TileSpr{
    constructor(scene: any, x: any, y: any, xCords: number, yCords: number) {
        super(scene, x, y, 'plain-tile', 'plain', xCords, yCords);
    }
}