import { en } from '@languages';

/* eslint-disable max-len */
export const SCREENS = {
  Signin: 'Signin',
  TabNavigator: 'TabNavigator',
  DrawerNavigator: 'DrawerNavigator',
  Tribes: 'Tribes',
  Messages: 'Messages',
  Alerts: 'Alerts',
  Profile: 'Profile',
  Onboarding: 'Onboarding',
  PasswordReset: 'PasswordReset',
  CheckEmail: 'CheckEmail',
  NewPassword: 'NewPassword',
  FaceId: 'FaceId',
  SignUp: 'SignUp',
  SignUpSteps: 'SignUpSteps',
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

export const TRIBE_LIST_SIDE_DRAWER = [
  {
    id: 1,
    name: 'Crypto Crew',
    url: 'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 2,
    name: 'STR Group',
    url: 'https://media.istockphoto.com/photos/empty-road-at-building-exterior-picture-id479842074?k=20&m=479842074&s=612x612&w=0&h=HS6lsU1f9W21IkotS3cxdvU5KeEO-gLMUa6xrIBbR6k=',
  },
  {
    id: 3,
    name: 'Small Elephant',
    url: 'https://cdn.cnn.com/cnnnext/dam/assets/210701131308-worlds-largest-yacht--aft-night---credit--winch-design.jpg',
  },
  {
    id: 4,
    name: 'Futurist Investing',
    url: 'https://www.elitetraveler.com/wp-content/uploads/2021/03/octopus_00006307_vb1574492_optimized.jpg',
  },
  {
    id: 5,
    name: 'ATX Realtors',
    url: 'https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg',
  },
];

export const FACES = [
  {
    id: 0,
    imageUrl:
      'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 1,
    imageUrl:
      'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 2,
    imageUrl:
      'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 3,
    imageUrl:
      'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 4,
    imageUrl:
      'https://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
];

export const CAP_TABLE = [
  {
    id: 0,
    imageUrl:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
    name: 'Luke Peake',
    amount: '$223.00',
    equity: '49%',
  },
  {
    id: 1,
    imageUrl:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
    name: 'Zach Bowers',
    amount: '$199.00',
    equity: '19%',
  },
  {
    id: 2,
    imageUrl:
      'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
    name: 'Elizabeth Briggs',
    amount: '$878.00',
    equity: '10%',
  },
  {
    id: 3,
    imageUrl:
      'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
    name: 'Jerry Christensen',
    amount: '$955.00',
    equity: '5%',
  },
  {
    id: 4,
    imageUrl:
      'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
    name: 'Kate Doyle',
    amount: '$778.00',
    equity: '10%',
  },
  {
    id: 5,
    imageUrl:
      'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
    name: 'Kate Doyle',
    amount: '$778.00',
    equity: '10%',
  },
  {
    id: 6,
    imageUrl:
      'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
    name: 'Kate Doyle',
    amount: '$778.00',
    equity: '10%',
  },
];

export const SIGN_UP_STEP1 = [
  {
    id: 1,
    description: en.FINANCE_MY_DEAL,
    selected: false,
  },
  {
    id: 2,
    description: en.SETUP_MY_INVESTOR_GROUP,
    selected: false,
  },
  {
    id: 3,
    description: en.HAVE_EXISTING_INVESTOR_GROUP,
    selected: false,
  },
  {
    id: 4,
    description: en.LEARN_TRIBE_INVESTING,
    selected: false,
  },
];

export const SIGN_UP_STEP2 = [
  {
    id: 1,
    description: en.NOT_DISCUSSED,
    selected: false,
  },
  {
    id: 2,
    description: en.TALKING_ABOUT,
    selected: false,
  },
  {
    id: 3,
    description: en.ACTIVELY_LOOKING_TOOL,
    selected: false,
  },
  {
    id: 4,
    description: en.CONNECT_OUTSIDE_NETWORK,
    selected: false,
  },
];

export const SIGN_UP_STEP3 = [
  {
    id: 1,
    description: en.LESS_THAN_10_K,
    selected: false,
  },
  {
    id: 2,
    description: en.TEN_TO_20_K,
    selected: false,
  },
  {
    id: 3,
    description: en.TWENTY_TO_50_K,
    selected: false,
  },
  {
    id: 4,
    description: en.FIFTY_TO_100_K,
    selected: false,
  },
  {
    id: 5,
    description: en.HUNDERED_TO_250_K,
    selected: false,
  },
  {
    id: 6,
    description: en.TWOHUNDREDFITY_K_PLUS,
    selected: false,
  },
];

export const SIGN_UP_STEP4 = [
  {
    id: 1,
    description: en.EXPEDITED,
    selected: false,
  },
  {
    id: 2,
    description: en.STANDARD,
    selected: false,
  },
  {
    id: 3,
    description: en.TWO_WEEKS,
    selected: false,
  },
  {
    id: 4,
    description: en.NOT_READY_FORM_LLC,
    selected: false,
  },
];
