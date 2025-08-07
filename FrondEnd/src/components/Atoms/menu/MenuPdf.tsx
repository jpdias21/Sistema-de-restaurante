import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'

interface DadosRestaurant {
    id: number,
    name: string,
    category: string,
    description: string,
    cep: string,
    address: string,
    number_address: string,
    neighborhood: string
}

interface DadosMenu {
    name: string,
    description: string,
    value: string,
    img_product: string
}

function MenuPdf() {
    const [loading, SetLoading] = useState<boolean | null>(null)
    const [dadosRestaurant, SetDadosRestaurant] = useState<DadosRestaurant | null>(null)
    const [dadosMenu, SetDadosMenu] = useState<DadosMenu[]>([])

    const [mensagemServidor, SetMensagemServidor] = useState<string | null>(null)

    useEffect(() => {
        SetLoading(true)
        async function aboutDados() {
            SetLoading(true)
            const token = localStorage.getItem('token')
            const restaurantId = localStorage.getItem('restaurantId')
            if (token) {

                try {
                    const responseRestaurant = await axios.get('http://localhost:3000/readRestaurant', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    SetDadosRestaurant(responseRestaurant.data.read)

                    const responseMenu = await axios.get(`http://localhost:3000/readMenu/${restaurantId}`, {
                        headers: { Authorization: `Bearer ${token}`}
                    })
                    SetDadosMenu(responseMenu.data.read)

                    SetLoading(false)

                } catch (error : any) {
                    if(error.response || error.response.status === 500){
                        SetMensagemServidor(error.response.data.mensagem)
                    }
                    SetLoading(false)
                }
            }
        }

        aboutDados()
    }, [])
     if (loading) {
        return <PulseLoader color="#ff6b6b" />
    }
    return (
        <>
            <div>
                <p>{dadosRestaurant?.name}</p>
            <h3>Menu:</h3>
            {dadosMenu.length > 0 ? (<div>
                {dadosMenu.map((item, index) => (
                    <div key={index}>
                        <hr />
                        <h4>Produto : {item.name}</h4>
                        <p>Descriçao : {item.description}</p>
                        <p><strong>Valor : {item.value}</strong></p>
                    </div>
                ))}
            </div>) : (<div>
                <p>Nenhum item encontrado no menu</p>
            </div>)}
            <br />
            <br />
            {mensagemServidor && <p style={{color : 'red'}}>{mensagemServidor}</p> }

            </div>
        </>
    )
}

export default MenuPdf