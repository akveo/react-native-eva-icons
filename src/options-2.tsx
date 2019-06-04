import React from 'react';

import Svg from 'react-native-svg';

export const Options2 = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='options-2'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(90 12 12)'
          opacity='0'
        />
        <Svg.Path d='M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9z' />
        <Svg.Path d='M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2z' />
        <Svg.Path d='M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
