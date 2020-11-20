import Phaser from 'phaser';
import AnswerSection from '../AnswerSection';
import InputKana from '../InputKana';
import QuestionSection from '../QuestionSection';
import { UIConfig } from '../types';

export default class Input extends Phaser.Scene {
  gameScene: Phaser.Scene;
  inputKana: InputKana;
  uiConfig: UIConfig;
  answerSection: AnswerSection;
  questionSection: QuestionSection;

  constructor() {
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
    this.answerSection = new AnswerSection(this, this.uiConfig);
    this.questionSection = new QuestionSection(this, this.uiConfig, '(Kun) 外');
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

  getHeight() {
    // if ()
    return this.answerSection.getHeight() + this.questionSection.getHeight();
  }
}
