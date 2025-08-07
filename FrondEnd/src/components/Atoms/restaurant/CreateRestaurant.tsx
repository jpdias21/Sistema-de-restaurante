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
    const [name,SetName] = useState<string>()
    const [category,SetCategory] = useState<string>()
    const [description, SetDescription] = useState<string>()
    const [cep,SetCep] = useState<string>()
    const [neighborhood, SetNeighborhood] = useState<string>()
    const [address, SetAdress] = useState<string>()
    const [number_address, SetNumber_address] = useState<string>()
    
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
  return (
    
    <>
    <SidebarMenu/>
        <form onSubmit={createRegitreRestaurant} >
            <h4>{dadosUser?.name} {dadosUser?.surname} adicione dados do restaurante</h4>
            <br />
            <label>Nome do restaurante : </label>
            <input type="text" value={name} placeholder='Digite o nome do restaurante' onChange={(event) => SetName(() => event.target.value)}  required/>
            <br />
            <label>Categoria do restaurante : </label>
            <input type="text" value={category} placeholder='exemplo : pizzaria, humburgueria' onChange={(event) => SetCategory(() => event.target.value)}  required/>
            <br /><label>Descricao do restaurante : </label>
            <textarea
            value={description} placeholder='Escreva/Fale um pouco sobre o seu estabelecimento' rows={5} cols={35} maxLength={200} onChange={(event) => SetDescription(event.target.value)}
            />
            <br /><label>Cep: </label>
            <input type="text" value={cep} placeholder='Cep do restaurante' onChange={(event) => SetCep(() => event.target.value)}  required/>
            <br /><label>Bairro: </label>
            <input type="text" value={neighborhood} placeholder='Cep do restaurante' onChange={(event) => SetNeighborhood(() => event.target.value)}  required/>
            <br /><label>Rua: </label>
            <input type="text" value={address} placeholder='Rua do restaurante' onChange={(event) => SetAdress(() => event.target.value)}  required/>
            <br /><label>Complemeto/Numero: </label>
            <input type="text" value={number_address} placeholder='complemento/ numero do restaurante' onChange={(event) => SetNumber_address(() => event.target.value)}  required/>
            <br />
            <br />
            <button type='submit'>Cadastra</button>
        </form>
        <br />
        {loading ? <PulseLoader color="#1732e0ff" size={25}/> : ''}
        {mensagemServidor && <p>{mensagemServidor}</p>}
    </>
  )
}

export default CreateRestaurant