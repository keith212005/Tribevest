/* eslint-disable react-native/no-unused-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import * as React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';

import DrawerHeader from './DrawerHeader';
import { GradientButton } from '@components';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { images } from '@resources';
import { resetNavigation, navigate, closeDrawer } from '@navigator';
import { Divider } from 'react-native-elements';

const DrawerRightSide = (props: any) => {
  function handleSelectedDrawerItem(label: any) {
    closeDrawer();
    switch (label) {
      case loc('DASHBOARD'):
        navigate('Tribes');
        break;
      case loc('THEMING'):
        setTimeout(() => navigate('Theme'), 300);
        break;
      case loc('LOGOUT'):
        Alert.alert(loc('LOGOUT'), loc('LOGOUT_MESSAGE'), [
          { text: loc('CANCEL'), onPress: () => {} },
          {
            text: loc('OK'),
            onPress: () => {
              props.isLoggedIn(false);
              resetNavigation('Login');
            },
          },
        ]);
        break;
      default:
        break;
    }
  }

  const _renderDrawerItem = (
    iconName: keyof typeof images,
    label:
      | string
      | ((props: { focused: boolean; color: string }) => React.ReactNode),
  ) => {
    return (
      <DrawerItem
        icon={({}) => <Image source={images[iconName]} />}
        label={label}
        onPress={() => handleSelectedDrawerItem(label)}
      />
    );
  };

  return (
    <View style={{ flex: 8 }}>
      <DrawerHeader />
      <GradientButton
        title={loc('OPERATING_AGREEMENT')}
        image={images.document_white}
        imageSize={20}
        containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
      />
      {_renderDrawerItem('chat', loc('TRIBE_CHAT'))}
      <Divider style={{ width: '80%', alignSelf: 'center', marginTop: 20 }} />

      <DrawerContentScrollView {...props}>
        {_renderDrawerItem('dashboard', loc('DASHBOARD'))}

        {_renderDrawerItem('wallet', loc('BANKING_WALLET'))}
        {_renderDrawerItem('dollar_circle', loc('FUNDING'))}
        {_renderDrawerItem('like', loc('VOTING'))}
        {_renderDrawerItem('members', loc('MEMBERS'))}
        {_renderDrawerItem('document', loc('DOCUMENTS'))}
        {_renderDrawerItem('settings', loc('TRIBE_SETTINGS'))}

        {_renderDrawerItem('settings', loc('LOGOUT'))}
        <Divider />
        {_renderDrawerItem('settings', loc('THEMING'))}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerRightSide;

const styles = StyleSheet.create({
  container: {},
});
