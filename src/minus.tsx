import React from 'react';

import Svg from 'react-native-svg';

export const Minus = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='minus'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(180 12 12)'
          opacity='0'
        />
        <Svg.Path d='M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
