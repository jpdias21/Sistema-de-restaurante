import { Button} from '@chakra-ui/react'

interface ButtonProps{
    name : string, 
    color : string, 
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void ,
    type?: "submit" | "reset" | "button" | undefined
}

export default function ButtonProps({name, color, onClick, type = 'button'} : ButtonProps){

   return(
     <div>
        <Button 
        colorScheme={color} 
        type={type} 
        onClick={onClick}
        >{name}</Button>
    </div>
   )
}