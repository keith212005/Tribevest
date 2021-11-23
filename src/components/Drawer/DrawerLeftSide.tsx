/* eslint-disable no-undef */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { images, useGlobalStyles } from '@resources';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { actionCreators } from '@actions';

const DrawerLeftSideComponent = (props: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const { isDarkTheme } = props;

  const _renderItem = (item: any, index: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
        key={index}
      >
        <TouchableOpacity onPress={() => {}}>
          <FastImage
            style={[
              globalStyles.squareLayout(50),
              { borderRadius: 10, marginHorizontal: 20, marginVertical: 10 },
            ]}
            source={{
              uri: item.url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
        {props.show && (
          <>
            <Text
              style={[
                globalStyles.textStyle('_16', 'black', 'NUNITO_REGULAR'),
                { flex: 5, fontWeight: '700', marginLeft: 10 },
              ]}
            >
              {item.name}
            </Text>
            <TouchableOpacity style={{ flex: 2, alignItems: 'center' }}>
              <Image
                style={[globalStyles.squareLayout(40)]}
                source={images.more_square}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  const _renderTitle = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          tvParallaxProperties={false}
          name="chevron-back-circle-sharp"
          type="ionicon"
          color={isDarkTheme ? colors.white : colors.bluePrimary}
          containerStyle={{ flex: 2 }}
          onPress={() => console.log('hello')}
        />
        {props.show && (
          <Text
            style={[
              globalStyles.textStyle('_18', 'black', 'NUNITO_EXTRABOLD'),
              { flex: 8 },
            ]}
          >
            {loc('TRIBES')}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { borderColor: colors.grey }]}>
      {_renderTitle()}
      <ScrollView>
        {TRIBE_LIST_SIDE_DRAWER.map((item: any, index: any) =>
          _renderItem(item, index),
        )}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state: any) {
  return { isDarkTheme: state.theme.isDarkTheme };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(actionCreators, dispatch);
}

//Connect everything
export const DrawerLeftSide = connects(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerLeftSideComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRightWidth: 1,
  },
});
