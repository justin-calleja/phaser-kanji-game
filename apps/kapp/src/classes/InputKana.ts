import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

export default class InputKana extends InputText {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSubmit: Function;

  constructor(scene, x, y, width, height, config = {}) {
    const fullConfig = { id: 'ime', ...config };
    super(scene, x, y, width, height, fullConfig);
    this.config = fullConfig;

    this.onSubmit = (x) => {
      console.log('args:', x);
    };
    // this.setOrigin(0.5);
    // this.on('textchange', (inputText) => {
    //   this.setText(toHiragana(this.node.value));
    //   // console.log('textchange event:', inputText);
    //   // printText.text = inputText.text;
    // });
    // this.on('textchange', this.setText);
    // this.on('focus', function (inputText) {
    //   console.log('On focus');
    // });
    // this.on('blur', function (inputText) {
    //   console.log('On blur');
    // });
    // this.on('click', function (inputText) {
    //   console.log('On click');
    // });
    // this.on('dblclick', function (inputText) {
    //   console.log('On dblclick');
    // });

    scene.input.keyboard.on('keydown-ENTER', this.onSubmit);

    scene.add.existing(this);
  }

  // getId() {
  //   return this.config.id;
  // }

  // setText(str) {
  //   console.log('in InputKana.setText', str);
  //   this.node.value = toHiragana(str)
  // }

  setSubmitCallback(callback) {
    this.onSubmit = callback;
    return this;
  }
}
