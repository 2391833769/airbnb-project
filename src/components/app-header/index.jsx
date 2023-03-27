import React, { memo, useEffect } from 'react';
import HeaderWrapper from './style';

import HeaderLeft from './c-cps/header-left';
import HeaderCenter from './c-cps/header-center';
import HeaderRight from './c-cps/header-right';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeFixed } from '@/store/main';
import { ThemeProvider } from 'styled-components';
// import { ThemeProvider } from '@material-ui/core';

const Header = memo(() => {


  /** 获取每个页面时Fixed状态 */
  const { isFixed, isAlpha } = useSelector(state => {
    return {
      isFixed: state.mainReducer.isFixed,
      isAlpha: state.mainReducer.isAlpha
    }
  });

  const dispatch = useDispatch();

  const location = useLocation();
  
  /** 跟据路由路径设置header显示状态 */
  useEffect(() => {
    
    if (location.pathname === '/home') {
      dispatch(changeFixed(true));
    } else if (location.pathname === '/entire') {
      dispatch(changeFixed(false));
    } else if (location.pathname === '/detail') {
      dispatch(changeFixed(false));
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={{isAlpha, isFixed}}>
       <HeaderWrapper>
         <HeaderLeft/>
          <HeaderCenter/>
          <HeaderRight />
      </HeaderWrapper>
    </ThemeProvider>
      
  
      
  )
})

export default Header;