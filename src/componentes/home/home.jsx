
import productos from '../Productos/ListaProducto.js';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <strong>Nombre:</strong> {producto.nombre} - <strong>Precio:</strong> ${producto.precio}
            <br />
            <button>
            <Link to={`/producto/${producto.id}`}>Ver más detalles</Link>
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
