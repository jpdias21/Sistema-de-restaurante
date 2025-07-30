import React, { useState } from 'react'
import { NumericFormat } from 'react-number-format'
import axios from 'axios'

function CreateMenu() {
  const [name, SetName] = useState<string>('')
  const [description, SetDescriptioon] = useState<string>('')
  const [valor, SetValor] = useState<number | null>(null)

  
  const HandleSubmit = (event : any) => {
    event.preventDefault 

      try {
        const response = axios.post('', {
          
        })
      } catch (error) {
        
      }
  }

  return (
   <>
   <div >
    <h3>Cadastre seu menu</h3>
    <br />
    <form>
      <label>Nome do produto : </label>
      <input type="text" value={name} placeholder='Digite o nome do produto' onChange={(event) => SetName(event.target.value)}  required/>
      <br /><br />
       <label>Descricao do produto : </label>
       <br />
      <textarea
            value={description} rows={3} cols={25} maxLength={100} placeholder='Faça uma descricao do produto' onChange={(event) => SetDescriptioon(event.target.value)}
            />
      <br /><br />
      <label>Valor do produto: </label>
        <NumericFormat
      value={valor}
      onValueChange={(values) =>{
    SetValor(values.floatValue || null)
  }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      placeholder="R$ 0,00"
/>
        <br /><br />
      <br /><br />
      <br />
      <button onClick={HandleSubmit}>Criar cartapio</button>
    </form>
   </div>
   </>
  )
}

export default CreateMenu