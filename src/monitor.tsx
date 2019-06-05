import React from 'react';
import Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='monitor'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3z'/>
        <Svg.Path d='M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z'/>
      </Svg.G>
    </Svg.G>
  </Svg>
);
