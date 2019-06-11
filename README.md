# react-native-eva-icons

❤️ Clean and powerful [**Eva Icons**][link:eva-icons] implementation for **React Native** based on [react-native-svg][link:react-native-svg] elements.

## Installation

```bash
npm i react-native-eva-icons
```

This framework assumes you have already installed **react-native-svg**, but if not - you should [install it][link:react-native-svg:install] too.

## Usage

```tsx
import { Icon } from 'react-native-eva-icons';

export const GithubIcon = () => (
  <Icon name='github'/>
);
```

You can also use icons one by one, just import them using PascalCase:

```tsx
import GithubIcon from 'react-native-eva-icons/icons/Github';
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

[link:eva-icons]: https://github.com/akveo/eva-icons
[link:react-native-svg]: https://github.com/react-native-community/react-native-svg
[link:react-native-svg:install]: https://github.com/react-native-community/react-native-svg#installation
[link:react-native-svg:props]: https://github.com/react-native-community/react-native-svg#common-props
