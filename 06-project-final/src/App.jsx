/* Other importaciones */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
/* CSS */
import './App.css'
/* Components */
import LoadingScreen from './components/LoadingScreen'
import MyNavbar from './components/MyNavbar'
import ProtectedRoutes from './components/ProtectedRoutes'

/* Pages */
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'

/* Slices */
import { getProductsThunk } from './store/slices/products.slice'

function App() {
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])
    return (
        <HashRouter>
            <MyNavbar />
            {isLoading && <LoadingScreen />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/login' element={<Login />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path='/purchases' element={<Purchases />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
