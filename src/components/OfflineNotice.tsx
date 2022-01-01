import { useNetInfo } from '@react-native-community/netinfo';
import { color, images } from '@resources';
import React, { useEffect } from 'react';
import { View, StyleSheet, Modal, Image, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const OfflineNotice = React.memo(() => {
  console.log('OfflineNotice rendered....');
  const netInfo = useNetInfo();

  useEffect(() => {
    console.log('net info changed, new state: ', netInfo);
  }, [netInfo]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={netInfo.isConnected == null ? false : !netInfo.isConnected}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={images.no_connection}
            style={{ height: height / 2, width }}
          />
          <Text>
            App will automatically resume when it finds internet connection.
          </Text>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
