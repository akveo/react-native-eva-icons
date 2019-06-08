import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='phone-missed'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path
          d='M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z'/>
        <Svg.Path
          d='M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
