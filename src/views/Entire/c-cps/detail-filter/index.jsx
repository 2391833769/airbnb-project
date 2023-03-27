import React, { memo, useState } from 'react';
import classNames from 'classnames';

import filterData from './data';
import FilterWrapper from './style';

const DetailFilter = memo(() => {
  const [ filters, setFilter ] = useState([ false, false, false, false, false, false, false ]);

  const filterClick = (index) => {
    const newFilters  = { ... filters };
    newFilters[index] = !newFilters[index];
    setFilter(newFilters);

  }

  return (
    <FilterWrapper>
      <ul className='filter_list'>
        {
          filterData.map((item, index) => {
            return <li key={item} className={classNames({'active': filters[index]})} onClick={e => filterClick(index)}>{item}</li>
          })
        }
      </ul>
    </FilterWrapper>
    // <FilterWrapper>
    //   {/* {
    //     filterData.map(item => {
    //       return <div>{item}</div>
    //     })
    //   } */}
    // </FilterWrapper>
  )
})

export default DetailFilter;