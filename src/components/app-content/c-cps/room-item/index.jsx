import React, { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import ItemWrapper from './style';
import { Carousel, Rate } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import * as actionTypes from '@/store/detail/actionCreators';


const RoomItem = memo((props) => {


  //解构数据
  const { picture_url, picture_urls, name, price_format, verify_info:{ messages, text_color }, star_rating, star_rating_color, bottom_info } = props.roomInfo;

  const [ curIndex, setIndex ] = useState(0);

  const dispatch = useDispatch();

  const carouselRef = useRef(); 

  const navigate = useNavigate();

  /**左按钮点击事件 */
  const leftClick = (e) => {
    carouselRef.current.prev();
    let newIndex = curIndex - 1;

    if (newIndex < 0) {
      newIndex = picture_urls.length - 1;
    }
    setIndex(newIndex);
    e.stopPropagation();
  }

  /**右按钮点击事件 */
  const rightClick = (e) => {
    carouselRef.current.next();
    let newIndex = curIndex + 1;

    if (newIndex > picture_urls.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
    e.stopPropagation();
  }

  /**room面板点击事件 */
  const goDetail = () => {
    navigate("/detail");
    dispatch(actionTypes.changeDetailAction(picture_urls));
  }

  /**展示元素 */
  const showElement1 = ( <img src={picture_url} alt="" />);
  const showElement2 = (
    <div className='element1'>
      <div className='switch' onClick={goDetail}>
        <div className='left' onClick={leftClick}>
          <IconArrowLeft size={30}/>
        </div>
        <div className='right' onClick={rightClick}>
          <IconArrowRight size={30}/>
        </div>
      </div>
      <div className="indicator" >
        <Indicator curIndex={curIndex}>
          {
            picture_urls?.map((item, index) => {
              return (
                <div key={index} className="item">
                  <span className={classNames({'active': curIndex === index})} />
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <div className='carousel_box'>
          <Carousel ref={carouselRef} dots={false}>
          {
            picture_urls?.map(item => {
              return <div><img src={item} alt="" /></div>
            })
          }
          </Carousel>
      </div>
    </div>); 

  return (
    <ItemWrapper color={{textColor: text_color}} itemCount={props.itemCount}>
      
      <div className='room_picture'>
        {
          !picture_urls ? showElement1 : showElement2
        }
      </div>

      <div className='room_type'>
        {messages.join('.')}
      </div>

      <div className='room_desc'>
        <strong>
          {name}
        </strong>
      </div>

      <div className='room_price'>
        {price_format}/晚
      </div>

      <div className='room_star'>
        <Rate 
          disabled={true} 
          count={5} 
          allowHalf={true} 
          defaultValue={star_rating} 
          style={{color: star_rating_color, fontSize: "10px"}} />
          <span className='review'>{props.roomInfo.reviews_count}{bottom_info  ? '-' + bottom_info.content : ""}</span>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem;