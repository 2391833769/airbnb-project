import React, { memo } from 'react';
import styleStrToObject from './utils';

const IconMenu = memo(() => {
  return (
    <div className='menuIcon' style={{color: '#101010`'}}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={styleStrToObject("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3px; overflow: visible;")} aria-hidden="true" role="presentation" focusable="false"><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
    </div>
  )
})

export default IconMenu;