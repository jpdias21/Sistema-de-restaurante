import React, { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { NumericFormat } from 'react-number-format'
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
  const adicionarCampo = (event: any) => {
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
                <label>Nome do produto : </label>
                <input type="text" value={dados.name} placeholder='Exeplo pizza de calabreza' onChange={(e) => handleChange(index, "name", e.target.value)} required />
                <br /><br />

                <label>Descricao do produto : </label>
                <br />
                <textarea
                  value={dados.description} rows={3} cols={25} maxLength={100} placeholder='Faça uma descricao do produto' onChange={(event) => handleChange(index, 'description', event.target.value)} required />
                <br /><br />

                <label>Valor do produto:</label>
                <NumericFormat
                  value={dados.valor || ''}
                  onValueChange={(values) => handleValorChange(index, values.floatValue || null)}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  decimalScale={2}
                  fixedDecimalScale
                  allowNegative={false}
                  placeholder="R$ 0,00"
                  required
                />
                <br />
                {loading ? <PulseLoader color="#1732e0ff" size={30} /> : ''}
                <hr />
              </div>
            ))}
            <br />
            <button onClick={adicionarCampo}>Adicionar mais um produto</button>
            <br /> <br />
            <button type='submit'>Fazer o cadastro</button>
          </form>
        </div>

      </div>
      <br />
      {mensagemServidor && <p style={{ color: 'red' }}>{mensagemServidor}</p>}
    </>
  )
}

export default CreateMenu