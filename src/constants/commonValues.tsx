export const SCREENS = {
  Splash: 'Splash',
  Login: 'Login',
  TabNavigator: 'TabNavigator',
  Dashboard: 'Dashboard',
  DrawerNavigator: 'DrawerNavigator',
  Leads: 'Leads',
  Theme: 'Theme',
};

export interface IfieldObject {
  value?: string;
  isError?: boolean;
  errorText?: string;
  isFocus?: boolean;
}

export var fieldObject = {
  value: '',
  isError: false,
  errorText: '',
  isFocus: false,
};

export const themeColors = [
  {
    id: 1,
    name: 'Cadillac',
    isChecked: true,
    gradient: ['#8a2387', '#e94057'],
  },
  {
    id: 2,
    name: 'RoyalBlue',
    isChecked: false,
    gradient: ['#0575e6', '#021b79'],
  },
  {
    id: 3,
    name: 'HippieGreen',
    isChecked: false,
    gradient: ['#6a9113', '#185a9d'],
  },
  {
    id: 4,
    name: 'Turquiose',
    isChecked: false,
    gradient: ['#43cea2', '#fffddf'],
  },
  {
    id: 5,
    name: 'Tangerine',
    isChecked: false,
    gradient: ['#FF512F', '#ffc500'],
  },
];

export const TRIBE_LIST_SIDE_DRAWER = [
  {
    id: 1,
    name: 'Crypto Crew',
    url: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 2,
    name: 'STR Group',
    url: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 3,
    name: 'Small Elephant',
    url: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 4,
    name: 'Futurist Investing',
    url: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: 5,
    name: 'ATX Realtors',
    url: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

export const FACES = [
  {
    id: 0,
    imageUrl:
      'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 1,
    imageUrl:
      'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 2,
    imageUrl:
      'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 3,
    imageUrl:
      'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 4,
    imageUrl:
      'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
];
