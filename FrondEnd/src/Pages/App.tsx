import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../components/Atoms/Struture/CreateAccount'
import Login from '../components/Atoms/Struture/Login'
import Dashboard from '../components/Atoms/Struture/Dashboard'
import ProtectedRoute from '../components/Atoms/Struture/ProtectedRoute'


/// restaurant
import Restaurant from '../components/Atoms/restaurant/Restaurant'
import CreateRestaurant from '../components/Atoms/restaurant/CreateRestaurant'
import ReadRestaurant from '../components/Atoms/restaurant/ReadRestaurant'
import UpdateRestaurant from '../components/Atoms/restaurant/UpdateRestaurant'
import DeleteRestaurant from '../components/Atoms/restaurant/DeleteRestaurant'

//menu
import Menu from '../components/Atoms/menu/Menu'
import MenuPdf from '../components/Atoms/menu/MenuPdf'
import CreateMenu from '../components/Atoms/menu/CreateMenu'
import DeleteMenu from '../components/Atoms/menu/DeleteMenu'


//About
import GoOut from '../components/Atoms/Struture/GoOut'
import Home from '../components/Atoms/Struture/Home'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/CreateAccount' element={<CreateAccount/>}/>

          <Route path='/createRestaurant' element={<CreateRestaurant/>}/>
          <Route path='/readRestaurant' element={<ReadRestaurant/>}/>
          <Route path='/UpdateRestaurant' element={<UpdateRestaurant/>}/>
          <Route path='/DeleteRestaurant ' element={<DeleteRestaurant />}/>

          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/CreateMenu' element={<CreateMenu/>}/>
          <Route path='/MenuPdf' element={<MenuPdf/>}/>
          <Route path='/DeleteMenu' element={<DeleteMenu/>}/>


        
          <Route path='/' element={<Home/>}/>
          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path='/Restaurant' element={<ProtectedRoute><Restaurant/></ProtectedRoute>}/>
          <Route path='/GoOut' element={<ProtectedRoute><GoOut/></ProtectedRoute>}/>


          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path='/createRestaurant' element={<ProtectedRoute><CreateRestaurant/></ProtectedRoute>}/>
          <Route path='/readRestaurant' element={<ProtectedRoute><ReadRestaurant/></ProtectedRoute>}/>
          <Route path='/DeleteRestaurant' element={<ProtectedRoute><DeleteRestaurant/></ProtectedRoute>}/>


          <Route path='/Menu' element={<ProtectedRoute><Menu/></ProtectedRoute>}/>
          <Route path='/CreateMenu' element={<ProtectedRoute><CreateMenu/></ProtectedRoute>}/>
          <Route path='/MenuPdf' element={<ProtectedRoute><MenuPdf/></ProtectedRoute>}/>
          <Route path='/DeleteMenu' element={<ProtectedRoute><DeleteMenu/></ProtectedRoute>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
