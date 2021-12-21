import { responsiveWidth, useGlobalStyles, verticalScale } from '@resources';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { FACES } from '@constants';
import { useSelector } from 'react-redux';
import { AvatarGroup } from '@components';

export const DrawerHeader = () => {
  const globalStyles = useGlobalStyles();
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      }}
      imageStyle={{
        flex: 1,
        borderRadius: 5,
        width: isOpen ? responsiveWidth(100) : '100%',
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={[
            globalStyles.textStyle('_18', 'white', 'NUNITO_EXTRABOLD'),
            styles.title,
            {
              width: isOpen ? responsiveWidth(100) : '100%',
            },
          ]}
        >
          Crypto Crewss
        </Text>
      </View>

      <AvatarGroup
        list={FACES}
        size={30}
        containerStyle={{ marginVertical: 5, marginLeft: 20 }}
        // showVotes={true}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(109),
    justifyContent: 'flex-end',
    marginHorizontal: verticalScale(10),
  },
  title: {
    borderColor: 'white',
  },
});
