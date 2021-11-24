import { REDUCER_TYPE } from '@constants';

export const isLoggedIn = (params: boolean) => ({
  type: REDUCER_TYPE.IS_LOGGED_IN,
  data: params,
});
