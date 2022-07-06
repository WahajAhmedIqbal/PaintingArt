import React from 'react'
import {
  NavBarComponent,
  BannerComponent,
  CategoriesCompoenet,
  AboutUsComponent,
  FooterComponent
} from '../../components'
import './homeStyle.scss'

const HomeContainer = () => {
  return (
    <div>
      <NavBarComponent />
      <BannerComponent />
      <CategoriesCompoenet />
      <AboutUsComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeContainer