import React from 'react';

import Svg from 'react-native-svg';

export const Checkmark = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='checkmark'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
