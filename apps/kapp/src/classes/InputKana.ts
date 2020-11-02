import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

export default class InputKana extends InputText {
  constructor(scene, x, y, width, height, config) {
    super(scene, x, y, width, height, config);

    // this.setOrigin(0.5);
    // this.on('textchange', function (inputText) {
    //   printText.text = inputText.text;
    // });
    this.on('focus', function (inputText) {
      console.log('On focus');
    });
    this.on('blur', function (inputText) {
      console.log('On blur');
    });
    this.on('click', function (inputText) {
      console.log('On click');
    });
    this.on('dblclick', function (inputText) {
      console.log('On dblclick');
    });

    scene.add.existing(this);
  }
}
