import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='question-mark'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(180 12 12)'
          opacity='0'
        />
        <Svg.Path
          d='M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z'/>
        <Svg.Circle cx='12' cy='19' r='1'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
