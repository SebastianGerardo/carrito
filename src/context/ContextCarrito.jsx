import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";
export const UserContext = createContext();

//Se crea un contexto para poder usar las funciones y variables del custom hook useCarrito en todos los 
//componentes que estén dentro del componente ContextCarrito

export const ContextCarrito = ({children}) => {
    //1.Se desestructura el custom hook useCarrito para obtener las funciones y variables que se van a usar
    const {agregarAlCarrito, carrito, eliminarDelCarrito} = useCarrito(); 

  return (
    //2.Se crea el contexto UserContext que va a contener las funciones y variables que se van a usar
    <UserContext.Provider value={{ agregarAlCarrito, carrito, eliminarDelCarrito }}> {/*3.Se usa el value para pasar las funciones y variables del custom hook useCarrito al contexto UserContext*/}
      {children}
    </UserContext.Provider>
  );
};