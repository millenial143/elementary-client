import Entity from "../../Entity/Entity";
import {Application, Container, Sprite} from "pixi.js";
import Scene from "../Scene";
import MenuItem from "./MenuItem";
import AppTools from "../../Tools/AppTools";

export default class Menu implements Scene {
    sceneContainer: Container;
    private childs: Container[];
    private menuItems: Container[];

    constructor() {
        this.sceneContainer = new Container();
        this.childs = [];
        this.menuItems = [];
    }


    async drawEntity() {
        const menuItem1 = new MenuItem('test');
        this.childs.push(await menuItem1.drawEntity());
        for (let i = 0; i < this.childs.length; i++) {
            AppTools.app.stage.addChild(this.childs[i]);
        }
    }
}