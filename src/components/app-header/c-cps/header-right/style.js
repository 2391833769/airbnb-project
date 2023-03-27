import styled from "styled-components";

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  height: 80px;
  /* margin-top: 24px; */
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.isAlpha ? "white" : "black"};

  .btns {
    display: flex;
    font-size: 14px;

    .btn {
      margin-right: 10px;
      font-weight: 700;
      cursor: pointer;
      padding: 10px;

      &:hover {
        border-radius: 20px;
        background-color: ${props => props.theme.isAlpha ? "#645f5c" : "#f7f7f7"}
      }
    }
  }

  .profile {
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 24px;
    padding: 5px 10px 5px 10px;
    border: 1px solid #dddddd;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

      .userIcon {
        height: 30px;
        width: 30px;
        margin-left: 10px;
        color: #717171;
      }

      .panel {
        position: absolute;
        top: 50px;
        right: 0px;
        width: 249px;
        /* height: 249px; */
        border: 1px solid #f7f7f7;
        background-color: #ffffff;
        border-radius: 17px;
        overflow: hidden;
        cursor: auto;

        hr {
          color: #f7f7f7;
        }
        .panel_top {
          padding: 5px 0 5px 0;
        }

        .panel_bottom {
          padding: 5px 0 5px 0;
        }

        .item {
          display: flex;
          align-items: center;
          padding-left: 10px;
          height: 40px;
          &:hover {
            background-color: #f7f7f7;
            cursor: pointer;
          }
        }
      }
  }
`;
export default RightWrapper;