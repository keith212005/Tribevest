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

interface DefaultProps {
  array: Array<object>;
  onPress: (arr: any) => void;
}

export const MultiSelectList = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    dataArr: props.array,
  });

  return (
    <>
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
              props.onPress(newArr);
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
            {item.icon && (
              <FastImage
                tintColor={item.selected ? colors.blue : 'grey'}
                source={images[item.icon] as Source}
                style={[globalStyle.squareLayout(18), { marginRight: 10 }]}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
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
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
});
