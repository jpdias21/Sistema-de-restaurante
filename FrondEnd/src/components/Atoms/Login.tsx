import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, SetEmail] = useState<string>('')
    const [password, SetPassWord] = useState<string>('')
    const [showPass, setShowPass] = useState<boolean | null>(false)
    const navigate = useNavigate()
    const showPassWord = () => {
      setShowPass(!showPass)  
    } 

    const acessLogin = async ( event : any) => {
        event.preventDefault()
        try {
           const response = await axios.post('http://localhost:3000/login', {email, password})

           const token = response.data.token 

           localStorage.setItem('token', token)

            console.log('login realizado com sucesse')
            navigate('/Dashboard')
        } catch (error) {
            console.log('deu erro')
            console.error(error)
        }
    }

  return (
    <form onSubmit={acessLogin}>
        <h2>Realize seu login</h2>
         <label>Email : </label>
            <input type="email" value={email} placeholder='Digite seu email' onChange={(event) => SetEmail(event.target.value) } required  />
            <br />
             <label>Senha :  </label>
            <input type={showPass ? 'text' : 'password'} value={password} placeholder='Digite uma senha' onChange={(event) => SetPassWord(event.target.value) } required min={8} />
             <button type='button' onClick={showPassWord}>Ver senha</button>
            <br />
            <button type='submit'>Login</button>

    </form>
  )
}

export default Login