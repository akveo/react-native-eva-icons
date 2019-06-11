import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='shield'>
        <Svg.Rect width='24' height='24' opacity='0' />
        <Svg.Path d='M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25zm0-17.7L5 8.09v.14a13.15 13.15 0 0 0 6.7 11.45l.3.17.3-.17A13.15 13.15 0 0 0 19 8.23v-.14z' />
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
