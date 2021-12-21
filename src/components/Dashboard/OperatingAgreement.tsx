/* eslint-disable no-undef */

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { FastImg } from '@components';
import { color, images, scale, useGlobalStyles } from '@resources';
import { navigate } from '@navigator';

export const OperatingAgreementButton = () => {
  const globalStyles = useGlobalStyles();

  const onPress = () => navigate('Voting');

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={177}
        angleCenter={{ x: 0.2, y: 0.8 }}
        colors={color.primaryGradiant}
        style={styles.linearGradient}
      >
        {FastImg(images.document_white, 24)}
        <View
          style={{
            flex: 8,
            marginLeft: 20,
          }}
        >
          <Text
            style={[globalStyles.textStyle('_14', 'white', 'NUNITO_EXTRABOLD')]}
          >
            {loc('OPERATING_AGREEMENT')}
          </Text>
          <Text
            style={[globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR')]}
          >
            {loc('NEW_MEMBERS')}
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={styles.viewButtonStyle} onPress={onPress}>
            <Text
              style={[
                globalStyles.textStyle('_14', 'white', 'NUNITO_EXTRABOLD'),
              ]}
            >
              {loc('VIEW')}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(56),
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
  },
  viewButtonStyle: {
    backgroundColor: '#518DFA',
    height: scale(30),
    width: scale(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
    elevation: scale(10),
  },
});
