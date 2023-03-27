import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import HomeBanner from './c-cps/home-banner';
import { getDiscountAction, getGoodPriceAction, getHighScoreAction, getHotRecommendAction, getLongForAction, getPlusAction } from '@/store/home/homeReducer';
import HomeWrapper from './style';
import HomeBoxV1 from './c-cps/home-box-v1';
import HomeBoxV2 from './c-cps/home-box-v2';
import HomeBoxV3 from './c-cps/home-box-v3';
import HomeBoxV4 from './c-cps/home-box-v4';

const Home = memo(() => {


  const { goodPrice, highScore, discount, hotRecommend, longFor, plus } = useSelector((state) => {
    return {
      goodPrice: state.homeReducer.goodPriceData,
      highScore: state.homeReducer.highScoreData,
      discount: state.homeReducer.discountData,
      hotRecommend: state.homeReducer.hotRecommendData,
      longFor: state.homeReducer.longForData,
      plus: state.homeReducer.plusData
    }
  }, shallowEqual);


  const dispatch = useDispatch();

  //获取home数据
  useEffect(() => {
    dispatch(getGoodPriceAction());
    dispatch(getHighScoreAction());
    dispatch(getDiscountAction());
    dispatch(getHotRecommendAction());
    dispatch(getLongForAction());
    dispatch(getPlusAction())

  }, []);

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <div className='discount'>
          { discount.dest_list && <HomeBoxV2 data={discount} itemCount={"33.33%"}/> }
        </div>
        <div className='hot_recommend'>
          { hotRecommend.dest_list && <HomeBoxV2 data={hotRecommend} itemCount={"33.3%"}/>}
        </div>
        <div className='good_price'>
          { goodPrice && <HomeBoxV1 data={goodPrice} itemCount={"25%"}/> }
        </div>
        <div className='high_score'>
          { highScore && <HomeBoxV1 data={highScore} itemCount={"25%"}/> }
        </div>
        <div className='long_for'>
          { longFor.list && <HomeBoxV3 data={longFor} itemCount={"25%"}/>}
        </div>
        <div className='plus'>
          {
            plus.list && <HomeBoxV4 data={plus}/>
          }
        </div>
      </div>
    </HomeWrapper>
  )
}) 

export default Home;