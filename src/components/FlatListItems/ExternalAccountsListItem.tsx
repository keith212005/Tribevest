/* eslint-disable no-undef */
import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

// THIRD PARTY IMPORTS
import { Card } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

export const ExternalAccountsListItem = memo(({ item }: any) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <Card
      containerStyle={styles.containerStyle}
      wrapperStyle={[styles.wrapperStyle, { backgroundColor: colors.card }]}
    >
      <View
        style={[
          styles.accountTypeContainer,
          {
            backgroundColor:
              item.type === 'SAVINGS' ? 'blue' : colors.green_text,
          },
        ]}
      >
        <Text style={[globalStyle.textStyle('_10', 'white', 'NUNITO_BOLD')]}>
          {item.type}
        </Text>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 10,
    height: 84,
    padding: 0,
    marginLeft: 0,
    marginBottom: -8,
  },
  wrapperStyle: {
    borderRadius: 10,
    height: 84,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: -1,
    marginTop: -1,
    marginRight: -1,
  },
  accountTypeContainer: {
    transform: [{ rotate: '270deg' }],
    alignSelf: 'flex-start',
    marginLeft: -31,
    width: 84,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 11,
  },
});
