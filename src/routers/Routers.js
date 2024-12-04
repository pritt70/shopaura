import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import ProductDetails from '../Pages/ProductDetails'
import CheckOut from '../Pages/CheckOut'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'


export default function Routers() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Navigate to="/home" />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/shop/:id' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<CheckOut />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
            </Routes>

        </div>
    )
}
