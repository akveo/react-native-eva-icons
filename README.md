# react-native-eva-icons [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />][link:eva] [![Build Status][badge:github-actions]][link:github-actions] [![Coverage Status][badge:coveralls]][link:coveralls]

❤️ Clean and powerful [**Eva Icons**][link:eva-icons] implementation for **React Native** based on [react-native-svg][link:react-native-svg] elements. [Demo][link:demo]

[<img src="https://i.imgur.com/cNC9jXj.png" />](./README.md)

## Installation

```bash
npm i react-native-eva-icons
# Using Yarn?
# yarn add react-native-eva-icons
```

This framework assumes you have already installed **react-native-svg**, but if not - you should [install it][link:react-native-svg:install] too.

## Usage

Icons can be used by it's name using only `Icon` component.

```jsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github' width={48} height={48} fill='green' />
);
```

You can also use a direct imports.

```jsx
import GithubIcon from 'react-native-eva-icons/icons/Github';

export const GithubIcon = () => (
  <GithubIcon width={48} height={48} fill='green' />
);
```

## Customization

React Native Eva Icons are built with  **react-native-svg** elements. All of the components can accept [the same properties as SVG elements][link:react-native-svg:props].

For example, you can change icon fill color with the following code

```tsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github' fill='green' />
);
```

## Animations

Implements original Eva Icons animations. Try [demo on Snack][link:demo] for review!

```tsx
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => {

  const iconRef = React.useRef(null);

  const onIconPress = () => {
    iconRef.current?.startAnimation();
  };

  return (
    <TouchableWithoutFeedback onPress={onIconPress}>
      <Icon ref={iconRef} animation='pulse' name='activity' fill='green' />
    </TouchableWithoutFeedback>
  );
};
```

## Demo

Try it on [Snack][link:demo]!

## Where is icons source code?

React Native Eva Icons sources are generated with [ts-node scripts](./scripts/ts-node), so there is no need to track them in default branch of the repo. But if you don't trust CI and want to review generated sources, take a look at [bundle branch][link:build-branch].

## How can I support this project?

Any way of supporting gives me a ton of motivation to create other beautiful Open Source things

- Star this repo :star:
- Submit new issues, open a pull requests :wrench:
- Follow me on [Twitter][link:twitter] :smirk_cat:

[link:build-branch]: https://github.com/artyorsh/react-native-eva-icons/tree/bundle/v1.0.0-beta.1
[link:demo]: https://snack.expo.io/@art.yorsh/react-native-eva-icons-playground
[link:eva-icons]: https://github.com/akveo/eva-icons
[link:react-native-svg]: https://github.com/react-native-community/react-native-svg
[link:react-native-svg:install]: https://github.com/react-native-community/react-native-svg#installation
[link:react-native-svg:props]: https://github.com/react-native-community/react-native-svg#common-props
[link:github-actions]: https://github.com/artyorsh/react-native-eva-icons/actions
[link:coveralls]: https://coveralls.io/github/artyorsh/react-native-eva-icons?branch=master
[link:eva]: https://eva.design
[link:twitter]: https://twitter.com/artyorsh
[badge:github-actions]: https://github.com/artyorsh/react-native-eva-icons/workflows/Build/badge.svg
[badge:coveralls]: https://coveralls.io/repos/github/artyorsh/react-native-eva-icons/badge.svg?branch=master
