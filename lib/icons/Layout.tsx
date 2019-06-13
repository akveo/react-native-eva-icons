import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='layout'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z'/>
        <Svg.Path d='M3 10v8a3 3 0 0 0 3 3h5V10z'/>
        <Svg.Path d='M13 10v11h5a3 3 0 0 0 3-3v-8z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
