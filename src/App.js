import React from 'react'
import Routers from './routers'
import './commonStyle/Style.scss'
import 'antd/dist/antd.css'; 

const App = () => {
  return (
    <section className='body'>
      <Routers />
    </section>
  )
}

export default App