import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../components/Atoms/CreateAccount'
import Login from '../components/Atoms/Login'
import Dashboard from '../components/Atoms/Dashboard'
import ProtectedRoute from '../components/Atoms/ProtectedRoute'
/// restaurant
import CreateRestaurant from '../components/Atoms/restaurant/createRestaurant'
import ReadRestaurant from '../components/Atoms/restaurant/readRestaurant'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<CreateAccount/>}/>
          <Route path='/createRestaurant' element={<CreateRestaurant/>}/>
          <Route path='/readRestaurant' element={<ReadRestaurant/>}/>

          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path='/createRestaurant' element={<ProtectedRoute><CreateRestaurant/></ProtectedRoute>}/>
          <Route path='/readRestaurant' element={<ProtectedRoute><ReadRestaurant/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
