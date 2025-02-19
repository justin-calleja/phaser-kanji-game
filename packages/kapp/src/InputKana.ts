import Phaser, { Scene } from 'phaser';
// @ts-ignore
import { bind as wkBind } from 'wanakana';
import { SubmitListener, UnsubscribeFn } from './types';

/**
 * Based off of:
 * node_modules/phaser3-rex-plugins/plugins/gameobjects/dom/inputtext/InputText.js
 */
export default class InputKana extends Phaser.GameObjects.DOMElement {
  scene: Scene;
  submitListeners: Array<[SubmitListener, Object?]>;

  static defaultStyle = {
    backgroundColor: 'transparent',
    border: 0,
    borderColor: 'transparent',
    color: '#000000',
    fontSize: '24px',
    outline: 'none',
  };

  constructor(
    scene: Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    style = {},
  ) {
    const element = document.createElement('input');
    element.type = 'text';
    element.autocomplete = 'off';
    element.spellcheck = false;

    super(scene, x, y, element, { ...InputKana.defaultStyle, ...style });

    this.scene = scene;
    this.submitListeners = [];
    this.resize(width, height);
    wkBind(this.node);
    // @ts-ignore
    this.node.onkeyup = (e) => {
      if (e.key === 'Enter') {
        this.submitListeners.forEach(([listener, context]) => {
          if (context) {
            listener.call(context, e.target.value);
          } else {
            listener(e.target.value);
          }
        });
      }
    };
    scene.add.existing(this);
  }

  addOnSubmitListener(
    listener: SubmitListener,
    context?: Object,
  ): UnsubscribeFn {
      this.submitListeners.push([listener, context]);
    return () => {
      this.unsubscribeSubmitListener(listener);
    };
  }

  unsubscribeSubmitListener(listener: SubmitListener) {
    this.submitListeners = this.submitListeners.filter(
      ([subscribedListener]) => {
        return subscribedListener !== listener;
      },
    );
  }

  /**
   * Copied from: node_modules/phaser3-rex-plugins/plugins/gameobjects/dom/utils/Resize.js
   *
   * @param width number the new width of the input
   * @param height number the new height of the input
   */
  resize(width: number, height: number) {
    if (this.scene.scale.autoRound) {
      width = Math.floor(width);
      height = Math.floor(height);
    }

    if (this.width === width && this.height === height) {
      return this;
    }

    // @ts-ignore
    const style = this.node.style;
    style.width = `${width}px`;
    style.height = `${height}px`;
    this.updateSize();
    return this;
  }

  setFocus() {
    // @ts-ignore
    this.node.focus();
    return this;
  }
}
