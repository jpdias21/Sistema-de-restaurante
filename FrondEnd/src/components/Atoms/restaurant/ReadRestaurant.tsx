import { Card, CardHeader, CardBody,Heading,Stack,StackDivider,Box,Text } from '@chakra-ui/react'
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

function ReadRestaurant() {
  const [dados, SetDados] = useState<UserToken | null>(null)
  const [loading, SetLoading] = useState<boolean | null>(null)
  const [errorMenssage, SetErrorMessage] = useState<boolean | null>(null)
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
          SetDados(response.data.read)
          SetLoading(false)
        } catch (error : any) {
            if(error.response && error.response.status === 401){
                SetErrorMessage(error.response.data.mensagem)
            }
            SetLoading(false)
            console.error(error)
        }
      }
    }
    aboutToken()
  }, [])
  if (loading === true) {
          return <PulseLoader color="#ff6b6b" />
      }
  return (
    <>
      <SidebarMenu />
      <br />
      <br />
      <Card>
  <CardHeader>
    <Heading size='md' >Dados do seu restaurante</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Nome
        </Heading>
        <Text pt='2' fontSize='sm'>
           {dados?.name}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Categoria
        </Heading>
        <Text pt='2' fontSize='sm'>
           {dados?.category}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Descricao do restaurante
        </Heading>
        <Text pt='2' fontSize='sm'>
          {dados?.description}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Cep
        </Heading>
        <Text pt='2' fontSize='sm'>
          {dados?.cep}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Bairro
        </Heading>
        <Text pt='2' fontSize='sm'>
          {dados?.neighborhood}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Rua
        </Heading>
        <Text pt='2' fontSize='sm'>
          {dados?.address}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Numero
        </Heading>
        <Text pt='2' fontSize='sm'>
          {dados?.number_address}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
{errorMenssage && <p style={{color :'red'}}>{errorMenssage}</p>}
    </>
  )
}

export default ReadRestaurant