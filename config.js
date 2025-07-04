export const constant = {};
constant.baseurl = 'https://dev-injin-dp.amccinemas.com/injinmanager-api/v1';
constant.baseroute = 'injinmanager';
constant.client = 'amc';
constant.socketUrl = 'https://dev-injin-dp.amccinemas.com';

constant.allowedRoutes = [
  'assets',
  'movies',
  'location',
  'formats',
  'amenities',
  'ratings',
  'emblems',
  'suggestiveSelling',
  'disableF&B',
  'masterlist',
  'locationMenu',
  'platforms',
  'settings',
  'packs',
  'offers',
  'experiences',
  'emailtemplates',
];

constant.fnbActiveField = true;
constant.masterFnbActiveField = true;
constant.smartModifierAsSeparateModule = false;
constant.updateAllFnb = false;
constant.FNBVersion = 'v2';

constant.language = [
  {
    version: 'en-US',
    name: 'English - United States',
  },
  {
    version: 'ar-SA',
    name: 'Arabic - Saudi Arabia',
  },
];

constant.COMPONENTS_API_URL = '/api/components';
constant.PAGE_API_URL = '/api/pages';
constant.FONTS_API_URL = '/api/fonts';
constant.IMAGES_API_URL = '/api/assets';
constant.PAGE_GLOBAL_SETTINGS = '/api/pageglobalsettings';

constant.imageCode = {
  packHomePage: {
    previewImageFilm: 'x280y420',
    previewImagePromotion: 'x770y400',
  },
  moviesSortPage: {
    movieSortCard: 'x280y420',
  },
};