export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // this.loadImages();
    // this.loadSpritesheets();
    // this.loadAudio();
  }

  create() {
    // this will stop the current scene and initiate any shutdown and clean up logic you have in place:
    this.scene.start('Game');
  }
}
