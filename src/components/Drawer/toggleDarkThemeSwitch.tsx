/* eslint-disable no-undef */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import { Switch } from 'react-native-elements';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

export const DarkThemeSwitch = (props: any) => {
  const { isDarkTheme, selectedGradient } = props;
  const [checked, setChecked] = useState(isDarkTheme);
  const globalStyles = useGlobalStyles();

  return (
    <View style={[styles.darkThemeContainer]}>
      <Text style={[globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR')]}>
        {loc('DARK_THEME')}
      </Text>
      <Switch
        color={checked ? selectedGradient[0] : 'grey'}
        value={checked}
        onValueChange={(value) => {
          setChecked(value);
          props.toggleDarkTheme();
        }}
      />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    selectedGradient: state.theme.selectedGradient,
    isDarkTheme: state.theme.isDarkTheme,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const ToggleDarkThemeSwitch = connects(
  mapStateToProps,
  mapDispatchToProps,
)(DarkThemeSwitch);

const styles = StyleSheet.create({
  darkThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
