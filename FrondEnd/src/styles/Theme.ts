// src/styles/Theme.ts

import { extendTheme } from "@chakra-ui/react";

// Aqui definimos estilos globais
const styles = {
  global: {
    body: {
      bg: "#2d2d2d", // fundo cinza escuro
      color: "white", // cor do texto
      fontFamily: "Arial, sans-serif", // fonte padrão
    },
  },
};

// Aqui criamos o tema customizado
const Theme = extendTheme({
  styles, // aplicamos os estilos globais
});

export default Theme;
