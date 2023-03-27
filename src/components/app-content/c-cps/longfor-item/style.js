import styled from "styled-components";

const ItemWrapper = styled.div`
  padding: 10px;
  flex-shrink: 0;
  width: 20%;
  height: 250px;

  .item_picture {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5Px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }

    .mask {
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0px;
      bottom: 0px;
      background-color: black;
      opacity: 0.05;
    }
  }

  .item_content {
    position: relative;
      /* border-radius: 15px ; */
      
    }

  .item_desc {
    width: 100%;
    position: absolute;
    margin: auto;
    word-spacing: noWrap;
    top: 75%;
    left: 50%;
    text-align: center;
    font-size: 14px;
    transform: translate(-50%, -50%) ;
    color: white;

    .city_price {
      margin-top: 5px;
      font-size: 12px;
    }    

  }
`

export default ItemWrapper;