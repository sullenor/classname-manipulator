classname-manipulator
=====================

A simple javascript utility for building classNames. It's like [classnames](https://www.npmjs.com/package/classnames) utility, however it allows you to use bem-naming notation and [css-modules](https://github.com/css-modules/css-modules).

## Usage

This utility was designed to be used with React components and helps you to build classNames for the components in an easier way. It uses certain properties: `className`, `childName`, `theme`.

Plain example:

```javascript
'use strict';

var cm = require('classname-manipulator');

var props = {
  className: 'button',
  theme: {action: true}
};

cm(props); // 'button button--action'
```

Using react and css-modules:

```jsx
'use strict';

import cm from 'classname-manipulator';
import styles from './Button.css';

class Button {
  render() {
    var classes = cm(this.props, styles);
    return (
      <Button className={classes}>
        {this.props.children}
      </Button>
    );
  }
}
```
