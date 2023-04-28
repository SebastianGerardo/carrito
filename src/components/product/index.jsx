//1. Se importa PropTypes, Navlink y el archivo con los estilos
import PropTypes from 'prop-types';
import './styles.css';
import { NavLink } from 'react-router-dom';

//2. Se crea la funcion Product y se le pasa como parametro la palabra props,
//que es un objeto que contiene todas las propiedades que se le pasan a la funcion.
export const Product = (props) => {
	//3. Se destructura la variable props para obtener sus valores
	const { item, agregarAlCarrito } = props;

	return (
		<div className="card card-container">
			<img src={item.image} className="card-img-top product-image" />
			<div className="card-body">
				<h5 className="card-title product-title" title={item.title}>
					{item.title}
				</h5>
				<p className="card-text product-description" title={item.description}>
					{item.description}
				</p>
				<div className='button-container'>
					<NavLink to={`/product/${item.id}`} > {/* Se crea un NavLink para redireccionar a la pagina del producto */}
						<button className="btn btn-sm btn-primary">
							Ver producto
						</button>
					</NavLink>
					<button
						className="btn btn-sm btn-warning"
						onClick={() => {
							agregarAlCarrito(item); //Se llama a la funcion agregarAlCarrito que esta en el componente principal 
													//y se le pasa como parametro el item.
						}}
					>
						agregar
					</button>
				</div>
			</div>
		</div>
	);
};

//Se usa PropTypes para definir el tipo de dato que se le va a pasar a la funcion
//En este caso se le pasa una funcion
//Se usa isRequired para indicar que es un parametro obligatorio
Product.propTypes = {
	item: PropTypes.object.isRequired,
	agregarAlCarrito: PropTypes.func.isRequired
};

