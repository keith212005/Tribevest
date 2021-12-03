/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-sparse-arrays */
import {
  color,
  responsiveHeight,
  responsiveWidth,
  useGlobalStyles,
} from '@resources';
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';

export const SocialMediaLogin = () => {
  const globalStyles = useGlobalStyles();

  const _renderDivider = () => {
    return <View style={styles.divider} />;
  };

  const _renderOr = () => {
    return (
      <View style={styles.orContainer}>
        {_renderDivider()}
        <Text
          style={[
            globalStyles.textStyle('_14', 'placeHolderColor', 'NUNITO_REGULAR'),
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
        <Text
          style={[
            globalStyles.textStyle('_14', 'placeholderColor', 'NUNITO_REGULAR'),
          ]}
        >
          {loc('NEW_TO_TRIBEVEST')}
        </Text>
        <Pressable onPress={() => {}}>
          <Text
            style={[globalStyles.textStyle('_14', 'primary', 'NUNITO_REGULAR')]}
          >
            {'  '}
            {loc('CREATE_AN_ACCOUNT')}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
  container: { marginTop: responsiveHeight(2) },
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
