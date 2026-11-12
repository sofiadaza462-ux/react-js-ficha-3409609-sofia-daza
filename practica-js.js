const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado de 2:", cuadrado(2));                   
console.log("¿Es mayor de edad (19)?", esMayorEdad(20));       
console.log("Nombre completo:", nombreCompleto("sofia ", "daza")); 