import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyPurchases from '../MyPurchases'
import MyProfile from '../MyProfile'
import MyCart from '../MyCart'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar  from '../../Components/NavBar'

import './App.css'

const AppRoutes = () => {
  let  routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-purchases', element: <MyPurchases />},
    {path: '/my-profile', element: <MyProfile />},
    {path: '/my-cart', element: <MyCart />},
    {path: '/not-found', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />},
  ]);  

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
