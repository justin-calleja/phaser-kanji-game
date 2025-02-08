import Phaser from 'phaser';
import AnswerSection from '../AnswerSection';
import type InputKana from '../InputKana';
import QuestionSection from '../QuestionSection';
import { UIConfig, UnsubscribeFn } from '../types';
import { SUBMIT } from '../eventNames';

export default class Input extends Phaser.Scene {
  gameScene: Phaser.Scene;
  inputKana: InputKana;
  uiConfig: UIConfig;
  answerSection: AnswerSection;
  questionSection: QuestionSection;
  unsubscribeSubmitListener: UnsubscribeFn;

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
    this.unsubscribeSubmitListener = this.answerSection.addOnSubmitListener(
      this.onSubmit,
      this,
    );

    this.questionSection = new QuestionSection(this, this.uiConfig);
  }

  update() {}

  onSubmit(userInput: string) {
    this.events.emit(SUBMIT, userInput);
  }

  setQuestion(question: string) {
    this.questionSection.setQuestion(question);
  }

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
    if (this.answerSection && this.questionSection) {
      return this.answerSection.getHeight() + this.questionSection.getHeight();
    }
    return -1;
  }
}
