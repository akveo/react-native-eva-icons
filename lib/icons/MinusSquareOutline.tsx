import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='minus-square'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z' />
        <Svg.Path d='M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z' />
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
