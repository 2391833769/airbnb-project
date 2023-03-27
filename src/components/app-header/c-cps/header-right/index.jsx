import React, { memo, useState, useEffect } from 'react';


import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import IconUser from '@/assets/svg/icon_user';
import RightWrapper from './style';
import Panel from './panel';
import { ThemeProvider } from 'styled-components';

const HeaderRight = memo(() => {
  
  const [ isShow, changeShow ] = useState(false);

  //副作用
  useEffect(() => {
    //关闭面板函数
    function noShow() {
      changeShow(false);
    }
    //开始监听
    window.addEventListener('click', noShow)
    return () => {
      //取消监听
      window.removeEventListener('click', noShow);
    };
  }, []);
  
  //菜单点击事件
  const showPanel = (event) => {
    changeShow(true);
    event.stopPropagation();
    
  }


  return (
       <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>
      <div className='profile' onClick={e => showPanel(e)}>
        <IconMenu/>
        <IconUser/>
        {
          isShow && <Panel/>
        }
      </div>
    </RightWrapper>
   
  )
})

export default HeaderRight;