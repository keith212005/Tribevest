import React from 'react';

// LOCAL IMPORTS
import { SIGN_UP_STEP2 } from '@constants';
import { SingleSelectList } from '@components';

export const Step2 = () => {
  return (
    <SingleSelectList
      array={SIGN_UP_STEP2}
      onPress={(arr: any) => {
        console.log(arr);
      }}
    />
  );
};
