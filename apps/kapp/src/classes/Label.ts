import Phaser from 'phaser';

export default class Label extends Phaser.GameObjects.Container {
  scene: Phaser.Scene;

  constructor(scene, x, y) {
    super(scene, x, y);
    this.scene = scene;

    this.setupUIElements();
    this.scene.add.existing(this);
  }

  setupUIElements() {
    const grey = 0x2d2d2d;
    // const grey = 0x000000;
    const textBgHeight = 40;
    const textBg = this.add.graphics();
    // textBg.fillStyle(0xffffff, 0.7);
    textBg.fillStyle(grey, 0.7);
    textBg.fillRect(
      0,
      this.scale.height - textBgHeight,
      this.scale.width,
      textBgHeight
    );

    this.add.existing(textBg);

    // --------

    const fontSize = 24;
    // cursorVertcalMargin is the space between the cursor and the textBg. This space is placed at the top and bottom of the cursor,
    // such that, (cursorVertcalMargin * 2) + fontSize === textBgHeight.
    const cursorVertcalMargin = (textBgHeight - 24) / 2;
    const cursorHorizontalMargin = 10;

    Phaser.Display.Align.In.Center(this.buttonText, this.button);
  }
}
