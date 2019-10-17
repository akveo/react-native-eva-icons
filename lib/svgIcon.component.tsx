import * as React from 'react';
import { SvgProps } from 'react-native-svg';
import { findIconByName } from './icons';

export interface SvgIconProps extends SvgProps {
  name: string;
}

export type SvgIconElement = React.ReactElement<SvgIconProps>;

export const SvgIcon = (props: SvgIconProps): React.ReactElement<SvgProps> => {
  const { name, ...svgProps } = props;

  return React.createElement(findIconByName(name), svgProps);
};
