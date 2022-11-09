import Entity from "../../Entity/Entity";
import {Application, Assets, Container, Sprite, Texture} from "pixi.js";
import AssetTools from "../../Tools/AssetTools";

export default class MenuItem implements Entity{

    private text: string;
    private _container: Container;

    constructor(text: string) {
        this.text = text;
        this._container = new Container();
    }

    async drawEntity() {
        const texture = await Assets.load('assets/menu/test.png');
        const sprite = Sprite.from(await texture);
        this._container.addChild(sprite);
        //this._container.addChild(new Text(''))


        return this._container;
    }

    get container(): Container {
        return this._container;
    }

    set container(value: Container) {
        this._container = value;
    }
}