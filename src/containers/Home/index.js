import React from 'react'
import {
  NavBarComponent,
  BannerComponent,
  CategoriesCompoenet
} from '../../components'
import './homeStyle.scss'

const HomeContainer = () => {
  return (
    <div>
      <NavBarComponent />
      <BannerComponent />
      <CategoriesCompoenet />
    </div>
  )
}

export default HomeContainer