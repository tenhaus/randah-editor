const BACKSPACE =  'Backspace';
const TAB = 'Tab';
const CLEAR = 'Clear';
const ENTER = 'Enter';
const SPACE = ' ';
const SHIFT = 'Shift';
const CONTROL = 'Control'
const ALT = 'Alt'
const PAUSE = 'Pause'
const CAPSLOCK = 'CapsLock'
const ESCAPE = 'Escape'
const PAGEUP = 'PageUp'
const PAGEDOWN = 'PageDown'
const END = 'End'
const HOME = 'Home'
const ARROWLEFT = 'ArrowLeft'
const ARROWUP = 'ArrowUp'
const ARROWRIGHT = 'ArrowRight'
const ARROWDOWN = 'ArrowDown'
const INSERT = 'Insert'
const DELETE = 'Delete'
const F1 = 'F1'
const F2 = 'F2'
const F3 = 'F3'
const F4 = 'F4'
const F5 = 'F5'
const F6 = 'F6'
const F7 = 'F7'
const F8 = 'F8'
const F9 = 'F9'
const F10 = 'F10'
const F11 = 'F11'
const F12 = 'F12'
const NUMLOCK = 'NumLock'
const SCROLLLOCK = 'ScrollLock'
const META = 'Meta'

var special = [
  SHIFT, CONTROL,
  ALT, PAUSE, CAPSLOCK, ESCAPE, PAGEUP, PAGEDOWN, END,
  HOME, ARROWLEFT, ARROWUP, ARROWRIGHT, ARROWDOWN,
  INSERT, DELETE, F1, F2, F3, F4, F5, F6, F7, F8,
  F9, F10, F11, F12, NUMLOCK, SCROLLLOCK, META
];

var current = '';

module.exports.add = function(key) {
  var isWord = false;
  var currentChunk;

  // This is really needed. Do it next.
  if(key === DELETE) {

  }

  if(isSpecial(key)) {
    return;
  }

  if(!isWhiteSpace(key)) {
    current += key;
    currentChunk = current;
  }
  else {
    isWord = true;
    currentChunk = current;
    current = '';
  }

  return getResponse(key, isWord, currentChunk)
};

var getResponse = function(character, isWord, currentChunk) {
  return {
    character: character,
    isWord: isWord,
    currentChunk: currentChunk
  };
};

var isWhiteSpace = function(key) {
  return key === BACKSPACE || key === TAB || key === ENTER || key === SPACE;
}

var isSpecial = function(key) {
  return _.contains(special, key);
}
