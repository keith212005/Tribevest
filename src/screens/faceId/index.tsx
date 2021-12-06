/* eslint-disable no-undef */
import React from 'react';
import { Alert } from 'react-native';

// THIRD PARTY IMPORTS
import {
  requestMultiple,
  PERMISSIONS,
  openSettings,
} from 'react-native-permissions';
import { useTheme } from '@react-navigation/native';
import ReactNativeBiometrics from 'react-native-biometrics';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { styles } from './style';
import { navigationRef, resetNavigation } from '@navigator';
import { FastImg } from '@components';
import { images } from '@resources';

export const FaceId = () => {
  const { colors } = useTheme() as unknown as CustomTheme;

  requestMultiple([PERMISSIONS.IOS.FACE_ID]).then((statuses) => {
    if (statuses[PERMISSIONS.IOS.FACE_ID] === 'blocked') {
      Alert.alert(loc('GO_TO_SETTINGS'), loc('ALLOW_FACEID_LOGIN_MSG'), [
        { text: loc('CANCEL'), style: 'cancel' },
        {
          text: loc('OK'),
          onPress: () =>
            openSettings().catch(() => console.warn('cannot open settings')),
        },
      ]);
    }
  });

  const signInUsingFaceId = () => {
    ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          resetNavigation('DrawerNavigator');
        } else {
          console.log('user cancelled biometric prompt');
          navigationRef.goBack();
        }
      })
      .catch(() => console.log('biometrics failed'));
  };

  const _getFingerPrint = async () => {
    ReactNativeBiometrics.isSensorAvailable().then((resultObject) => {
      const { available, biometryType } = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        console.log('FaceID is supported');
        signInUsingFaceId();
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        console.log('Biometrics is supported');
        signInUsingFaceId();
      } else {
        console.log('Biometrics not supported');
      }
    });
  };

  _getFingerPrint();

  return (
    <LinearGradient colors={colors.primaryGradiant} style={styles.container}>
      {FastImg(images.face_unlock, 40, {}, { tintColor: 'white' })}
    </LinearGradient>
  );
};
