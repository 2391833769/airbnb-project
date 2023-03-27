import React, { memo } from 'react';
import DetailContent from './c-cps/detail-content';
import DetailFilter from './c-cps/detail-filter';
import DetailPagination from './c-cps/detail-pagination';

const Entire = memo(() => {
  return (
    <div>
      <DetailFilter/>
      <DetailContent/>
      <DetailPagination/>
    </div>
  )
})

export default Entire;