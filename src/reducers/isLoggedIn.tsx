import { REDUCER_TYPE } from '@constants';

const initialState = false;
export const isLoggedIn = (state = initialState, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.IS_LOGGED_IN:
      return action.data;
    default: {
      return state;
    }
  }
};
