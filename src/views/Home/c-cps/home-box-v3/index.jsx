import ContentFooter from '@/components/app-content/c-cps/content-footer';
import ContentHeader from '@/components/app-content/c-cps/content-header';
import ContentList from '@/components/app-content/c-cps/content-list';
import ScrollBox from '@/components/app-content/c-cps/content-scrollbox/idnex';
import LongForItem from '@/components/app-content/c-cps/longfor-item';
import React, { memo } from 'react';
import Wrapper from './style';

const HomeBoxV3 = memo((props) => {
  const { title, subtitle, list } = props.data;
  // console.log(title, subtitle)

  return (
    <Wrapper>
      <ContentHeader title={title} subtitle={subtitle}/>
      <div className='item_list'>
      <ScrollBox>
          {
            list.map(item => {
              return <LongForItem data={item}/>
            })
          }
        </ScrollBox>
      </div>
     
      <ContentFooter/>
    </Wrapper>
  )
})

export default HomeBoxV3;