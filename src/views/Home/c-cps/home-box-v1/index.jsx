import React, { memo } from 'react';

import ModuleWrapper from './style';
import ContentHeader from '@/components/app-content/c-cps/content-header';
import ContentList from '@/components/app-content/c-cps/content-list';
import ContentFooter from '@/components/app-content/c-cps/content-footer';

const HomeBoxV1 = memo((props) => {
  const { title, subtitle, list } = props.data;
  const { itemCount } = props;

  return (
    <ModuleWrapper>
      <ContentHeader title={title} subtitle={subtitle}/>
      <ContentList list={list} itemCount={itemCount}/>
      <ContentFooter/>
    </ModuleWrapper>
  )
})

export default HomeBoxV1;