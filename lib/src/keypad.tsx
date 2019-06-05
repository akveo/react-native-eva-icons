import React from 'react';
import Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='keypad'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z'/>
        <Svg.Path d='M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
        <Svg.Path d='M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z'/>
      </Svg.G>
    </Svg.G>
  </Svg>
);
