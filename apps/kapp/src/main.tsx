import Phaser from 'phaser';
// import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';
import BootScene from './scenes/Boot';
import GameScene from './scenes/Game';

const config = {
  backgroundColor: '#efefef',
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  dom: {
    createContainer: true,
  },
  // By default: a Phaser scene is not active when you add that scene to the Phaser game config object.
  // By default: Phaser will start the first scene in the Phaser game config object. (BootScene in this case).
  // scene: [BootScene, TitleScene, GameScene, UIScene],
  scene: [BootScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        // y: 5,
        y: 0,
      },
    },
  },
  // plugins: {
  //   global: [
  //     {
  //       key: 'rexInputTextPlugin',
  //       plugin: InputTextPlugin,
  //       start: true,
  //     },
  //     // ...
  //   ],
  // },
};

const game = new Phaser.Game(config);
// game.add.plugin(PhaserInput.Plugin);

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app/app';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
