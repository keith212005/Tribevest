import { responsiveHeight } from '@resources';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    marginTop: responsiveHeight(-4),
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 40,
    borderWidth: 1,
  },
});
