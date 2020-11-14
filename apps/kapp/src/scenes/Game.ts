import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../utils/eventNames';
import { UIConfig } from '../types';
import Missle from '../classes/Missile';
import uiConfig from '../config.json';

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
    this.inputScene.events.on(SUBMIT, (text) => {
      console.log('in GameScene handling user submit with text of:', text);
    });

    // this.physics.add.stat
    this.rockets = this.physics.add.group({
      allowGravity: false,
      // immovable: true,
      // collideWorldBounds: true,
    });

    this.hitZone = this.add
      .rectangle(0, 0, 10, this.scale.height, 0x000000, 0.5)
      .setOrigin(0);
    this.physics.add.existing(this.hitZone, true);

    this.physics.add.overlap(
      this.rockets,
      this.hitZone,
      function (sourceSprite, targetSprite) {
        console.log('hello.. in overlap');

        // this.cameras.main.fade(500);

        // this.cameras.main.on('camerafadeoutcomplete', (camera, effect) => {
        //   // restart the scene
        //   this.scene.restart();
        // });
      },
      null,
      this
    );

    this.time.addEvent({
      // delay: 2000,
      delay: 2000,
      loop: true,
      callback: () => {
        // const missle = new Missle(
        //   this,
        //   this.scale.width,
        //   this.scale.height / 2,
        //   'rocket1'
        // );

        // const image = this.add.image(this.scale.width, this.scale.height / 2, 'rocket1');
        const rocket = this.rockets.get(
          this.scale.width,
          100,
          // this.scale.height / 2,
          'rocket1'
        );
        rocket.setScale(0.3);
        if (!window.rocket) {
          window.rocket = rocket;
        }
        // rocket.setAngle(-90);
        // rocket.setOrigin(0.5, 0.5);

        // rocket.setActive(true);
        // rocket.setVisible(true);
        // rocket.body.enable = true;
        // rocket.body.angle = -90;
        // rocket.setVelocityX(-100);
        rocket.setVelocityX(-300);
      },
    });

    // rocket.setVisible(false);
    // rocket.setScale(0.3);
    // rocket.setAngle(-90);

    // rocket.setOrigin(0, 0);

    // image(0, 0, this.key);
  }

  update() {}
}
