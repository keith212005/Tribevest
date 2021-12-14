import { responsiveHeight, responsiveWidth } from '@resources';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openEmailContainer: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    marginTop: responsiveHeight(-4),
  },
  formContainer: {
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  openEmailButtonStyle: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: 20,
  },
});
