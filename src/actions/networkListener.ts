/* eslint-disable @typescript-eslint/no-unused-vars */
import { addEventListener } from '@react-native-community/netinfo';
import { REDUCER_TYPE } from '@constants';

// Network connetion listenr
export function networkListener() {
  console.log('network listener called...');

  return (dispatch) => {
    return new Promise((resolve: any) => {
      addEventListener((state) => {
        console.log('>>>>>>>>>>', state);

        // resolve(state.isConnected);

        // return dispatch({
        //   type: REDUCER_TYPE.NETWORK_STATUS,
        //   data: state.isConnected,
        // });
      });
    });
  };
}

// Network connetion listenr
// export function networkListener() {
//   return (
//     dispatch: (arg0: { type: string; isOnline: boolean | null }) => void,
//   ) => {
//     try {
//       addEventListener((state) => {
//         return dispatch({
//           type: REDUCER_TYPE.NETWORK_STATUS,
//           isOnline: state.isConnected,
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     // return new Promise((resolve) => {
//     //   addEventListener((state) => {
//     //     resolve(state.isConnected);
//     //     return dispatch({
//     //       type: REDUCER_TYPE.NETWORK_STATUS,
//     //       isOnline: state.isConnected,
//     //     });
//     //   });
//     // });
//   };
// }
