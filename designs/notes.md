# Kanji Rockets

1. [General flow](#general-flow)
1. [Different rockets](#different-rockets)
1. [Color code quiz requirements](#color-code-quiz-requirements)

- Do you allow user to select the rocket? e.g. attach a label like "a" to a rocket and user presses a to select rocket.
  - input can be in different modes
- Add a bonus timer on items. e.g. if user targets rocket with highlighted bonus, they get more points. Bonus highlight goes after a while.
- You need to be able to toggle input of roman characters v.s. kana since there can be a mix of each on screen.
- How are you going to ensure that rockets don't overlap? (what about their associated labels with the question?)
  - Do rockets have different velocities? Do they push each other out of the way?

## General flow

How will the flow of the game be?

1. Rockets will appear from edge of screen (left or right as per config). They will travel to the other side of screen until a certain width (the target) is reached. Player will take damage when a rocket reaches the target.

- Player will take double the rocket's points if a rocket manages to make it to the target.

1. Rockets will have a unique label associated with them e.g. "a", "b" etc... Label is unique with respect to other labels on screen. The same label may reappear as long as there are no identical labels on screen at the same time.
1. User can focus a rocket by typing in the rocket's label.
1. On focus, the rocket is highlighted and the user input and "quiz for that rocket" are displayed.
1. Through settings, user may choose to auto focus any rocket which is on or past 25%, 50%, 75% to target.

- These settings may be changed in-game too via pausing the game.

1. The quiz is a single question which the user must answer.

- Getting the answer wrong will damage the player by the rocket's points.
- Getting the answre right will increase the player's score by the rocket's points.

1. A level is cleared when all the rockets have been fired and somehow ended and player is still alive.
1. Levels get harder with:

- Possible increases of max number of rockets on screen at the same time.
- Possible increases in the max number of rockets deployed.
- Possible increases in rockets speed (all rockets travel at the same level speed though otherwise rockets may collide).

## Different rockets

Different rockets have diff points. Also, vocab associated with them should vary. i.e. an item which has been answered correctly many times should get lower points.

## Color code quiz requirements

Color code the requirement of “meaning”, “on yomi”, “kun yomi”

## Questions

- max number of rockets on screen?

```json
{
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "description": "Contains specs for a rectangle",
  "properties": {
    "height": {
      "type": "number"
    }
  }
}
```

```json
{
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "title": "fillStyle arguments",
  "description": "Contains specs for a rectangle",
  "required": ["color"],
  "properties": {
    "color": {
      "type": "number",
      "description": "The hex value for the color"
    },
    "alpha": {
      "type": "number",
      "default": 1,
      "description": "Adjusts transparency"
    }
  }
}
```

```json
{
  "height": 48,
  "width": "full",
  "fillStyle": {
    "color": number,
    "alpha": number
  }
}
```

```json
{
  "questionRect": {
    "height": 48,
    "width": "full",
    "fillStyle": {
      "color": "0xffffff"
    }
  },
  "questionText": {
    "fontSize": "40px",
    "color": "#000",
    "positionRelativeToRectOrigin": {
      "x": 4,
      "y": 4
    }
  },
  "answerRect": {
    "height": 40,
    "width": "full",
    "fillStyle": {
      "color": "0x000000",
      "alpha": 0.7
    }
  },
  "answerText": {
    "fontSize": 32,
    "color": "#fff",
    "positionRelativeToRectOrigin": {
      "x": 10,
      "y": 4
    }
  }
}
```

```js
this.enterKey = this.input.keyboard.addKey(
  Phaser.Input.Keyboard.KeyCodes.ENTER
);
// in update()
if (this.enterKey.isDown) {
}
```
