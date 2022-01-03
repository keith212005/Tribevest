/* eslint-disable no-undef */
import React, { memo } from 'react';
import { View, StyleSheet, Text, TextStyle, Pressable } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

// THIRD PARTY IMPORTS
import { Card } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

interface DefaultProps {
  item: any;
  onPressViewDetails: () => void;
}

export const ExternalAccountsListItem = memo(
  ({ item, onPressViewDetails }: DefaultProps) => {
    const globalStyle = useGlobalStyles();
    const { colors } = useTheme() as CustomTheme;
    console.log('ExternalAccountsListItem card redner.....');

    const _renderRow = (
      title: string,
      description: string,
      titleStyle?: TextStyle,
      descriptionStyle?: TextStyle,
      onPress?: () => void,
    ) => {
      return (
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'flex-start'),
            styles.rowContainer,
          ]}
        >
          <Pressable onPress={onPress}>
            <Text
              style={[
                globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
                { ...titleStyle },
              ]}
            >
              {title}
            </Text>
          </Pressable>
          <Text
            style={[
              globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
              { ...descriptionStyle },
            ]}
          >
            {description}
          </Text>
        </View>
      );
    };

    return (
      <Card
        containerStyle={[
          styles.containerStyle,
          {
            backgroundColor: colors.card,
            borderColor: colors.card,
            borderWidth: 0,
          },
        ]}
        wrapperStyle={[
          styles.wrapperStyle,
          {
            backgroundColor: colors.card,
            borderLeftWidth: 20,
            borderLeftColor:
              item.type === 'SAVINGS' ? colors.blue : colors.green_text,
          },
        ]}
      >
        {/* Render Saving And Checking vertical label */}
        <Text
          style={[
            styles.accountLabel,
            globalStyle.textStyle('_10', 'white', 'NUNITO_BOLD'),
            { marginLeft: item.type === 'SAVINGS' ? -32 : -35 },
          ]}
        >
          {item.type}
        </Text>

        {/* Render First Row */}
        {_renderRow(
          item.description,
          loc('AVAILABLE_BALANCE'),
          {},
          { ...globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR') },
        )}

        {/* Render Second Row */}
        {_renderRow(
          loc('VIEW_DETAILS'),
          item.balance,
          {
            marginBottom: 6,
            textAlign: 'right',
            ...globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
          },
          { textAlign: 'right' },
          () => onPressViewDetails(),
        )}
      </Card>
    );
  },
);

// Do not change this style make sure layout dont change if anything changed here.
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 10,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 8,
    borderWidth: 0,
  },
  wrapperStyle: {
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  rowContainer: {
    borderRadius: 10,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  accountLabel: {
    transform: [{ rotate: '270deg' }],
    position: 'absolute',
    marginTop: 30,
  },
});
