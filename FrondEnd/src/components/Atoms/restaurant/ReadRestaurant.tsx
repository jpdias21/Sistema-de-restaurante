import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

interface UserToken{
    name: string,
    surname: string,
    id : number
}

function ReadRestaurant() {
    const [dados, SetDados] = useState<UserToken | null>(null)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
                    const bancoDeDados : UserToken = jwtDecode(token)
                    console.log('dados decodificados', bancoDeDados)
                    SetDados(bancoDeDados)
                }
    if(dados){
        const id = dados.id
         const response = axios.get(`http://lacalhost:300/readRestaurant/${id}`)
         console.log(response)   
    }
    }, [])
  return (
    <>
    <p>ola mundo</p>
    </>
  )
}

export default ReadRestaurant