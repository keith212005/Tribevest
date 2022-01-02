/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import * as React from 'react';
import { View, Image, Alert } from 'react-native';

// THIRD PARTY IMPORTS
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';

// LOCAL IMPORTS
import { DrawerHeader } from './DrawerHeader';
import { GradientButton } from '@components';
import { images, responsiveWidth, scale, useGlobalStyles } from '@resources';
import { resetNavigation, navigate, closeDrawer } from '@navigator';
import { ToggleDarkThemeSwitch } from './toggleDarkThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from 'actions/isLoggedIn';
import { useTheme } from '@react-navigation/native';

export const DrawerRightSide = (props: any) => {
  const dispatch = useDispatch();
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);

  function handleSelectedDrawerItem(label: any) {
    closeDrawer();
    switch (label) {
      case loc('DASHBOARD'):
        navigate('Tribes');
        break;
      case loc('BANKING_WALLET'):
        navigate('Banking');
        break;
      case loc('FUNDING'):
        navigate('Tribes');
        break;
      case loc('VOTING'):
        navigate('Voting');
        break;
      case loc('MEMBERS'):
        navigate('Tribes');
        break;
      case loc('DOCUMENTS'):
        navigate('Tribes');
        break;
      case loc('TRIBE_SETTINGS'):
        navigate('Tribes');
        break;
      case loc('LOGOUT'):
        Alert.alert(loc('LOGOUT'), loc('LOGOUT_MESSAGE'), [
          { text: loc('CANCEL'), onPress: () => {} },
          {
            text: loc('OK'),
            onPress: () => {
              dispatch(isLoggedIn(false));
              resetNavigation('Signin');
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
        icon={({}) => (
          <Image
            source={images[iconName]}
            style={{ tintColor: colors.text, height: 17, width: 16 }}
          />
        )}
        label={label}
        labelStyle={[globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}
        onPress={() => handleSelectedDrawerItem(label)}
      />
    );
  };

  return (
    <View style={{ flex: 8 }}>
      <DrawerHeader />

      <View style={{ flex: 1, paddingLeft: 16 }}>
        <GradientButton
          title={isOpen ? '' : loc('OPERATING_AGREEMENT')}
          image={images.document_white}
          imageSize={18}
          containerStyle={{
            marginHorizontal: scale(10),
            marginVertical: scale(10),
            width: isOpen ? responsiveWidth(15) : undefined,
          }}
        />
        {_renderDrawerItem('chat', loc('TRIBE_CHAT'))}
        <Divider
          style={{ width: '79%', alignSelf: 'center', marginTop: scale(20) }}
        />

        <DrawerContentScrollView {...props} bounces={false} style={{ top: 0 }}>
          {_renderDrawerItem('dashboard', loc('DASHBOARD'))}
          {_renderDrawerItem('banking', loc('BANKING_WALLET'))}
          {_renderDrawerItem('money_bag', loc('FUNDING'))}
          {_renderDrawerItem('voting', loc('VOTING'))}
          {_renderDrawerItem('members', loc('MEMBERS'))}
          {_renderDrawerItem('document', loc('DOCUMENTS'))}
          {_renderDrawerItem('settings', loc('TRIBE_SETTINGS'))}
          {_renderDrawerItem('settings', loc('LOGOUT'))}
          <Divider />
          <ToggleDarkThemeSwitch />
        </DrawerContentScrollView>
      </View>
    </View>
  );
};
