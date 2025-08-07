import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './styles/Theme'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>
)
