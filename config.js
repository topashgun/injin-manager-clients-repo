export const constant = {};
constant.baseurl = 'https://api-emaginedev.influx.co.in/injinmanager-api/v1';
constant.baseroute = 'injinmanager';
constant.client = 'emagine';
constant.socketUrl = 'https://api-emaginedev.influx.co.in';

constant.allowedRoutes = [
  'assets',
  'movies',
  'location',
  'formats',
  'amenities',
  'ratings',
  'emblems',
  'locationMenu',
  'suggestiveSelling',
  'disableF&B',
  'masterlist',
  'platforms',
  'settings',
  'packs',
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
  }
];

constant.imageCode = {
  packHomePage: {
    previewImageFilm: 'x640y888',
    previewImagePromotion: 'x900y300',
  },
  moviesSortPage: {
    movieSortCard: 'x640y888',
  },
};