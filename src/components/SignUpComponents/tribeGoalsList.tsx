/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { SIGN_UP_STEP8 } from '@constants';

export const TribeGoalsList = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    dataArr: SIGN_UP_STEP8,
  });

  return (
    <>
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD'),
          { alignSelf: 'center' },
        ]}
      >
        {loc('TOP_2_GOALS')}
      </Text>
      {state.dataArr.map((item: any) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              const newArr = state.dataArr.map((item2: any) =>
                item2.description === item.description
                  ? { ...item2, selected: !item2.selected }
                  : { ...item2 },
              );
              setState({ dataArr: newArr });
            }}
            style={[
              styles.container,
              {
                borderColor: item.selected
                  ? colors.blue
                  : isDarkTheme
                  ? colors.text
                  : colors.placeHolderColor,
                backgroundColor: item.selected
                  ? colors.selectedBackgroundBlue
                  : colors.white,
              },
            ]}
          >
            <Text
              style={[
                globalStyle.textStyle(
                  '_14',
                  item.selected ? 'blue' : isDarkTheme ? 'lightText' : 'text',
                  'NUNITO_REGULAR',
                ),
              ]}
            >
              {item.description}
            </Text>
          </Pressable>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
});
