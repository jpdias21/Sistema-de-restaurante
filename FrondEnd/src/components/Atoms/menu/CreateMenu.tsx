import { useState } from 'react'
import ImputProps from '../Form/InputProps'
import ButtonProps from '../Form/ButtonProps'
import { Textarea } from '@chakra-ui/react'
import { PulseLoader } from 'react-spinners'
import SidebarMenu from '../Struture/SideBar'
import axios from 'axios'



///definir campo
type Campo = {
  name: string,
  description: string,
  valor: number | null
}
function CreateMenu() {
  const [campo, SetCampo] = useState<Campo[]>([{ name: "", description: "", valor: 0 }])

  const [loading, SetLoading] = useState<boolean | null>(null)
  const [mensagemServidor, SetMensagemServidor] = useState<string | null>(null)

  ///adiciona campo
  const adicionarCampo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    SetCampo([...campo, { name: "", description: "", valor: 0 }])
  }

  /// atualiza valores 
  const handleChange = (index: number, NovoCampo: 'name' | 'description' | 'valor', valor: string) => {
    const novosDados = [...campo];
    if (NovoCampo === 'valor') {
      novosDados[index][NovoCampo] = parseFloat(valor) || 0; // converte string em number
    } else {
      novosDados[index][NovoCampo] = valor;
    }
    SetCampo(novosDados)
  }

  //valor 
  const handleValorChange = (index: number, valor: number | null) => {
    const novos = [...campo]
    novos[index].valor = valor
    SetCampo(novos)
  }


  ///Mandar
  const HandleSubmit = async (event: any) => {
    event.preventDefault()
    SetLoading(true)
    const restaurantId = localStorage.getItem('restaurantId')
    if (!restaurantId) {
      SetMensagemServidor('ID do restaurante não encontrado')
      return
    }
    try {
      const enviarDados = {
        produto: campo,
        restaurant_id: restaurantId
      }
      console.log(enviarDados)
      const response = await axios.post('http://localhost:3000/createMenu', enviarDados)
      console.log('deu certo', response.data)
      SetLoading(false)
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        SetMensagemServidor(error.response.data.mensagem)
      }
      SetLoading(false)
    }
  }

  return (
    <>

      <SidebarMenu />
      <div >
        <h3>Cadastre seu menu</h3>
        <br />

        <div style={{ padding: '15px', border: '1px solid #ccc' }}>
          <form onSubmit={HandleSubmit}>
            {campo.map((dados, index) => (
              <div key={index}>
                <div>
                  <br />
                  <ImputProps
                    label='Nome do produto '
                    value={dados.name}
                    onChange={event => handleChange(index, "name", event.target.value)}
                    name={dados.name}
                    placeholder='Exemplo pizza de calabreza'
                    type='text'
                    isRequired
                  />
                </div>
                <div>
                  <label >Descricao do produto :</label>
                  <Textarea value={dados.description} placeholder='Descreva o seu produto' rows={5} cols={35} maxLength={200} onChange={(event) => handleChange(index, 'description', event.target.value)} required />
                </div>
                <br />
                <label>Valor : </label>
              <ImputProps
  label='Valor do produto'
  value={dados.valor !== null && dados.valor !== undefined ? dados.valor.toString() : ''}
  onChange={(event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue === '' ? null : parseFloat(inputValue) || null;
    handleValorChange(index, numericValue);
  }}
  name="valor"
  placeholder="20.50"
  type="text"
  isRequired
/>


                {loading ? <PulseLoader color="#1732e0ff" size={30} /> : ''}
                <hr style={{ color: 'red' }} />
              </div>
            ))}
            <br />
            <br />
            <ButtonProps
              name='Adicionar mais produto um produto'
              color='green'
              type='button'
              onClick={adicionarCampo}

            />
            <br /> <br />
            <ButtonProps
              name='Fazer o cadastro'
              color='blue'
              type='submit'
              onClick={() => undefined}

            />
          </form>
        </div>

      </div>
      <br />
      {mensagemServidor && <p style={{ color: 'red' }}>{mensagemServidor}</p>}
    </>
  )
}

export default CreateMenu