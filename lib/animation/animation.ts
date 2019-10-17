import { Animated } from 'react-native';

export const DEFAULT_CONFIG: AnimationConfig = {
  cycles: 1,
  useNativeDriver: true,
};

/**
 * @property cycles - number of animation cycles. `Infinity` or `-1` for infinite
 */
export interface AnimationConfig extends Animated.AnimationConfig {
  cycles?: number;
}

/**
 * Base animation class. Creates `Animated.Value` and maps it to props of `Animated.View`
 */
export abstract class Animation<C extends AnimationConfig, R> {

  protected abstract animation: Animated.CompositeAnimation;
  protected counter: number = 0;
  protected endCallback: Animated.EndCallback;
  protected running: boolean = false;
  protected config: C;

  public abstract toProps(): R;

  constructor(config?: C) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  /**
   * Starts the animation
   * @param callback {Animated.EndCallback} - function to execute on animation end.
   */
  public start(callback?: Animated.EndCallback): void {
    this.endCallback = callback;
    this.running = true;

    this.animation.start(this.onAnimationEnd);
  }

  /**
   * Stops the animation
   */
  public stop(): void {
    this.running = false;

    this.animation.stop();
  }

  /**
   * @returns true if animation is currently running
   */
  public isAnimating(): boolean {
    return this.running;
  }

  public release(): void {
    this.stop();
  }

  /**
   * Default animation completion callback.
   * Will run animation again if it is not stopped or it should stop regarding to `cycles` property
   */
  protected onAnimationEnd = (result: Animated.EndResult): void => {
    this.counter += 1;
    if (this.counter === this.config.cycles) {
      this.stop();
    }
    if (this.running) {
      this.start(this.endCallback);
    }
    if (!this.running) {
      this.counter = 0;
      this.endCallback && this.endCallback(result);
      this.endCallback = null;
    }
  };
}
