import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import {
  HomeContainer,
  AboutUsContainer,
  PageNotFoundContainer,
  ShopContainer,
  BlogContainer,
  ContactUsContainer,
  WishlistContainer,
  BlogDetailsContainer
} from "../containers";

const Routers = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/aboutUs" element={<AboutUsContainer />} />
          <Route path="/Shop" element={<ShopContainer />} />
          <Route path="/Blog" element={<BlogContainer />} />
          <Route path="/ContactUs" element={<ContactUsContainer />} />
          <Route path='/wishList' element={<WishlistContainer />} />
          <Route path='/blog/blogDetails' element={<BlogDetailsContainer />} />
          <Route path="*" element={<PageNotFoundContainer />} />
        </Routes>
      </BrowserRouter>
    );
}
 
export default Routers