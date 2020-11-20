// import Phaser from 'phaser';

export default abstract class QuestionSection {
  rect: Phaser.GameObjects.Rectangle;

  getHeight() {
    return this.rect.height;
  }

  getWidth() {
    return this.rect.width;
  }
}
