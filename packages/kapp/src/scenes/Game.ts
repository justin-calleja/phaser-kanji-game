import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../utils/eventNames';
import { UIConfig } from '../types';
import uiConfig from '../config/index.json';
import Rocket from '../ui/Rocket';

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
          {
            key: 'krockets',
            frame: 'blacksmoke00',
          },
        ],
        frameRate: 8,
      });
    }

    this.inputScene.events.on(SUBMIT, (text: string) => {
      console.log('in GameScene handling user submit with text of:', text);
    });

    this.rockets = this.physics.add.group({
      classType: Rocket,
      allowGravity: false,
    });

    this.hitZone = this.add
      .rectangle(0, 0, 10, this.scale.height, 0x000000, 0.5)
      .setOrigin(0);
    this.physics.add.existing(this.hitZone, true);

    this.physics.add.collider(
      this.hitZone,
      this.rockets,
      (_hitZone, rocket: Rocket) => {
        rocket.explode();
      },
    );

    this.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () => {
        console.log('>>>', this.rockets.getLength());
        const rocket: Rocket = this.rockets.get(
          this.scale.width,
          100,
          'krockets',
          'spacerockets_003',
        );
        rocket.init();
      },
    });
  }

  update() {}
}
