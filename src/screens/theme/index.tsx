import React from 'react';

// LOCAL IMPORTS
import { RenderThemeList } from './renderThemeList';
import { ToggleDarkThemeSwitch } from './toggleDarkThemeSwitch';
import { SafeAreaWrapper } from '@components';

export const Theme = () => {
  return (
    <SafeAreaWrapper statusBarStyle="light-content">
      <ToggleDarkThemeSwitch />
      <RenderThemeList />
    </SafeAreaWrapper>
  );
};
