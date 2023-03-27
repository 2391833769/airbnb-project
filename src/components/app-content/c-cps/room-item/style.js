import styled from "styled-components";

const ItemWrapper = styled.div`
  flex:0 0 ${props => props.itemCount};
  width: ${props => props.itemCount};
  padding: 0px 8px 0px 8px;
  margin: 10px 0px 10px 0px;
  /* border: 1px solid black; */

  
  .box {
    width: 100px;
    height: 100px;
  }

  .room_picture {
    position: relative;
    width: 100%;
    height: 200px;
    /* background-color: red; */
    margin-bottom: 10px;

    &:hover {
      .switch {
        display: flex;
      }
    }
    
    .indicator {
      position: absolute;
      width: 50%;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      
      .item {
      flex-shrink :0;
      flex-grow: 0;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      
      .active {
          width: 8px;
          height: 8px;
        }
        
      span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;

      }
    }  
    }

    .carousel_box {
      width: 100%;
      height: 100%;
      overflow: hidden;

      div {
        height: 200px;

        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
      }
    }

    .switch {
      display: none;
      /* display: flex; */
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.2;
      color: #ffffff;
      z-index: 3;
      cursor: pointer;

      .left,.right {
        flex:25%;
        flex-grow: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #6d6f7b;
        cursor: pointer;
        opacity: 1;
      }
    }


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .room_type {
    color: ${props => props.color.textColor};
    font-size: 12px;
    margin: 5px 0 5px 0;
  }

  .room_desc {
    font-size: 14px;
    margin: 5px 0 5px 0;
  }
  
  .room_price {
    color: ${props => props.color.textColor};
    font-size: 12px;
    margin: 5px 0 5px 0;
  }

  .room_star {
    /* color: red; */
    font-size: 12px;
    color: ${props => props.color.textColor};

    .review {

      margin-left: 5px;
    }
  }
`

export default ItemWrapper;