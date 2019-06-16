import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='thermometer-plus'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Rect x='2' y='5' width='6' height='2' rx='1' ry='1'/>
        <Svg.Rect
          x='2'
          y='5'
          width='6'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(-90 5 6)'
        />
        <Svg.Path
          d='M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
