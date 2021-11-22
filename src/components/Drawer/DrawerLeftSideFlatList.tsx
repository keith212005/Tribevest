/* eslint-disable no-sparse-arrays */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { colors, images, useGlobalStyles } from '@resources';

const DrawerLeftSideFlatList = () => {
  const globalStyles = useGlobalStyles();

  const [show, setShow] = useState(false);

  const _renderItem = (item: any, index: any) => {
    console.log('red', item.url);

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
        <FastImage
          style={[
            globalStyles.squareLayout(40),
            { borderRadius: 10, margin: 10 },
          ]}
          source={{
            uri: item.url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text
          style={[
            globalStyles.textStyle('_16', 'black', 'NUNITO_REGULAR'),
            { flex: 5, fontWeight: '700', marginLeft: 10 },
          ]}
        >
          {item.name}
        </Text>
        <TouchableOpacity style={{ flex: 2, alignItems: 'center' }}>
          <Image
            style={[globalStyles.squareLayout(40)]}
            source={images.more_square}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const _renderTitle = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          tvParallaxProperties={false}
          name="chevron-back-circle-sharp"
          type="ionicon"
          color={colors.bluePrimary}
          containerStyle={{ flex: 2 }}
          onPress={() => console.log('hello')}
        />
        <Text
          style={[
            globalStyles.textStyle('_18', 'black', 'NUNITO_EXTRABOLD'),
            { flex: 8 },
          ]}
        >
          {loc('TRIBES')}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        borderRightWidth: 1,
        borderColor: colors.grey,
      }}
    >
      {_renderTitle()}
      {TRIBE_LIST_SIDE_DRAWER.map((item: any, index: any) =>
        _renderItem(item, index),
      )}
    </View>
  );
};

export default DrawerLeftSideFlatList;

const styles = StyleSheet.create({});
