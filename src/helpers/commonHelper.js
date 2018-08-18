import routeMap from '../config/routes';
import _ from 'lodash';

export const routePathname = key => {
  try {
    const { path } = _.filter(routeMap, item => item.key === key)[0];
    return path;
  } catch (e) {
    throw new Error('Pathname router not found, please check key of router');
  }
};
