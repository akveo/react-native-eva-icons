import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='more-horizotnal'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Circle cx='12' cy='12' r='2'/>
        <Svg.Circle cx='19' cy='12' r='2'/>
        <Svg.Circle cx='5' cy='12' r='2'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
