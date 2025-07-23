import  { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'
import SidebarMenu from '../SideBar'

interface UserToken{
    id: number, 
    name: string,
    category: string,
    description : string,
    cep : string,
    address : string,
    number_address : string,
    neighborhood : string
}
function UpdateRestaurant() {
    const [name,SetName ] = useState<string>('')
    const [category, SetCategory ] = useState<string>('')
    const [cep , SetCep ] = useState<string>('')
    const [address, SetAddress ] = useState<string>('')
    const [number_address , SetNumber_address ] = useState<string>('')
    const [neighborhood, SetNeighborhood ] = useState<string>('')
    
    const [dados, SetDados] = useState<UserToken | null>(null)
    const [loading, SetLoading] = useState<boolean | null>(null)

    useEffect(() => {   
      SetLoading(true)
      async  function aboutToken (){
            const token = localStorage.getItem('token')
            console.log(token)
            if(token){
             try {
              const response = await axios.get('http://localhost:3000/readRestaurant', {
                headers : {
                    Authorization : `Bearer ${token}`
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
            
            SetLoading(false)
             } catch (error) {
              
             }
        } 
        }
        aboutToken()
    }, [])
/////////
    const uptadeRestaurant = async (event :any,) => {
        event.preventDefault()
        SetLoading(true)

        try {
            const response = await axios.put('http://localhost:3000/updateRestaurant', {
                id: dados?.id ,name, category, cep, neighborhood, address, number_address
            })
            SetLoading(false)
        } catch (error) {
            
        }

    }
  return (
    <>
    <SidebarMenu/>
    <p>Atuliaze os dados do seu restaurante</p>
    {loading ? <PulseLoader color="#1732e0ff" size={25} /> : 
    
    <form onClick={uptadeRestaurant}>
        <br />
        <label>Nome do restaurante : </label>
        <input type="text" value={name} onChange={(event) => SetName(event.target.value)} />
        <br />
        <label>Categoria : </label>
        <input type="text" value={category} onChange={(event) => SetCategory(event.target.value)} />
        <br /><label>Cep : </label>
        <input type="text" value={cep} onChange={(event) => SetCep(event.target.value)} />
        <br /><label>Bairro : </label>
        <input type="text" value={neighborhood} onChange={(event) => SetNeighborhood(event.target.value)} />
        <br /><label>Rua : </label>
        <input type="text" value={address} onChange={(event) => SetAddress(event.target.value)} />
        <br /><label>Numero : </label>
        <input type="text" value={number_address} onChange={(event) => SetNumber_address(event.target.value)} />
        <br />
        <br />
        <button type='submit'>Mudar os dados</button>
    </form>}
    </>
  )
}

export default UpdateRestaurant