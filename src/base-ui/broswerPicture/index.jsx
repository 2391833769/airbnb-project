import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Indicator from '../indicator';
import classNames from 'classnames';

import BroswerWrapper from './style';

const BroswerPicture = memo((props) => {

  const { index } = props;
  console.log(index)
  /** 底部弹窗状态 */
  const [ showBottom , changeShow ] = useState(true);

  /** 底部弹窗item索引 */
  const [ curIndex, setCurIndex ] = useState(index);

  const { detailData } = useSelector((state) => {
    return {
      detailData: state.detailReducer.detailData
    }
  });

  const { closePicture } = props;

  /** 设置照片窗口弹出时隐藏滚动条 */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  /** 设置底部弹窗弹出事件状态 */
  const changeBottomList = () => {
    changeShow(!showBottom);
    console.log('changeBottomList')
  }

  /** 底部item点击 */
  const bottomItemClick = (index) => {
    setCurIndex(index);
  }

  /** 左右按钮点击 */
  const buttonClick = (flag) => {
    let newIndex;

    if (flag === true ) {
       newIndex = curIndex - 1;
    } else {
      newIndex = curIndex + 1;
    }

    if (newIndex < 0) {
      newIndex = detailData.length - 1;
    }

    if (newIndex > detailData.length - 1) {
      newIndex = 0
    }

    setCurIndex(newIndex);
  }

  return (
    <BroswerWrapper>
      <div className='head'>
        <span onClick={closePicture}>
          x
        </span>
      </div>
      <div className='center'>
        <div className='left' onClick={e => buttonClick(true)}>
          <IconArrowLeft size={76}/>
        </div>
        <div className='right' onClick={e => buttonClick(false)}>
          <IconArrowRight size={76}/>
        </div>
        <div className='content'>
          <img src={detailData[curIndex]} alt="" />
        </div>
        
      </div>
      <div className='bottom'>
      <div className='bottom_list' style={showBottom ? undefined : {height: '0'}}>
          <span className='close' onClick={changeBottomList}>{showBottom ? "隐藏照片列表" : "显示照片列表"}</span>
          <Indicator curIndex={curIndex}>
            {
              detailData?.map((item, index) => {
                return (
                  <div className='list_item' onClick={e => bottomItemClick(index)}>
                    <div className={classNames('mask', {"active": curIndex === index})}></div>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Indicator>
        </div>
      </div>
    </BroswerWrapper>
  )
})

export default BroswerPicture;