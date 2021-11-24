/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';

// THIRD PARTY IMPORTS
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { useGlobalStyles, images } from '@resources';
import { resetNavigation } from '@navigator';
import { DrawerLeftSideFlatList } from './DrawerLeftSideFlatList';
import DrawerHeader from './DrawerHeader';

export const DrawerContent = (props: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme();

  function handleSelectedDrawerItem(label: any) {
    const { navigate } = props.navigation;
    switch (label) {
      case loc('DASHBOARD'):
        navigate('Dashboard');
        break;
      case loc('LEADS'):
        navigate('Leads');
        break;
      case loc('THEMING'):
        props.navigation.closeDrawer();
        setTimeout(() => {
          navigate('Theme');
        }, 300);
        break;
      case loc('LOGOUT'):
        props.navigation.closeDrawer();
        Alert.alert(loc('LOGOUT'), loc('LOGOUT_MESSAGE'), [
          { text: loc('CANCEL'), onPress: () => {} },
          {
            text: loc('OK'),
            onPress: () => resetNavigation('Login', { reset_user: true }),
          },
        ]);
        break;

      default:
        break;
    }
  }

  const _renderDrawerItem = (
    iconName: string,
    label:
      | string
      | ((props: { focused: boolean; color: string }) => React.ReactNode),
    extraProps = {},
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
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row' }}>
        <DrawerLeftSideFlatList />

        <View style={{ flex: 8 }}>
          <DrawerHeader />
          {_renderDrawerItem('chat', loc('TRIBE_CHAT'))}
          <Divider
            style={{ width: '80%', alignSelf: 'center', marginTop: 20 }}
          />
          {_renderDrawerItem('dashboard', loc('DASHBOARD'))}
          {_renderDrawerItem('wallet', loc('BANKING_WALLET'))}
          {_renderDrawerItem('dollar_circle', loc('FUNDING'))}
          {_renderDrawerItem('like', loc('VOTING'))}
          {_renderDrawerItem('members', loc('MEMBERS'))}
          {_renderDrawerItem('document', loc('DOCUMENTS'))}
          {_renderDrawerItem('settings', loc('TRIBE_SETTINGS'))}

          {/* Render Sign out */}
          {_renderDrawerItem('sign-out', loc('LOGOUT'))}
          <Divider />
          {/* Render Preferences */}

          {_renderDrawerItem('md-color-palette', loc('THEMING'), {
            type: 'ionicon',
          })}
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});
