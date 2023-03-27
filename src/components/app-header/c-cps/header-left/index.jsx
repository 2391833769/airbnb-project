import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Icon from './c-cps/Icon';

import LeftWrapper from './style';

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
 
  const goHome = () => {
    navigate("/home");
  }

  return (
    <ThemeProvider theme={{a :"1"}}>
      <LeftWrapper>
        <div className='icon' onClick={goHome}>
          <Icon/>
        </div>
      </LeftWrapper>
    </ThemeProvider>
    
  )
})

export default HeaderLeft;