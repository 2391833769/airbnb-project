import styled from "styled-components";

const ScrollWrapper = styled.div`

  .last,.next {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 50%;
      background-color: #fff;
      text-align: center;
      transform: translateY(-50%);
      vertical-align: center;
      border: 1px solid #e1e1e1;
      color: black;
    }

  .last {
    left: -15px;
  }

  .next {
    right: -15px
  }


  .scroll_content {
    overflow: hidden;

    .content {
      position: relative;
      display: flex;
      transition: transform 0.25s ease;
    }
  }
`

export default ScrollWrapper;