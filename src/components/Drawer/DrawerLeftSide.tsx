/* eslint-disable no-undef */
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { images, responsiveWidth, scale, useGlobalStyles } from '@resources';
import { DrawerLeftSideCollapseButton } from 'components/Buttons/DrawerLeftSideCollapseButton';
import { TRIBE_LIST_SIDE_DRAWER } from '@constants';
import { FastImg, TribeAvatar } from '@components';

const DrawerLeftSides = () => {
  const globalStyles = useGlobalStyles();
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  const { colors } = useTheme() as CustomTheme;

  const RenderItem = ({ item, index }: any) => {
    return (
      <Pressable
        style={[styles.itemContainer]}
        key={index}
        onPress={() => console.log('item presssed....')}
      >
        <TribeAvatar
          url={item.url}
          size={scale(45)}
          extraStyle={styles.tribeAvatarStyle}
          onPress={() => console.log('Tribe image pressed....')}
        />

        {isOpen && (
          <>
            <Text
              style={[
                globalStyles.textStyle('_16', 'black', 'NUNITO_REGULAR'),
                styles.tribeNameStyle,
              ]}
            >
              {item.name}
            </Text>

            <TouchableOpacity
              style={styles.threeDotButtonStyle}
              onPress={() => console.log('3 dot button pressed....')}
            >
              {FastImg(images.more_square, 20)}
            </TouchableOpacity>
          </>
        )}
      </Pressable>
    );
  };

  return (
    <>
      <View style={[styles.container, { borderColor: colors.grey }]}>
        <View
          style={[
            styles.tribeImageContainer,
            { width: isOpen ? responsiveWidth(80) : '100%' },
          ]}
        >
          <DrawerLeftSideCollapseButton />

          {isOpen && (
            <Text
              style={[
                globalStyles.textStyle('_18', 'black', 'NUNITO_EXTRABOLD'),
              ]}
            >
              {loc('TRIBES')}
            </Text>
          )}
        </View>
        <ScrollView persistentScrollbar={true}>
          {TRIBE_LIST_SIDE_DRAWER.map((item: any, index: any) => (
            <RenderItem item={item} index={index} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

function mapStateToProps(state: any) {
  return { isDarkTheme: state.theme.isDarkTheme };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const DrawerLeftSide = connects(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerLeftSides);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderRightWidth: 0.3,
  },
  tribeAvatarStyle: {
    borderRadius: 8,
    marginVertical: 10,
    // borderWidth: 1,
  },
  tribeNameStyle: {
    fontWeight: '700',
    borderWidth: 0,
    marginLeft: 10,
  },
  tribeImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  threeDotButtonStyle: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // borderWidth: 1,
  },
});
