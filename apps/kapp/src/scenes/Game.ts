import Phaser from 'phaser';
import InputScene from './Input';

export default class Game extends Phaser.Scene {
  inputScene: InputScene;

  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Input');
    this.inputScene = this.scene.get('Input');
  }

  create() {
    this.tabKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.TAB
    );
  }

  update() {
    if (this.tabKey.isDown) {
      if (this.inputScene.isActive()) {
        this.inputScene.setFocus();
      } else {
        this.inputScene.activate();
      }
    }
  }
}
