import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='behance'>
        <Svg.Rect width='24' height='24' opacity='0'/>
        <Svg.Path d='M14.76 11.19a1 1 0 0 0-1 1.09h2.06a1 1 0 0 0-1.06-1.09z'/>
        <Svg.Path d='M9.49 12.3H8.26v1.94h1c1 0 1.44-.33 1.44-1s-.46-.94-1.21-.94z'/>
        <Svg.Path d='M10.36 10.52c0-.53-.35-.85-.95-.85H8.26v1.74h.85c.89 0 1.25-.32 1.25-.89z'/>
        <Svg.Path
          d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM9.7 15.2H7V8.7h2.7c1.17 0 1.94.61 1.94 1.6a1.4 1.4 0 0 1-1.12 1.43A1.52 1.52 0 0 1 12 13.37c0 1.16-1 1.83-2.3 1.83zm3.55-6h3v.5h-3zM17 13.05h-3.3v.14a1.07 1.07 0 0 0 1.09 1.19.9.9 0 0 0 1-.63H17a2 2 0 0 1-2.17 1.55 2.15 2.15 0 0 1-2.36-2.3v-.44a2.11 2.11 0 0 1 2.28-2.25A2.12 2.12 0 0 1 17 12.58z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);
