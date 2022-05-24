import Phaser from 'phaser';

class GameOver extends Phaser.Scene{
    constructor() {
        super({ key: 'GameOver' });
    }
    init(data) {}

    preload() {
        title = this.add.text(this.sys.game.canvas.width / 2  -700, this.sys.game.canvas.height/2 -125, 'GAME OVER', { fontFamily: 'ARIAL',fontStyle:'bold' }).setFontSize(250);
    }

    create(data) {
        const restartGame = this.add.text(this.sys.game.canvas.width / 2 - title.width / 6, this.sys.game.canvas.height / 2 + title.height, 'RESTART GAME', { fill: '#0f0' }).setFontSize(100);
        restartGame.setInteractive();
        restartGame.on('pointerdown',()=>{this.scene.start('GameScene')});   
    
    }

}
var title;
export default GameOver;