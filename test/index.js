describe('classname-manipulator', function () {
  'use strict';

  var assert = require('assert');
  var cm = require('..');

  describe('Testing the "props" argument transformation', function () {
    it('button', function () {
      var props = {
        className: 'button'
      };

      assert.equal(cm(props), 'button');
    });

    it('button button--action', function () {
      var props = {
        className: 'button',
        theme: {action: true}
      };

      assert.equal(cm(props), 'button button--action');
    });

    it('button button--size-m', function () {
      var props = {
        className: 'button',
        theme: {size: 'm'}
      };

      assert.equal(cm(props), 'button button--size-m');
    });

    it('button button--action button--size-m', function () {
      var props = {
        className: 'button',
        theme: {action: true, size: 'm'}
      };

      assert.equal(cm(props), 'button button--action button--size-m');
    });

    it('input__placeholder', function () {
      var props = {
        className: 'input',
        childName: 'placeholder'
      };

      assert.equal(cm(props), 'input__placeholder');
    });

    it('input__placeholder input__placeholder-empty', function () {
      var props = {
        className: 'input',
        childName: 'placeholder',
        theme: {empty: true}
      };

      assert.equal(cm(props), 'input__placeholder input__placeholder-empty');
    });

    it('input__placeholder input__placeholder-size-m', function () {
      var props = {
        className: 'input',
        childName: 'placeholder',
        theme: {size: 'm'}
      };

      assert.equal(cm(props), 'input__placeholder input__placeholder-size-m');
    });
  });

  describe('Testing the "styles" argument transformation', function () {
    it('___button', function () {
      var props = {className: 'button'};
      var styles = {button: '___button'};

      assert.equal(cm(props, styles), '___button');
    });

    it('___button with theme', function () {
      var props = {
        className: 'button',
        theme: {action: true}
      };
      var styles = {button: '___button'};

      assert.equal(cm(props, styles), '___button');
    });

    it('___button ___button--action', function () {
      var props = {
        className: 'button',
        theme: {action: true}
      };
      var styles = {button: '___button', 'button--action': '___button--action'};

      assert.equal(cm(props, styles), '___button ___button--action');
    });

    it('___button--action', function () {
      var props = {
        className: 'button',
        theme: {action: true}
      };
      var styles = {'button--action': '___button--action'};

      assert.equal(cm(props, styles), '___button--action');
    });
  });
});
