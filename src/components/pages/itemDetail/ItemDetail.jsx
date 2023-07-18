import { useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const {id} = useParams()


  useEffect(() => {
    let productoSeleccionado = products.find((products) => products.id === +id);
    const tarea = new Promise((resolve, reject) => {
      resolve(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, []);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  };

  return (
    <div>
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
