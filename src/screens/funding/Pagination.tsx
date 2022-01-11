/* eslint-disable no-undef */
import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

// LOCAL IMPORTS
import { usePagination, DOTS } from '@utils';
import { images, useGlobalStyles } from '@resources';

import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';

export const Pagination = (props: any) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  //   if (currentPage === 0 || paginationRange.length < 2) {
  //     return null;
  //   }

  const onNext = () => {
    if (paginationRange.length > currentPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  console.log('lastPage>>>>', lastPage);
  console.log('currentPage>>>>', currentPage);

  const _renderButton = (
    imageName: string,
    onPress: any,
    extraStyle: ViewStyle,
  ) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#F1F5F9',
          borderRadius: 8,
          ...extraStyle,
        }}
      >
        <FastImage
          source={images[imageName]}
          style={[globalStyle.squareLayout(20), { margin: 5 }]}
          tintColor={'grey'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyle.layoutDirection('row', 'center', 'center'), {}]}>
      {_renderButton('arrow_left', onPrevious, { marginRight: 5 })}

      {paginationRange.map((pageNumber: any) => {
        if (pageNumber === DOTS) {
          return <Text>&#8230</Text>;
        }

        return (
          <TouchableOpacity onPress={() => onPageChange(pageNumber)}>
            <LinearGradient
              useAngle={true}
              angle={145}
              angleCenter={{ x: 0.4, y: 0.6 }}
              colors={
                currentPage === pageNumber
                  ? colors.primaryGradiant
                  : colors.whiteGradient
              }
              key={pageNumber}
              style={[
                globalStyle.layoutDirection('row', 'center', 'center'),
                {
                  paddingVertical: 5,
                  paddingHorizontal: 12,
                  marginHorizontal: 5,
                  borderRadius: 8,
                },
              ]}
            >
              <Text
                style={[
                  globalStyle.textStyle(
                    '_14',
                    currentPage === pageNumber ? 'white' : 'text',
                    'NUNITO_REGULAR',
                  ),
                ]}
              >
                {pageNumber}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}

      {_renderButton('arrow_right', onNext, { marginLeft: 5 })}
    </View>
  );
};
