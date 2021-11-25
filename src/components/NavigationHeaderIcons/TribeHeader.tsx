/* eslint-disable no-undef */
/* eslint-disable max-len */
import { responsiveWidth, images, useGlobalStyles } from '@resources';
import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { RenderImage, TribeAvatar } from '@components';
import { colors } from 'react-native-elements';
import { openDrawer } from '@navigator';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
        borderRadius={8}
        extraStyle={{ marginHorizontal: 10 }}
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
      {RenderImage(images.members, 25, {
        borderRadius: 5,
        marginHorizontal: 10,
      })}
    </View>
  );
};

export default memo(TribeHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  title: {
    flex: 6,
  },
});
