import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='upload'>
        <Svg.Rect
          width='24'
          height='24'
          transform='rotate(180 12 12)'
          opacity='0'
        />
        <Svg.Rect
          x='4'
          y='4'
          width='16'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(180 12 5)'
        />
        <Svg.Rect
          x='17'
          y='5'
          width='4'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(90 19 6)'
        />
        <Svg.Rect
          x='3'
          y='5'
          width='4'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(90 5 6)'
        />
        <Svg.Path
          d='M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z'/>
        <Svg.Path d='M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
