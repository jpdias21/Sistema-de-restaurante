import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../components/Atoms/CreateAccount'
import Login from '../components/Atoms/Login'
import Dashboard from '../components/Atoms/Dashboard'
import ProtectedRoute from '../components/Atoms/ProtectedRoute'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<CreateAccount/>}/>
          <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
