import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';

import route from '@/router/route';

const Content = memo(() => {
  return (
    <div className='content'>
      {useRoutes(route)}
    </div>
  )
})

export default Content;