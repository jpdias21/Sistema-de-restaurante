import ButtonProps from '../Form/ButtonProps'
import { useNavigate } from 'react-router-dom'
import SidebarMenu from './SideBar'
function GoOut() {
    const navigate = useNavigate()
    const goOutAcount = () => {
        const token = localStorage.getItem('token')
        if(token){
            localStorage.removeItem('token')
        }

        navigate('/Login')
    }
  return (
    <>
    <SidebarMenu/>
    <br /><br />
    <ButtonProps 
          name = 'Sair da conta'
          color = 'red'
          type='button'
          onClick={goOutAcount}
        />
    </>
  )
}

export default GoOut