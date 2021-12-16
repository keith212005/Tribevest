/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

interface DefaultProps {
  array: Array<object>;
  onPress: (arr: any) => void;
}

export const SingleSelectList = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    dataArr: props.array,
  });

  useEffect(() => {}, [state.dataArr]);
  return (
    <>
      {state.dataArr.map((item: any) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              const newArr = props.array.map((item2: any) =>
                item2.description === item.description
                  ? { ...item2, selected: true }
                  : { ...item2, selected: false },
              );
              setState({ dataArr: newArr });
              const SelectedItemArr = newArr.filter((x) => x.selected === true);
              props.onPress(SelectedItemArr);
            }}
            style={[
              styles.container,
              {
                borderColor: item.selected
                  ? colors.blue
                  : isDarkTheme
                  ? colors.text
                  : colors.borderGray,
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
                  item.selected ? 'NUNITO_SEMIBOLD' : 'NUNITO_REGULAR',
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
    margin: 8,
    borderRadius: 16,
    padding: 16,
  },
});
