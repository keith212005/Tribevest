/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, memo, useEffect } from 'react';
import { Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import { Switch } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { RenderIcon } from '@components';
import { navigate } from '@navigator';

const Preference = memo((props: any) => {
  const globalStyles = useGlobalStyles();

  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const [checked, setChecked] = useState(isDarkTheme as unknown as boolean);

  function handleSelectedDrawerItem(label: any) {
    switch (label) {
      case loc('DASHBOARD'):
        navigate('Dashboard');
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
        icon={({ focused, color, size }) =>
          RenderIcon(iconName, 'material-community', 20, { ...extraProps })
        }
        label={label}
        onPress={() => handleSelectedDrawerItem(label)}
      />
    );
  };

  return (
    <DrawerContentScrollView>
      <>{_renderDrawerItem('theme-light-dark', loc('THEMING'))}</>
    </DrawerContentScrollView>
  );
});

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

// Connect everything
export const Preferences = connects(null, mapDispatchToProps)(Preference);
