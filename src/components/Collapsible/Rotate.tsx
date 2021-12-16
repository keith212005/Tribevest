import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';

// LOCAL IMPORTS
import { useToggle } from 'utils/Hooks/useToggle';

interface DefaultProps {
  inputRange?: Array<number>;
  outputRange?: Array<string>;
  children: any;
  onPress: () => void;
}

export const Rotate = (props: DefaultProps) => {
  const _rotate = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useToggle(false);
  const [startDeg, setStartDeg] = useState('180deg');
  const [endDeg, setEndDeg] = useState('0deg');
  const rotate = _rotate.interpolate({
    inputRange: props.inputRange ?? [0, 1],
    outputRange: props.outputRange ?? [startDeg, endDeg], // outputRange: ['0deg', '90deg'],
  });
  const animate = () => {
    _rotate.setValue(0);
    Animated.spring(_rotate, {
      toValue: 1,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  return (
    <TouchableOpacity
      onPress={() => {
        if (!props?.inputRange && !props?.outputRange) {
          animate();
          setToggle();
          setStartDeg(toggle ? '0deg' : '180deg');
          setEndDeg(toggle ? '180deg' : '0deg');
        }
        props.onPress();
      }}
    >
      <Animated.View style={[styles.box, { transform: [{ rotate }] }]}>
        {props.children}
      </Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
