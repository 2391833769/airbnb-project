import React, { memo } from 'react';
// import a from './router/route'

import { Button, Rate } from 'antd';
import Header from './components/app-header';
import Content from './components/app-content';
import Footer from './components/app-footer';

import 'normalize.css';
import './assets/css/reset.less';
import './assets/css/index.less';

const App = memo((props) => {
  
  return (
    <div className='app'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
});

export default App;