import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ScrollToTop from "./components/ScrollToTop";


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/admin/Dashboard';
import OurProduct from './pages/OurProduct';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import { ProductProvider } from './context/ProductContext';


// For User routes
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}

// For Admin routes
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'janavimi28@gmail.com') {  //Add admin email id in ''
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={
            <ProtectedRouteForAdmin> <Dashboard /> </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin> <AddProduct /> </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin> <UpdateProduct /> </ProtectedRouteForAdmin>
          } />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourproduct/:category" element={<OurProduct />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={
            <ProtectedRoute> <Cart /></ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </ProductProvider>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// import {
//   Home,
//   Product,
//   Products,
//   AboutPage,
//   ContactPage,
//   Cart,
//   Login,
//   Register,
//   Checkout,
//   PageNotFound,
// } from "./pages";
// import ScrollToTop from "./components/ScrollToTop";
// import { Toaster } from "react-hot-toast";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <ScrollToTop>
//       <Provider store={store}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="*" element={<PageNotFound />} />
//           <Route path="/product/*" element={<PageNotFound />} />
//         </Routes>
//       </Provider>
//     </ScrollToTop>
//     <Toaster />
//   </BrowserRouter>
// );
