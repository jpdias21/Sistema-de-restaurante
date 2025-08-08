import ImputProps from '../Form/InputProps'
import ButtonProps from '../Form/ButtonProps'
import '../Form/form.css'
import { PulseLoader } from 'react-spinners'
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
    const [errorMenssage, SetErrorMessage] = useState<boolean | null>(null)
    const navigate = useNavigate()
    const showPassWord = () => {
      setShowPass(!showPass)  
    } 
    const [loading, SetLoading] = useState<boolean | null>(null)

    const registre = async(event : any) => {
        event.preventDefault()
        SetLoading(true)
        if(password != repeatPassword){
            setPasswordIncorrect(true)
            SetLoading(false)
            return;
        }
        if(password === repeatPassword){
            setPasswordIncorrect(false)
        }

        try {
           await axios.post('http://localhost:3000/cadastro', {name,surname,email,phone,password})
            console.log('registro realizado com sucesso')

            navigate('/Login')
        } catch (error :any) {
            console.error(error)
            console.log('deu erro')
            if(error.response && error.response.status.mensagem === 500){
                SetErrorMessage(error.response.data.mensagem)
            }
            SetLoading(false)
        }
    }    

    if (loading === true) {
        return <PulseLoader color="#ff6b6b" />
    }
    return (
    <>
        <form onSubmit={registre} className='form'>
            <h2 className='makeCreateAccount'>Faça o cadastro</h2>
            <br />
            <div>
                  <ImputProps
                  label='Nome'
                  value={name}
                  onChange={event => SetName(event.target.value)}
                  name={email}
                  placeholder='Digite seu seu nome'
                  type='text'
                  isRequired 
                  
                  />
            </div>
            <div>
                  <ImputProps
                  label='Sobre-nome'
                  value={surname}
                  onChange={event => SetSurname(event.target.value)}
                  name={surname}
                  placeholder='Digite seu sobre-nome'
                  type='text'
                  isRequired 
                  />
            </div>
            <div>
                  <ImputProps
                  label='Email'
                  value={email}
                  onChange={event => SetEmail(event.target.value)}
                  name={email}
                  placeholder='Digite seu email'
                  type='email'
                  isRequired 
                  />
            </div>
            <div>
                  <ImputProps
                  label='Telefone/ Whatsapp'
                  value={phone}
                  onChange={event => SetPhone(event.target.value)}
                  name={phone}
                  placeholder='11-90000-0000'
                  type='text'
                  maxLength={11}
                  minLength={11}
                  isRequired 
                  />
            </div>
            <div>
                  <ImputProps
                  label='Senha'
                  value={password}
                  onChange={event => SetPassWord(event.target.value)}
                  name={password}
                  placeholder='Digite uma senha'
                  type={showPass ? 'text' : 'password'}
                  maxLength={30}
                  minLength={8}
                  isRequired 
                  />
            </div>
            <div>
                  <ImputProps
                  label='Repita a senha'
                  value={repeatPassword}
                  onChange={event => setRepeatPassWord(event.target.value)}
                  name={repeatPassword}
                  placeholder='Repita a senha'
                  type={showPass ? 'text' : 'password'}
                  maxLength={30}
                  minLength={8}
                  isRequired 
                  />
            </div>
            <br />
            <ButtonProps
            name='Ver senha'
            color='green'
            onClick={showPassWord}
            type='button'
            />
            <br /><br />
            <ButtonProps
            name='Cadastrar'
            color='blue'
            onClick={() => undefined}
            type='submit'
            />            
        </form>

        {passwordIncorrect && <p>Sua senha precisar ser igual</p>}
        {loading && <PulseLoader color="#1732e0ff" size={25} /> }
        {errorMenssage && <p style={{color :'red'}}>{errorMenssage}</p>}
    </>
  )
}

export default CreateAccount