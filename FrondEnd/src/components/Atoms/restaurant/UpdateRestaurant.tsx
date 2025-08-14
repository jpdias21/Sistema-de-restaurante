import ImputProps from '../Form/InputProps'
import { Textarea } from '@chakra-ui/react'
import ButtonProps from '../Form/ButtonProps'
import '../Form/form.css'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'
import SidebarMenu from '../Struture/SideBar'

interface UserToken {
    id: number,
    name: string,
    category: string,
    description: string,
    cep: string,
    address: string,
    number_address: string,
    neighborhood: string
}
function UpdateRestaurant() {
    const [name, SetName] = useState<string>('')
    const [category, SetCategory] = useState<string>('')
    const [cep, SetCep] = useState<string>('')
    const [address, SetAddress] = useState<string>('')
    const [number_address, SetNumber_address] = useState<string>('')
    const [neighborhood, SetNeighborhood] = useState<string>('')
    const [description, SetDescription] = useState<string>('')
    const [menssage, SetMensagem] = useState<boolean | null>(null)

    const [dados, SetDados] = useState<UserToken | null>(null)
    const [loading, SetLoading] = useState<boolean | null>(null)

    useEffect(() => {
        SetLoading(true)
        async function aboutToken() {
            const token = localStorage.getItem('token')
            console.log(token)
            if (token) {
                try {
                     const linkRender = 'https://sistema-de-restaurante.onrender.com'
                    const response = await axios.get(`${linkRender}/readRestaurant`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const restaurantData = response.data.read
                    console.log(response.data.read.id)
                    SetDados(restaurantData)
                    SetName(restaurantData.name || '')
                    SetCategory(restaurantData.category || '')
                    SetCep(restaurantData.cep || '')
                    SetAddress(restaurantData.address || '')
                    SetNumber_address(restaurantData.number_address || '')
                    SetNeighborhood(restaurantData.neighborhood || '')
                    SetDescription(restaurantData.description || '')

                    SetLoading(false)
                } catch (error: any) {
                if (error.response && error.response.mensagem === 500) {
                SetMensagem(error.response.data.mensagem)
            }
                }
            }
        }
        aboutToken()
    }, [])
    /////////
    const uptadeRestaurant = async (event: any) => {
        event.preventDefault()
        SetLoading(true)
        const id = dados?.id

        try {
            const linkRender = 'https://sistema-de-restaurante.onrender.com'
            const token = localStorage.getItem('token')
            const response = await axios.put(`${linkRender}/${id}`, {
                name, category, description, cep, neighborhood, address, number_address
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('restaurante atualizado com sucesso', response.data)
            SetLoading(false)
            if (response.status === 200) {
                SetMensagem(response.data.mensagem)
            }
        } catch (error: any) {
            if (error.response && error.response.mensagem === 500) {
                SetMensagem(error.response.data.mensagem)
            }
            SetLoading(false)
        }

    }
    if (loading === true) {
        return <PulseLoader color="#ff6b6b" />
    }
    return (
        <>
            <SidebarMenu />
            <p>Atualize os dados do seu restaurante</p>
            <form onSubmit={uptadeRestaurant} className='form'>
                <div>
                    <ImputProps
                        label='Nome Restaurante'
                        value={name}
                        onChange={event => SetName(event.target.value)}
                        name={name}
                        placeholder='...'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
                <div>
                    <ImputProps
                        label='Categoria'
                        value={category}
                        onChange={event => SetCategory(event.target.value)}
                        name={category}
                        placeholder='....'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
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
                        placeholder='....'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
                 <div>
                    <ImputProps
                        label='Bairro'
                        value={neighborhood}
                        onChange={event => SetNeighborhood(event.target.value)}
                        name={neighborhood}
                        placeholder='....'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
                <div>
                    <ImputProps
                        label='Rua'
                        value={address}
                        onChange={event => SetAddress(event.target.value)}
                        name={address}
                        placeholder='....'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
                <div>
                    <ImputProps
                        label='Rua'
                        value={number_address}
                        onChange={event => SetNumber_address(event.target.value)}
                        name={number_address}
                        placeholder='....'
                        type='text'
                        isRequired
                    />
                </div>
                <br />
                <br />
                  <ButtonProps 
                       name = 'Mudar os dados'
                       color = 'red'
                       type='submit'
                       onClick={() => undefined}

                     />  
            </form>
            <br />
            {menssage && <p style={{ color: 'red' }}>{menssage}</p>}
        </>
    )
}

export default UpdateRestaurant