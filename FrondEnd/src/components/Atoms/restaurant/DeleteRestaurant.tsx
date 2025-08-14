import { useEffect, useState } from 'react'
import axios from 'axios'
import SidebarMenu from '../Struture/SideBar'
import { PulseLoader } from 'react-spinners'
import ButtonProps from '../Form/ButtonProps'

function DeleteRestaurant() {
    const [loading, SetLoading] = useState<boolean | null>(null)
    
    const [mensagem, SetMensagem] = useState<boolean | null>(null)

    useEffect(() => {
         async function restaurant () {
            SetLoading(true)
            const token = localStorage.getItem('token')
            console.log(token)
            
            if(token){
             try {
                const linkRender = 'https://sistema-de-restaurante.onrender.com'
              const response = await axios.get(`${linkRender}/readRestaurant`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            response.data.read
            SetLoading(false)
             } catch (error) {
              
             }
        }


         }
         restaurant()

    }, [])

    const deleteRestaurant =async () => {
        SetLoading(true)
        try {
            const linkRender = 'https://sistema-de-restaurante.onrender.com'
            const token = localStorage.getItem('token')
            const response = await axios.delete(`${linkRender}/deleteRestaurant`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            if(response.status === 200){
                SetMensagem(response.data.mensagem)
            }
            if(response.status === 404){
                SetMensagem(response.data.mensagem)
            }
            SetLoading(false)
        } catch (error : any) {
            if(error.response && error.response.status === 500){
                SetMensagem(error.response.data.mensagem)
            }
        }
    }

  return (
    <>
    <SidebarMenu/>
        {loading ? <PulseLoader color="#1732e0ff" size={25} /> : <>
        <br />
        <p>Tem certeza que voce deseja apagar o seu restaurante</p>
        <br />
         <br />
            <ButtonProps 
              name = 'DELETAR RESTAURANTE'
              color = 'red'
              type='button'
              onClick={deleteRestaurant}
            
            />
        <br />
        <br />
        <br /></>}
        <br />
        {mensagem && <h4 style={{color :'red'}}>{mensagem}</h4>}
    </>
  )
}

export default DeleteRestaurant