import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import bomb from './assets/bomb.png';
import ground from './assets/platform.png';
import sky from './assets/sky.png';
import star from './assets/star.png';
import dude from './assets/dude.png';
import boxs from './assets/box.png';
import BootScene from './scenes/Boot';
import MenuScene from './scenes/Menu';
import GameScene from './scenes/Game';
import config from './config';
import GameOver from './scenes/GameOver';
import Second_Level from './scenes/Second_Level';

const game = new Phaser.Game(Object.assign(config,{
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [BootScene,MenuScene,GameScene,GameOver,Second_Level],
}));
