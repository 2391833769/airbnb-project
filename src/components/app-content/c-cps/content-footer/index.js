import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './style'

const ContentFooter = memo((props) => {
  const { name } = props;

  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/entire");
  }

  return (
    <Wrapper>
      <strong >
        {
          !name ? <div onClick={goDetail}>显示全部</div> : <div onClick={goDetail} style={{color: '#00848a'}}>显示{name}更多信息</div>
        }
    </strong>
    </Wrapper>
  )
})

export default ContentFooter;