const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 80000, categoria: "Tecnología", stock: 12 },
  { id: 3, nombre: "Monitor", precio: 450000, categoria: "Monitores", stock: 0 } // Stock en 0 para probar el filtro
];
const productosDisponibles = productos.filter(producto => producto.stock > 0);

console.log("1. Productos Disponibles (stock > 0) ");
console.log(productosDisponibles);

const productosGranos = productos.filter(producto => producto.categoria === "Tecnología");

console.log("\n2. Productos de la categoría 'Tecnología'");
console.log(productosGranos);

const productoBuscado = productos.find(producto => producto.id === 2);

console.log("\n3. Producto encontrado con ID 2");
console.log(productoBuscado);