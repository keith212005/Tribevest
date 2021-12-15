/* eslint-disable no-shadow */
import { useState } from 'react';

export function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  function toggleValue(value: any) {
    setValue((currentValue: any) =>
      typeof value === 'boolean' ? value : !currentValue,
    );
  }
  return [value, toggleValue];
}
