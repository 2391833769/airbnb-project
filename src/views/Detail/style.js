import styled from "styled-components";

const DetailWrapper = styled.div`
  /* position: relative; */
  height: 600px;
  padding: 20px;

  .detail_picture {
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* flex-shrink: 0; */



    .left {
      flex: 1;
      height: 100%;

      div {
        position: relative;
        width: 100%;
        height: 100%;

        .cover {
          position: absolute;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.2;
        }

        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

        
        &:hover {

          .cover {
            opacity: 0;
          }
        }      
      } 

     
    }

    .right {
      flex: 1;
      flex-wrap: wrap;
      height: 100%;
      display: flex;
      
      div {
        position: relative;
        flex: 50%;
        height: 50%;

        .cover {
          position: absolute;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.3;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:hover {

          .cover {
            opacity: 0;
          }
        }
    }
  }
}
    
  
` 
export default DetailWrapper;