import React, { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import NavWrapper from './style';
import ScrollBox from '../content-scrollbox/idnex';

const ContentNav = memo((props) => {
  const [ curIndex, changeIndex ] = useState(0);
  const [ curMove, changeMove ] = useState(0);
  const [ moveIndex, fn ] = useState(0);

  const itemRef = useRef();

  /**更改index状态 */
  const handelIndex = (index, item) => {
    changeIndex(index);
    props.changeCity(item);

  }

  // const lastClick = () => {
  //   if (moveIndex != (props.city.length - 1)) {
  //     const eleWidth = parseInt(window.getComputedStyle(itemRef.current.children[moveIndex]).getPropertyValue("width"));
  //     changeMove(curMove - eleWidth - 20)
  //     fn(moveIndex + 1);
  //   }
  // }

  // const nextClick = () => {
  //   if (moveIndex != 0) {
  //     const eleWidth = parseInt(window.getComputedStyle(itemRef.current.children[moveIndex - 1]).getPropertyValue("width"));
  //     fn(moveIndex - 1);
  //     changeMove(curMove + eleWidth + 20)
  //   }
  // }
  return (
    <NavWrapper>
          <ScrollBox>
          {
            props.city.map((item, index) => {
              return <div key={index} className={classNames('city', {'active': index === curIndex})} onClick={e => handelIndex(index, item)}>{item}</div>
            })
          }
          </ScrollBox>
    </NavWrapper>
  )
})

export default ContentNav;