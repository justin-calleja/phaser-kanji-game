import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../eventNames';
import { UIConfig } from '../types';
import uiConfig from '../config/index.json';
import Rocket from '../Rocket';
import Spawner from '../Spawner';

// The "dead zone" is an area of the screen where rockets cannot be spawned.
// These will be at the top and bottom to give some breathing room.
const DEAD_ZONE_HEIGHT = 200 * Rocket.scaleFactor;

export default class Game extends Phaser.Scene {
  inputScene: InputScene;
  tabKey: Phaser.Input.Keyboard.Key;
  rockets: Phaser.Physics.Arcade.Group;
  hitZone: Phaser.GameObjects.Rectangle;
  spawner: Spawner;

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
    if (!this.anims.get('explode')) {
      this.anims.create({
        key: 'explode',
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
      this.rockets.getChildren().forEach((rocket: Rocket) => {
        rocket.fadeOut();
      });
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

    // this.spawner = new Spawner(this.rockets,{
    //   // maxY needs to be rocketWidth + answer and question section width
    //   maxY: this.scale.height - (this.inputScene.getHeight() + MAX_ROCKET_HEIGHT),
    //   // minY:
    // });

    this.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () => {
        const rocket: Rocket = this.rockets.get(
          this.scale.width,
          Phaser.Math.Between(
            DEAD_ZONE_HEIGHT,
            this.scale.height -
              (this.inputScene.getHeight() + DEAD_ZONE_HEIGHT),
          ),
          'krockets',
          'spacerockets_003',
        );
        rocket.init();
        // if (!window.rocket) {
        //   window.rocket = rocket;
        // }
      },
    });
  }

  update() {}
}
