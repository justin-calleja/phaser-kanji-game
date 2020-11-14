```js
/**
 * https://labs.phaser.io/edit.html?src=src\input\keyboard\add%20key%20using%20string.js
 */

keys = this.input.keyboard.addKeys('P,H,A,S,E,R');

/**
 * https://labs.phaser.io/edit.html?src=src\input\keyboard\just%20down.js
 */

spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
// ... in update:
if (Phaser.Input.Keyboard.JustDown(spacebar)) {
  var bullet = bullets.get();

  if (bullet) {
    bullet.fire(ship.x, ship.y);
  }
}

/**
 * https://labs.phaser.io/edit.html?src=src\input\keyboard\text%20entry.js
 */

var textEntry = this.add.text(10, 50, '', {
  font: '32px Courier',
  fill: '#ffff00',
});

this.input.keyboard.on('keydown', function (event) {
  if (event.keyCode === 8 && textEntry.text.length > 0) {
    textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
  } else if (
    event.keyCode === 32 ||
    (event.keyCode >= 48 && event.keyCode < 90)
  ) {
    textEntry.text += event.key;
  }
});
```

---

```sh
inkscape ./svg-cards.svg -i 3_club -o ./cards-png/3_club.png
```

Rotate image 90 degrees to the left:
```sh
 sips -r -90 ./apps/kapp/src/assets/images/spaceRockets_001.png      
 ```

