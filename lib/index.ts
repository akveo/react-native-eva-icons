import React from 'react';
import { SvgProps } from 'react-native-svg';
import { findIconByName } from './src';

export const Icon = (props: SvgProps & { name: string }): React.ReactElement<SvgProps> => {
  const { name, ...svgProps } = props;

  return React.createElement(findIconByName(name), svgProps);
};
