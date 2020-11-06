import Phaser from 'phaser';
import config from '../config.json';

export default class QuestionUI {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, questionStr: string) {
    const rectColor = parseInt(config.questionRect.fillStyle.color);
    const rectAlpha = config.questionRect.fillStyle.alpha || 1;
    const rectX = 0;
    const rectY =
      scene.scale.height -
      config.answerRect.height -
      config.questionRect.height;
    const rectWidth =
      config.questionRect.width === 'full'
        ? scene.scale.width
        : config.questionRect.width;
    const rectHeight = config.questionRect.height;

    this.scene = scene;
    this.rect = scene.add.graphics();
    this.rect.fillStyle(rectColor, rectAlpha);
    this.rect.fillRect(rectX, rectY, rectWidth, rectHeight);

    this.text = scene.add.text(
      rectX + config.questionText.positionRelativeToRectOrigin.x,
      rectY + config.questionText.positionRelativeToRectOrigin.y,
      questionStr,
      {
        fontSize: `${config.questionText.fontSizeNumber}px`,
        fill: config.questionText.color,
      }
    );
  }
}
