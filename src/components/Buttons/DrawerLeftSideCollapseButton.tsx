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
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    props.isDrawerLeftSideCollapsed(!isOpen);
  };

  return (
    <Rotate
      onPress={onPress}
      extraStyle={{
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#F6F8FF',
        borderRadius: 60,
      }}
    >
      <Icon
        size={20}
        tvParallaxProperties={false}
        name="chevron-left"
        type="entypo"
        color={colors.white}
        containerStyle={{
          height: 25,
          width: 25,
          borderRadius: 50 / 2,
          backgroundColor: '#1846FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}
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
