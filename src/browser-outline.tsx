import React from 'react';

import Svg from 'react-native-svg';

export const BrowserOutline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='browser'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z' />
        <Svg.Circle cx='8' cy='7.03' r='1' />
        <Svg.Circle cx='12' cy='7.03' r='1' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
