import React, { memo } from 'react';

import HeaderWrapper from '@/components/app-content/c-cps/content-header/style';

const ContentHeader = memo((props) => {

  const { title, subtitle } = props;

  return (
    <HeaderWrapper>
      <h3 className='title'>{title}</h3>
      <div className='subtitle'>{subtitle}</div>
    </HeaderWrapper>
  )
})

export default ContentHeader;