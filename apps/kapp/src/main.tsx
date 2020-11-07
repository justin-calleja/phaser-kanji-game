import Phaser from 'phaser';
import BootScene from './scenes/Boot';
import GameScene from './scenes/Game';
import InputScene from './scenes/Input';

const config = {
  backgroundColor: '#efefef',
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  dom: {
    createContainer: true,
  },
  scene: [BootScene, GameScene, InputScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      // gravity: {
      //   // y: 5,
      //   y: 0,
      // },
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
