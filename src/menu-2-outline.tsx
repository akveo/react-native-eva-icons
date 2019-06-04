import React from 'react';

import Svg from 'react-native-svg';

export const Menu2Outline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='menu-2'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(180 12 12)'
          opacity='0'
        />
        <Svg.Circle cx='4' cy='12' r='1' />
        <Svg.Rect x='7' y='11' width='14' height='2' rx='.94' ry='.94' />
        <Svg.Rect x='3' y='16' width='18' height='2' rx='.94' ry='.94' />
        <Svg.Rect x='3' y='6' width='18' height='2' rx='.94' ry='.94' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
