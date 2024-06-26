import { Route   , BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SellerDashboard from './pages/SellerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/signup' element={<Signup/>}  />
    <Route path='/buyer/profile' element={<SellerDashboard/>}  />
    <Route path='/seller/profile' element={<BuyerDashboard/>}  />

      </Routes>



    </BrowserRouter>
  )
}

export default App
