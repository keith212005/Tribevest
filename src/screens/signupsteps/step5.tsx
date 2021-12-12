/* eslint-disable no-undef */
import { TribeNameForm, UsaMap } from '@components';
// import { useTheme } from '@react-navigation/native';
import { useGlobalStyles } from '@resources';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { useSelector } from 'react-redux';

export const Step5 = () => {
  const globalStyle = useGlobalStyles();
  // const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  // const { colors } = useTheme() as unknown as CustomTheme;

  const _renderTitle = () => {
    return (
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          styles.title,
        ]}
      >
        {loc('AVAILABLE_COMPANY_NAMES')}
      </Text>
    );
  };

  const _renderTribeNameInput = () => {
    return (
      <View style={{ marginVertical: 10 }}>
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {loc('TRIBE_NAME')}
        </Text>
        <TribeNameForm />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {_renderTitle()}
      <UsaMap />
      {_renderTribeNameInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    textAlign: 'center',
  },
});
