import { REDUCER_TYPE } from '@constants';
import { changeLanguage } from '@languages';

export function setAppLanguage(languageCode: string) {
  return (dispatch: (arg0: { type: string; data: any }) => void) => {
    return new Promise((resolve) => {
      changeLanguage(languageCode);
      resolve(true);
      return dispatch({
        type: REDUCER_TYPE.SET_APP_LANGUAGE,
        data: languageCode,
      });
    });
  };
}
