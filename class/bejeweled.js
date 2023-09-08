const Screen = require('./screen');
const Cursor = require('./cursor');

class Bejeweled {
  constructor() {
    this.playerTurn = 'O';

    // Initialize this
    this.grid = [];

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);
    Screen.addCommand('u', 'Move Up', this.up.bind(this));
    Screen.addCommand('d', 'Move down', this.down.bind(this));
    Screen.addCommand('l', 'Move left', this.left.bind(this));
    Screen.addCommand('r', 'Move right', this.right.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  up() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.up();
    cursor.setBackgroundColor();
    Screen.render();
  }
  right() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.right();
    cursor.setBackgroundColor();
    Screen.render();
  }
  down() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.down();
    cursor.setBackgroundColor();
    Screen.render();
  }
  left() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.left();
    cursor.setBackgroundColor();
    Screen.render();
  }

  static checkForMatches(grid) {
    // Fill this in
  }
}

module.exports = Bejeweled;
