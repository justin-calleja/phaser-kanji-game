import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../utils/eventNames';
import { UIConfig } from '../types';
import uiConfig from '../config/index.json';

export default class Game extends Phaser.Scene {
  inputScene: InputScene;
  tabKey: Phaser.Input.Keyboard.Key;
  rockets: Phaser.Physics.Arcade.Group;
  hitZone: Phaser.GameObjects.Rectangle;

  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Input', {
      isActive: true,
      uiConfig: uiConfig as UIConfig,
    });
    this.inputScene = this.scene.get('Input') as InputScene;
  }

  create() {
    // window.mytextures = this.textures
    // const frameNames = this.textures.get('krockets').getFrameNames();
    // console.log('frameNames:', frameNames);
    // (11)
    // ["explosion00", "explosion01", "explosion02", "explosion03",
    // "blacksmoke00", "blacksmoke01", "blacksmoke02",
    // "spacerockets_001", "spacerockets_002", "spacerockets_003", "spacerockets_004"]

    if (!this.anims.get('explode')) {
      this.anims.create({
        key: 'explode',
        // Try using: defaultTextureKey
        // defaultTextureKey: 'krockets',
        frames: [
          {
            key: 'krockets',
            frame: 'explosion00',
          },
          {
            key: 'krockets',
            frame: 'explosion01',
          },
          // {
          //   key: 'krockets',
          //   frame: 'explosion02',
          // },
          // {
          //   key: 'krockets',
          //   frame: 'explosion03',
          // },
          {
            key: 'krockets',
            frame: 'blacksmoke00',
          },
          // {
          //   key: 'krockets',
          //   frame: 'blacksmoke01',
          // },
          // {
          //   key: 'krockets',
          //   frame: 'blacksmoke02',
          // },
        ],
        // frames: this.anims.generateFrameNames('player', {
        //   frames: [0, 1, 2],
        // }),
        frameRate: 8,
        // yoyo: true,
        // repeat: -1,
      });
      // explosionAnim.on('animationcomplete', function (anim, frame) => {})
    }

    this.inputScene.events.on(SUBMIT, (text: string) => {
      console.log('in GameScene handling user submit with text of:', text);
      // const rocket = this.rockets.getFirst();
      // rocket.play('explode');
    });

    // this.physics.add.stat
    // immovable: true,
    // collideWorldBounds: true,

    this.rockets = this.physics.add.group({
      allowGravity: false,
    });

    this.hitZone = this.add
      .rectangle(0, 0, 10, this.scale.height, 0x000000, 0.5)
      .setOrigin(0);
    this.physics.add.existing(this.hitZone, true);

    this.physics.add.collider(
      this.hitZone,
      this.rockets,
      (_hitZone, rocket: Phaser.Physics.Arcade.Sprite) => {
        if (!rocket.isExploding) {
          rocket.play('explode');
        }
        rocket.isExploding = true;
        // console.log('a:', a);
        // console.log('b:', b);
      },
    );
    // this.physics.add.overlap(
    //   this.rockets,
    //   this.hitZone,
    //   function (sourceSprite, rocket) {
    //     rocket.anims.play('explosion');
    //     rocket.setVelocityX(50);
    //   },
    //   null,
    //   this,
    // );

    this.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () => {
        console.log('>>>', this.rockets.getLength());
        const rocket = this.rockets.get(
          this.scale.width,
          100,
          'krockets',
          'spacerockets_003',
        );
        rocket.setActive(true);
        rocket.setVisible(true);
        rocket.body.enable = true;
        rocket.setFrame('spacerockets_003');
        rocket.setScale(0.3);
        rocket.setVelocityX(-300);

        rocket.on('animationcomplete', (anim, frame) => {
          // rocket.disableBody(true);

          this.rockets.killAndHide(rocket);
          rocket.isExploding = false;
          rocket.body.enable = false;

          // rocket.setActive(false);
          // rocket.setVisible(false);
        });
      },
    });

    // this.physics.add.spri
    // rocket.setVisible(false);
    // rocket.setScale(0.3);
    // rocket.setAngle(-90);

    // rocket.setOrigin(0, 0);

    // image(0, 0, this.key);
  }

  update() {}
}
