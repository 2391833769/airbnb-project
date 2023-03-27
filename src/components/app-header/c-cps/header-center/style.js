import styled from "styled-components";

const CenterWrapper = styled.div`
 

  .searchClick {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100px; */
    height: 180px;
    /* background-color: blue; */

    .tab {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      height: 100px;


      .title {
        cursor: pointer;
        color: ${props => props.theme.isAlpha ? "white" : "black"};
        padding-bottom: 10px;
        border-bottom: 2px solid transparent;
        transition: border-width 0.25s ease;

        &:hover {
          color: #c1c1be;
          border-bottom: 2px solid #c1c1be;
        }
        
      
      }
      .active {
          border-bottom: 2px solid white;
          /* color: red; */
        }

    }

    .choice {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 800px;
      height: 65px;
      background-color: #f7f7f7;
      border-radius: 40px;
      
      .active {
        background-color: white;
        box-shadow: 0px 0px 10px 3px #dbdbdb;
      }

      .line {
        width: 1px;
        height: 40px;
        background-color: #dedede;

      }

      .city,.date,.keyWord {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        /* align-items: center; */
        height: 100%;
        border-radius: 40px;
        cursor: pointer;
        /* background-color: #ffffff; */
        &:hover {
          background-color:#ebebeb;
        }

        span {
          font-size: 11px;
          font-weight: 700;
          
        }

        div {
          font-size: 13px;
          margin-top: 5px;
          color: #878787;
        }
      }
    }

  }

  .search_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    .search_bar {
    display: flex;
    align-items: center;
    width: 300px;
    box-sizing: border-box;
    height: 48px;
    border: 1px solid #dddddd;
    border-radius: 25px;
    padding: 10px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .search_text {
      flex :1;
      margin-left: 10px;
      font-weight: 700;
      font-size: 14px;
    }

    .search_icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;
      color: #ffffff;
    }
  }
}
`;

export default CenterWrapper;