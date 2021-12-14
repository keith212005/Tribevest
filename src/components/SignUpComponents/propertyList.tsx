/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import FastImage, { Source } from 'react-native-fast-image';

// LOCAL IMPORTS
import { images, useGlobalStyles } from '@resources';
import { SIGN_UP_STEP5 } from '@constants';

export const PropertyList = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    dataArr: SIGN_UP_STEP5,
  });

  return (
    <>
      {state.dataArr.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              const newArr = state.dataArr.map((item2) =>
                item2.description === item.description
                  ? { ...item2, selected: !item2.selected }
                  : { ...item2 },
              );
              console.log(newArr);

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
            <FastImage
              tintColor={item.selected ? 'blue' : 'grey'}
              source={images[item.icon] as Source}
              style={[globalStyle.squareLayout(18), { marginRight: 10 }]}
              resizeMode={FastImage.resizeMode.contain}
            />
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
