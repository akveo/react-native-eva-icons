import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='menu'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(180 12 12)'
          opacity='0'
        />
        <Svg.Rect x='3' y='11' width='18' height='2' rx='.95' ry='.95'/>
        <Svg.Rect x='3' y='16' width='18' height='2' rx='.95' ry='.95'/>
        <Svg.Rect x='3' y='6' width='18' height='2' rx='.95' ry='.95'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
