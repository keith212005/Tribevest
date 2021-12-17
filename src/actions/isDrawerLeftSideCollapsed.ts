import { REDUCER_TYPE } from '@constants';

export const isDrawerLeftSideCollapsed = (params: boolean) => ({
  type: REDUCER_TYPE.IS_DRAWER_LEFTSIDE_COLLAPSED,
  data: params,
});
