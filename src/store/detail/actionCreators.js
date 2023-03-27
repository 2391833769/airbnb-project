import * as actionTypes from './constants';
import { getRoomListData } from '@/services/modules/entire.-data';

export const changePageAction = (page) => ({ type: actionTypes.CHANGE_PAGE, data: page });
export const changeListAction = (list) => ({ type: actionTypes.CHANGE_LIST, data: list});
export const changeDetailAction = (detail) => ({ type: actionTypes.CHANGE_DETAIL, data: detail});

export const getRoomListActon = (page) => {
  
  return dispatch => {
      getRoomListData(page).then(res => {
        // console.log(res)
        dispatch(changeListAction(res));
    })
  }
}