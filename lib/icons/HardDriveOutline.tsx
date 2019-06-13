import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='hard-drive'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path
          d='M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H5.62zM18 19H6a1 1 0 0 1-1-1v-5h14v5a1 1 0 0 1-1 1z'/>
        <Svg.Path d='M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z'/>
        <Svg.Circle cx='8' cy='16' r='1'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
