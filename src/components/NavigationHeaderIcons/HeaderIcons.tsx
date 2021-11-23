import React from 'react';

import {
  useIsFocused,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export const HeaderLeftIcon = (props: any) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <Icon
      containerStyle={{ margin: 10, borderRadius: 100 }}
      name={'menu'}
      type="feather"
      color={'black'}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      tvParallaxProperties={undefined}
    />
  );
};
