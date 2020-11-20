import Phaser from 'phaser';
import { UIConfig } from './types';
import Section from './Section';

export default class QuestionSection extends Section {
  scene: Phaser.Scene;
  rect: Phaser.GameObjects.Rectangle;
  text: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, uiConfig: UIConfig, questionStr: string) {
    super();
    const rectColor = parseInt(uiConfig.questionRect.fillStyle.color);
    const rectAlpha = uiConfig.questionRect.fillStyle.alpha || 1;
    const rectX = 0;
    const rectY =
      scene.scale.height -
      uiConfig.answerRect.height -
      uiConfig.questionRect.height;
    const rectWidth =
      uiConfig.questionRect.width === 'full'
        ? scene.scale.width
        : uiConfig.questionRect.width;
    const rectHeight = uiConfig.questionRect.height;

    this.scene = scene;
    this.rect = scene.add
      .rectangle(rectX, rectY, rectWidth, rectHeight, rectColor, rectAlpha)
      .setOrigin(0);

    this.text = scene.add.text(
      rectX + uiConfig.questionText.positionRelativeToRectOrigin.x,
      rectY + uiConfig.questionText.positionRelativeToRectOrigin.y,
      questionStr,
      {
        fontSize: `${uiConfig.questionText.fontSizeNumber}px`,
        fill: uiConfig.questionText.color,
      },
    );
  }
}
