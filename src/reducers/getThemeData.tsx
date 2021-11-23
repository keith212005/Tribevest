import { REDUCER_TYPE } from '@constants';

const initialTheme = {
  isDarkTheme: false,
};

export const getTheme = (state = initialTheme, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.TOGGLE_DARK_THEME:
      console.log('dark theme called');

      return { ...state, isDarkTheme: !state.isDarkTheme };
    default: {
      return state;
    }
  }
};
