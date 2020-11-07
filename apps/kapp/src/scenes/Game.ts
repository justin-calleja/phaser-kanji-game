import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../utils/eventNames';
import { UIConfig } from '../types';
import uiConfig from '../config.json';

export default class Game extends Phaser.Scene {
  inputScene: InputScene;
  tabKey: Phaser.Input.Keyboard.Key;
  rockets: Phaser.Physics.Arcade.Group;

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

    // const rocket = this.add.image(
    //   this.scale.width,
    //   this.scale.height / 2,
    //   'rocket1'
    // );
    const groupVelocityX = -80;
    this.rockets = this.physics.add.group({
      allowGravity: false,
      // immovable: true,
      // collideWorldBounds: true,
    });
    this.rockets.setVelocityX(groupVelocityX);

    this.time.addEvent({
      // delay: 2000,
      delay: 3000,
      loop: true,
      callback: () => {
        const rocket = this.rockets.get(
          this.scale.width,
          this.scale.height / 2,
          'rocket1'
        );
        rocket.setScale(0.3);
        rocket.setAngle(-90);
        rocket.setActive(true);
        rocket.setVisible(true);
        rocket.body.enable = true;
        rocket.setVelocityX(-100);
      },
    });

    // rocket.setVisible(false);
    // rocket.setScale(0.3);
    // rocket.setAngle(-90);
    // console.log('w after', rocket.displayWidth);

    // rocket.setOrigin(0, 0);

    // image(0, 0, this.key);
  }

  update() {}
}
