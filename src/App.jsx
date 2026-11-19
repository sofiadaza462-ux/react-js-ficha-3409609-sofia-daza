import ProductoCard from "./components/ProductoCard";
import { productos } from "./data/productos";
import "./App.css";

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <section>
        <p>Total de productos: {productos.length}</p>
        <p>Productos disponibles: {disponibles.length}</p>
        <p>
          ¿Hay productos agotados?: {hayAgotados ? "Sí, hay productos agotados" : "No, todo disponible"}
        </p>
        <p>Valor total del inventario: ${valorInventario}</p>
      </section>

      <h2>Todos los productos</h2>
      <section className="productos">
        {productos.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

      <h2>Productos disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>
    </main>
  );
}

export default App;