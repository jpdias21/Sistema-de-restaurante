import { useEffect, useState } from 'react'
import SidebarMenu from './SideBar'
import { jwtDecode } from 'jwt-decode'
interface UserToken {
  name : string, 
  surname : string,
  email : string
}

function Dashboard() {
  
  const [dados, setDados] = useState<UserToken | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      const dadosDoBanco : UserToken = jwtDecode(token)
      setDados(dadosDoBanco)
    }
  }, [])

  return (
    <>
    <SidebarMenu/>
      <h1>Ola senhor {dados?.name} {dados?.surname}</h1>
      <h2>O seu email e {dados?.email}</h2>
    </>
  )
}

export default Dashboard