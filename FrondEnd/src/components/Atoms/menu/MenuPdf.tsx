import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'
import SidebarMenu from '../Struture/SideBar'
import ButtonProps from '../Form/ButtonProps'
import { useNavigate } from 'react-router-dom'

import { Card,  CardBody,  Image, Stack, Heading, Text, Divider, Box } from '@chakra-ui/react'

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
    const navigate = useNavigate()
    const createMenu = () => {
        navigate('/CreateMenu')
    }
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
     <SidebarMenu/>
     <br />
<div>
     <Box p={6}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        {dadosRestaurant?.name}
      </Heading>
      <br />
      <Heading as="h3" size="lg" mb={4}>
        CARTAPIO
      </Heading>
      <br />
      {dadosMenu.length > 0 ? (
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {dadosMenu.map((item, index) => (
            <Card key={index} maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                  alt={item.name}
                  borderRadius="lg"
                  objectFit="cover"
                  h="200px"
                  w="100%"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text color="gray.600">
                    {item.description}
                  </Text>
                  <Text color="green.600" fontSize="2xl" fontWeight="bold">
                    R$ {item.value}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          ))}
        </Box>
      ) : (
        <Card maxW="sm">
          <CardBody>
            <Text textAlign="center" color="gray.500">
              Nenhum item encontrado no menu, faça o cadastro
            </Text>
              <br />
              <ButtonProps 
                            name = 'Cadastrar menu do restaurante'
                            color = 'blue'
                            type='button'
                            onClick={createMenu}
                          />
                      <br />
          </CardBody>
        </Card>
        
      )}
    </Box>
</div>
      <br />
       <br />
            {mensagemServidor && <p style={{color : 'red'}}>{mensagemServidor}</p> }
        </>
    )
}

export default MenuPdf