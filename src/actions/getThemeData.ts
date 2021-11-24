import { REDUCER_TYPE, themeColors } from '@constants';

// this will be called in splash screen when isOpenfirtsTime is true
export const setThemeFirstTime = () => ({
  type: REDUCER_TYPE.SET_THEME_FIRST_TIME,
  payload: null,
});

// called when theme is dark or light
export const toggleDarkTheme = () => ({
  type: REDUCER_TYPE.TOGGLE_DARK_THEME,
  payload: null,
});

// called when user changes the theme
export const changeTheme = (selectedItem: any) => {
  return async (dispatch: any) => {
    let selectedGradient: any;
    const newArr = await themeColors.map((item) => {
      if (selectedItem.name === item.name) {
        item.isChecked = true;
        selectedGradient = item.gradient;
      } else {
        item.isChecked = false;
      }
      return item;
    });
    var obj: any = {};
    obj.newList = newArr;
    obj.gradient = selectedGradient;

    return dispatch({
      type: REDUCER_TYPE.CHANGE_THEME,
      payload: obj,
    });
  };
};

// reducer state will be set when user selects particular theme
export const setSelectedGradient = (arr: Array<string>) => ({
  type: REDUCER_TYPE.SET_GRADIENT_COLOR,
  payload: arr,
});
