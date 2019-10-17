import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import GithubIcon from 'react-native-eva-icons/icons/Github';

export default () => {

  const zoomIconRef: React.RefObject<Icon> = React.createRef();
  const pulseIconRef: React.RefObject<Icon> = React.createRef();
  const shakeIconRef: React.RefObject<Icon> = React.createRef();
  const infiniteAnimationIconRef: React.RefObject<Icon> = React.createRef();

  const onZoomIconPress = (): void => {
    zoomIconRef.current.startAnimation();
  };

  const onPulseIconPress = (): void => {
    pulseIconRef.current.startAnimation();
  };

  const onShakeIconPress = (): void => {
    shakeIconRef.current.startAnimation();
  };

  const onInfiniteAnimationIconPress = (): void => {
    if (infiniteAnimationIconRef.current.isAnimating()) {
      infiniteAnimationIconRef.current.stopAnimation();
    } else {
      infiniteAnimationIconRef.current.startAnimation();
    }
  };

  const onTestEndCallbackPress = (): void => {
    zoomIconRef.current.startAnimation(() => {
      pulseIconRef.current.startAnimation(() => {
        shakeIconRef.current.startAnimation();
      });
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.showcaseContainer}>
        <Text>{'Default Icon\nIcons that are statically imported\nare not animateable'}</Text>
        <GithubIcon {...styles.icon}/>
      </View>

      <View style={styles.showcaseContainer}>
        <Text>{'Zoom Animation\nPress to animate. Second press to stop'}</Text>
        <TouchableWithoutFeedback onPress={onZoomIconPress}>
          <Icon ref={zoomIconRef} name='maximize-outline' animation='zoom' {...styles.icon}/>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.showcaseContainer}>
        <Text>{'Pulse Animation\nPress to animate'}</Text>
        <TouchableWithoutFeedback onPress={onPulseIconPress}>
          <Icon ref={pulseIconRef} name='activity' animation='pulse' {...styles.icon}/>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.showcaseContainer}>
        <Text>{'Shake Animation\nPress to animate'}</Text>
        <TouchableWithoutFeedback onPress={onShakeIconPress}>
          <Icon ref={shakeIconRef} name='shake' animation='shake' {...styles.icon}/>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.showcaseContainer}>
        <Text>{'Infinite Animation\nPress to start / end animation'}</Text>
        <TouchableWithoutFeedback onPress={onInfiniteAnimationIconPress}>
          <Icon ref={infiniteAnimationIconRef} name='star' animationConfig={{ cycles: Infinity }} {...styles.icon}/>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.showcaseContainer}>
        <Text>{"Completion Callback\nPress to test callback for animation end"}</Text>
        <Button title='TEST' onPress={onTestEndCallbackPress}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  showcaseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    width: 64,
    height: 64,
  },
});
