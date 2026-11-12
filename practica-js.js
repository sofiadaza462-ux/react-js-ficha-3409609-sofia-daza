// --- Reto 3: Arreglos y Objetos ---

const productos = [
  { id: 1, nombre: "Mouse Logitech", precio: 45000, categoria: "Tecnología", stock: 15 },
  { id: 2, nombre: "Teclado Mecánico", precio: 120000, categoria: "Tecnología", stock: 8 },
  { id: 3, nombre: "Monitor 24 pulgadas", precio: 650000, categoria: "Tecnología", stock: 0 }, // Sin stock
  { id: 4, nombre: "Audífonos Bluetooth", precio: 85000, categoria: "Accesorios", stock: 20 },
  { id: 5, nombre: "Memoria USB 64GB", precio: 30000, categoria: "Almacenamiento", stock: 12 },
  { id: 6, nombre: "Silla Gamer", precio: 550000, categoria: "Muebles", stock: 4 },
  { id: 7, nombre: "Cable HDMI 2m", precio: 15000, categoria: "Accesorios", stock: 0 }, // Sin stock
  { id: 8, nombre: "Base para Laptop", precio: 50000, categoria: "Accesorios", stock: 10 },
  { id: 9, nombre: "Cuaderno Argollado", precio: 8000, categoria: "Papelería", stock: 50 },
  { id: 10, nombre: "Esfero Negro Pack x3", precio: 4500, categoria: "Papelería", stock: 25 }
];

// Imprimimos el arreglo completo para verificar
console.log("Inventario de productos cargado:", productos);