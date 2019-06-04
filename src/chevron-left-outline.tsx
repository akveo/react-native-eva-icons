import React from 'react';

import Svg from 'react-native-svg';

export const ChevronLeftOutline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='chevron-left'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(90 12 12)'
          opacity='0'
        />
        <Svg.Path d='M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
