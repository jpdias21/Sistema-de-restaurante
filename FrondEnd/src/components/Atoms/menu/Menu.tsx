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
    const deleteMenu = () => {
        navigate('/DeleteMenu')
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
              name = 'Ver Menu / Cartapio'
              color = 'blue'
              type='button'
              onClick={verMenu}
            />
        <br />
    <ButtonProps 
              name = 'Apagar Menu / Cartapio'
              color = 'red'
              type='button'
              onClick={deleteMenu}
            />
        <br />
    <br />
    </>
  )
}

export default Menu