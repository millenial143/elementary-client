import {Assets, Resource, Texture} from "pixi.js";
export default class AssetTools{
    public static hexagonTexture1: any;
    public static unitTest: any;
    public static baseTest: any;


    public static async loadTextures(){
        AssetTools.hexagonTexture1 = await Assets.load('assets/field/hexagon/tile1-dist.png');
        AssetTools.unitTest = await Assets.load('assets/units/testunit/testunit.png');
        AssetTools.baseTest = await Assets.load('assets/field/base/base-dist.png');
    }
}