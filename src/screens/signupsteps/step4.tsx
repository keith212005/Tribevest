import React from 'react';

// LOCAL IMPORTS
import { SIGN_UP_STEP4 } from '@constants';
import { SingleSelectList } from '@components';

export const Step4 = () => {
  return (
    <SingleSelectList
      array={SIGN_UP_STEP4}
      onPress={(arr: any) => {
        console.log(arr);
      }}
    />
  );
};
