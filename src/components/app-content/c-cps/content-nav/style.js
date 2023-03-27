import styled from "styled-components";

const NavWrapper = styled.div`
  position: relative;

  .item {
    transition: all 0.5s ease;
  }

  .city {
    box-sizing: border-box;
    padding: 10px 20px;
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 20px;
    border: 1px solid #e1e1e1;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
  }

  .active {
    background-color: ${props => props.theme.color.secondColor};
    color: white;
  }

  

`

export default NavWrapper;