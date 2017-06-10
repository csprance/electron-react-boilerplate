/**
 * Name: NavTree
 * Type: Reducer
 * Description:
 */
import * as types from '../../constants/actionTypes';
import defaultState from './state';

export default function navTree(state = defaultState, action) {
  switch (action.type) {
    case types.EXPAND_SECTION:
      return { ...state };
    default:
      return state;
  }
}
