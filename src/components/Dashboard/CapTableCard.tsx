/* eslint-disable no-undef */

import React from 'react';
import { Text, View, StyleSheet, ScrollView, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { Card, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { renderAvatar } from '@components';
import { CAP_TABLE } from '@constants';
import { useGlobalStyles } from '@resources';

export const CapTableCard = () => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  const _renderTableTitle = (
    title1: {} | null | undefined,
    title2: {} | null | undefined,
    title3: {} | null | undefined,
  ) => {
    return (
      <View style={[styles.row, { justifyContent: 'space-evenly' }]}>
        <Text
          style={[
            { flex: 6 },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {_.isEmpty(loc(title1)) ? '' : loc(title1)}
        </Text>
        <Text
          style={[
            { flex: 2 },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {_.isEmpty(loc(title2)) ? '' : loc(title2)}
        </Text>
        <Text
          style={[
            { flex: 2, textAlign: 'right' },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {_.isEmpty(loc(title3)) ? '' : loc(title3)}
        </Text>
      </View>
    );
  };

  const _renderCapTableRow = (item: any, extraStyle?: ViewStyle) => {
    return <Text style={[extraStyle]}>{item}</Text>;
  };

  const _renderItem = (item: any) => {
    return (
      <View key={item.id.toString()}>
        <View style={[styles.row]}>
          {renderAvatar(item.imageUrl, 30)}
          {_renderCapTableRow(item.name, {
            flex: 5,
            marginLeft: 10,
            ...globalStyles.textStyle('_12', 'text', 'NUNITO_REGULAR'),
          })}
          {_renderCapTableRow(item.amount, {
            flex: 3,
            ...globalStyles.textStyle('_12', 'lightText', 'NUNITO_REGULAR'),
          })}
          {_renderCapTableRow(item.equity, {
            ...globalStyles.textStyle('_12', 'lightText', 'NUNITO_REGULAR'),
          })}
        </View>
        <Divider />
      </View>
    );
  };

  const _renderCapTableData = () => {
    return (
      <View style={{ height: 200 }}>
        <Divider />
        <ScrollView nestedScrollEnabled={true}>
          {CAP_TABLE.map((item) => _renderItem(item))}
        </ScrollView>
      </View>
    );
  };

  const _renderCardHeader = () => {
    return (
      <>
        <View style={[styles.row]}>
          <Text
            style={[
              globalStyles.textStyle('_18', 'text', 'NUNITO_REGULAR'),
              { fontWeight: '700' },
            ]}
          >
            {loc('CAP_TABLE')}
          </Text>
        </View>
        <View style={[styles.row, { marginBottom: 20 }]}>
          {_renderTableTitle('NAME', 'AMOUNT', 'EQUITY')}
        </View>
      </>
    );
  };

  const _renderCardBody = () => {
    return (
      <>
        {_renderCapTableData()}
        <Card.Divider />
        <View style={[styles.row]}>
          <Text
            style={[
              { flex: 6 },
              globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            ]}
          >
            Total
          </Text>
          <Text
            style={[
              { flex: 3 },
              globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            ]}
          >
            $3,033.00
          </Text>
          <Text
            style={[globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR')]}
          >
            100%
          </Text>
        </View>
      </>
    );
  };

  return (
    <Card containerStyle={[styles.container, { backgroundColor: colors.card }]}>
      {_renderCardHeader()}
      {_renderCardBody()}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    borderRadius: 10,
    marginBottom: 30,
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
