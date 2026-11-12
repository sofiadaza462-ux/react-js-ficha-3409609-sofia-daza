const productos = [
  { nombre: "Mouse", precio: 50000, stock: 5 },
  { nombre: "Teclado", precio: 80000, stock: 12 },
  { nombre: "Monitor", precio: 450000, stock: 3 }
];

productos.forEach((producto, indice) => { 
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`); 
});