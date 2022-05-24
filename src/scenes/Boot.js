import Phaser from "phaser";
import logo from '../assets/logo.png';
import nuvol from '../assets/nuvolSpreed.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';

class Boot extends Phaser.Scene{
    constructor() {
        super({ key: 'BootScene' });
      }
    
      init(data) {}
    
      preload() {
        title = this.add.text(this.sys.game.canvas.width / 2  -1200, this.sys.game.canvas.height/2 -125, 'MAGO CON BASTON', { fontFamily: 'ARIAL',fontStyle:'bold' }).setFontSize(230);
        // Preload splash logo to be displayed in the preloader scene.
        //this.load.spritesheet('nuvol',nuvol,{frameWidth: 20, frameHeight:20});

      }
    
      create(data) {
        const startGame = this.add.text(this.sys.game.canvas.width / 2 - title.width / 6, this.sys.game.canvas.height / 2 + title.height, 'START GAME', { fill: '#0f0' }).setFontSize(100);
        startGame.setInteractive();
        startGame.on('pointerdown',()=>{this.scene.start('GameScene')});
        const github = this.add.text(this.sys.game.canvas.width / 2 - title.width / 6 +100, this.sys.game.canvas.height / 2 + title.height + 200, 'GITHUB', { fill: '#0f0' }).setFontSize(100);
        github.setInteractive();
        github.on('pointerdown',()=>{window.open("https://github.com/tgoncear/phaserGame")});
      }
}
var title;
var nuvoL;
var player;
export default Boot;