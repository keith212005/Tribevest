/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { openDrawer } from '@navigator';
import { TribeAvatar } from '@components';
import { images, scale, useGlobalStyles } from '@resources';
import FastImage from 'react-native-fast-image';

var url =
  'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const TribeHeader = () => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkTheme ? colors.card : 'white',
          borderBottomColor: colors.grey,
          borderBottomWidth: 0.5,
        },
      ]}
    >
      <TribeAvatar
        url={url}
        size={32}
        extraStyle={{ marginHorizontal: 10, borderRadius: 8 }}
        onPress={() => openDrawer()}
      />
      <Text
        style={[
          globalStyles.textStyle('_18', 'text', 'NUNITO_EXTRABOLD'),
          styles.title,
        ]}
      >
        Crypto Crew
      </Text>

      <FastImage
        source={images.members}
        style={[
          globalStyles.squareLayout(25),
          { borderRadius: scale(5), marginHorizontal: scale(10) },
        ]}
        tintColor={isDarkTheme ? 'white' : 'black'}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default memo(TribeHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: scale(60),
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  title: {
    flex: 6,
  },
});
