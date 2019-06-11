import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='toggle-left'>
        <Svg.Rect
          x='.02'
          y='.02'
          width='23.97'
          height='23.97'
          transform='rotate(179.92 12.002 11.998)'
          opacity='0'
        />
        <Svg.Path d='M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z' />
        <Svg.Path d='M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
