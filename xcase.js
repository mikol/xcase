/**
 * Convert Afrikaans, Albanian, Basque, Breton, Catalan, Corsican, Danish,
 * Dutch, English, Estonian, Faroese, Finnish, French, Galician, German, Greek,
 * Guarani, Hungarian, Icelandic, Indonesian, Irish, Italian, Kurdish, Latin,
 * Leonese, Luxembourgish, Malay, Manx, Māori, Norwegian, Occitan, Polish,
 * Portuguese, Rhaeto-Romanic, Romanian, Russian, Scottish Gaelic, Spanish,
 * Swahili, Swedish, Turkish, Vietnamese, Walloon, or Welsh strings between
 * `camel`, `constant`, `dot`, `header`, `param`, `pascal`, `path`, `sentence`,
 * `snake`, `space`, and `title` case.
 */

(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var dependencies = [];

function factory() {
  /* jscs:disable maximumLineLength */
  var LC = 'a-zß-öǿø-ÿа-яα-ωāăąćċđēęğġĩīıĳŀłńōőœśşšţũūűŵŷźżžơưșț̃ḃḋḟṁṡṫẁẃạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ';
  var UC = 'A-ZÀ-ÖǾØ-ÞŸА-ЯΑ-ΡΣ-ΩĀĂĄĆĊĐĒĘĞĠĨĪİĲĿŁŃŌŐŒŚŞŠŢŨŪŰŴŶŹŻŽƠƯȘȚ̃ḂḊḞṀṠṪẀẂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸ';
  var CASE_SEPARATOR_RE = new RegExp('([' + LC + '])([\\d+' + UC + '])', 'g');
  var NON_ALPHANUMERIC_RE = new RegExp('[^\\d' + LC + UC + ']+', 'g');
  var NUMBER_LEADING_RE = new RegExp('(\\d+)([' + LC + UC + '])', 'g');
  var NUMBER_SEPARATOR_RE = /(\d) (?=\d)/g;
  /* jscs:enable maximumLineLength */

  var ALL = /./g;
  var CAMEL = / ./g;
  var LOWER = null;
  var SENTENCE = /^./;
  var TITLE = /^.| ./g;

  function xcase(string, separator, caps) {
    if (string == null) {
      return '';
    }

    var output = ('' + string)
      .replace(CASE_SEPARATOR_RE, '$1 $2')
      .replace(NON_ALPHANUMERIC_RE, ' ')
      .replace(NUMBER_LEADING_RE, '$1 $2')
      .replace(NUMBER_SEPARATOR_RE, '$1_')
      .replace(/^\s+|\s+$/, '')
      .toLowerCase();

    if (caps) {
      if (caps === ALL) {
        output = output.toUpperCase();
      } else {
        output = output.replace(caps, function (m) {
          return m.toUpperCase();
        });
      }
    }

    return separator != null ? output.replace(/ /g, separator) : output;
  }

  function f(separator, caps) {
    if (typeof separator !== 'string') {
      caps = separator;
      separator = null;
    }

    return function (string) {
      return xcase(string, separator, caps);
    };
  }

  xcase.ALL = ALL;
  xcase.CAMEL = CAMEL;
  xcase.LOWER = LOWER;
  xcase.SENTENCE = SENTENCE;
  xcase.TITLE = TITLE;

  xcase.factory = f;

  xcase.camel = f('', CAMEL);
  xcase.constant = f('_', ALL);
  xcase.dot = f('.');
  xcase.header = f('-', TITLE);
  xcase.param = f('-');
  xcase.pascal = f('', TITLE);
  xcase.path = f('/');
  xcase.sentence = f(SENTENCE);
  xcase.snake = f('_');
  xcase.space = xcase;
  xcase.title = f(TITLE);

  return xcase;
}

// -----------------------------------------------------------------------------
var n = dependencies.length;
var o = 'object';
context = typeof global === o ? global : typeof window === o ? window : context;
if (typeof define === 'function' && define.amd) {
  define(dependencies, function () {
    return factory.apply(context, [].slice.call(arguments));
  });
} else if (typeof module === o && module.exports) {
  for (; n--;) { dependencies[n] = require(dependencies[n]); }
  module.exports = factory.apply(context, dependencies);
} else {
  for (; n--;) { dependencies[n] = context[dependencies[n]]; }
  context.xcase = factory.apply(context, dependencies);
}
}(this));
