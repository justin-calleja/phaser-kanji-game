import Phaser from 'phaser';
import AnswerUI from '../classes/AnswerUI';
import InputKana from '../classes/InputKana';
import QuestionUI from '../classes/QuestionUI';
import { UIConfig } from '../types';

export default class Input extends Phaser.Scene {
  gameScene: Phaser.Scene;
  inputKana: InputKana;
  uiConfig: UIConfig;
  answerUI = AnswerUI;
  questionUI = QuestionUI;

  constructor(...args) {
    super('Input');
  }

  init({ uiConfig, isActive }: { uiConfig: UIConfig; isActive: boolean }) {
    if (isActive === false) {
      this.deactivate();
    }
    this.uiConfig = uiConfig;
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.answerUI = new AnswerUI(this, this.uiConfig);
    this.questionUI = new QuestionUI(this, this.uiConfig, '(Kun) 外');
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
}
