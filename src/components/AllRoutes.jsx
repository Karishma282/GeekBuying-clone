import React from "react"
import { Routes,Route } from "react-router-dom"
import Homepage from "../Pages/Homepage"
// import Products from "../Pages/Products"
import Product from "../Pages/Product"
import  SmartHome  from "../Pages/SmartHome"
import Mobile from "../Pages/Mobile"
// import  ProductDetail from "../Pages/Particular"
import Cart from "../Pages/Cart"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import CheckOut from "../Pages/CheckOut"

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            {/* <Route path="/products" element={<Products/>}/> */}
            <Route path="/smartHome" element={<SmartHome/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>


        </Routes>
    )
}
export default AllRoutes