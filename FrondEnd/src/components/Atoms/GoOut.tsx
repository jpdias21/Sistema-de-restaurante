import { useNavigate } from 'react-router-dom'
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
    <button onClick={goOutAcount}>Sair da conta</button>
  )
}

export default GoOut