import ButtonProps from '../Form/ButtonProps'
import SidebarMenu from '../Struture/SideBar'
import { useNavigate } from 'react-router-dom'
function Menu() {

    const navigate = useNavigate()

    const createMenu = () => {
        navigate('/CreateMenu')
    }

    const verMenu = () => {
        navigate('/MenuPdf')
    }
  return (
    <>
    <SidebarMenu/>
    <br />
    <ButtonProps 
              name = 'Cadastrar menu do restaurante'
              color = 'blue'
              type='button'
              onClick={createMenu}
            />
        <br />
    <ButtonProps 
              name = 'Ver Menu'
              color = 'blue'
              type='button'
              onClick={verMenu}
            />
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