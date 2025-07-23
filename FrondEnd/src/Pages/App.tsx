import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../components/Atoms/CreateAccount'
import Login from '../components/Atoms/Login'
import Dashboard from '../components/Atoms/Dashboard'
import ProtectedRoute from '../components/Atoms/ProtectedRoute'
/// restaurant
import Restaurant from '../components/Atoms/restaurant/restaurant'
import CreateRestaurant from '../components/Atoms/restaurant/CreateRestaurant'
import ReadRestaurant from '../components/Atoms/restaurant/ReadRestaurant'
import UpdateRestaurant from '../components/Atoms/restaurant/UpdateRestaurant'
//GoOut
import GoOut from '../components/Atoms/GoOut'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/CreateAccount' element={<CreateAccount/>}/>

          <Route path='/createRestaurant' element={<CreateRestaurant/>}/>
          <Route path='/readRestaurant' element={<ReadRestaurant/>}/>
          <Route path='/Restaurant' element={<Restaurant/>}/>
          <Route path='/UpdateRestaurant' element={<UpdateRestaurant/>}/>

          <Route path='/GoOut' element={<GoOut/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>

          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path='/createRestaurant' element={<ProtectedRoute><CreateRestaurant/></ProtectedRoute>}/>
          <Route path='/readRestaurant' element={<ProtectedRoute><ReadRestaurant/></ProtectedRoute>}/>

          
          <Route path='/GoOut' element={<ProtectedRoute><GoOut/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
