import Phaser, { Scene } from 'phaser';

//   rockets: Phaser.Physics.Arcade.Group;
export default class Rocket extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    // constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | integer);
  }
  activate() {
    this.setActive(true);
    this.setVisible(true);
    this.body.enable = true;
  }

  //   initialPosition...
}
