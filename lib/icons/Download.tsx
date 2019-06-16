import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='download'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Rect x='4' y='18' width='16' height='2' rx='1' ry='1'/>
        <Svg.Rect
          x='3'
          y='17'
          width='4'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(-90 5 18)'
        />
        <Svg.Rect
          x='17'
          y='17'
          width='4'
          height='2'
          rx='1'
          ry='1'
          transform='rotate(-90 19 18)'
        />
        <Svg.Path
          d='M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z'/>
        <Svg.Path d='M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
