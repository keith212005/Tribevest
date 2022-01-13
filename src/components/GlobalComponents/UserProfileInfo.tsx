import React from 'react';
import { View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { FastImg, _renderText } from '@components';
import { images, scale, useGlobalStyles } from '@resources';

let image =
  'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg';

export const UserProfileInfo = () => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={styles.container}>
      <View style={[globalStyle.layoutDirection('row', 'center', 'flex-end')]}>
        <View style={{ flex: 7 }}>
          <FastImage
            source={{ uri: image }}
            style={[
              globalStyle.squareLayout(100),
              {
                borderWidth: 5,
                borderColor: 'white',
                borderRadius: 18,
                alignSelf: 'flex-end',
                marginTop: -49,
              },
            ]}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={{ flex: 4, alignItems: 'flex-end' }}>
          {FastImg(images.settings, 30, { marginRight: 34 })}
        </View>
      </View>
      {_renderText('James Calder', {
        ...globalStyle.textStyle('_20', 'text', 'NUNITO_SEMIBOLD'),
      })}
      {_renderText('@jedimaster', {
        ...globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
        marginBottom: scale(4),
      })}
      {_renderText('Austin, TX | Investor since 2017', {
        ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
});
