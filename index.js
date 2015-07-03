'use strict';

var c = require('./const');

/**
 * @param  {object} props
 * @param  {object} styles
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

    classes.push(prefix + '-' + m + (typeof mods[m] !== 'boolean'
      ? '-' + mods[m]
      : ''));
  }

  classes = classes.reduce(function (names, name) {
    styles[name] && names.push(styles[name]);
    return names;
  }, []);

  return classes.join(' ');
};
