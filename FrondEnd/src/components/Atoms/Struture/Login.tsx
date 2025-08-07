import { Button, Input } from '@chakra-ui/react'

import { PulseLoader } from 'react-spinners'
import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, SetEmail] = useState<string>('')
    const [password, SetPassWord] = useState<string>('')
    const [showPass, setShowPass] = useState<boolean | null>(false)
    const [errorMenssage, SetErrorMessage] = useState<boolean | null>(null)
    const navigate = useNavigate()
    const showPassWord = () => {
      setShowPass(!showPass)  
    } 
    const [loading, SetLoading] = useState<boolean | null>(null)

    const acessLogin = async ( event : any) => {
        event.preventDefault()
        SetLoading(true)
        try {
           const response = await axios.post('http://localhost:3000/login', {email, password})

           const token = response.data.token 

           localStorage.setItem('token', token)

            console.log('login realizado com sucesse')
            navigate('/Dashboard')
        } catch (error : any) {
            if(error.response && error.response.status === 401){
                SetErrorMessage(error.response.data.mensagem)
            }
            SetLoading(false)
            console.error(error)
            SetLoading(false)
        }
    }

  return (
    <>
      <form onSubmit={acessLogin}>
        <h2>Realize seu login</h2>
         <label>Email : </label>
            <Input type="email" value={email} placeholder='Digite seu email' onChange={(event) => SetEmail(event.target.value) } required  />
            <br />
             <label>Senha :  </label>
            <Input type={showPass ? 'text' : 'password'} value={password} placeholder='Digite uma senha' onChange={(event) => SetPassWord(event.target.value) } required min={8} />
             <Button colorScheme='green' type='button' onClick={showPassWord}>Ver senha</Button>
            <br />
            <br />
            <Button colorScheme='blue' type='submit'>Login</Button>

    </form>
   {loading ? <PulseLoader color="#1732e0ff" size={25} /> : ' '}
   <br />
   {errorMenssage && <p style={{color :'red'}}>{errorMenssage}</p>}
    </>
  )
}

export default Login