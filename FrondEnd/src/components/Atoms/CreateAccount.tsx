import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
    const [name, SetName] = useState<string>('')
    const [surname, SetSurname]= useState<string>('')
    const [email, SetEmail] = useState<string>('')
    const [phone, SetPhone] = useState<string>('')
    const [password, SetPassWord] = useState<string>('')
    const [repeatPassword, setRepeatPassWord] = useState<string>('')
    const [showPass, setShowPass] = useState<boolean | null>(false)
    const [passwordIncorrect, setPasswordIncorrect] =useState<boolean|null>(null)
    const navigate = useNavigate()
    const showPassWord = () => {
      setShowPass(!showPass)  
    } 

    const registre = async(event : any) => {
        event.preventDefault()
        if(password != repeatPassword){
            setPasswordIncorrect(true)
        }
        if(password === repeatPassword){
            setPasswordIncorrect(false)
        }

        try {
           await axios.post('http://localhost:3000/cadastro', {name,surname,email,phone,password})
            console.log('registro realizado com sucesso')

            navigate('/Login')
        } catch (error) {
            console.log('deu erro')
            console.error(error)
        }
    }    
    return (
    <>
        <form onSubmit={registre}>
            <label>Nome : </label>
            <input type="text" value={name} placeholder='Digite seu nome' onChange={(event) => SetName(event.target.value) } required  />
            <br />
             <label>Sobre-Nome: </label>
            <input type="text" value={surname} placeholder='Digite seu sobre nome' onChange={(event) => SetSurname(event.target.value) } required  />
            <br />
             <label>Email : </label>
            <input type="email" value={email} placeholder='Digite seu email' onChange={(event) => SetEmail(event.target.value) } required  />
            <br />
             <label>Telefone/ Whatsapp: </label>
            <input type="text" value={phone} placeholder='Digite o numero onde podemos entrar em contato' onChange={(event) => SetPhone(event.target.value) } required  />
            <br />
             <label>Senha :  </label>
            <input type={showPass ? 'text' : 'password'} value={password} placeholder='Digite uma senha' onChange={(event) => SetPassWord(event.target.value) } required min={8} />
            <br />
             <label>Repita a senha :  </label>
            <input type={showPass ? 'text' : 'password'} value={repeatPassword} placeholder='Digite uma senha' onChange={(event) => setRepeatPassWord(event.target.value) } required min={8} />
            <button onClick={showPassWord}>Ver senha</button>
            <br />
            <button type='submit'>Cadastrar</button>
        </form>
        {passwordIncorrect ? <p>Sua senha precisar ser igual</p> : <p></p>}
    </>
  )
}

export default CreateAccount