import ContentFooter from '@/components/app-content/c-cps/content-footer';
import ContentHeader from '@/components/app-content/c-cps/content-header';
import ContentList from '@/components/app-content/c-cps/content-list';
import ContentNav from '@/components/app-content/c-cps/content-nav';
import React, { memo, useState, useCallback } from 'react'

const HomeBoxV2 = memo((props) => {
  const { dest_list, title, subtitle } = props.data;
  const cityNames = Object.keys(dest_list);

  const [ curCity, changeCity ] = useState(cityNames[0]);

  /**更改当前城市，传给子组件 */
  const changeCurCity = useCallback((city) => {
    changeCity(city);
  }, []);

  // console.log(Object.keys(dest_list))

  return (
    <div>
      <ContentHeader title={title} subtitle={subtitle}/>
      <ContentNav city={cityNames} changeCity={changeCurCity}/>
      <ContentList list={dest_list[curCity]} itemCount={props.itemCount}/>
      <ContentFooter name={curCity}/>
    </div>
  )
})

export default HomeBoxV2;