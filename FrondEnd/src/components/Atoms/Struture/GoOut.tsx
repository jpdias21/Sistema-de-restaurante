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
    <button onClick={goOutAcount}>Sair da conta</button>
    </>
  )
}

export default GoOut