/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveWidth, useGlobalStyles } from '@resources';
import { DrawerLeftSideCollapseButton } from 'components/Buttons/DrawerLeftSideCollapseButton';
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { TribeDetails } from './TribeDetails';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const RenderItem = ({ item, index }: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
      }}
    >
      <Pressable
        style={[styles.itemContainer]}
        key={index}
        onPress={() => console.log('item presssed....')}
      >
        <FastImage
          source={{ uri: item.url }}
          style={[
            globalStyles.squareLayout(60),
            {
              borderRadius: 12,
              borderColor: item.selected ? colors.blue : colors.transparent,
              borderWidth: item.selected ? 2 : 0,
            },
          ]}
        />
        {isOpen && <TribeDetails item={item} />}
      </Pressable>
      <LinearGradient
        useAngle={true}
        angle={100}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={
          item.selected ? colors.primaryGradiant : colors.transparentGradient
        }
        style={{
          width: 6,
          marginLeft: 10,
          borderRadius: 6,
        }}
      />
    </View>
  );
};

export const DrawerLeftSide = () => {
  const globalStyles = useGlobalStyles();
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);

  return (
    <View>
      <View
        style={[
          styles.tribeImageContainer,
          { width: isOpen ? responsiveWidth(80) : '100%' },
        ]}
      >
        <DrawerLeftSideCollapseButton />
        {isOpen && (
          <Text
            style={[globalStyles.textStyle('_18', 'black', 'NUNITO_EXTRABOLD')]}
          >
            {loc('TRIBES')}
          </Text>
        )}
      </View>

      <FlatList
        data={TRIBE_LIST_SIDE_DRAWER}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tribeImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
