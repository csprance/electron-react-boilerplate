/**
 * Name: actions
 * Description:
 */
import * as types from '../../constants/actionTypes';

export function expandSection(section) {
  return {
    type: types.EXPAND_SECTION,
    payload: section
  };
}
