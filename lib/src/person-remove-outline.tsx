import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='person-remove'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z'/>
        <Svg.Path d='M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z'/>
        <Svg.Path d='M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
