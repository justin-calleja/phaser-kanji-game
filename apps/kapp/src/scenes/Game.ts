import InputKana from '../classes/InputKana';
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    console.log(this.inputKana);

    // const inputText = new InputText(this, 10, 10, 400, 50, {
    //   type: 'text',
    //   text: '',
    //   placholder: 'hello',
    //   fontSize: '24px',
    //   color: 'red',
    // });
    // inputText.setOrigin(0);

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
    // cursorVertMargin is the space between the cursor and the textBg. This space is placed at the top and bottom of the cursor,
    // such that, (cursorVertMargin * 2) + fontSize === textBgHeight.
    const cursorVertMargin = (textBgHeight - 24) / 2;
    this.inputKana = new InputKana(
      this,
      10,
      // this.scale.height - textBgHeight - cursorVertMargin,
      this.scale.height - textBgHeight + cursorVertMargin,
      this.scale.width,
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

    // this.add.existing(inputText);
    // this.add.existing(this.inputKana);

    // var inputText = new MyText(scene, x, y, width, height, config);
  }
}
