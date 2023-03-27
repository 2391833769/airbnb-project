import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import ContentWrapper from './style';
import { getRoomListActon } from '@/store/detail/actionCreators';
import { changePageAction } from '@/store/detail/actionCreators';
import RoomItem from '@/components/app-content/c-cps/room-item';

const DetailContent = memo(() => {
  /** 蒙版状态 */
  const [ maskShow , changeMaskShow ] = useState(true);

  /**获取page */
  const { page, roomList } = useSelector(state => {
    return {
      page: state.detailReducer.page,
      roomList: state.detailReducer.roomList
    }
  }, shallowEqual);

  /**获取dispatch */
  const dispatch = useDispatch();

  /** 监听页面状态值变化来获取对应roomList */
  useEffect(() => {
    window.scrollTo(0, 0);
    changeMaskShow(true);
    dispatch(getRoomListActon(page));

  }, [page]);

  /** 监听roomList状态值变化来更新mask转态 */
  useEffect(() => {
    changeMaskShow(false);

  }, [roomList])

  return (
    <ContentWrapper>
      <div className='list'>
      {
        roomList.list?.map(item => {
          return <RoomItem key={item._id} roomInfo={item} itemCount="20%"/>
        })
      }
      {maskShow && <div className='mask'></div>}
      </div>
    </ContentWrapper>
  )
})

export default DetailContent;