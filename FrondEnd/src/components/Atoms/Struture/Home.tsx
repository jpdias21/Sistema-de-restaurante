import { useNavigate } from 'react-router-dom'
import ButtonProps from '../Form/ButtonProps'

function Home() {
    const navigate = useNavigate()

    const cadastrar = () => {
        navigate('/CreateAccount')
    }

    const login = () => {
        navigate('/login')
    }
  return (
    <>
    <ButtonProps
    name='Realizar Cadastrar'
    color='blue'
    type='button'
    onClick={cadastrar}
    />
    <br />
    <br />
      <ButtonProps
    name='Faze login'
    color='blue'
    type='button'
    onClick={login}
    />
    <br />
    <br />
    
    </>
  )
}

export default Home