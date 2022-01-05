/* eslint-disable no-undef */

import React from 'react';
import { View, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { StatementCard, _renderText } from '@components';
import { MONTHLY_STATEMENT } from '@constants';
import { images, useGlobalStyles } from '@resources';

const renderMonthlyStatementCard = ({ item }: any) => (
  <StatementCard item={item} />
);

export const Statements = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <>
      <View
        style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
      >
        {_renderText(loc('STATEMENTS'), {
          ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
          marginTop: 4,
        })}

        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          {_renderText(loc('STATEMENT_PERIOD'), {
            ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
            marginTop: 4,
          })}
          <FastImage
            source={images.info_circle}
            style={[globalStyle.squareLayout(18), { marginLeft: 6 }]}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={colors.text}
          />
        </View>
      </View>

      <FlatList
        data={MONTHLY_STATEMENT}
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 18 }}
        style={{ marginHorizontal: -18 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMonthlyStatementCard}
      />
    </>
  );
};
