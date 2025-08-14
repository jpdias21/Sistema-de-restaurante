import ImputProps from '../Form/InputProps'
import ButtonProps from '../Form/ButtonProps'
import '../Form/form.css'
import { PulseLoader } from 'react-spinners'
import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SideBarHome from './SideBarHome'
function Login() {
    const [email, SetEmail] = useState<string>('')
    const [password, SetPassWord] = useState<string>('')
    const [showPass, setShowPass] = useState<boolean | null>(false)
    const [errorMenssage, SetErrorMessage] = useState<boolean | null>(null)
    const navigate = useNavigate()
    
    
    const showPassWord = () => {
      setShowPass(!showPass)  
    } 
    const [loading, SetLoading] = useState<boolean | null>(false)
    
    const acessLogin = async ( event : any) => {
        event.preventDefault()
        SetLoading(true)
        try {
          const linkRender = 'https://sistema-de-restaurante.onrender.com'
           const response = await axios.post(`${linkRender}/login`, {email, password})

           const token = response.data.token 

           localStorage.setItem('token', token)

            console.log('login realizado com sucesse')
            navigate('/Dashboard')
        } catch (error : any) {
            if(error.response && error.response.status === 401){
                SetErrorMessage(error.response.data.mensagem)
            }
            console.error(error)
            SetLoading(false)
        }
    }

    if (loading === true) {
        return <PulseLoader color="#ff6b6b" />
    }

  return (
    <>
    <SideBarHome/>
    <br />
    <h1 className='makeLogin'>Faça login na sua conta</h1>
    <br />
    <p>Acesse sua conta para derenciar o seu negocio</p>
    <br />
    
    <form onSubmit={acessLogin} className='form'>
      <div>
      <ImputProps
      label='Email'
      value={email}
      onChange={event => SetEmail(event.target.value)}
      name={email}
      placeholder='Digite seu email principal'
      type='text'
      isRequired 
      />
    </div>
    <div>
      <ImputProps
      label='Senha'
      value={password}
      onChange={event => SetPassWord(event.target.value)}
      name={password}
      type= {showPass ? 'text' : 'password'}
      placeholder='Digite sua senha'
      isRequired 
      />
    </div>
     <ButtonProps 
      name = 'Ver senha'
      color = 'red'
      onClick={showPassWord}
      type='button'

    />
    <br />
    <ButtonProps 
      name = 'fazer login'
      color = 'blue'
      type='submit'
      onClick={() => undefined}
    
    />
    </form>
     
   {errorMenssage && <p style={{color :'red'}}>{errorMenssage}</p>}
   <br />
   <br />
   
   <div></div>
    </>
  )
}

export default Login