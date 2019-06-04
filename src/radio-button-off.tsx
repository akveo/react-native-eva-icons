import React from 'react';

import Svg from 'react-native-svg';

export const RadioButtonOff = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='radio-button-off'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
