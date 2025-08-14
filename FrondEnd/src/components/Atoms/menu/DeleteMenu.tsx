import { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonProps from '../Form/ButtonProps'
import SidebarMenu from '../Struture/SideBar'
import { PulseLoader } from 'react-spinners'
function DeleteMenu() {
    const [mensagem, SetMensagem] = useState<boolean | null>(null)
    const [loading, SetLoading] = useState<boolean | null>(null)

    useEffect(() => {
        SetLoading(true)
        async function aboutToken() {
            const restaurantId = localStorage.getItem('restaurantId')
            if (restaurantId) {
                console.log('o id do restaurant',restaurantId)
            }
        }
        aboutToken()
        SetLoading(false)
    }, [])

    const deleteMenu = async () => {
        SetLoading(true)
        const token = localStorage.getItem('token')
          const restaurant_id  = localStorage.getItem('restaurantId')
        try {
            const linkRender = 'https://sistema-de-restaurante.onrender.com'
            const response = await axios.delete(`${linkRender}/deleteMenu/${restaurant_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('Menu deletado com sucesso')
            console.log(restaurant_id)
            console.log('menu deletado' , response.data)
            ////
            if(response.status === 200){
                SetMensagem(response.data.mensagem)
            }
            SetLoading(false)
        } catch (error: any) {
            if (error.response && error.response.status === 500) {
            SetMensagem(error.response.data.mensagem)
            SetLoading(false)

        } 
        }
        SetLoading(false)
    }
      if (loading) {
                return <PulseLoader color="#ff6b6b" />
            }
    return (
        <>
            <br />
            <SidebarMenu />
            <br />
            <br />
            <h2>Aqui voce ira deletar todos os dados do seu menu/cartapio</h2>
            <br />
            <br />
            <ButtonProps
                name='Deletar menu'
                color='red'
                type='button'
                onClick={deleteMenu}

            />
            {mensagem && <h4 style={{color: 'red'}}>{mensagem}</h4>}
        </>
    )
}

export default DeleteMenu