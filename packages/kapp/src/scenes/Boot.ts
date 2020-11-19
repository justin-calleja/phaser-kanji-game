export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // this.load.image('rocket1', 'assets/images/spaceRockets_002.png');

    this.load.atlas(
      'krockets',
      'assets/images/krockets.png',
      'assets/images/krockets_atlas.json',
    );

    // this.load.spritesheet('explosion', 'assets/images/player_spritesheet.png', {
    //   frameWidth: 28,
    //   frameHeight: 30,
    //   margin: 1,
    //   spacing: 1,
    // });
  }

  create() {
    // this will stop the current scene and initiate any shutdown and clean up logic you have in place:
    this.scene.start('Game');
  }
}
