import BroswerPicture from '@/base-ui/broswerPicture';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import DetailWrapper from './style';

const Detail = memo(() => {

  /**Broswerpicture窗口 */
  const [ isShow, setShow ] = useState(false);

  const [ index, setIndex ] = useState(0);

  /**获取state */
  const { detailData } = useSelector((state) => {
    return {
      detailData: state.detailReducer.detailData
    }
  });

  /** 图片显示消失 */
  const showPicture = (e, flag, index=0) => {
    e.stopPropagation();
    setIndex(index);
    console.log(index)
    setShow(flag);
    console.log(flag);
  }

  return (
    <DetailWrapper>
      {
       isShow && <BroswerPicture index={index} closePicture={e => showPicture(e , false)}/> 
      }
      <div className='detail_picture'>
        <div className='left'>
          {
           <div onClick={e => showPicture(e, true, 0)}>
             <div className='cover'></div>
            <img src={detailData[0]} alt="" />
           </div>
          }
        </div>
        <div className='right'>
          { 
            detailData.slice(1,5).map((item, index) => {
              return (
                <div onClick={e => showPicture(e, true, index+1)}>
                  <div className='cover'></div>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </DetailWrapper>
  )
})

export default Detail;