(function (context) {
// -----------------------------------------------------------------------------

'use strict';

var id = '';
var dependencies = ['../xcase', 'actually', 'matches', 'criteria'];

function factory(xcase, actually, matches) {
  scope('`xcase.*()` String Conversion Tests',
  function () {
    var paramCaseString = 'invalid-case-exception';
    var i18nParamCaseString = 'ịnvαłið-çasë-éxceptiøи';

    var pascalCaseString = 'InvalidCaseException';
    var i18nPascalCaseString = 'ỊnvαłiðÇasëÉxceptiøи';

    var expected = {
      camel: 'invalidCaseException',
      constant: 'INVALID_CASE_EXCEPTION',
      dot: 'invalid.case.exception',
      header: 'Invalid-Case-Exception',
      param: 'invalid-case-exception',
      pascal: 'InvalidCaseException',
      path: 'invalid/case/exception',
      sentence: 'Invalid case exception',
      snake: 'invalid_case_exception',
      space: 'invalid case exception',
      title: 'Invalid Case Exception'
    };

    var i18nExpected = {
      camel: 'ịnvαłiðÇasëÉxceptiøи',
      constant: 'ỊNVΑŁIÐ_ÇASË_ÉXCEPTIØИ',
      dot: 'ịnvαłið.çasë.éxceptiøи',
      header: 'Ịnvαłið-Çasë-Éxceptiøи',
      param: 'ịnvαłið-çasë-éxceptiøи',
      pascal: 'ỊnvαłiðÇasëÉxceptiøи',
      path: 'ịnvαłið/çasë/éxceptiøи',
      sentence: 'Ịnvαłið çasë éxceptiøи',
      snake: 'ịnvαłið_çasë_éxceptiøи',
      space: 'ịnvαłið çasë éxceptiøи',
      title: 'Ịnvαłið Çasë Éxceptiøи'
    };

    test('`xcase.camel()` from param case.',
    function () {
      actually(matches, expected.camel, xcase.camel(paramCaseString));
    });

    test('`xcase.camel()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.camel, xcase.camel(i18nParamCaseString));
    });

    test('`xcase.camel()` from pascal case.',
    function () {
      actually(matches, expected.camel, xcase.camel(pascalCaseString));
    });

    test('`xcase.camel()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.camel, xcase.camel(i18nPascalCaseString));
    });

    test('`xcase.constant()` from param case.',
    function () {
      actually(matches, expected.constant, xcase.constant(paramCaseString));
    });

    test('`xcase.constant()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.constant,
          xcase.constant(i18nParamCaseString));
    });

    test('`xcase.constant()` from pascal case.',
    function () {
      actually(matches, expected.constant, xcase.constant(pascalCaseString));
    });

    test('`xcase.constant()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.constant,
          xcase.constant(i18nPascalCaseString));
    });

    test('`xcase.dot()` from param case.',
    function () {
      actually(matches, expected.dot, xcase.dot(paramCaseString));
    });

    test('`xcase.dot()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.dot, xcase.dot(i18nParamCaseString));
    });

    test('`xcase.dot()` from pascal case.',
    function () {
      actually(matches, expected.dot, xcase.dot(pascalCaseString));
    });

    test('`xcase.dot()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.dot, xcase.dot(i18nPascalCaseString));
    });

    test('`xcase.header()` from param case.',
    function () {
      actually(matches, expected.header, xcase.header(paramCaseString));
    });

    test('`xcase.header()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.header, xcase.header(i18nParamCaseString));
    });

    test('`xcase.header()` from pascal case.',
    function () {
      actually(matches, expected.header, xcase.header(pascalCaseString));
    });

    test('`xcase.header()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.header,
          xcase.header(i18nPascalCaseString));
    });

    test('`xcase.param()` from param case.',
    function () {
      actually(matches, expected.param, xcase.param(paramCaseString));
    });

    test('`xcase.param()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.param, xcase.param(i18nParamCaseString));
    });

    test('`xcase.param()` from pascal case.',
    function () {
      actually(matches, expected.param, xcase.param(pascalCaseString));
    });

    test('`xcase.param()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.param, xcase.param(i18nPascalCaseString));
    });

    test('`xcase.pascal()` from param case.',
    function () {
      actually(matches, expected.pascal, xcase.pascal(paramCaseString));
    });

    test('`xcase.pascal()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.pascal, xcase.pascal(i18nParamCaseString));
    });

    test('`xcase.pascal()` from pascal case.',
    function () {
      actually(matches, expected.pascal, xcase.pascal(pascalCaseString));
    });

    test('`xcase.pascal()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.pascal,
          xcase.pascal(i18nPascalCaseString));
    });

    test('`xcase.path()` from param case.',
    function () {
      actually(matches, expected.path, xcase.path(paramCaseString));
    });

    test('`xcase.path()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.path, xcase.path(i18nParamCaseString));
    });

    test('`xcase.path()` from pascal case.',
    function () {
      actually(matches, expected.path, xcase.path(pascalCaseString));
    });

    test('`xcase.path()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.path, xcase.path(i18nPascalCaseString));
    });

    test('`xcase.sentence()` from param case.',
    function () {
      actually(matches, expected.sentence, xcase.sentence(paramCaseString));
    });

    test('`xcase.sentence()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.sentence,
          xcase.sentence(i18nParamCaseString));
    });

    test('`xcase.sentence()` from pascal case.',
    function () {
      actually(matches, expected.sentence, xcase.sentence(pascalCaseString));
    });

    test('`xcase.sentence()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.sentence,
          xcase.sentence(i18nPascalCaseString));
    });

    test('`xcase.snake()` from param case.',
    function () {
      actually(matches, expected.snake, xcase.snake(paramCaseString));
    });

    test('`xcase.snake()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.snake, xcase.snake(i18nParamCaseString));
    });

    test('`xcase.snake()` from pascal case.',
    function () {
      actually(matches, expected.snake, xcase.snake(pascalCaseString));
    });

    test('`xcase.snake()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.snake, xcase.snake(i18nPascalCaseString));
    });

    test('`xcase.space()` from param case.',
    function () {
      actually(matches, expected.space, xcase.space(paramCaseString));
    });

    test('`xcase.space()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.space, xcase.space(i18nParamCaseString));
    });

    test('`xcase.space()` from pascal case.',
    function () {
      actually(matches, expected.space, xcase.space(pascalCaseString));
    });

    test('`xcase.space()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.space, xcase.space(i18nPascalCaseString));
    });

    test('`xcase.title()` from param case.',
    function () {
      actually(matches, expected.title, xcase.title(paramCaseString));
    });

    test('`xcase.title()` from param case (i18n).',
    function () {
      actually(matches, i18nExpected.title, xcase.title(i18nParamCaseString));
    });

    test('`xcase.title()` from pascal case.',
    function () {
      actually(matches, expected.title, xcase.title(pascalCaseString));
    });

    test('`xcase.title()` from pascal case (i18n).',
    function () {
      actually(matches, i18nExpected.title, xcase.title(i18nPascalCaseString));
    });
  });
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
