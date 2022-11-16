export default class Entity extends Phaser.GameObjects.Sprite{
    constructor(scene: any, x: any, y: any, key: any, type: any) {
        // key - ключ спрайта который загружается в прелоадере сцены
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.setData("type", type);
        // this.setData("isDead", false);
    }
}