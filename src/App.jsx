import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import First from './pages/First'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Singleprod from './pages/Singleprod'
import NotFound from './pages/NotFound'
import CartProvider from './pages/CartProvider'
import './App.css';

const  router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/About",
        element: <About/>
      },{
        path:"/Contact",
        element: <Contact/>
      },{
        path:"/Login",
        element: <Login/>
      },{
        path:"/Wishlist",
        element: <Wishlist/>
      },{
        path:"/Cart",
        element: <Cart/>
      },{
        path:"/Singlprod",
        element:<Singleprod/>
      },{
        path:"/CarProvider",
        element: <CartProvider/>
      },{
        path:"*",
        element:<NotFound/>
      },
    ],
  },
]);






function App() {
return (
      <RouterProvider router={router} />
  );
}

export default App;