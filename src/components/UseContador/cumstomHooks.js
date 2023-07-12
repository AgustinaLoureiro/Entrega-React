import { useState, useEffect } from "react";

export const UseContador = (valorInicial, valorMaximo) =>{
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
      if (contador < valorMaximo){
          setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if (contador > valorInicial){
          setContador(contador - 1);
      }
    }

    return {incrementar, decrementar, contador};
}