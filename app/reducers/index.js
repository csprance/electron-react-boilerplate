// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import navTree from '../features/NavTree/reducer';
import stage from '../features/Stage/reducer';

const rootReducer = combineReducers({
  router,
  navTree,
  stage
});

export default rootReducer;
