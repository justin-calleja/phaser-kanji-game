import Phaser from 'phaser';
import InputKana from './InputKana';

export default class UserInput {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, questionStr: string) {
    this.scene = scene;
    this.questionStr = questionStr;

    this.setupUIElements();
  }

  setupUIElements() {
    // const grey = 0x2d2d2d;
    const grey = 0x000000;
    const questionHeight = 48;
    const answerHeight = 40;

    const questionBg = this.scene.add.graphics();
    // questionBg.fillStyle(grey, 0.7);
    questionBg.fillStyle(0xffffff);
    questionBg.fillRect(
      0,
      0,
      // this.scene.scale.height - answerHeight - questionHeight,
      this.scene.scale.width,
      questionHeight
    );

    // Phaser.Display.Align.In.Center(questionText, questionBg);
    // Phaser.Display.Align.In.LeftCenter(questionText, questionBg);
    // console.log(questionBg.x, questionBg.y);
    const cont = this.scene.add.container(
      0,
      this.scene.scale.height - answerHeight - questionHeight,
      questionBg
    );
    const questionText = this.scene.add.text(4, 4, this.questionStr, {
      fontSize: '40px', // TOD: should be param
      fill: '#000', // TOD: should be param and settable
    });
    cont.add(questionText);
    // this.scene.add.existing(questionBg);
    // this.scene.add.existing(questionText);

    const answerBg = this.scene.add.graphics();
    answerBg.fillStyle(0x000000, 0.7);
    answerBg.fillRect(
      0,
      this.scene.scale.height - answerHeight,
      this.scene.scale.width,
      answerHeight
    );

    this.scene.add.existing(answerBg);

    // --------

    const fontSize = 32;
    // cursorVertcalMargin is the space between the cursor and the textBg. This space is placed at the top and bottom of the cursor,
    // such that, (cursorVertcalMargin * 2) + fontSize === textBgHeight.
    const cursorVertcalMargin = (answerHeight - fontSize) / 2;
    const cursorHorizontalMargin = 10;

    this.inputKana = new InputKana(
      this.scene,
      cursorHorizontalMargin,
      this.scene.scale.height - answerHeight + cursorVertcalMargin,
      this.scene.scale.width - cursorHorizontalMargin * 2,
      fontSize,
      {
        color: '#ffffff',
      }
    );
    this.inputKana.setOrigin(0);
    this.inputKana.setFocus();
  }
}
