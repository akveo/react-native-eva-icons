import React from 'react';

import Svg from 'react-native-svg';

export const Email = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='email'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
