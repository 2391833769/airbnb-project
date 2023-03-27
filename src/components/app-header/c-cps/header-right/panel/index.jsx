import React, { memo } from 'react'

const Panel = memo(() => {
  return (
    <div className='panel' style={{zIndex: 999}}>
      <div className='panel_top'>
        <div className='item'><strong>注册</strong></div>
        <div className='item'>登录</div>
      </div>
      <hr/>
      <div className='panel_bottom'>
        <div className='item'>来爱彼迎发布房源</div>
        <div className='item'>开展体验</div>
        <div className='item'>帮助</div>
      </div>
  </div>
  )
})

export default Panel;