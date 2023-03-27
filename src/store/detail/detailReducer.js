import * as actionTypes from './constants';

const initialState = {
  page: 0,
  roomList: {},
  detailData: {}
}

function detailReducer(state = initialState, action) {

  switch(action.type) {
    case actionTypes.CHANGE_PAGE:
      return { ...state, page: action.data };
    case actionTypes.CHANGE_LIST:
      return { ...state, roomList: action.data };
    case actionTypes.CHANGE_DETAIL:
      return { ...state, detailData: action.data };
    default:
      return state;
  }
}

export default detailReducer;