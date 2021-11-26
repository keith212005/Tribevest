import { REDUCER_TYPE } from '@constants';

// called when theme is dark or light
export const toggleDarkTheme = () => ({
  type: REDUCER_TYPE.TOGGLE_DARK_THEME,
  payload: null,
});
