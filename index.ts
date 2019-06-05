import React from 'react';
import Svg from 'react-native-svg';
import { findIconByName } from './src';

interface Props extends Svg.SvgProps {
  name: string;
}

export const Icon = (props?: Props): React.ReactElement<Props> => {
  const { name, ...svgProps } = props;

  return React.createElement(findIconByName(name), svgProps);
};
