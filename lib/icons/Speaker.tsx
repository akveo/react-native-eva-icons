import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='speaker'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(90 12 12)'
          opacity='0'
        />
        <Svg.Circle cx='12' cy='15.5' r='1.5' />
        <Svg.Circle cx='12' cy='8' r='1' />
        <Svg.Path d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19z' />
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
