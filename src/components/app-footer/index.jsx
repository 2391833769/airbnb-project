import React, { memo } from 'react'
import FooterWrapper from './style';

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <hr />
      <ul>
        <li>
          <dl>
            <dt>爱彼迎</dt>
            <dd>工作机会</dd>
            <dd>爱彼迎新闻</dd>
            <dd>无障碍服务</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>发现</dt>
            <dd>信任与安全</dd>
            <dd>旅行基金</dd>
            <dd>商务差旅</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>出租</dt>
            <dd>房东义务</dd>
            <dd>开展体验</dd>
            <dd>资源中心</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>客服支持</dt>
            <dd>帮助</dd>
            <dd>邻里支持</dd>
            <dd>政策优惠</dd>
          </dl>
        </li>
      </ul>
      <div className='foot'>
        <hr/>
        <div>Written by Minttea</div>
      </div>
    </FooterWrapper>
  )
})

export default Footer;