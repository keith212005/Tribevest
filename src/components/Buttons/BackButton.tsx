import * as React from 'react';
import { StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';

// LOCAL IMPORTS
import { responsiveHeight, scale } from '@resources';

export const BackButton = (props: any) => {
  return (
    <Icon
      tvParallaxProperties={false}
      size={responsiveHeight(3)}
      name="chevron-left"
      type="feather"
      color="white"
      onPress={props.onPress}
      containerStyle={styles.containerStyle}
      iconStyle={styles.iconStyle}
      {...props.extraProps}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: scale(35),
    width: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46AFFF',
  },
  iconStyle: {
    borderRadius: 60,
    padding: scale(5),
  },
});
