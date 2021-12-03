/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-sparse-arrays */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';

// LOCAL IMPORTS
import {
  color,
  responsiveHeight,
  responsiveWidth,
  useGlobalStyles,
} from '@resources';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export const SocialMediaLogin = () => {
  const globalStyles = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const _renderDivider = () => {
    return <View style={styles.divider} />;
  };

  const _renderOr = () => {
    return (
      <View style={[styles.orContainer]}>
        {_renderDivider()}
        <Text
          style={[
            globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            { paddingHorizontal: 5 },
            ,
          ]}
        >
          OR
        </Text>
        {_renderDivider()}
      </View>
    );
  };

  const _renderIcon = (name: string, color: any) => {
    return (
      <Icon
        tvParallaxProperties={false}
        raised
        name={name}
        type="font-awesome"
        color={color}
        onPress={() => console.log('hello')}
        containerStyle={{ borderWidth: 1, borderColor: '#C9D2DA' }}
      />
    );
  };

  const _renderCreateAccount = () => {
    return (
      <View style={styles.createAccountContainer}>
        <Text style={[globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR')]}>
          {loc('NEW_TO_TRIBEVEST')}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[globalStyles.textStyle('_14', 'primary', 'NUNITO_REGULAR')]}
          >
            {'  '}
            {loc('CREATE_AN_ACCOUNT')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        {
          backgroundColor: isDarkTheme ? colors.background : color.white,
          flex: 1,
        },
        styles.container,
      ]}
    >
      {_renderOr()}
      <View style={styles.iconsContainer}>
        {_renderIcon('google', '#FF6865')}
        {_renderIcon('facebook-square', '#197FE7')}
        {_renderIcon('apple', '#1E2227')}
      </View>
      {_renderCreateAccount()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: responsiveHeight(2) },
  divider: {
    borderColor: color.grey,
    borderWidth: 1,
    height: 1,
    alignSelf: 'center',
    width: responsiveWidth(38),
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: responsiveHeight(3),
  },
  createAccountContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: responsiveHeight(3),
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
