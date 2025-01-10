import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../../Context/CartProvider'

import Home from '../Home'
import MyPurchases from '../MyPurchases'
import MyOrder from '../MyOrder'
import MyProfile from '../MyProfile'
import MyCart from '../MyCart'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar  from '../../Components/NavBar'
import Layout from '../../Components/Layout'
import CartSideMenu from '../../Components/CartSideMenu'

import './App.css'

const AppRoutes = () => {
  let  routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-purchases', element: <MyPurchases />},
    {path: '/my-purchases/last', element: <MyOrder />},
    {path: '/my-profile', element: <MyProfile />},
    {path: '/my-cart', element: <MyCart />},
    {path: '/not-found', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />},
  ]);  

  return routes
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <CartSideMenu />
        <Layout>
          <AppRoutes/>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
