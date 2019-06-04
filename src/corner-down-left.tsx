import React from 'react';

import Svg from 'react-native-svg';

export const CornerDownLeft = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.1 24.1'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='corner-down-left'>
        <Svg.Rect
          x='.05'
          y='.05'
          width='24'
          height='24'
          transform='rotate(-89.76 12.05 12.05)'
          opacity='0'
        />
        <Svg.Path d='M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
