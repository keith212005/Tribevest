import { StyleSheet } from 'react-native';
import { fonts, fontsize, responsiveHeight, responsiveWidth } from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  tagline: {
    fontFamily: fonts.NUNITO_REGULAR,
    fontSize: fontsize._20,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
  },
  iconContainer: {
    position: 'absolute',
    marginTop: responsiveHeight(50),
  },
  iconInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgoundImage: {
    aspectRatio: 1,
    width: '100%',
    alignSelf: 'flex-start',
  },
});
