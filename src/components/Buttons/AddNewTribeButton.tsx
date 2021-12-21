/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORT
import { FastImg } from '@components';
import { color, fonts, images } from '@resources';

export const AddNewTribeButton = (props: any) => {
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { ...props.extraStyle },
        {
          width: isOpen ? '90%' : 48,
          justifyContent: isOpen ? 'flex-start' : 'center',
          paddingLeft: isOpen ? 12 : 0,
        },
      ]}
      onPress={() => {
        console.log('onPRess');
      }}
    >
      {FastImg(images.gradient_add_square, 25)}
      {isOpen && <Text style={[styles.text]}>{loc('CREATE_NEW_TRIBE')}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EDF0FF',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.NUNITO_BOLD,
    color: color.blue,
    marginLeft: 18,
  },
});
