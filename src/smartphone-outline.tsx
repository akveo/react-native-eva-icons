import React from 'react';

import Svg from 'react-native-svg';

export const SmartphoneOutline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='smartphone'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(90 12 12)'
          opacity='0'
        />
        <Svg.Path d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z' />
        <Svg.Circle cx='12' cy='16.5' r='1.5' />
        <Svg.Path d='M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
