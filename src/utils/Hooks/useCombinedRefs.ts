import { useRef, useEffect } from 'react';

import { Modalize } from 'react-native-modalize';

export const useCombinedRefs = (...refs: any) => {
  const targetRef = useRef<Modalize>();

  useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) {
        return;
      }

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};
