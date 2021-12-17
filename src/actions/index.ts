import * as resetStore from './resetStore';
import * as networkListener from './networkListener';
import * as isOpenFirstTime from './isOpenFirstTime';
import * as setAppLanguage from './setAppLanguage';
import * as themeData from './getThemeData';
import * as isLoggedIn from './isLoggedIn';
import * as isDrawerLeftSideCollapsed from './isDrawerLeftSideCollapsed';

export const actionCreators = Object.assign(
  {},
  resetStore,
  networkListener,
  isOpenFirstTime,
  setAppLanguage,
  themeData,
  isLoggedIn,
  isDrawerLeftSideCollapsed,
);
