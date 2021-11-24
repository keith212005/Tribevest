import { REDUCER_TYPE, themeColors } from '@constants';

/**
|--------------------------------------------------
| Returns the themeColorList from constants
|--------------------------------------------------
*/

const initialTheme = {
  isDarkTheme: false,
  selectedGradient: ['#8a2387', '#e94057'],
  themeList: '',
};
export const getTheme = (state = initialTheme, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.SET_THEME_FIRST_TIME:
      console.log('set theme first time called..');

      return { ...state, themeList: themeColors };
    case REDUCER_TYPE.TOGGLE_DARK_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    case REDUCER_TYPE.CHANGE_THEME:
      return {
        ...state,
        selectedGradient: action.payload.gradient,
        themeList: action.payload.newList,
      };
    default: {
      return state;
    }
  }
};
