import { Scene } from 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';
import { bind as wkBind } from 'wanakana';
import { SUBMIT } from '../utils/eventNames';

export default class InputKana extends InputText {
  scene: Scene;

  constructor(scene: Scene, x, y, width, height, config) {
    super(scene, x, y, width, height, config);
    this.scene = scene;

    wkBind(this.node);
    scene.input.keyboard.on('keydown-ENTER', this.onSubmit);
    scene.add.existing(this);
  }

  onSubmit = (e) => {
    this.scene.events.emit(SUBMIT, e.target.value);
  };
}
