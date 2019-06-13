import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='radio-button-on'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z'/>
        <Svg.Path d='M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
