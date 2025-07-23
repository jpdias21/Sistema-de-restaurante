import React, { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import SidebarMenu from '../SideBar'
interface UserToken{
   id : number,
    name: string,
    category: string,
    description : string,
    cep : string,
    address : string,
    number_address : string,
    neighborhood : string
}

function ReadRestaurant() {
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
            SetDados(response.data.read)
            SetLoading(false)
             } catch (error) {
              
             }
        } 
        }
        aboutToken()
    }, [])
  return (
    <>
    <SidebarMenu/>
    {loading ? <PulseLoader color="#1732e0ff" size={25} /> : <>
    <h3>Dados do seu restaurante</h3>
    <p>Nome: {dados?.name}</p>
    <p>Categoria: {dados?.category}</p>
    <p>Descricao do restaurante: {dados?.description}</p>
    <p>Cep: {dados?.cep}</p>
    <p>Bairro: {dados?.neighborhood}</p>
    <p>Rua : {dados?.address}</p>
    <p>Numero : {dados?.number_address}</p>
    
    </>}
    </>
  )
}

export default ReadRestaurant