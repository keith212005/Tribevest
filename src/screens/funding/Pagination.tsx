/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

// LOCAL IMPORTS
import { usePagination, DOTS } from '@utils';
import { images, useGlobalStyles } from '@resources';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { FastImg, _renderText } from '@components';
import { useSelector } from 'react-redux';

export const Pagination = (props: any) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDark = useSelector((state: any) => state.theme.isDarkTheme);

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

  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const _renderButton = (
    imageName: string,
    onPress: any,
    extraStyle: ViewStyle,
  ) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.prevNextStyle,
          {
            ...extraStyle,
            // backgroundColor: isDark ? colors.transparent : colors.white,
          },
        ]}
      >
        {FastImg(images[imageName], 20, { margin: 5 })}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyle.layoutDirection('row', 'center', 'center'), {}]}>
      {/* Render Previous Arrow */}
      {_renderButton('arrow_left', onPrevious, { marginRight: 10 })}

      {/* Render Numbers */}
      {paginationRange.map((pageNumber: any) => {
        let selected = currentPage === pageNumber ? 'white' : 'text';

        if (pageNumber === DOTS) {
          return <Text>{DOTS}</Text>;
        }

        return (
          <TouchableOpacity onPress={() => onPageChange(pageNumber)}>
            <LinearGradient
              useAngle={true}
              angle={145}
              angleCenter={{ x: 0.4, y: 0.6 }}
              key={pageNumber}
              colors={
                currentPage === pageNumber
                  ? colors.primaryGradiant
                  : isDark
                  ? [colors.transparent, colors.transparent]
                  : colors.whiteGradient
              }
              style={[
                styles.btnGradientStyle,
                globalStyle.layoutDirection('row', 'center', 'center'),
              ]}
            >
              {_renderText(pageNumber, {
                ...globalStyle.textStyle('_14', selected, 'NUNITO_REGULAR'),
              })}
            </LinearGradient>
          </TouchableOpacity>
        );
      })}

      {/* Render Next Arrow */}
      {_renderButton('arrow_right', onNext, { marginLeft: 10 })}
    </View>
  );
};

const styles = StyleSheet.create({
  prevNextStyle: {
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  btnGradientStyle: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 8,
  },
});
