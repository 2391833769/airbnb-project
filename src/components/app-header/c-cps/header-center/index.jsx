import React, { memo, useEffect, useState } from 'react';

import CenterWrapper from './style';
import IconSearch from '@/assets/svg/icon_search';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlpha, changeChoice } from '@/store/main';
import classNames from 'classnames';

const HeaderCenter = memo(() => {

  /** 设置固定框弹出状态 */
  const [ show, setShow ] = useState(true);

  /** title状态 */
  const [ titleIndex, setIndex ] = useState(0);

  /** 处理 city, date, keyWord 点击状态 */
  const { isSelected, isFixed } = useSelector(state => {
    return {
      isFixed: state.mainReducer.isFixed,
      isSelected: state.mainReducer.isSelected,
      isAlpha: state.mainReducer.isAlpha
    }
  })

  const dispatch = useDispatch();

  /** 设置滚动显示元素 */
  useEffect(() => {

    /** 滚动触发函数 */
    function scrollHandel() {
      if (document.documentElement.scrollTop === 0) {
        setShow(true)
        dispatch(changeAlpha(true))
      } else {
        setShow(false);
        dispatch(changeAlpha(false))
      }
    }
    /** 注册监听 */
    window.addEventListener('scroll', scrollHandel);
    return () => {
      /** 取消监听 */
      window.removeEventListener('scroll', scrollHandel);
    };
  }, []);


  const showELement1 = (
    <div className='search_box'>  
      <div className="search_bar" onClick={searchClickHandel}>
        <div className='search_text'>搜索房源和体验</div>
        <div className='search_icon'>
          <IconSearch />
        </div>
      </div>
    </div>
  );
  
  const showElement2 = (
    <div className='searchClick'>
      <div className='tab'>
        <div className={classNames('title', { 'active': titleIndex === 0 })} onClick={e => titleClick(0)}>搜索房源</div>
        <div className={classNames('title', { 'active': titleIndex === 1 })} onClick={e => titleClick(1)}>搜索体验</div>
      </div>
      <div className='choice'>
        <div className={classNames('city', {'active': isSelected === 0})} onClick={e => itemClickHandel(0)} >
          <span>城市</span>
          <div>你想去哪个城市</div>
        </div>
        <div className='line'></div>
        <div className={classNames('date', {'active': isSelected === 1})} onClick={e => itemClickHandel(1)} >
          <span>入住退房日期</span>
          <div>请在日历中选择</div>
        </div>
        <div className='line'></div>
        <div className={classNames('keyWord', {'active': isSelected === 2})} onClick={e => itemClickHandel(2)} >
          <span>关键词</span>
          <div>景点/地址/房源名</div>
        </div>
      </div>
    </div>
  );

  /** 处理item点击 */
  function itemClickHandel(index) {
    dispatch(changeChoice(index));
  }

  /** 搜索框点击 */
  function searchClickHandel() {
    setShow(true);
  }

  function titleClick(index) {
    setIndex(index);
    console.log(index)
  }

  return (
    <CenterWrapper>
     {
      isFixed && show ? showElement2 : showELement1
     }
    </CenterWrapper>
  )
})

export default HeaderCenter;