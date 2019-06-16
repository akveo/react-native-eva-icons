import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='briefcase'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path
          d='M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z'/>
        <Svg.Path d='M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z'/>
        <Svg.Path d='M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
