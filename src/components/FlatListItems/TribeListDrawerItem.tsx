/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveWidth, responsiveHeight, useGlobalStyles } from '@resources';
import { TribeDetails } from 'components/Drawer/TribeDetails';

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
            globalStyle.squareLayout(48),
            {
              borderColor: item.selected ? colors.blue : colors.transparent,
              borderWidth: responsiveWidth(item.selected ? 0.6 : 0),
            },
          ]}
        />
        {isOpen && <TribeDetails item={item} />}
      </Pressable>
      <LinearGradient
        style={[
          styles.selctedView,
          { height: responsiveHeight(isOpen ? 6 : 3) },
        ]}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selctedView: {
    width: 4,

    alignSelf: 'center',
    marginLeft: 20,
    borderRadius: 6,
  },
  image: {
    borderRadius: 12,
  },
});
