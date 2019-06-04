import React from 'react';

import Svg from 'react-native-svg';

export const DiagonalArrowRightDown = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='diagonal-arrow-right-down'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(-90 12 12)'
          opacity='0'
        />
        <Svg.Path d='M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
