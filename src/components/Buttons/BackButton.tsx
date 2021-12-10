import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';
import { responsiveHeight, scale } from '@resources';

export const BackButton = (props: any) => {
  return (
    <Icon
      tvParallaxProperties={false}
      size={25}
      name="chevron-left"
      type="feather"
      color="white"
      onPress={props.onPress}
      containerStyle={styles.backIconStyle}
      {...props.extraProps}
    />
  );
};

const styles = StyleSheet.create({
  backIconStyle: {
    height: scale(35),
    width: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46AFFF',
    alignSelf: 'flex-start',
    borderRadius: 60,
    marginBottom: responsiveHeight(2),
  },
});
