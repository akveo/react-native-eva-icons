import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='clipboard'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path
          d='M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z'/>
        <Svg.Rect x='7' y='2' width='10' height='6' rx='1' ry='1'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
