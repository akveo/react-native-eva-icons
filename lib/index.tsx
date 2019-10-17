import React from 'react';
import {
  Animated,
  ViewProps,
} from 'react-native';
import {
  SvgIcon,
  SvgIconProps,
} from './svgIcon.component';
import {
  AnimationConfig,
  getIconAnimation,
  IconAnimation,
  IconAnimationRegistry,
} from './animation';

export interface IconProps extends SvgIconProps {
  animation?: keyof IconAnimationRegistry;
  animationConfig?: AnimationConfig;
}

/**
 * @property name {string} - The name of icon. See the list of available icons https://akveo.github.io/eva-icons
 * @property animation {string} - The name of animation. Could be `zoom`, `pulse` or `shake`. Default is `zoom`
 * @property animationConfig {AnimationConfig} - Animation config including number of cycles to run. Extends Animated.AnimationConfig.
 *
 * @method startAnimation {void} - Starts the passed animation.
 * @method stopAnimation {void} - Stops the passed animation.
 * @method isAnimating {boolean} - Indicates if animation is currently running.
 */
export class Icon extends React.Component<IconProps> {

  static defaultProps: Partial<IconProps> = {
    animation: 'zoom',
  };

  private readonly animation: IconAnimation;

  constructor(props: IconProps) {
    super(props);
    this.animation = getIconAnimation(props.animation, props.animationConfig);
  }

  public componentWillUnmount(): void {
    this.animation.release();
  }

  /**
   * Starts the animation
   * @param callback {Animated.EndCallback} - function to execute on animation end.
   */
  public startAnimation = (callback?: Animated.EndCallback): void => {
    this.animation.start(callback);
  };

  /**
   * Stops the animation
   */
  public stopAnimation = (): void => {
    this.animation.stop();
  };

  /**
   * @returns true if animation is currently running
   */
  public isAnimating = (): boolean => {
    return this.animation.isAnimating();
  };

  public render(): React.ReactElement<ViewProps> {
    const { animation, animationConfig, ...svgIconProps } = this.props;

    return (
      <Animated.View {...this.animation.toProps()}>
        <SvgIcon {...svgIconProps} />
      </Animated.View>
    );
  }
}
