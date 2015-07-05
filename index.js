'use strict';

var c = require('./const');

/**
 * @param  {object} props
 * @param  {object} [styles]
 * @return {string}
 */
module.exports = function (props, styles) {
  var className = props[c.NAME];
  var prefix = props[c.ELEMENT]
    ? className + '__' + props[c.ELEMENT]
    : className + '-';

  var classes = [className];
  var mods = props[c.MODIFIER];

  for (var m in mods) {
    if (!mods[m]) {
      continue;
    }

    var name = prefix + '-' + m;
    if (typeof mods[m] !== 'boolean') {
      name += '-' + mods[m];
    }

    classes.push(name);
  }

  if (styles) {
    classes = classes.reduce(function (names, name) {
      styles[name] && names.push(styles[name]);
      return names;
    }, []);
  }

  return classes.join(' ');
};
