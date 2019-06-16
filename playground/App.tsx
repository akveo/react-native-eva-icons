import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import GithubIcon from 'react-native-eva-icons/icons/Github';

export default () => (
  <View style={styles.container}>
    <Text>{"Try set 'star' to the Icon 'name' property"}</Text>
    <Icon name='github' {...styles.icon}/>
    <GithubIcon {...styles.icon}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: 64,
    height: 64,
  },
});
