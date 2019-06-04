# react-native-eva-icons

❤️ Clean and powerful [**Eva Icons**][link:eva-icons] implementation for **React Native** based on [react-native-svg][link:react-native-svg] elements.

## Usage

```tsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github'/>
);
```

## Installation

This is Work In Progress package built with TypeScript 🤗.
For now, this is not available on any package manager like npm.
You can use it only with cloning original sources and linking it to your app.

## Customization

React Native Eva Icons are built with  **react-native-svg** elements. All of the components can accept the same properties as SVG elements.

For example, you can change icon fill color with the following code

```tsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github' fill='red'/>
);
```

## TODO

* There is a list of SVG attributes that are not supported by **react-native-svg**. To get more clean implementation, it should be replaced.

[link:eva-icons]: https://github.com/akveo/eva-icons
[link:react-native-svg]: https://github.com/react-native-community/react-native-svg
