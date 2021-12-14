import { color } from '@resources';
import React, { useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface DefaultProps {
  onPress: (x: boolean) => void;
}

export const CustomSwitch = (props: DefaultProps) => {
  const [toggleActive, setToggle] = useState(false);
  return (
    <View style={styles.constainer}>
      <TouchableOpacity
        style={[styles.toggleContainer]}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setToggle(!toggleActive);
          props.onPress(!toggleActive);
        }}
        activeOpacity={1}
      >
        <LinearGradient
          useAngle={true}
          angle={179}
          angleCenter={{ x: 0.2, y: 0.8 }}
          colors={color.primaryGradiant}
          style={[
            styles.toggleBtn,
            { alignSelf: toggleActive ? 'flex-end' : 'flex-start' },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  toggleContainer: {
    height: 30,
    width: 50,
    borderRadius: 60,
    padding: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: '#E7ECFF',
  },
  toggleBtn: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
  },
});
