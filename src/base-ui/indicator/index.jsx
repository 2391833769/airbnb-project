import React, { memo, useRef, useEffect } from 'react';
import classNames from 'classnames';

import IndicatorWrapper from './style';

const Indicator = memo((props) => {
  const { curIndex = 2 } = props;

  const myRef1 = useRef();
  const myRef2 = useRef();

  useEffect(() => {
    console.log(curIndex)
    const element = myRef1.current.children[curIndex];
    // console.log(element.)
    const offSetLeft = element.offsetLeft;
    // console.log(offSetLeft);
    const elementWidth = element.clientWidth;
    const hiddenBox = myRef2.current.clientWidth;
    const scrollDis = myRef1.current.scrollWidth;
    let distance = offSetLeft + elementWidth * 0.5 - hiddenBox * 0.5;
    if(distance < 0) {
      distance = 0; 
    } else if (distance > scrollDis - hiddenBox) {
      distance = scrollDis - hiddenBox
    }
    myRef1.current.style.transform = `translateX(${-distance}px)`;
    
  }, [curIndex]);


  return (
    <IndicatorWrapper ref={myRef2}>
      <div className='indicator_list' ref={myRef1}>
        {
          props.children
        }
      </div>
     
    </IndicatorWrapper>
  )
})

export default Indicator;