import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [detalle, setDetalle] = useState("");

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");
        setProductos(res.data);
      } catch (error) {
        console.error("Hubo un error obteniendo los productos", error);
      }
    };
    obtenerProductos();
  }, []);

  const agregarProducto = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/products", {
        name: nombre,
        price: precio,
        category: categoria,
        detail: detalle,
      });
      setProductos([...productos, res.data]);
      setNombre("");
      setPrecio("");
      setCategoria("");
      setDetalle("");
    } catch (error) {
      console.error("Hubo un error agregando el producto", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error("Hubo un error eliminando el producto", error);
    }
  };

  const calcularSumatoria = () => {
    return productos.reduce((sum, producto) => sum + producto.price, 0);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Carrito de compras</h1>
      </div>
      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Detalle"
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
        />
        <button className="button" onClick={agregarProducto}>
          Agregar al carrito
        </button>
      </div>
      <ul className="list">
        {productos.map((producto) => (
          <li className="list-item" key={producto.id}>
            {producto.name} - ${producto.price} - {producto.category} -{" "}
            {producto.detail}
            <button
              className="button-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="sumatoria">
        <h2>Sumatoria de Precios: ${calcularSumatoria()}</h2>
      </div>
    </div>
  );
}

export default App;
