import React from 'react';
import Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='arrow-circle-right'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(-90 12 12)'
          opacity='0'
        />
        <Svg.Path
          d='M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69l2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z'/>
      </Svg.G>
    </Svg.G>
  </Svg>
);
