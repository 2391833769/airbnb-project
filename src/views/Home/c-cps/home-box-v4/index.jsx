import ContentFooter from '@/components/app-content/c-cps/content-footer';
import ContentHeader from '@/components/app-content/c-cps/content-header';
import ScrollBox from '@/components/app-content/c-cps/content-scrollbox/idnex';
import RoomItem from '@/components/app-content/c-cps/room-item';
import React, { memo } from 'react'
import Wrapper from './style';

const HomeBoxV4 = memo((props) => {
  const { title, subtitle, list } = props.data;

  return (
    <Wrapper>
      <ContentHeader title={title} subtitle={subtitle}/>
      <div className='item_list'>
        <ScrollBox>
          {
            list.map(item => {
              return <RoomItem roomInfo={item} itemCount={"20%"}/>
            })
          }
        </ScrollBox>
      </div>
      <ContentFooter/>
    </Wrapper>
  )
})

export default HomeBoxV4;