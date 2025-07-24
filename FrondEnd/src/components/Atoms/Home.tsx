import { useNavigate } from 'react-router-dom'


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
    <button onClick={cadastrar}>Cadastrar</button>
    <br />
    <br />
    <button onClick={login}>Login</button>
    <br />
    <br />
    
    </>
  )
}

export default Home