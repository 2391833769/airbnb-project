import styled from "styled-components";

const FilterWrapper =styled.div `
  .filter_list {
    display: flex;
    padding: 0 25px;
    margin: 0 -15px;
    margin-bottom: 20px;

    li {
      padding: 10px 15px;
      margin: 15px;
      border: 1px solid #ededec;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;

    }

    .active {
      background-color: #018085;
      color: white;
    }

    
  }
`

export default FilterWrapper;