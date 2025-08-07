
import SidebarMenu from '../Struture/SideBar'
import { useNavigate } from 'react-router-dom'
function Restaurant() {
   
   
    const navigate = useNavigate()

    const dadosRestaurante = () => {
        navigate('/readRestaurant')
    }

    const mudarDadosRestaurant = () => {
        navigate('/UpdateRestaurant')
    }

    const cadastrarRestaurante = () => {
      navigate('/createRestaurant')
    }
    const apagarRestaurant = () => {
      navigate('/DeleteRestaurant')
    }
  return (
    <>
    <SidebarMenu/>
    <br />
    <br />
    <button onClick={cadastrarRestaurante}>Cadastrar o restaurante</button>
    <br />
    <br />
    <button onClick={dadosRestaurante}>Ver dados do restaurante</button>
    <br />
    <br />
    <button onClick={mudarDadosRestaurant}>Mudar dados do restaurante</button>
    <br />
    <br />
    <button onClick={apagarRestaurant}>Apagar restaurante</button>
    </>

  )
}

export default Restaurant