import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/* useBackButton */
export function useBackButton(handler: any) {
  // Frustration isolated! Yay! 🎉
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
