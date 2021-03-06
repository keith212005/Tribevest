import { en } from '@languages';

export const SCREENS = {
  Signin: 'Signin',
  BottomTabNavigator: 'BottomTabNavigator',
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
  Voting: 'Voting',
  Vote: 'Vote',
  Banking: 'Banking',
  NewMotionSetup: 'NewMotionSetup',
  Funding: 'Funding',
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

export const ONBOARDING_SCREENS = [
  {
    id: 1,
    image: 'onboarding_welcome',
    title: 'ONBOARDING1_TITLE',
    description: '',
  },
  {
    id: 2,
    image: 'onboarding_create_plan',
    title: 'ONBOARDING2_TITLE',
    description: 'ONBOARDING2_DESCRIPTION',
  },
  {
    id: 3,
    image: 'onboarding_invite_friends',
    title: 'ONBOARDING3_TITLE',
    description: 'ONBOARDING3_DESCRIPTION',
  },
  {
    id: 4,
    image: 'onboarding_file_llc',
    title: 'ONBOARDING4_TITLE',
    description: 'ONBOARDING4_DESCRIPTION',
  },
  {
    id: 5,
    image: 'onboarding_pool_capital',
    title: 'ONBOARDING5_TITLE',
    description: 'ONBOARDING5_DESCRIPTION',
  },
];

export const TRIBE_LIST_SIDE_DRAWER = [
  {
    id: 1,
    name: 'Crypto Crew',
    selected: true,
    url: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'STR Group',
    selected: false,
    url: 'https://media.istockphoto.com/photos/empty-road-at-building-exterior-picture-id479842074?k=20&m=479842074&s=612x612&w=0&h=HS6lsU1f9W21IkotS3cxdvU5KeEO-gLMUa6xrIBbR6k=',
  },
  {
    id: 3,
    name: 'Small Elephant',
    selected: false,
    url: 'https://cdn.cnn.com/cnnnext/dam/assets/210701131308-worlds-largest-yacht--aft-night---credit--winch-design.jpg',
  },
  {
    id: 4,
    name: 'Futurist Investing',
    selected: false,
    url: 'https://www.elitetraveler.com/wp-content/uploads/2021/03/octopus_00006307_vb1574492_optimized.jpg',
  },
  {
    id: 5,
    name: 'ATX Realtors',
    selected: false,
    url: 'https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg',
  },
];

export const FACES = [
  {
    id: 0,
    upVote: true,
    imageUrl:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
  },
  {
    id: 1,
    upVote: false,
    imageUrl:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
  },
  {
    id: 2,
    upVote: true,
    imageUrl:
      'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
  },
  {
    id: 3,
    upVote: false,
    imageUrl:
      'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
  },
  {
    id: 4,
    upVote: true,
    imageUrl:
      'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
  },
  {
    id: 5,
    upVote: false,
    imageUrl:
      'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
  },
  {
    id: 6,
    upVote: true,
    imageUrl:
      'https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg',
  },
  {
    id: 7,
    upVote: false,
    imageUrl:
      'https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
  },
  {
    id: 8,
    upVote: true,
    imageUrl:
      'https://i.pinimg.com/originals/a6/0d/68/a60d685194a7fd984d08a595a0a99ae7.jpg',
  },
  {
    id: 9,
    upVote: true,
    imageUrl:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
  },
  {
    id: 10,
    upVote: true,
    imageUrl:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
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

export const SIGN_UP_STEP5 = [
  {
    id: 1,
    icon: 'singlefamily',
    description: en.SINGLE_FAMILY + en.PROPERTY,
    selected: false,
  },
  {
    id: 2,
    icon: 'multifamily',
    description: en.MULTIPLE_FAMILY + en.PROPERTY,
    selected: false,
  },
  {
    id: 3,
    icon: 'vacation_home',
    description: en.VACATION + en.HOME,
    selected: false,
  },
  {
    id: 4,
    icon: 'realestate',
    description: en.LARGE_REAL_ESTATE_DEAL,
    selected: false,
  },
  {
    id: 5,
    icon: 'recreational_asset',
    description: en.RECREATIONAL_ASSET,
    selected: false,
  },
  {
    id: 6,
    icon: 'startup_business',
    description: en.STARTUP_BUSINESS,
    selected: false,
  },
  {
    id: 7,
    icon: 'collectibles',
    description: en.COLLECTIBLES,
    selected: false,
  },
  {
    id: 8,
    icon: 'cryptocurrency',
    description: en.CRYPTOCURRENCY,
    selected: false,
  },
  {
    id: 9,
    icon: 'stock',
    description: en.STOCKS,
    selected: false,
  },
  {
    id: 10,
    icon: 'other',
    description: en.OTHER,
    selected: false,
  },
];

export const SIGN_UP_STEP8 = [
  {
    id: 1,
    description: en.ROI,
    selected: false,
  },
  {
    id: 2,
    description: en.EXPERIENCE + en.LEARN_TOGETHER,
    selected: false,
  },
  {
    id: 3,
    description: en.IMPACT_OUT_TRIBE,
    selected: false,
  },
  {
    id: 4,
    description: en.SHARED_ASSET,
    selected: false,
  },
  {
    id: 5,
    description: en.BUILD_WEALTH + en.THROUGH + en.OWNERSHIP,
    selected: false,
  },
  {
    id: 6,
    description: en.BUILD_REAL_ESTATE,
    selected: false,
  },
  {
    id: 7,
    description: en.ENHANCE_RELATIONSHIP,
    selected: false,
  },
  {
    id: 8,
    description: en.OTHER,
    selected: false,
  },
];

export const TRIBEVEST_PLANS = [
  {
    id: 1,
    title: 'TRIBEVEST_ANNUAL',
    amount: 30,
    description: 'PER_MONTH_ANUALLY',
    selected: true,
  },
  {
    id: 2,
    title: 'TRIBEVEST_MONTHLY',
    amount: 40,
    description: 'PER_MONTH_ANUALLY',
    selected: false,
  },
];

export const ACCOUNT_TYPES = [
  {
    label: 'Business Checking',
    value: 'Business Checking',
  },
  {
    label: 'Business Savings',
    value: 'Business Savings',
  },
];

export const BANKING_MENU = [
  {
    label: 'Accounts',
    value: 'Accounts',
  },
  {
    label: 'Cards',
    value: 'Cards',
  },
  {
    label: 'Counterparties',
    value: 'Counterparties',
  },
  {
    label: 'Transactions',
    value: 'Transactions',
  },
  {
    label: 'Payments',
    value: 'Payments',
  },
  {
    label: 'Statements',
    value: 'Statements',
  },
];

export const TRIBEVEST_ACCOUNTS = [
  {
    id: 1,
    available_balance: '$72,520.00',
    account_details: '**** **** 4837',
  },
  {
    id: 2,
    available_balance: '$63,652.00',
    account_details: '**** **** 8721',
  },
];

export const EXTERNAL_ACCOUNTS = [
  {
    id: 1,
    type: 'SAVINGS',
    description: 'Peakeys Personal',
    balance: '$58,849.00',
  },
  {
    id: 2,
    type: 'SAVINGS',
    description: 'Family Savings',
    balance: '$58,849.00',
  },
  {
    id: 3,
    type: 'CHECKING',
    description: 'Investments',
    balance: '$45,611.00',
  },
  {
    id: 4,
    type: 'SAVINGS',
    description: 'Family Investments',
    balance: '$80,987.00',
  },
  {
    id: 5,
    type: 'CHECKING',
    description: 'Extra Savings',
    balance: '$50,872.00',
  },
];

export const MONTHLY_STATEMENT = [
  {
    id: 1,
    month: 'January',
    from: 'Jan 1 - Jan 31, 2021',
  },
  {
    id: 2,
    month: 'February',
    from: 'Feb 1 - Feb 30, 2021',
  },
  {
    id: 3,
    month: 'March',
    from: 'Mar 1 - Mar 31, 2021',
  },
  {
    id: 4,
    month: 'April',
    from: 'Apr 1 - Apr 30, 2021',
  },
  {
    id: 5,
    month: 'May',
    from: 'May 1 - May 31, 2021',
  },
  {
    id: 6,
    month: 'June',
    from: 'Jun 1 - Jun 30, 2021',
  },
];

export const TRANSACTIONS = [
  {
    id: 1,
    date: 'July 02, 2021',
    cardName: 'Tribevest Card',
    paymentType: 'Card Payment',
    amount: '$37.87',
    status: 'Processed',
  },
  {
    id: 2,
    date: 'July 02, 2021',
    cardName: 'Tribevest Card',
    paymentType: 'Card Payment',
    amount: '$37.87',
    status: 'Processed',
  },
  {
    id: 3,
    date: 'July 02, 2021',
    cardName: 'Tribevest Card',
    paymentType: 'Card Payment',
    amount: '$37.87',
    status: 'Processed',
  },
  {
    id: 4,
    date: 'July 02, 2021',
    cardName: 'Tribevest Card',
    paymentType: 'Card Payment',
    amount: '$37.87',
    status: 'Processed',
  },
  {
    id: 5,
    date: 'July 02, 2021',
    cardName: 'Tribevest Card',
    paymentType: 'Card Payment',
    amount: '$37.87',
    status: 'Processed',
  },
];

export const CARDS_LIST = [
  {
    id: 1,
    label: 'Tribevest: **** **** 6621',
    value: 'Tribevest: **** **** 6621',
    cardName: 'Marketing',
    cardNumber: '8732 7621 6743 6621',
    cvv: '652',
    expDate: '03/24',
  },
  {
    id: 2,
    label: 'Tribevest: **** **** 6622',
    value: 'Tribevest: **** **** 6622',
    cardName: 'Marketing',
    cardNumber: '8732 7621 6743 6621',
    cvv: '652',
    expDate: '03/24',
  },
  {
    id: 3,
    label: 'Tribevest: **** **** 6623',
    value: 'Tribevest: **** **** 6623',
    cardName: 'Marketing',
    cardNumber: '8732 7621 6743 6621',
    cvv: '652',
    expDate: '03/24',
  },
  {
    id: 4,
    label: 'Tribevest: **** **** 6624',
    value: 'Tribevest: **** **** 6624',
    cardName: 'Marketing',
    cardNumber: '8732 7621 6743 6621',
    cvv: '652',
    expDate: '03/24',
  },
  {
    id: 5,
    label: 'Tribevest: **** **** 6625',
    value: 'Tribevest: **** **** 6625',
    cardName: 'Marketing',
    cardNumber: '8732 7621 6743 6621',
    cvv: '652',
    expDate: '03/24',
  },
];

export const LATEST_TRANSACTIONS = [
  {
    id: 1,
    name: 'Insurance',
    type: 'Allianz Life',
    amount: '-$13,000.00',
    date: 'Today',
  },
  {
    id: 2,
    name: 'Family Investments',
    type: 'Marketing',
    amount: '-$16,000.00',
    date: 'June 05, 2021',
  },
  {
    id: 3,
    name: 'Home Loan',
    type: 'Quicken Loans',
    amount: '-$25,999.00',
    date: 'June 07, 2021',
  },
  {
    id: 4,
    name: 'Transport',
    type: 'US Metro',
    amount: '-$2,000.00',
    date: 'June 08, 2021',
  },
  {
    id: 5,
    name: 'Medical Insurance',
    type: 'United Health',
    amount: '-$10,000.00',
    date: 'June 09, 2021',
  },
  {
    id: 6,
    name: 'Investments',
    type: 'Stock Market',
    amount: '-$16,000.00',
    date: 'June 09, 2021',
  },
  {
    id: 7,
    name: 'Home Rent',
    type: 'Airbnb',
    amount: '-$9,000.00',
    date: 'June 12, 2021',
  },
  {
    id: 8,
    name: 'Shopping',
    type: 'Apache Mall',
    amount: '-$2,000.00',
    date: 'June 15, 2021',
  },
  {
    id: 9,
    name: 'Amazone',
    type: 'Card Payment',
    amount: '-$5,000.00',
    date: 'June 16, 2021',
  },
];

export const STATEMENTS = [
  {
    id: 1,
    from: 'Jun 1 - Jun 30, 2021',
  },
  {
    id: 2,
    from: 'May 1 - May 31, 2021',
  },
  {
    id: 3,
    from: 'Apr 1 - Apr 30, 2021',
  },
  {
    id: 4,
    from: 'Mar 1 - Mar 31, 2021',
  },
  {
    id: 5,
    from: 'Feb 1 - Feb 28, 2021',
  },
  {
    id: 6,
    from: 'Jan 1 - Jan 31, 2021',
  },
];

export const SCHEDULED = [
  {
    id: 1,
    date: 'July 22, 2021',
    amount: '$7,500.00',
  },
  {
    id: 2,
    date: 'July 24, 2021',
    amount: '$6,000.00',
  },
  {
    id: 3,
    date: 'July 26, 2021',
    amount: '$4,800.00',
  },
  {
    id: 4,
    date: 'July 27, 2021',
    amount: '$1,000.00',
  },
  {
    id: 5,
    date: 'July 30, 2021',
    amount: '$9,900.00',
  },
  {
    id: 6,
    date: 'August 1, 2021',
    amount: '$3,999.00',
  },
  {
    id: 7,
    date: 'August 3, 2021',
    amount: '$8,900.00',
  },
];

export const MY_CONTRIBUTIONS = [
  {
    id: 1,
    amount: '$500.00',
    date: '06-02-2021',
    times: '5x',
    type: 'Recurring',
  },
  {
    id: 2,
    amount: '$350.00',
    date: '07-05-2021',
    times: '8x',
    type: 'Recurring',
  },
  {
    id: 3,
    amount: '$4,000.00',
    date: '07-28-2021',
    times: '1x',
    type: 'Recurring',
  },
  {
    id: 4,
    amount: '$25,000.00',
    date: '08-08-2021',
    times: '1x',
    type: 'Recurring',
  },
  {
    id: 5,
    amount: '$30,000.00',
    date: '09-08-2021',
    times: '2x',
    type: 'Recurring',
  },
];

export const SCHEDULED_CONTRIBUTIONS = [
  {
    id: 1,
    date: 'February 21, 2021',
    status: 'Success',
    checked: true,
  },
  {
    id: 2,
    date: 'February 21, 2021',
    status: 'Success',
    checked: false,
  },
  {
    id: 3,
    date: 'August 2, 2021',
    status: 'Scheduled',
    checked: false,
  },
  {
    id: 4,
    date: 'September 2, 2021',
    status: 'Scheduled',
    checked: false,
  },
  {
    id: 5,
    date: 'October 2, 2021',
    status: 'Scheduled',
    checked: false,
  },
];
