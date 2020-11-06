import Phaser from 'phaser';
import InputKana from './InputKana';
import config from '../config.json';

export default class AnswerUI {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    const rectColor = parseInt(config.answerRect.fillStyle.color);
    const rectAlpha = config.answerRect.fillStyle.alpha || 1;
    const rectX = 0;
    const rectY = scene.scale.height - config.answerRect.height;
    const rectWidth =
      config.answerRect.width === 'full'
        ? scene.scale.width
        : config.answerRect.width;
    const rectHeight = config.answerRect.height;

    this.scene = scene;
    this.rect = scene.add.graphics();
    this.rect.fillStyle(rectColor, rectAlpha);
    this.rect.fillRect(rectX, rectY, rectWidth, rectHeight);

    this.input = new InputKana(
      scene,
      rectX + config.answerText.positionRelativeToRectOrigin.x,
      rectY + config.answerText.positionRelativeToRectOrigin.y,
      rectWidth - config.answerText.positionRelativeToRectOrigin.x * 2,
      config.answerText.fontSizeNumber,
      {
        color: config.answerText.color,
      }
    );
    this.input.setOrigin(0);
    this.input.setFocus();
  }
}
