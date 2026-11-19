const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 80000, categoria: "Tecnología", stock: 12 },
  { id: 3, nombre: "Monitor", precio: 450000, categoria: "Monitores", stock: 0 } // Stock en 0 para probar el filtro
];

console.log(`\n--- 12.1 Template literals ---`);
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

console.log(`\n--- 12.2 Desestructuración ---`);
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
  ...productos[0],
  stock: 8
};

console.log(`\n--- 12.4 Operador ternario ---`);
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