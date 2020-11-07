import Phaser from 'phaser';
import InputKana from './InputKana';
import { UIConfig } from '../types';

export default class AnswerUI {
  scene: Phaser.Scene;
  rect: Phaser.GameObjects.Graphics;
  input: InputKana;

  constructor(scene: Phaser.Scene, uiConfig: UIConfig) {
    const rectColor = parseInt(uiConfig.answerRect.fillStyle.color);
    const rectAlpha = uiConfig.answerRect.fillStyle.alpha || 1;
    const rectX = 0;
    const rectY = scene.scale.height - uiConfig.answerRect.height;
    const rectWidth =
      uiConfig.answerRect.width === 'full'
        ? scene.scale.width
        : uiConfig.answerRect.width;
    const rectHeight = uiConfig.answerRect.height;

    this.scene = scene;
    this.rect = scene.add.graphics();
    this.rect.fillStyle(rectColor, rectAlpha);
    this.rect.fillRect(rectX, rectY, rectWidth, rectHeight);

    this.input = new InputKana(
      scene,
      rectX + uiConfig.answerText.positionRelativeToRectOrigin.x,
      rectY + uiConfig.answerText.positionRelativeToRectOrigin.y,
      rectWidth - uiConfig.answerText.positionRelativeToRectOrigin.x * 2,
      uiConfig.answerText.fontSizeNumber,
      {
        color: uiConfig.answerText.color,
      }
    );
    this.input.setOrigin(0);
    this.input.setFocus();
  }
}
