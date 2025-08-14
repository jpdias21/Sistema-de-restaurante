import ButtonProps from '../Form/ButtonProps'
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
    <ButtonProps 
          name = 'Cadastrar restaurante'
          color = 'blue'
          type='button'
          onClick={cadastrarRestaurante}
        />
    <br />
     <ButtonProps 
          name = 'Ver dados do restaurante'
          color = 'blue'
          type='button'
          onClick={dadosRestaurante}
        />
    <br />
     <ButtonProps 
          name = 'Mudar dados do restaurante'
          color = 'blue'
          type='button'
          onClick={mudarDadosRestaurant}
        />
    <br />
    <ButtonProps 
          name = 'Apagar restaurante'
          color = 'red'
          type='button'
          onClick={apagarRestaurant}
        />
    </>

  )
}

export default Restaurant