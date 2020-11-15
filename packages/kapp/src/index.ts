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
};

const game = new Phaser.Game(config);
