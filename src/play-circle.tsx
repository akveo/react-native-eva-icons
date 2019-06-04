import React from 'react';

import Svg from 'react-native-svg';

export const PlayCircle = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='play-circle'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Polygon points='11.5 14.6 14.31 12 11.5 9.4 11.5 14.6' />
        <Svg.Path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45 1.68 1.68 0 0 1-.69-.15 1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
