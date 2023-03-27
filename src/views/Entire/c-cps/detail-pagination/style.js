import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    position: relative;
    white-space: nowrap;

    .lastPage {
      position: absolute;
      left: -5px;
      cursor: pointer;
    }

    .nextPage {
      position: absolute;
      right: -5px;
      cursor: pointer;
    }
  }

`
export default PaginationWrapper;