import React from 'react';

// LOCAL IMPORTS
import { SIGN_UP_STEP3 } from '@constants';
import { SingleSelectList } from '@components';

export const Step3 = () => {
  return (
    <SingleSelectList
      array={SIGN_UP_STEP3}
      onPress={(arr: any) => {
        console.log(arr);
      }}
    />
  );
};
