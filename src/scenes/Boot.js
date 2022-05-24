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
        github.on('pointerdown',()=>{window.open("https://www.iloveimg.com/es/descarga/yglnh2fd6b6xwv80g8d70jzjvszw5Aj11sr7rl2xf1s6ffv706254b641yn63lbf07hcgcA9nzkjAtb6l2n1r3dkvkn9thdv5n89tl7rgAmb3tlq4kvj2btdr92r51j35h74kzhfkclh83Afrb5wlAwp3q1cvfjr48b9sld9h9wl7lcpvv6q/9")});
      }
}
var title;
var nuvoL;
var player;
export default Boot;