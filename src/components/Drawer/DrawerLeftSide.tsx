/* eslint-disable no-undef */
import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { responsiveWidth, useGlobalStyles } from '@resources';
import { DrawerLeftSideCollapseButton } from 'components/Buttons/DrawerLeftSideCollapseButton';
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { TribeListDrawerItem } from 'components/FlatListItems';

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

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

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
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tribeImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
