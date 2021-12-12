/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { SIGN_UP_STEP3 } from '@constants';
import { useGlobalStyles } from '@resources';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export const Step3 = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState({
    dataArr: SIGN_UP_STEP3,
  });

  useEffect(() => {}, [state.dataArr]);

  return (
    <>
      {state.dataArr.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              const newArr = SIGN_UP_STEP3.map((item2) =>
                item2.description === item.description
                  ? { ...item2, selected: true }
                  : { ...item2, selected: false },
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
    borderWidth: 1,
    margin: 10,
    borderRadius: 16,
    padding: 16,
  },
});