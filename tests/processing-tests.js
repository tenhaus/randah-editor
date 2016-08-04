var Processing = require('../imports/lib/processing');

describe('Tests editor input', function() {

  it('Should know what a word is', function() {
    var result = Processing.add('w');
    console.log(result);

    result = Processing.add('o');
    console.log(result);

    result = Processing.add('r');
    console.log(result);

    result = Processing.add('d');
    console.log(result);

    result = Processing.add(' ');
    console.log(result);
  });

  it('Should do somethingt when the word is only white space', function() {
  });

  it('Should not process meta and alt keys', function() {
  });

});
