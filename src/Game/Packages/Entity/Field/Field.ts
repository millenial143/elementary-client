import Hexagon from "./Hexagon";
import Entity from "../Entity";
import {Application} from "pixi.js";
import hexConfig from '../../../Resourses/hex_config.json';
import MathTools from "../../Tools/MathTools";


export default class Field implements Entity{
    private size: number;
    private fields: Hexagon[];
    constructor(size: number) {
        this.size = size;
        this.fields = [];
    }
    // создает обьекты клеток
    generateField(){
        for (let i = 0; i <= this.size * 2; i++){
            for (let j = 0; j <= this.size * 2; j++){
                if ((i - j) <= this.size && (i - j) >= -this.size){
                    this.fields.push(new Hexagon(i, j));
                }
            }
        }
    }
    // рисует клетки если они есть
    drawEntity(x:number, y:number) {
        let hexHeight = MathTools.getHexHeight(hexConfig.width);
        y += hexHeight * (this.size);
        if (this.fields.length > 0){
            for (let i = 0; i < this.fields.length; i++){
                this.fields[i].drawEntity(
                    x - (- this.fields[i].x * hexConfig.width * 3 / 4 + this.fields[i].y * hexConfig.width * 3 / 4),
                    y - (this.fields[i].x * hexHeight / 2 + this.fields[i].y * hexHeight / 2))
            }
        }
    }
}