import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 0 25px;
  position: relative;

  .list {
    flex-wrap: wrap;
    display: flex;
  }

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.8;
  }
`;

export default ContentWrapper;