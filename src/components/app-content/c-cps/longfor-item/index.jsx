import React, { memo } from 'react';
import ItemWrapper from './style';

const LongForItem = memo((props) => {

  const { picture_url, city, price } = props.data;

  return (
    <ItemWrapper>
      <div className='item_content'>
        <div className='item_picture'>
          <img src={picture_url} className="picture"/>
          <div className='mask'></div>
        </div>
        <div className='item_desc'>
          <div className='city_name'>
            <strong>
              {city}
            </strong>
          </div>
          <div className='city_price'>
            均价：{price}
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default LongForItem;