import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='toggle-right'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Circle cx='15' cy='12' r='1'/>
        <Svg.Path d='M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
