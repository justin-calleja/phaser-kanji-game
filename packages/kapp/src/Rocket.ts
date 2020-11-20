import Phaser, { Scene } from 'phaser';

export default class Rocket extends Phaser.Physics.Arcade.Sprite {
  hasExploded: boolean = false;
  rocketFrame: string;
  fadeOutTween: Phaser.Tweens.Tween;
  startX: number;

  static scaleFactor = 0.3;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame?: string,
  ) {
    super(scene, x, y, texture, frame);

    this.startX = scene.scale.width;

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

    this.fadeOutTween = scene.tweens.add({
      targets: this,
      alpha: 0,
      scaleX: 0,
      scaleY: 0,
      duration: 500,
      paused: true,
      callbackScope: this,
      onComplete: this.deactivate,
    });
  }

  init() {
    this.setScale(Rocket.scaleFactor);
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

  fadeOut() {
    if (this.alpha === 1 && !this.hasExploded) {
      this.setVelocityX(0);
      this.fadeOutTween.play();
    }
  }

  moveToStart() {
    this.x = this.startX;
    this.body.x = this.startX;
  }

  activate() {
    if (!this.active) {
      this.alpha = 1;
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

      this.moveToStart();
      this.setRocketFrame();
    }
  }
}
