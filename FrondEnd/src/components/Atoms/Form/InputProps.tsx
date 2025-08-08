import { Input } from '@chakra-ui/react'
import '../Form/form.css'
interface ImputProps{
  name : string,
  value : string,
  onChange : React.ChangeEventHandler<HTMLInputElement>,
  label : string,
  placeholder : string,
  type? : 'submit' | 'reset' | 'button' | 'text' | 'number' | 'password' | 'email',
  maxLength?: number
  minLength?: number
  isRequired?: boolean
}

export default function ImputProps ({name, value,onChange, label,placeholder, type = 'text', maxLength,minLength,isRequired = false} : ImputProps){
  return(
    <div className="input-container">
      <label >{label} : </label>
        <Input 
        name={name}
        value = {value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        isRequired={isRequired}
        />
        <br />
    </div>
  )
}