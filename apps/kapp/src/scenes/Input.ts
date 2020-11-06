import Phaser from 'phaser';
import AnswerUI from '../classes/AnswerUI';
import QuestionUI from '../classes/QuestionUI';

export default class Input extends Phaser.Scene {
  gameScene: Phaser.Scene;
  inputKana: InputKana;

  constructor(...args) {
    super('Input');
  }

  init({ isActive }) {
    if (isActive === false) {
      this.deactivate();
    }
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.answerUI = new AnswerUI(this);
    this.questionUI = new QuestionUI(this, '(Kun) 外');
  }

  update() {}

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
    // this.inputKana.setFocus();
  }
}
