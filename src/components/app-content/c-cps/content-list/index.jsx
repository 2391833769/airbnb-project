import React, { memo } from 'react'
import ListWrapper from './style';
import RoomItem from '../room-item';

const ContentList = memo((props) => {

  const { list } = props;

  return (
    <ListWrapper >
        {
          list?.slice(0, 8).map(item => {
            return <RoomItem key={item.id} roomInfo={item} itemCount={props.itemCount}/>
          })
        }
      </ListWrapper>
  )
})

export default ContentList;