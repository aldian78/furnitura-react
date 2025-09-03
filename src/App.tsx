import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/User/Homepage';
import Product from './pages/User/Product';
import ProductDetail from './pages/User/ProductDetails';
import Cart from './pages/User/Cart';
import CustomerInformation from './pages/User/CustomerInformation';
import { ShippingAndPayment } from './pages/User/ShippingAndPayment';
import ReviewYourOrder from './pages/User/ReviewOrder';
import TrackingOrders from './pages/User/TrackingOrder';
import Register from './pages/User/Register';
import Login from './pages/User/Login';

import { ToastContainer, Bounce } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/customer-information",
    element: <CustomerInformation />,
  },
  {
    path: "/shipping-payment",
    element: <ShippingAndPayment />,
  },
  {
    path: "/review",
    element: <ReviewYourOrder />,
  },
   {
    path: "/tracking-orders",
    element: <TrackingOrders />,
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
        {/* app content */}
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
