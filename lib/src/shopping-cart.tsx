import React from 'react';
import Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='shopping-cart'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path
          d='M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z'/>
        <Svg.Circle cx='7.5' cy='19.5' r='1.5'/>
        <Svg.Circle cx='17.5' cy='19.5' r='1.5'/>
      </Svg.G>
    </Svg.G>
  </Svg>
);
