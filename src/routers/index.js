import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import {
    HomeContainer, 
    PageNotFoundContainer
} from '../containers'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='*' element={<PageNotFoundContainer/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers