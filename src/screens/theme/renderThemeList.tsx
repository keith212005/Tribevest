/* eslint-disable no-undef */
import React from 'react';
import { Text, View, Pressable } from 'react-native';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { RenderIcon } from '@components';
import { useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import _ from 'lodash';

const ThemeList = (props: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const { themeList, isDarkTheme } = props;

  /**
  |--------------------------------------------------
  | Global Declaration Section End
  |--------------------------------------------------
  */

  const hanldeSelectedTheme = (selectedItem: any) => {
    props.changeTheme(selectedItem);
  };

  return (
    <View>
      <Text
        style={[
          globalStyles.textStyle('_14', 'text', 'PROXIMANOVA_REGULAR'),
          { paddingHorizontal: 20, paddingBottom: 10 },
        ]}
      >
        {loc('SELECT_THEME_COLOR')}
      </Text>
      {!_.isEmpty(themeList)
        ? themeList.map((item: any) => {
            return (
              <View key={item.name}>
                <Pressable
                  onPress={() => hanldeSelectedTheme(item)}
                  style={[
                    styles.pressableContainer,
                    {
                      backgroundColor: isDarkTheme
                        ? colors.lightBackground
                        : colors.white,
                    },
                  ]}
                >
                  <Text
                    style={[
                      globalStyles.textStyle(
                        '_14',
                        isDarkTheme ? 'white' : 'text',
                        'PROXIMANOVA_REGULAR',
                      ),
                      styles.themeName,
                    ]}
                  >
                    {item.name}
                  </Text>

                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={item.gradient}
                    style={styles.gradientReactangle}
                  />

                  <View style={{ flex: 2 }}>
                    {item.isChecked &&
                      RenderIcon('checkmark', 'ionicon', 20, {
                        color: isDarkTheme ? colors.white : colors.green,
                      })}
                  </View>
                </Pressable>
                <Divider />
              </View>
            );
          })
        : null}
    </View>
  );
};

function mapStateToProps(state: any) {
  console.log('state in Theme screeen>>>>', state);

  return {
    themeList: state.theme.themeList,
    isDarkTheme: state.theme.isDarkTheme,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const RenderThemeList = connects(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeList);
