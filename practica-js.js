const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 80000, categoria: "Tecnología", stock: 12 },
  { id: 3, nombre: "Monitor", precio: 450000, categoria: "Monitores", stock: 0 },
  { id: 4, nombre: "Audífonos", precio: 120000, categoria: "Audio", stock: 7 },
  { id: 5, nombre: "Webcam", precio: 180000, categoria: "Tecnología", stock: 0 },
  { id: 6, nombre: "Portátil", precio: 2200000, categoria: "Computadores", stock: 3 },
  { id: 7, nombre: "Silla Gamer", precio: 790000, categoria: "Mobiliario", stock: 4 },
  { id: 8, nombre: "Micrófono", precio: 210000, categoria: "Audio", stock: 6 },
  { id: 9, nombre: "Base Refrigerante", precio: 75000, categoria: "Accesorios", stock: 0 },
  { id: 10, nombre: "Disco SSD", precio: 320000, categoria: "Almacenamiento", stock: 8 }
];

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log("\n--- Buscar producto ---");
console.log("Buscar producto con id 4:", buscarProducto(4));

console.log(`\n--- Template literals ---`);
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

console.log(`\n--- Desestructuración ---`);
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
  ...productos[0],
  stock: 8
};

console.log(`\n--- Operador ternario ---`);
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

console.log(`\n--- Tarea Reto 8 ---`);
const copiaProducto = {
  ...productos[2],
  precio: 420000,
  stock: 4
};

console.log(
  `El producto ${copiaProducto.nombre} ahora tiene un precio de $${copiaProducto.precio} y está ${copiaProducto.stock > 0 ? 'Disponible' : 'Agotado'}`
);

console.log('Original intacto:', productos[2]);