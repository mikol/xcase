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

var id = 'xcase';
var dependencies = [];

function factory() {
  /* jscs:disable maximumLineLength */
  var LC = 'a-zß-öǿø-ÿа-яα-ωāăąćċđēęğġĩīıĳŀłńōőœśşšţũūűŵŷźżžơưșț̃ḃḋḟṁṡṫẁẃạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ';
  var UC = 'A-ZÀ-ÖǾØ-ÞŸА-ЯΑ-ΡΣ-ΩĀĂĄĆĊĐĒĘĞĠĨĪİĲĿŁŃŌŐŒŚŞŠŢŨŪŰŴŶŹŻŽƠƯȘȚ̃ḂḊḞṀṠṪẀẂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸ';
  var CASE_SEPARATOR_RE = new RegExp('([' + LC + '])([' + UC + '])', 'g');
  var NON_ALPHANUMERIC_RE = new RegExp('[^\\d' + LC + UC + ']+', 'g');
  var NUMBERS_RE = /(\d) (?=\d)/g;
  var NUMBERS_LEFT_RE = new RegExp('([' + LC + UC + '])(\\d+)', 'g');
  var NUMBERS_RIGHT_RE = new RegExp('(\\d+)([' + LC + UC + '])', 'g');
  var WORDS_RE = / (.)/g;
  /* jscs:enable maximumLineLength */

  var uc = ''.toUpperCase.call.bind(''.toUpperCase);

  function identity(string) {
    return string;
  }

  function uci(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  function convert(string, separator, initial, each) {
    return initial(space(string))
      .replace(WORDS_RE, function (m, $1) {
        return separator + each($1);
      });
  }

  function camel(string) {
    return convert(string, '', identity, uc);
  }

  function constant(string) {
    return uc(space(string, '_'));
  }

  function dot(string) {
    return space(string, '.');
  }

  function header(string) {
    return convert(string, '-', uci, uc);
  }

  function param(string) {
    return space(string, '-');
  }

  function pascal(string) {
    return convert(string, '', uci, uc);
  }

  function path(string) {
    return space(string, '/');
  }

  function sentence(string) {
    return convert(string, ' ', uci, identity);
  }

  function snake(string) {
    return space(string, '_');
  }

  function space(string, separator) {
    if (string == null) {
      return '';
    }

    if (separator == null) {
      separator = ' ';
    }

    var replacement = '$1' + separator + '$2';
    return ('' + string)
      .replace(CASE_SEPARATOR_RE, replacement)
      .replace(NON_ALPHANUMERIC_RE, separator)
      .replace(NUMBERS_LEFT_RE, replacement)
      .replace(NUMBERS_RIGHT_RE, replacement)
      .replace(NUMBERS_RE, '$1_')
      .replace(/^\s+|\s+$/, '')
      .toLowerCase();
  }

  function title(string) {
    return convert(string, ' ', uci, uc);
  }

  return {
    camel: camel,
    constant: constant,
    dot: dot,
    header: header,
    param: param,
    pascal: pascal,
    path: path,
    sentence: sentence,
    snake: snake,
    space: space,
    title: title
  };
}

// -----------------------------------------------------------------------------
var n = dependencies.length;
var o = 'object';
var r = /([^-_\s])[-_\s]+([^-_\s])/g;
function s(m, a, b) { return a + b.toUpperCase(); }
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
  context[id.replace(r, s)] = factory.apply(context, dependencies);
}
}(this));
