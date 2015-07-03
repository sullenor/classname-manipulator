describe('classname-manipulator', function () {
  'use strict';

  var assert = require('assert');
  var cm = require('..');

  it('button', function () {
    var props = {className: 'button'};
    var styles = {button: 'button'};
    assert(cm(props, styles), 'button');
  });

  it('button--action', function () {
    var props = {className: 'button', theme: {action: true}};
    var styles = {'button--action': 'button--action'};
    assert(cm(props, styles), 'button--action');
  });

  it('button--theme-action', function () {
    var props = {className: 'button', theme: {theme: 'action'}};
    var styles = {'button--theme-action': 'button--theme-action'};
    assert(cm(props, styles), 'button--theme-action');
  });
});
