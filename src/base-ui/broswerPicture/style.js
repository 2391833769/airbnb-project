import styled from "styled-components";

const BroswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #262626;
  z-index: 3;

  .head {
    position: relative;
    height: 80px;
    /* background-color: red; */

    span {
      font-size: 50px;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      color: white;
      cursor: pointer;
      
    }
  }

  .center {
    flex: 1;
    position: relative;
    width: 100%;
    margin: 0 auto;
    /* background-color: white; */

    .left,.right {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      position: absolute;
      width: 80px;
      height: 80px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    .left {
      left: 20px;
      /* background-color: red; */
      
    }

    .right {
      right: 20px;
      /* background-color: red; */
    }

    .content {
      /* background-color: yellow; */
      width: 600px;
      height: 100%;
      margin: auto;


      img {
        height: 100%;
        max-width: 100%;
        width: auto;
        cursor: pointer;
      }
    }
  }

  .bottom {
    position: relative;
    height: 120px;
    /* background-color: blue; */
    margin-bottom: 30px;
    overflow: hidden;

    .bottom_list {
      flex-wrap: nowrap;
      position: absolute;
      height: 90px;
      width: 800px;
      left: 50%;
      color: white;
      transform: translateX(-50%);
      /* background-color: green; */
      bottom: 0;
      transition: height 0.25s ease;

      .close {
        position: absolute;
        font-size: 14px;
        top: -25px;
        right: 0px;
        cursor: pointer;
      }

      .list_item {
        position: relative;
        flex: 17.5%;
        flex-shrink: 0;
        flex-grow: 0;
        width: 20%;
        padding: 0px 5px;
        height: 90Px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }

        .mask {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: black;
          opacity: 0.5;

        }

        .active {
          opacity: 0;
        }
      }
    }
  }
`
export default BroswerWrapper;