import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import GithubIcon from 'react-native-eva-icons/icons/Github';

const Section: React.FC<TouchableWithoutFeedbackProps & { title: string }> = ({ title, ...props }) => (
  <View style={styles.showcaseContainer}>
  <Text>{title}</Text>
    <TouchableWithoutFeedback {...props} />
  </View>
);

export default (): React.ReactElement => {

  const zoomIconRef = React.useRef<Icon>(null);
  const pulseIconRef = React.useRef<Icon>(null);
  const shakeIconRef = React.useRef<Icon>(null);
  const infiniteAnimationIconRef = React.useRef<Icon>(null);

  const onInfiniteAnimationIconPress = (): void => {
    if (infiniteAnimationIconRef.current?.isAnimating()) {
      infiniteAnimationIconRef.current?.stopAnimation();
    } else {
      infiniteAnimationIconRef.current?.startAnimation();
    }
  };

  const onTestEndCallbackPress = (): void => {
    zoomIconRef.current?.startAnimation(() => {
      pulseIconRef.current?.startAnimation(() => {
        shakeIconRef.current?.startAnimation();
      });
    });
  };

  return (
    <View style={styles.container}>

      <Section title={'Default Icon\nIcons that are statically imported\nare not animateable'}>
        <GithubIcon {...styles.icon}/>
      </Section>

      <Section 
        title={'Zoom Animation\nPress to animate. Second press to stop'}
        onPress={() => zoomIconRef.current?.startAnimation()}>
        <Icon ref={zoomIconRef} {...styles.icon} name='maximize-outline' animation='zoom' />
      </Section>

      <Section 
        title={'Pulse Animation\nPress to animate'}
        onPress={() => pulseIconRef.current?.startAnimation()}>
        <Icon ref={pulseIconRef} {...styles.icon} name='activity-outline' animation='pulse' />
      </Section>

      <Section 
        title={'Shake Animation\nPress to animate'}
        onPress={() => shakeIconRef.current?.startAnimation()}>
        <Icon ref={shakeIconRef} {...styles.icon} name='shake' animation='shake' />
      </Section>
      
      <Section 
        title={'Infinite Animation\nPress to animate'}
        onPress={onInfiniteAnimationIconPress}>
        <Icon ref={infiniteAnimationIconRef} {...styles.icon} name='star' animationConfig={{ cycles: Infinity, useNativeDriver: true }} />
      </Section>

      <Section title={'Completion Callback\nPress to test callback for animation end'}>
        <Button title='TEST' onPress={onTestEndCallbackPress} />
      </Section>

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
    fill: 'black',
  },
});
