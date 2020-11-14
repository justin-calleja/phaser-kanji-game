import Phaser from 'phaser';

export default class Missile extends Phaser.GameObjects.Container {
  image: Phaser.GameObjects.Image;
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y);

    // this.image = scene.add.image(0, 0, texture);
    this.image = scene.physics.add.image(0, 0, texture);
    console.log('...', this.image);
    // this.image.setOrigin(0.8, 0.5)
    this.image.setOrigin(0.5, 0.5);
    this.add(this.image);
    scene.physics.add.existing(this);
  }
}
