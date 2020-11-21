import Phaser from 'phaser';
import InputKana from './InputKana';
import { SubmitListener, UIConfig, UnsubscribeFn } from './types';
import Section from './Section';

// TODO: rename AnswerSection to InputSection and change this also in config
export default class AnswerSection extends Section {
  input: InputKana;

  constructor(public scene: Phaser.Scene, uiConfig: UIConfig) {
    super();
    const rectColor = parseInt(uiConfig.answerRect.fillStyle.color);
    const rectAlpha = uiConfig.answerRect.fillStyle.alpha || 1;
    const rectX = 0;
    const rectY = scene.scale.height - uiConfig.answerRect.height;
    const rectWidth =
      uiConfig.answerRect.width === 'full'
        ? scene.scale.width
        : uiConfig.answerRect.width;
    const rectHeight = uiConfig.answerRect.height;

    this.rect = scene.add
      .rectangle(rectX, rectY, rectWidth, rectHeight, rectColor, rectAlpha)
      .setOrigin(0);

    this.input = new InputKana(
      scene,
      rectX + uiConfig.answerText.positionRelativeToRectOrigin.x,
      rectY + uiConfig.answerText.positionRelativeToRectOrigin.y,
      rectWidth - uiConfig.answerText.positionRelativeToRectOrigin.x * 2,
      uiConfig.answerText.fontSizeNumber,
      {
        color: uiConfig.answerText.color,
      },
    );
    this.input.setOrigin(0);
    this.input.setFocus();
  }

  addOnSubmitListener(
    listener: SubmitListener,
    context?: Object,
  ): UnsubscribeFn {
    return this.input.addOnSubmitListener(listener, context);
  }
}
