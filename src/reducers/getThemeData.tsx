import { REDUCER_TYPE } from '@constants';

/**
|--------------------------------------------------
| Returns the themeColorList from constants
|--------------------------------------------------
*/

const initialTheme = {
  isDarkTheme: false,
  // selectedGradient: ['#8a2387', '#e94057'],
  // themeList: '',
};
export const getTheme = (state = initialTheme, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.TOGGLE_DARK_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default: {
      return state;
    }
  }
};
