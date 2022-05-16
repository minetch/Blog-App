import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home,Login} from './Page'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;