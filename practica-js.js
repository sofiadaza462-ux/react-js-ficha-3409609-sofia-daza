const productos = [
  { nombre: "Mouse", precio: 50000, stock: 5 },
  { nombre: "Teclado", precio: 80000, stock: 12 },
  { nombre: "Monitor", precio: 450000, stock: 3 }
];

const nombresMayusculas = productos.map(producto => producto.nombre.toUpperCase());

console.log("1. Nombres en Mayúsculas");
console.log(nombresMayusculas);

const productosConIva = productos.map(producto => {
  return {
    ...producto, 
    precioConIva: Math.round(producto.precio * 1.19) 
  };
});

console.log("\n2. Productos con Precio con IVA Incluido");
console.log(productosConIva);