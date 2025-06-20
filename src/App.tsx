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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/home",
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
  const [count, setCount] = useState(0)

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
