import styled from "styled-components";

const HeaderWrapper = styled.div`
 ${props => console.log(props.theme)}
  position: ${props => props.theme.isFixed ? "Fixed" : ""};
  top: 0;
  left:0;
  right: 0;
  display: flex;
  align-items: flex-start ;
  /* height: 80px; */
  background-color: ${props => props.theme.isAlpha ? "transplant" : "white"};
  border-color: #eeeeee;
  border-style: solid;
  border-bottom-width: ${props => props.theme.isAlpha ? "0px" : "1px"};
  z-index: 9999;

`;

export default HeaderWrapper;