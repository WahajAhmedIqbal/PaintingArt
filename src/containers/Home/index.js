import React from 'react'
import {
  NavBarComponent,
  BannerComponent
} from '../../components'
import './homeStyle.scss'

const HomeContainer = () => {
  return (
    <div>
      <NavBarComponent />
      <BannerComponent />
    </div>
  )
}

export default HomeContainer