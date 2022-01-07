/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

// THIRD PARTY IMPORTS
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

interface DefaultProps extends DatePickerProps {
  onSuccess: (str: any) => void;
  containerStyle?: ViewStyle;
}

export const CustomDTPicker = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  return (
    <View style={[styles.mainContainer, { ...props.containerStyle }]}>
      <Pressable
        onPress={() => setOpen(true)}
        style={[
          styles.container,
          {
            borderWidth: isDarkTheme ? 1 : 0,
            backgroundColor: isDarkTheme ? colors.background : colors.white,
            borderColor: isDarkTheme ? colors.white : undefined,
          },
        ]}
      >
        <Text
          style={[globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR')]}
        >
          {moment(props?.date).format('ddd') +
            ', ' +
            moment(props?.date).format('LL').toString()}
        </Text>
      </Pressable>
      <DatePicker
        modal
        textColor={Platform.OS === 'ios' ? '#ffffff' : 'black'}
        open={open}
        onConfirm={(date) => {
          props.onSuccess(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
