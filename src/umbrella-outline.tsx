import React from 'react';

import Svg from 'react-native-svg';

export const UmbrellaOutline = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='umbrella'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2zm-7.94 9a8 8 0 0 1 15.88 0z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
