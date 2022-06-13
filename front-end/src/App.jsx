import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Business } from './pages/Business'
import { Product } from './pages/Product'

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/business' element={<Business />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </>
    )
}
