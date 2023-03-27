import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaginationWrapper from './style';
import { changePageAction } from '@/store/detail/actionCreators';
// import Pagination from '@material-ui/core/Pagination'
import Button from '@material-ui/core/Button'
import { Pagination } from '@material-ui/lab'


const DetailPagination = memo(() => {
  const { page } = useSelector(state => {
    return {
      page: state.detailReducer.page,
      roomListL: state.detailReducer.roomListL
    }
  });

  const dispatch = useDispatch();

  const handelClick = (event, num) => {

    dispatch(changePageAction(num-1));
  }

  return (
    <PaginationWrapper>
      <div className='pagination'>
        <Pagination count={15} onChange={handelClick}/>
      </div> 
    </PaginationWrapper>
  )
})

export default DetailPagination;