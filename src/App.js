import React from 'react'

import Routers from './routers'

import 'antd/dist/antd.less'; 
import 'antd/dist/antd.css'

import './commonStyle/Style.scss'

const App = () => {
  return (
    <section className='body'>
      <Routers />
    </section>
  )
}

export default App