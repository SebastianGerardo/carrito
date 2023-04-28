import { useState } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState(
    //1. Valida si hay algun producto en el localStorage, de lo contrario establece el valor del carrito en un array vacio.
    JSON.parse(localStorage.getItem("carrito")) || [] //El simbolo || significa "or" y se usa para darle un valor dependiendo de si el primero es true o false
  );

  
  const agregarAlCarrito = (item) => {
      //2.Se destructura la variable carrito para obtener sus valores
      const copiaCarrito = [...carrito]; //El operador (...) se usa para desestructurar un objeto o array
      // 3. verificar si el item ya existía en el carrito.
      const itemEncontrado = copiaCarrito.find((prod) => prod.id === item.id); //Se usa el metodo Find para encontrar si es que hay un producto con el mismo id en la variable carrito
      //4. Se usa la condicional (If) para saber si el item ya existía
      if (itemEncontrado) {
          // Si el objeto existía dentro del carrito se le suma 1 a la cantidad total
          itemEncontrado.cant += 1;
          setCarrito(copiaCarrito); //Se usa setCarrito para actualizar el estado del carrito
        } else {
            //Si el item no existía, se agrega al carrito
            const nuevoItemAlCarrito = { ...item }; //Se usa el operador (...) para desestructurar el objeto item
            nuevoItemAlCarrito.cant = 1; //Se le agrega a la propiedad cant del objeto nuevoItemAlCarrito el valor de 1
      copiaCarrito.push(nuevoItemAlCarrito); //Se agrega el objeto nuevoItemAlCarrito al array copiaCarrito usando el metodo push
      setCarrito(copiaCarrito); //Se usa setCarrito para actualizar el estado del carrito
    }
  };

  //Esta funcion se usa para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    const copiaCarrito = [...carrito]; //Se usa el operador (...) para desestructurar el objeto carrito
    const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== id); //se usa el metodo filter para filtrar los productos que no tengan el mismo id que el que se quiere eliminar
    setCarrito(nuevosProductos); //Se usa setCarrito para actualizar el estado del carrito
  };
  
  //Retornamos las funciones y variables que se van a usar en otros componentes
  return {
    agregarAlCarrito,
    carrito,
    eliminarDelCarrito,
  };
};

export default useCarrito;
