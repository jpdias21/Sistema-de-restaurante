import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import GoOut from './GoOut'
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
      <h1>Ola senhor {dados?.name} {dados?.surname}</h1>
      <h2>O seu email e {dados?.email}</h2>
      <GoOut/>
    </>
  )
}

export default Dashboard