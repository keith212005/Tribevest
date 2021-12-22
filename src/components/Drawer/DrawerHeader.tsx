import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { FACES } from '@constants';
import { AvatarGroup } from '@components';
import { responsiveWidth, scale, useGlobalStyles } from '@resources';

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
        borderRadius: 5,
        width: isOpen ? responsiveWidth(100) : '100%',
      }}
    >
      <Text
        style={[
          globalStyles.textStyle('_18', 'white', 'NUNITO_EXTRABOLD'),
          styles.title,
          { marginLeft: 20, width: isOpen ? responsiveWidth(100) : '100%' },
        ]}
      >
        Crypto Crew
      </Text>

      <AvatarGroup
        list={FACES}
        size={25}
        containerStyle={{
          marginVertical: 5,
          marginLeft: 20,
          marginBottom: 10,
          width: responsiveWidth(100),
        }}
        // showVotes={true}
        maxToShow={5}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(109),
    justifyContent: 'flex-end',
    marginHorizontal: scale(10),
  },
  title: {
    borderColor: 'white',
  },
});
