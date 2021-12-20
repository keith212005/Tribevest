/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { responsiveWidth, responsiveHeight, useGlobalStyles } from '@resources';
import { TribeDetails } from 'components/Drawer/TribeDetails';
import { useTheme } from '@react-navigation/native';

export const TribeListDrawerItem = ({ item, onTribeSelected }: any) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);

  return (
    <View style={styles.itemMainContainer}>
      <Pressable
        style={styles.itemContainer}
        onPress={() => onTribeSelected(item)}
      >
        <FastImage
          source={{ uri: item.url, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
          style={[
            styles.image,
            globalStyle.squareLayout(60),
            {
              borderColor: item.selected ? colors.blue : colors.transparent,
              borderWidth: responsiveWidth(item.selected ? 0.6 : 0),
            },
          ]}
        />
        {isOpen && <TribeDetails item={item} />}
      </Pressable>
      <LinearGradient
        style={styles.selctedView}
        useAngle={true}
        angle={100}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={
          item.selected ? colors.primaryGradiant : colors.transparentGradient
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemMainContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selctedView: {
    width: 4,
    height: responsiveHeight(7),
    alignSelf: 'center',
    marginLeft: 10,
    borderRadius: 6,
  },
  image: {
    borderRadius: 12,
  },
});
