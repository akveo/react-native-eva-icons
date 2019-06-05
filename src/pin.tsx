import React from 'react';
import Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='pin'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Circle cx='12' cy='9.5' r='1.5'/>
        <Svg.Path
          d='M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z'/>
      </Svg.G>
    </Svg.G>
  </Svg>
);
