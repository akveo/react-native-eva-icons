# react-native-eva-icons [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />][link:eva] [![Build Status][badge:travis-ci]][link:travis-ci] [![Coverage Status][badge:coveralls]][link:coveralls]

❤️ Clean and powerful [**Eva Icons**][link:eva-icons] implementation for **React Native** based on [react-native-svg][link:react-native-svg] elements.

## Installation

```bash
npm i react-native-eva-icons
```

This framework assumes you have already installed **react-native-svg**, but if not - you should [install it][link:react-native-svg:install] too.

## General Usage

```jsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github' width={48} height={48}/>
);
```

## Direct Usage

```jsx
import GithubIcon from 'react-native-eva-icons/icons/Github';

export const GithubIcon = () => (
  <GithubIcon width={48} height={48}/>
);
```

## Customization

React Native Eva Icons are built with  **react-native-svg** elements. All of the components can accept [the same properties as SVG elements][link:react-native-svg:props].

For example, you can change icon fill color with the following code

```tsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github' fill='red'/>
);
```

## Where is icons source code?

React Native Eva Icons sources are generated with [ts-node scripts](./scripts/ts-node), so there is no need to track them in default branch of the repo. But if you don't trust CI and want to review generated sources, take a look at [bundle branch][link:build-branch].

[link:build-branch]: https://github.com/artyorsh/react-native-eva-icons/tree/bundle/v1.0.0-beta.1
[link:eva-icons]: https://github.com/akveo/eva-icons
[link:react-native-svg]: https://github.com/react-native-community/react-native-svg
[link:react-native-svg:install]: https://github.com/react-native-community/react-native-svg#installation
[link:react-native-svg:props]: https://github.com/react-native-community/react-native-svg#common-props
[link:travis-ci]: https://travis-ci.com/artyorsh/react-native-eva-icons
[link:coveralls]: https://coveralls.io/github/artyorsh/react-native-eva-icons?branch=master
[link:eva]: https://eva.design
[badge:travis-ci]: https://travis-ci.com/artyorsh/react-native-eva-icons.svg?branch=master
[badge:coveralls]: https://coveralls.io/repos/github/artyorsh/react-native-eva-icons/badge.svg?branch=master
