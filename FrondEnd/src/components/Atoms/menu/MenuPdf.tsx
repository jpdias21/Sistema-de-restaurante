import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'


function MenuPdf() {
    const [loading, SetLoading] = useState<boolean | null>(null)
    const [dadoRestaurant, SetDadosRestaurant] = useState()
    const [dadoMenu, SetDadosMenu] = useState()

    useEffect(() => {   
      SetLoading(true)
      async  function abouRestaurant (){
            const token = localStorage.getItem('token')
            console.log(token)
            if(token){
             try {
              const response = await axios.get('http://localhost:3000/readRestaurant', {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            SetDadosRestaurant(response.data.read)
            SetLoading(false)
             } catch (error) {
              
             }
        } 
        }
    async  function abouMenu (){
            const token = localStorage.getItem('token')
            console.log(token)
            if(token){
                const restaurantId = localStorage.getItem('restaurantId')
                console.log(restaurantId)
             try {
              const response = await axios.get(`http://localhost:3000/readMenu/${restaurantId}`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            SetDadosMenu(response.data.read)
            SetLoading(false)
             } catch (error) {
              
             }
        } 
        }

        abouRestaurant()
        abouMenu()
    }, [])
  return (
    <>

    </>
  )
}

export default MenuPdf