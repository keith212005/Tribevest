/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet, TextStyle, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { navigate, openDrawer } from '@navigator';
import { BackButton, TribeAvatar } from '@components';
import { images, scale, useGlobalStyles } from '@resources';
import FastImage, { Source } from 'react-native-fast-image';

var url =
  'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

interface DefaultProps {
  headerTitle?: string;
  titleStyle?: TextStyle;
  hideTribeName?: boolean;
  hideRightIcon?: boolean;
  hideLeftImage?: boolean;
  showBackIcon?: boolean;
  rightIcon?: keyof typeof images;
  rightIconTintColor?: string;
  onPressRightIcon: () => void;
}

export const MainHeader = (props: DefaultProps) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkTheme ? colors.card : 'white',
          borderBottomColor: '#DADCDE',
          borderBottomWidth: 1,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        {props.showBackIcon ? (
          <BackButton onPress={() => navigate('Voting')} />
        ) : (
          !props.hideLeftImage && (
            <TribeAvatar
              url={url}
              size={32}
              extraStyle={{ marginHorizontal: 10, borderRadius: 8 }}
              onPress={() => openDrawer()}
            />
          )
        )}
      </View>

      <Text
        style={[
          globalStyles.textStyle('_18', 'text', 'NUNITO_EXTRABOLD'),
          styles.title,
          { ...props.titleStyle },
        ]}
      >
        {props.hideTribeName ? '' : props.headerTitle}
      </Text>

      <View style={{ flex: 1 }}>
        {!props.hideRightIcon && (
          <Pressable onPress={() => props?.onPressRightIcon()}>
            <FastImage
              source={props.rightIcon as Source}
              style={[
                globalStyles.squareLayout(25),
                { borderRadius: scale(5), marginHorizontal: scale(10) },
              ]}
              tintColor={
                props.rightIconTintColor === 'null'
                  ? undefined
                  : isDarkTheme
                  ? 'white'
                  : 'black'
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(60),
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  title: {
    flex: 6,
    paddingLeft: 10,
  },
});
