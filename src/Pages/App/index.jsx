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
    {path: '/', element: <Home />},
    {path: '/moda', element: <Clothes />},
    {path: '/tecnologia', element: <Technology />},
    {path: '/herramientas', element: <Tools/>},
    {path: '/juegos-y-juguetes', element: <Games />},
    {path: '/my-purchases', element: <MyPurchases />},
    {path: '/my-purchases/last', element: <MyOrder />},
    {path: '/my-purchases/:id', element: <MyOrder />},
    {path: '/my-profile', element: <MyProfile />},
    {path: '/my-cart', element: <MyCart />},
    {path: '/not-found', element: <NotFound />},
    {path: '/nothing-to-see', element: <GoBackHome/>},
    {path: '/sign-in', element: <SignIn />},
    {path: '/registration', element: <CreateAccount/>},
    {path: '/search-list', element: <SearchList/>},
    {path: '/ayuda', element: <Help />}
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
