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
import { color, images, useGlobalStyles } from '@resources';

export const OperatingAgreementButton = () => {
  const globalStyles = useGlobalStyles();

  console.log('rendering OperatingAgreementButton.tsx');

  return (
    <Pressable style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
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
          <TouchableOpacity style={styles.viewButtonStyle}>
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
    height: 56,
    width: '100%',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  viewButtonStyle: {
    backgroundColor: '#518DFA',
    height: 40,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
});
