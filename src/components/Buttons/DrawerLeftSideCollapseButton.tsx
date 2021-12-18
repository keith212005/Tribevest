/* eslint-disable no-undef */
import React from 'react';
import { LayoutAnimation } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { Rotate } from 'components/Collapsible';

export const DrawerLeftSideCollapseButtons = (props: any) => {
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    props.isDrawerLeftSideCollapsed(!isOpen);
  };

  return (
    <Rotate onPress={onPress}>
      <Icon
        tvParallaxProperties={false}
        name="chevron-back-circle-sharp"
        type="ionicon"
        color={isDarkTheme ? colors.white : colors.blue}
        containerStyle={{ paddingHorizontal: 30, paddingVertical: 10 }}
      />
    </Rotate>
  );
};

function mapStateToProps(state: any) {
  return { isDarkTheme: state.theme.isDarkTheme };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const DrawerLeftSideCollapseButton = connects(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerLeftSideCollapseButtons);
