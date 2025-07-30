import React from 'react'
import SidebarMenu from '../SideBar'
import { useNavigate } from 'react-router-dom'
function Menu() {

    const navigate = useNavigate()

    const createMenu = () => {
        navigate('/CreateMenu')
    }
  return (
    <>
    <SidebarMenu/>
    <br />
    <button onClick={createMenu}>Cadastrar menu do restaurante</button>
    <br />
    <br />
    <button>Ver dados do menu</button>
    <br />
    <br />
    <button>Atualizar menu</button>
    <br />
    <br />
    <button>Apagar menu</button>
    </>
  )
}

export default Menu