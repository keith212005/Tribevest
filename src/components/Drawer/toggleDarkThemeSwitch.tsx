/* eslint-disable no-undef */
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Switch } from 'react-native-elements';

// LOCAL IMPORTS

export const DarkThemeSwitch = (props: any) => {
  const { isDarkTheme } = props;
  const [checked, setChecked] = useState(isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  return (
    <View style={[styles.darkThemeContainer]}>
      <Switch
        color={checked ? colors.bluePrimary : 'grey'}
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

interface Style {
  darkThemeContainer: ViewStyle;
}
type CreateStyles = <T extends any>(styles: T) => T;
export const createStyles: CreateStyles = StyleSheet.create;
const styles = createStyles<Style>({
  darkThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
