/* eslint-disable no-undef */

import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { StatementsListItem } from '@components';
import { STATEMENTS } from '@constants';
import { images, useGlobalStyles, scale } from '@resources';

export const BankingStatements = () => {
  const globalStyle = useGlobalStyles();

  const renderItem = ({ item }: any) => {
    return <StatementsListItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={[globalStyle.layoutDirection('row', 'flex-end', 'center')]}>
        <Text
          style={[globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR')]}
        >
          {loc('STATEMENT_PERIOD')}
        </Text>
        <FastImage
          source={images.info_circle}
          resizeMode={FastImage.resizeMode.cover}
          style={[globalStyle.squareLayout(18), { marginLeft: 5 }]}
          tintColor={'grey'}
        />
      </View>

      <FlatList data={STATEMENTS} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
});
