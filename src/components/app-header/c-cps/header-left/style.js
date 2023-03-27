import styled from "styled-components";

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  /* margin-top: 24px; */
  margin-left: 24px;
  height: 80px;
  align-items: center;

  .icon {
    color: ${props => props.theme.isAlpha ? "white" : props.theme.color.primaryColor};
    cursor: pointer;
  }
`;

export default LeftWrapper;