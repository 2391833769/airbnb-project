import React, { memo, useRef, useState, useEffect } from 'react';
import ScrollWrapper from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollBox = memo((props) => {
  const [ isLeftShow, changLeftShow ] = useState(false);
  const [ isRightShow, changeRightShow ] = useState(false);
  const [ curIndex, changeIndex ] = useState(0);

  const scrollRef = useRef();

  useEffect(() => {
    const clientWidth = scrollRef.current.clientWidth;
    const scrollWidth = scrollRef.current.scrollWidth;
    const distance = scrollWidth - clientWidth;
    changeRightShow(distance > 0);

  }, []);

  const moveClick = (index) => {
    changeIndex( curIndex + index);

    const clientWidth = scrollRef.current.clientWidth;
    const scrollWidth = scrollRef.current.scrollWidth;
    const distance = scrollWidth - clientWidth;
    const moveDistance = scrollRef.current.children[curIndex + index].offsetLeft;
    scrollRef.current.style.transform = `translateX(-${moveDistance}px)`;

    
    if (distance > moveDistance) {
      changeRightShow(true)
    } else {
      changeRightShow(false)
    }

    if (moveDistance > 0) {
      changLeftShow(true)
    } else {
      changLeftShow(false)
    }
   };

  return (
    <ScrollWrapper>
      <div className='scroll_content' >
        <div className='content' ref={scrollRef}>
          {
            props.children
          }
        </div>
      </div>
      {  
        isLeftShow && <div className='last' onClick={e => moveClick(-1)}><IconArrowLeft/></div>
      }
      {
        isRightShow && <div className='next' onClick={e => moveClick(+1)}><IconArrowRight/></div>
      }
    </ScrollWrapper>
  )
})

export default ScrollBox;