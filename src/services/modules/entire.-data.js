import { configure } from '@testing-library/react';
import hyRequest from '../request'

export const getRoomListData = (page) => {
  
  const offSet = page*20;

  return hyRequest.get({
    url : "entire/list",
    params: {
      offset: offSet,
      size: 20
    }
  })
}