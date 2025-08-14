
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
function SideBarHome() {
    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }
    const login = () => {
        navigate('/login')
    }
    const createAccount = () => {
        navigate('/CreateAccount')
    }

  return (
  <>
    <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onClick={home}>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink onClick={login}>Login</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink onClick={createAccount}>Criar conta</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  </>
  )
}

export default SideBarHome