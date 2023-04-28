//1. Se importan las librerias necesarias, como axios, useEffect, useState y PropTypes
import axios from "axios";
import { URL_API_STORE } from "../../constants";
import { useEffect, useState } from "react";
import {Product} from "../product";
import PropTypes from "prop-types";

//2. Se crea la funcion Products y se le pasa como parametro la palabra props,
//que es un objeto que contiene todas las propiedades que se le pasan a la funcion
const Products = (props) => {
  //3. Se destructura la variable props para obtener sus valores
  const { agregarAlCarrito } = props;
  //4. Se crean las variables de estado que se van a usar
  const [productos, setProductos] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  //5. Se crea el useEffect para traer los productos de la API definida en el archivo ../../constants/index.js
  //El useEffect se ejecuta cada vez que se actualiza el estado de la variable limit
  useEffect(() => {
    //6. Se crea la funcion getProducts para traer los productos de la API como es una funcion asincrona,
    //se usa async y await para que la funcion espere a que se ejecute la peticion a la API
    const getProducts = async () => {
      //7. Se crea la constante response que va a contener la respuesta de la peticion a la API
      //Se agrega el endpoint a la url principal y se le agrega el parametro limit
      const response = await axios.get(
        `${URL_API_STORE}/products?limit=${limit}`
      );
      //8. Se actualiza el estado de la variable productos con la respuesta de la API
      setProductos(response.data);
      //9. Se actualiza el estado de la variable loading a false para indicar que ya se termino de cargar los productos
      setLoading(false);
    };
    //10. Se ejecuta la funcion getProducts
    getProducts();
    console.log("Estoy trayendo los productos");
    //Se usa console.log para depurar el codigo y saber si se esta ejecutando el useEffect correctamente
  }, [limit]);

  return (
    <>
      <div className="row">
		{/* Se usa un operador ternario para mostrar un mensaje de cargando o los productos */}
        {loading ? (
          <div style={{textAlign: "center"}}>cargando...</div> //Si loading es true se muestra el mensaje de cargando
        ) : (
          productos.length > 0 && //Si es false se muestra los productos
          productos.map((prod) => { //Se usa el metodo map para recorrer el arreglo de productos
            return (
              <div className="col-md-3 mb-3" key={prod.id}>
                <Product item={prod} agregarAlCarrito={agregarAlCarrito} /> {/* Se llama al componente Product y se le pasan las propiedades item y agregarAlCarrito */}
              </div>
            );
          })
        )}
      </div>
      <div className="row">
        <div className="col">
			{/*Se crea un boton para cargar mas productos */}
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => setLimit(limit + 5)} //Se actualiza el estado de la variable limit para traer mas productos
            disabled={loading} //Se deshabilita el boton si loading es true
          >
            Cargar más...
          </button>
        </div>
      </div>
    </>
  );
};

//11. Se exporta la funcion Products
//Se usa PropTypes para definir el tipo de dato que se le va a pasar a la funcion
//En este caso se le pasa una funcion
//Se usa isRequired para indicar que es un parametro obligatorio
Products.propTypes = {
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default Products;
