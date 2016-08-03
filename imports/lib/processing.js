const BACKSPACE =  'Backspace';
const TAB = 'Tab';
const CLEAR = 'Clear';
const ENTER = 'Enter';
const SPACE = ' ';

  // 16: 'Shift',
  // 17: 'Control',
  // 18: 'Alt',
  // 19: 'Pause',
  // 20: 'CapsLock',
  // 27: 'Escape',
  // 33: 'PageUp',
  // 34: 'PageDown',
  // 35: 'End',
  // 36: 'Home',
  // 37: 'ArrowLeft',
  // 38: 'ArrowUp',
  // 39: 'ArrowRight',
  // 40: 'ArrowDown',
  // 45: 'Insert',
  // 46: 'Delete',
  // 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
  // 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
  // 144: 'NumLock',
  // 145: 'ScrollLock',
  // 224: 'Meta'

var current = '';

module.exports.add = function(key) {
  var word = null;

  if(!isWhiteSpace(key)) {
    current += key;
  }
  else {
    word = current;
    current = '';
    console.log(word);
  }

  return word;
};

var isWhiteSpace = function(key) {
  return key === BACKSPACE || key === TAB || key === ENTER || key === SPACE;
}
