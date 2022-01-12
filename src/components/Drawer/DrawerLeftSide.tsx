/* eslint-disable no-undef */
import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { responsiveWidth, useGlobalStyles } from '@resources';
import { DrawerLeftSideCollapseButton } from 'components/Buttons/DrawerLeftSideCollapseButton';
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { AddNewTribeButton, TribeListDrawerItem } from '@components';

export const DrawerLeftSide = () => {
  const globalStyles = useGlobalStyles();
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  const [list, setList] = useState(TRIBE_LIST_SIDE_DRAWER);

  const handleSelectedTribe = (selectedTribe: any) => {
    const updatedArr = TRIBE_LIST_SIDE_DRAWER.reduce((acc, curr): any => {
      if (curr.id === selectedTribe.id) {
        curr.selected = true;
      } else {
        curr.selected = false;
      }
      acc.push(curr as never);
      return acc;
    }, []);
    setList(updatedArr);
  };

  const renderItem = ({ item }: any) => (
    <TribeListDrawerItem item={item} onTribeSelected={handleSelectedTribe} />
  );

  const _renderFooterItem = () => (
    <AddNewTribeButton extraStyle={{ marginLeft: 16 }} />
  );

  const _renderHeaderItem = () => (
    <View
      style={[
        styles.tribeImageContainer,
        { width: isOpen ? responsiveWidth(85) : '100%' },
      ]}
    >
      <DrawerLeftSideCollapseButton />
      {isOpen && (
        <Text
          style={[
            globalStyles.textStyle('_18', 'text', 'NUNITO_REGULAR'),
            { fontWeight: '900' },
          ]}
        >
          {loc('TRIBES')}
        </Text>
      )}
    </View>
  );

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  return (
    <View style={{ zIndex: 9999 }}>
      {_renderHeaderItem()}
      <FlatList
        style={styles.flatList}
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={_renderFooterItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tribeImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    paddingVertical: 20,
  },
});
