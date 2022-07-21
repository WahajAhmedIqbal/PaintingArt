import React, { useEffect } from 'react'
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
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <NavBarComponent />
      <BannerComponent
        bannerText="Painting is by"
        bannerText2="Nature a luminous"
        bannerText3="Language"
        bannerSlide1="https://designprosusa.com/themes/PaintingArt/assets/images/homeOne.png"
        bannerSlide2="https://designprosusa.com/themes/PaintingArt/assets/images/homeTwo.png"
        bannerSlide3="https://designprosusa.com/themes/PaintingArt/assets/images/homeThree.png"
        bannerSlide4="https://designprosusa.com/themes/PaintingArt/assets/images/homeFour.png"
        buttonCheck="true"
      />
      <CategoriesCompoenet />
      <AboutUsComponent />
      <ShopCompoenent />
      <BlogComponent />
      <SubcribeComponent />
      <FooterComponent />
    </div>
  );
}

export default HomeContainer