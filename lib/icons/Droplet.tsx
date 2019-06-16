import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24.2 24.2'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='droplet'>
        <Svg.Rect
          x='.1'
          y='.1'
          width='24'
          height='24'
          transform='rotate(.48 11.987 11.887)'
          opacity='0'
        />
        <Svg.Path
          d='M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
