/**
 * Name: Stage Actions
 * Description:
 */
import * as types from '../../constants/actionTypes';

export function addToStage(item) {
  return {
    type: types.ADD_TO_STAGE,
    payload: item
  };
}
