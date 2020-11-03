import Phaser from 'phaser';
import InputKana from '../classes/InputKana';

export default class Input extends Phaser.Scene {
  constructor(...args) {
    super('Input');
    console.log('in input scene constructor with args:', ...args);
  }

  init({ isActive }) {
    if (isActive === false) {
      this.deactivate();
    }
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    this.setupUIElements();
    // this.setupEvents();
  }

  update() {
    // if (this.inputKana) {
    // }
    // if (this.enterKey.isDown) {
    // }
  }

  setupUIElements() {
    const textBgHeight = 40;
    const textBg = this.add.graphics();
    // textBg.fillStyle(0xffffff, 0.7);
    textBg.fillStyle(0x000000, 0.7);
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

    this.inputKana = new InputKana(
      this,
      cursorHorizontalMargin,
      this.scale.height - textBgHeight + cursorVertcalMargin,
      this.scale.width - cursorHorizontalMargin * 2,
      fontSize,
      {
        type: 'text',
        text: '',
        fontSize: `${fontSize}px`,
        color: 'red',
      }
    );
    this.inputKana.setOrigin(0);
    this.inputKana.setFocus();
  }

  // setupEvents() {
  //   // this.events.emit('updateScore', this.score);
  //   //   // this.gameScene.events.on('updateScore', (coins) => {
  //   //   //   this.scoreText.setText(`Coins: ${coins}`);
  //   //   // });
  //   //   // this.gameScene.events.on(FOCUS_INPUT, this.activate, this);
  // }

  isActive() {
    return this.scene.isActive() && this.scene.isVisible();
  }

  activate() {
    this.scene.setActive(true);
    this.scene.setVisible(true);
  }

  deactivate() {
    this.scene.setActive(false);
    this.scene.setVisible(false);
  }

  setFocus() {
    this.inputKana.setFocus();
  }
}
