import React from 'react'
import SidebarMenu from '../SideBar'
import { useNavigate } from 'react-router-dom'
function Restaurant() {
   
   
    const navigate = useNavigate()

    const dadosRestaurante = () => {
        navigate('/readRestaurant')
    }

    const mudarDadosRestaurant = () => {
        navigate('/UpdateRestaurant')
    }
  return (
    <>
    <SidebarMenu/>
    <br />
    <button onClick={dadosRestaurante}>Ver dados do restaurante</button>
    <br />
    <br />
    <button onClick={mudarDadosRestaurant}>Mudar dados do restaurante</button>
    <br />
    <br />
    <button>Apagar restaurante</button>
    </>

  )
}

export default Restaurant