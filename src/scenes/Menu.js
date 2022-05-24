import Phaser from 'phaser';

class Menu extends Phaser.Scene{
    constructor() {
        super({ key: 'MenuScene' });
    }
    init(data) {}

    preload() {}

    create(data) {
        const backBoot = this.add.text(100,100, 'BACK', { fill: '#0f0' }).setFontSize(50);
        backBoot.setInteractive();
        backBoot.on('pointerdown',()=>{this.scene.start('BootScene')});    
    
    }

}
export default Menu;