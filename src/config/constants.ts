export const AUTH_TOKEN = 'auth-token';
export const NAME = 'name';
export const IMAGE = 'image';
export const DEFAULT_USER_IMAGE = 'https://fitner-app.s3.us-east-2.amazonaws.com/default_user.png';

export const PAGINATION = {
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 2,
  disableInitialCallback: true,
  containerClassName: 'pagination',
  activeClassName: 'active',
  breakClassName: 'break-me',
  breakLabel: '...',
  nextLabel: 'Next',
  previousLabel: 'Previous',
};

export const SCORE_BADGE_SIZES = {
  small: 'small',
  large: 'large',
};

export const URL_REGEX =
  /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const availableCollectionLayouts = {
  cards: 'cards',
  table: 'table',
};

export const tryAgainMessage = 'Something bad happened, please try again later.';

const equalsNotFields = [
  {
    name: 'equals',
    label: 'Equals',
  },
  {
    name: 'doesNotEqual',
    label: 'Does Not Equal',
  },
];

const fieldValidator = ({ value }: any) => {
  return typeof value === 'string' && value.length === 0;
};

export const fields = [
  { name: 'dataSource', label: 'Source', operators: equalsNotFields, validator: fieldValidator },
  { name: 'url', label: 'URL', validator: fieldValidator },
];

export const combinators = [
  { name: 'and', label: 'AND' },
  { name: 'or', label: 'OR' },
];
