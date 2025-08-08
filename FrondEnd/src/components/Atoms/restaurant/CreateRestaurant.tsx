import ImputProps from '../Form/InputProps'
import ButtonProps from '../Form/ButtonProps'
import { Textarea } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import SidebarMenu from '../Struture/SideBar'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

interface UserToken{
    name: string,
    surname: string,
    id : string
}

function CreateRestaurant() {
    const [name,SetName] = useState<string>('')
    const [category,SetCategory] = useState<string>('')
    const [description, SetDescription] = useState<string>('')
    const [cep,SetCep] = useState<string>('')
    const [neighborhood, SetNeighborhood] = useState<string>('')
    const [address, SetAdress] = useState<string>('')
    const [number_address, SetNumber_address] = useState<string>('')
    
    const [dadosUser, SetDadosUser]= useState<UserToken | null>(null)
    
    const [loading, SetLoading] = useState<boolean | null>(null)
    const [mensagemServidor, SetMensagemServidor] = useState<boolean | null>(null)

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const bancoDeDados : UserToken = jwtDecode(token)
            console.log('dados decodificados', bancoDeDados)
            SetDadosUser(bancoDeDados)
        }
    }, [])
    useEffect(() => {
     async function BuscarCep () {
        if(cep?.length === 8){
         try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            
            SetNeighborhood(response.data.bairro || '')
            SetAdress(response.data.logradouro || '')
            
         } catch (error) {
            console.error(error)
         } 
        }
        }
        BuscarCep()
      }, [cep])


    const createRegitreRestaurant = async (event :any) => {
        event.preventDefault()
        SetLoading(true)
        if (!dadosUser?.id) {
        console.error("User ID não carregado ainda")
        return}
        try {
            const response = await axios.post('http://localhost:3000/createRestaurant', {name,category,description,cep,address,number_address,neighborhood,user_id : dadosUser.id})
            console.log(response)

            const restaurantId = response.data.create.id
            localStorage.setItem('restaurantId', restaurantId)
            console.log('Verificação:', localStorage.getItem('restaurantId'))

            navigate('/CreateMenu')
    
        } catch (error : any) {
        if(error.response && error.response.status.mensagem === 500){
          SetMensagemServidor(error.response.status.mensagem)
        }
        SetLoading(false)
      }

    }
     if (loading === true) {
        return <PulseLoader color="#ff6b6b" />
    }
  return (
    
    <>
    <SidebarMenu/>
      <h4>{dadosUser?.name} {dadosUser?.surname} adicione dados do restaurante</h4>
            <br />
      <form onSubmit={createRegitreRestaurant}>
        <div>
              <ImputProps
              label='Nome Restaurante'
              value={name}
              onChange={event => SetName(event.target.value)}
              name={name}
              placeholder='Digite o nome do restaurante'
              type='text'
              isRequired 
              />
            </div>
            <div>
              <ImputProps
              label='Categoria do restaurante '
              value={category}
              onChange={event => SetCategory(event.target.value)}
              name={category}
              placeholder='Exemplo : pizzaria, humburgueria'
              type='text'
              isRequired 
              />
            </div>
            <div>
              <label >Descricao do restaurante :</label>
              <Textarea value={description} placeholder='Escreva um pouco sobre o seu estabelecimento' rows={5} cols={35} maxLength={200} onChange={(event) => SetDescription(event.target.value)} />
            </div>
            <div>
              <ImputProps
              label='Cep'
              value={cep}
              onChange={event => SetCep(event.target.value)}
              name={cep}
              placeholder='Cep do restaurante'
              type='text'
              isRequired 
              />
            </div>
            <div>
              <ImputProps
              label='Bairro'
              value={neighborhood}
              onChange={event => SetNeighborhood(event.target.value)}
              name={neighborhood}
              placeholder='Rua do restaurante'
              type='text'
              isRequired 
              />
            </div>
            <div>
              <ImputProps
              label='Rua'
              value={address}
              onChange={event => SetAdress(event.target.value)}
              name={address}
              placeholder='Rua do restaurante'
              type='text'
              isRequired 
              />
            </div>
            <div>
              <ImputProps
              label='Complemeto/Numero'
              value={number_address}
              onChange={event => SetNumber_address(event.target.value)}
              name={number_address}
              placeholder='Rua do restaurante'
              type='text'
              isRequired 
              />
            </div>
            <br />
              <ButtonProps 
                   name = 'Realizar o cadastro'
                   color = 'blue'
                   type='submit'
                   onClick={() => undefined}
                 
                 />      
      </form>
        <br />
        {mensagemServidor && <p>{mensagemServidor}</p>}
    </>
  )
}

export default CreateRestaurant