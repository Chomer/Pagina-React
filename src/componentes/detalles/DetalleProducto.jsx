
import { useParams } from 'react-router-dom';
import './DetalleProducto.css';

const DetalleProducto = ({ productos }) => {
  const { id } = useParams();

  const obtenerProductoPorId = (id) => {
    return productos.find((producto) => producto.id === parseInt(id));
  };

  const producto = obtenerProductoPorId(id);

  if (!producto) {
    return <div className='product-not-found'>Producto no encontrado</div>;
  }

  return (
    <div className='product-details-container'>
      <h2>{producto.nombre}</h2>
      <div className='product-info'>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Código:</strong> {producto.codigo}</p>
        <p><strong>Descripcion:</strong> {producto.descripcion}</p>
      </div>
    </div>
  );
};

export default DetalleProducto;
