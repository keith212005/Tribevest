/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORT
import { useTheme } from '@react-navigation/native';
import createState from 'react-hook-setstate';

// LOCAL IMPORT
import { images, responsiveWidth, useGlobalStyles } from '@resources';
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

export const Step7 = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    number: 0,
  });

  const _renderButton = (name: string, onPress: any) => {
    return (
      <View style={styles.circle}>
        <Icon
          tvParallaxProperties={undefined}
          name={name}
          type={'material-community'}
          size={26}
          onPress={onPress}
          color={'#828A92'}
        />
      </View>
    );
  };

  const _renderEnterNumberofTribeMembers = () => {
    return (
      <>
        <Text
          style={[
            globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
            { marginBottom: 10 },
          ]}
        >
          {loc('NUMBER_TRIBE_MEMBERS')}
        </Text>

        <View
          style={[styles.counterContainer, { borderColor: colors.borderGray }]}
        >
          {_renderButton('minus', () => {
            if (state.number > 0) {
              setState({ number: state.number - 1 });
            }
          })}
          <Text
            style={[globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD')]}
          >
            {state.number}
          </Text>
          {_renderButton('plus', () => {
            setState({ number: state.number + 1 });
          })}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_EXTRABOLD')]}>
        {loc('AVERAGE_TRIBE_HAS')}
      </Text>
      <Text
        style={[
          globalStyle.textStyle('_20', 'green', 'NUNITO_BOLD'),
          { marginTop: 20 },
        ]}
      >
        {loc('FIVE_SIX_MEMBERS')}
      </Text>
      <View style={{ paddingRight: 20, paddingLeft: 10 }}>
        <FastImage
          source={images.bar_chart}
          style={{
            width: '100%',
            aspectRatio: 1,
            // borderWidth: 1,
            marginTop: -45,
            marginBottom: -20,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      {_renderEnterNumberofTribeMembers()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  counterContainer: {
    borderWidth: 1,
    borderRadius: 60,
    flexDirection: 'row',
    width: responsiveWidth(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    height: 38,
    width: 38,
    borderRadius: 38 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    margin: 5,
  },
});
