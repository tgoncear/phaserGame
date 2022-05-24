import Phaser from 'phaser';
import map from '../assets/secong_map.json';

class Second_Level extends Phaser.Scene{
    constructor() {
        super({ key: 'Second_Level' });
    }

    preload ()
    {

        this.load.image('base_tiles','assets/sheet_map.png');
        this.add.text(this.sys.game.canvas.width / 2  -700, this.sys.game.canvas.height/2 -125, 'GAME OVER', { fontFamily: 'ARIAL',fontStyle:'bold' }).setFontSize(250);
        this.load.tilemapTiledJSON('map',map);
        this.load.image('enemi','assets/smile.png');
        this.load.image('live','assets/lives.png');
        this.load.image('star','assets/star.png');
        this.load.spritesheet('dude', 
        'src/assets/player_movement.png',
        { frameWidth: 45, frameHeight: 78 }

        
    );

    } 
    create ()
    {
        scene = this.scene;
        cursors = this.input.keyboard.createCursorKeys();
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('sheet_map','base_tiles');
        this.cameras.add(scoreText);
        platform = map.createLayer('platform',tileset).setScale(2);
        background = map.createLayer('background',tileset).setScale(2);
        door_closed = map.createLayer('door_closed',tileset).setScale(2);
        spikes = map.createLayer('spikes',tileset).setScale(2);
        player = this.physics.add.sprite(100,700,'dude');
        platform.setCollisionByExclusion(-1,true);
        door_closed.setCollisionByExclusion(-1,true);

        this.physics.add.collider(player,door_closed,function(){
            scene.start('GameOver');
        });
        player.setCollideWorldBounds(true);
        player.setScale(0.7);
        livesText = this.add.text(player.getBounds().x - 100,player.getBounds().y-260, 'live: ' + score, { fontSize: '32px', fill: '#000' });
        this.physics.add.collider(player,platform);
        spikes.setCollisionByExclusion(-1,true);
        this.physics.add.collider(player,box);
        this.physics.add.collider(player,spikes,function(){
            player.setPosition(100,700);
            lives-=1;
            console.log(lives);
            if(lives == 0){
                lives = 3;
                score = 0;
                scene.start('GameOver');
            }
            

        });
        //camera
        this.cameras.main.startFollow(player);
        this.cameras.main.setSize(2000,700);
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 6 }),
            frameRate: 10,

        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 3 } ],
            frameRate: 10
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
            frameRate: 10,

        });
        stars = this.physics.add.group({
            key: 'star',
            repeat: 20,
            setXY: { x: 350, y: 0, stepX: 150 }
        });
        
        stars.children.iterate(function (child) {
        
            child.setBounceY(Phaser.Math.FloatBetween(0.1,0.2));
        
        });
        this.physics.add.collider(stars, platform);
        this.physics.add.collider(stars,spikes);
        this.physics.add.collider(stars,box);

        this.physics.add.overlap(player, stars, collectStar, null, this);
        function collectStar (player, star)
        {
            star.disableBody(true, true);
        }
        
        function collectStar (player, star)
        {
            star.disableBody(true, true);

            score += 10;
            scoreText.setText('Score: ' + score);
        }
        
    }
    update(){
        if(cursors.right.isDown){
            player.setVelocityX(100);
            player.anims.play('right',true);
        }
        else if(cursors.left.isDown){
            player.setVelocityX(-100);
            player.anims.play('left',true);
            
        }else
        {
            player.setVelocityX(0);
            player.anims.play('turn',true);
        
        }

        if(cursors.up.isDown && player.body.onFloor()){
            player.setVelocityY(-200);
        }
        scoreText.destroy();
        scoreText = this.add.text(player.getBounds().x - 100,player.getBounds().y-300, 'score: ' + score, { fontSize: '32px', fill: '#000' });
        livesText.destroy();
        livesText = this.add.text(player.getBounds().x - 100,player.getBounds().y-260, 'live: ' + lives, { fontSize: '32px', fill: '#000' });
    }

}
var enemi;
var livesText;
var lives;
var scene;
var lives = 3;
var fadedBackground;
var spikes;
var box;
var background;
var door_closed;
var door_open;
var bombs;
var gameOver = false;
var platform;
var score = 0;
var scoreText;
var stars;
var player;
var cursors;
var pressedE = false;
export default Second_Level;