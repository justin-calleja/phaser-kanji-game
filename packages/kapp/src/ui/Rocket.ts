import Phaser, { Scene } from 'phaser';

export default class Rocket extends Phaser.Physics.Arcade.Sprite {
  hasExploded: boolean = false;
  rocketFrame: string;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame?: string,
  ) {
    super(scene, x, y, texture, frame);

    if (frame) {
      this.rocketFrame = frame;
    }

    this.on(
      'animationcomplete',
      (
        _anim: Phaser.Animations.Animation,
        _frame: Phaser.Animations.AnimationFrame,
        rocket: Rocket,
      ) => {
        rocket.deactivate();
      },
    );
  }

  init() {
    this.setScale(0.3);
    this.setVelocityX(-300);
    this.activate();
  }

  setRocketFrame() {
    if (this.rocketFrame) {
      this.setFrame(this.rocketFrame);
    }
  }

  explode() {
    if (!this.hasExploded) {
      this.play('explode');
      this.hasExploded = true;
    }
  }

  activate() {
    if (!this.active) {
      this.setActive(true);
      this.setVisible(true);
      this.body.enable = true;
    }
  }

  deactivate() {
    if (this.active) {
      this.setActive(false);
      this.setVisible(false);
      this.hasExploded = false;
      this.body.enable = false;

      this.setRocketFrame();
    }
  }
}
