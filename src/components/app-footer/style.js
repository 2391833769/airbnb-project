import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 180px;
  /* background-color: blue; */
  
  
  ul {
    padding: 50px 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */

    li {
      flex: 20%;
      /* height: 100px; */
      flex-grow: 0;
      /* background-color: red; */
      font-size: 14px;
      font-weight: 700;
      text-align: center;

      dt {
        margin-bottom: 20px;
        /* font-weight: 700; */
      }

      dd {
        margin-bottom: 10px;
      }
    }
  }
  .foot {
    padding: 20px 200px;
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    text-align: center;
  }


`

export default FooterWrapper;