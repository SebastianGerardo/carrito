import { useContext, useEffect } from 'react';
import Products from '../components/products';
import Cart from '../components/cart';
import { UserContext } from '../context/ContextCarrito';

const Home = () => {
    //1.Se usa el custom hook useCarrito para obtener las funciones y variables que se necesitan
    const {agregarAlCarrito, carrito, eliminarDelCarrito} = useContext(UserContext); 
	//2.Este useEffect se usa para guardar el carrito en el localStorage
	//El useEffect se ejecuta cada vez que se actualiza el estado del carrito
	useEffect(() => {
		//El primer valor de localStorage.setItem es el nombre de la variable que se quiere guardar en el localStorage
		//El segundo valor es el valor de la variable que se quiere guardar en el localStorage
		localStorage.setItem('carrito', JSON.stringify(carrito)); //Se usa el metodo setItem para guardar el carrito en el localStorage
	}, [carrito]); //Dentro del array se colocan las variables que se quieren monitorear para que el useEffect se ejecute cada vez que cambien

	return (
		<div className="container-fluid py-5">
			<div className="row">
				<div className="col-md-2">FILTRADOR</div>
				<div className="col-md-7">
					<Products agregarAlCarrito={agregarAlCarrito} /> {/*3.Se pasa la funcion agregarAlCarrito al componente Products*/}
				</div>
				<div className="col-md-3">
					<Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} /> {/*4.Se pasa el estado carrito y la funcion eliminarDelCarrito al componente Cart*/}
				</div>
			</div>
		</div>
	);
};

export default Home;
