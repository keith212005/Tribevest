/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { SIGN_UP_STEP1 } from '@constants';
import { useGlobalStyles } from '@resources';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export const Step1 = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState({
    dataArr: SIGN_UP_STEP1,
  });

  useEffect(() => {}, [state.dataArr]);

  return (
    <>
      {state.dataArr.map((item) => {
        return (
          <Pressable
            // key={item.id}
            onPress={async () => {
              const newArr = await SIGN_UP_STEP1.map((item2) => {
                return (item.selected =
                  item2.description === item.description ? true : false);
              });
              console.log(newArr);

              // setState({ dataArr: newArr });
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
              style={[globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR')]}
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
