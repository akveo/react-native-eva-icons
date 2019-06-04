import React from 'react';

import Svg from 'react-native-svg';

export const MicOff = (
  props?: Svg.SvgProps,
): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='mic-off'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75' />
        <Svg.Path d='M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z' />
        <Svg.Path d='M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z' />
        <Svg.Path d='M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z' />
        <Svg.Path d='M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z' />
      </Svg.G>
    </Svg.G>
  </Svg>
);
