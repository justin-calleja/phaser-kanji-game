import Phaser from 'phaser';
import InputScene from './Input';
import { SUBMIT } from '../utils/eventNames';
import { UIConfig } from '../types';
import uiConfig from '../config.json';

export default class Game extends Phaser.Scene {
  inputScene: InputScene;
  tabKey: Phaser.Input.Keyboard.Key;

  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Input', {
      isActive: true,
      uiConfig: uiConfig as UIConfig,
    });
    this.inputScene = this.scene.get('Input');
  }

  create() {
    this.tabKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.TAB
    );

    this.inputScene.events.on(SUBMIT, (text) => {
      console.log('in GameScene handling user submit with text of:', text);
    });
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
