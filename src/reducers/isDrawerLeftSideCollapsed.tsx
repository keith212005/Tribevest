import { REDUCER_TYPE } from '@constants';

const initialState = false;
export const isDrawerLeftSideCollapsed = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case REDUCER_TYPE.IS_DRAWER_LEFTSIDE_COLLAPSED:
      return action.data;
    default: {
      return state;
    }
  }
};
