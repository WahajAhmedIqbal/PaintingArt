import React from 'react'
import {
  NavBarComponent,
  BannerComponent,
  CategoriesCompoenet,
  AboutUsComponent,
  ShopCompoenent,
  BlogComponent,
  SubcribeComponent,
  FooterComponent,

} from "../../components";
import './homeStyle.scss'

const HomeContainer = () => {
  return (
    <div>
      <NavBarComponent />
      <BannerComponent />
      <CategoriesCompoenet />
      <AboutUsComponent />
      <ShopCompoenent />
      <BlogComponent />
      <SubcribeComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeContainer