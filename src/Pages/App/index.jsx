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
import SearchList from '../SearchList'
import CategoriesMenu from '../../Components/CategoriesMenu'
import Clothes from '../Categories/Clothes'
import Technology from '../Categories/Technology'
import Games from '../Categories/Games'
import Tools from '../Categories/Tools'
import CreateAccount from '../CreateAccount'
import GoBackHome from '../GoBackHome'
import Help from '../Help'

import './App.css'



const AppRoutes = () => {
  let  routes = useRoutes([
    {path: '/mercadofake-web/', element: <Home />},
    {path: '/mercadofake-web/moda', element: <Clothes />},
    {path: '/mercadofake-web/tecnologia', element: <Technology />},
    {path: '/mercadofake-web/herramientas', element: <Tools/>},
    {path: '/mercadofake-web/juegos-y-juguetes', element: <Games />},
    {path: '/mercadofake-web/my-purchases', element: <MyPurchases />},
    {path: '/mercadofake-web/my-purchases/last', element: <MyOrder />},
    {path: '/mercadofake-web/my-purchases/:id', element: <MyOrder />},
    {path: '/mercadofake-web/my-profile', element: <MyProfile />},
    {path: '/mercadofake-web/my-cart', element: <MyCart />},
    {path: '/mercadofake-web/not-found', element: <NotFound />},
    {path: '/mercadofake-web/nothing-to-see', element: <GoBackHome/>},
    {path: '/mercadofake-web/sign-in', element: <SignIn />},
    {path: '/mercadofake-web/registration', element: <CreateAccount/>},
    {path: '/mercadofake-web/search-list', element: <SearchList/>},
    {path: '/mercadofake-web/ayuda', element: <Help />}
  ]);  

  return routes
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <CartSideMenu />
        <CategoriesMenu />
        <Layout>
          <AppRoutes/>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
