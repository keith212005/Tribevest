/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// THIRD PARTY IMPORTS
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { images, useGlobalStyles } from '@resources';
import { actionCreators } from '@actions';
import { useSelector } from 'react-redux';

interface DrawerLeftSideProps {
  show: boolean;
}

const DrawerLeftSides = ({ show }: DrawerLeftSideProps) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

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
              { borderRadius: 10, marginHorizontal: 1, marginVertical: 8 },
            ]}
            source={{
              uri: item.url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
        {show && (
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
          color={isDarkTheme ? colors.white : colors.blue}
          containerStyle={{ flex: 2 }}
          onPress={() => console.log('hello')}
        />
        {show && (
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
      <ScrollView persistentScrollbar={true} style={{ paddingHorizontal: 10 }}>
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
)(DrawerLeftSides);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 2,
  },
});
