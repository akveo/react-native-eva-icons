import React from 'react';

import Svg from 'react-native-svg';

export const PersonRemove = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='person-remove'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z' />
        <Svg.Path d='M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z' />
        <Svg.Path d='M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
