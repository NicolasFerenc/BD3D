/*let usuario = prompt("Bienvenido a BD3D, ingrese su Usuario");
let password = 1234;

for (let i=1; i<=3;i++){
    let pass = parseInt(prompt("Ingresa tu Contraseña"));
    if(pass === password){
        console.log("Login Exitoso");
        break ;
    } 
    else 
    {
        console.log("Contraseña Incorrecta, te quedan " + (3-i) + " " +"intentos");
    }
}*/

/* //switch
let ingreso = prompt(
  "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
);
switch (ingreso) {
  case "1":
    alert("Seleccionaste Café");
  case "2":
    alert("Seleccionaste Café con leche");
    break;
  case "3":
    alert("Seleccionaste Té");
    break;
  default:
    alert("Opción no válida");
    break;
}
//if(ingreso=="1"){}
//else if(ingreso == "2"){}
//else if()else{alert(Opcion no valida)} */

//funciones
//declarar funcion
/* function saludar() {
  //codigo a ejecutar
  alert("Hola cómo estás?");
} */
//llamar a la funcion
//saludar();

/* function solicitarNombre() {  
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre);
}
solicitarNombre();
solicitarNombre(); */
//Funciones con parametros
/* function saludar(nombre, apellido) {
  alert("Hola " + nombre + " " + apellido + " cómo estás?");
}
let ingresarNombre = prompt("ingresa tu nombre");
let ingresarApellido = prompt("ingresa tu apellido");
saludar(ingresarNombre, ingresarApellido); */
/* 
function sumar(parametro1, parametro2) {
  //isNaN()
  if (isNaN(parametro1) || isNaN(parametro2)) {
    alert("Los valore ingresado deben ser numeros");
  } else {
    alert(parametro1 + parametro2);
  }
} */
/* let num1 = parseFloat(prompt("Ingresa el primer numero"));
let num2 = parseFloat(prompt("Ingresa el segundo numero")); 
//Scope
//variables globales
let resultado = 0;

function sumar(n1, n2) {
  //variables locales
  resultado = n1 + n2;
  return resultado;
}

 console.log(sumar(3, 54));
let valorDeLaSuma = sumar(3, 54) * 2;
console.log(valorDeLaSuma); 

function mostrar(mensaje) {
  console.log(mensaje);
}
mostrar(sumar(34, 6)); */ 
/*
//FUNCIÓN CONSTRUCTORA
/* function Auto(marca, anio, motor, modelo) {
  this.marca = marca;
  this.anio = anio;
  this.motor = motor;
  this.modelo = modelo;
  this.marchar = () => {
    console.log("Estoy en marcha");
  };
  this.presentar = () => {
    console.log("Soy un auto modelo" + this.modelo + " año: " + this.anio);
  };
  this.vender = () => {
    console.log("Fui vendido");
  };
} */

/*
//CLASE CONSTRUCTORA
/* class Auto {
  constructor(marca, anio, motor, modelo) {
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
      console.log("Estoy en marcha");
    };
    this.presentar = () => {
      console.log("Soy un auto modelo" + this.modelo + " año: " + this.anio);
    };
    this.vender = () => {
      console.log("Fui vendido");
    };
  }
} */

/*
//Arrays
const array=[];
console.log(array); 
let nombre= "Pepe";
const numeros = [1,2,3,4,65,6,7,4,1,2,0,-9,5,4];
console.log(numeros); 

const mixto=[1,"Batman", false, {nombre:"German"}, 3.4, nombre,"Batman"];
 console.log(mixto);
console.log(mixto.length);
console.log(mixto[0]);
console.log(mixto[1]);
console.log(mixto[2]);
console.log(mixto[3]);
console.log(mixto[4]); 

//recorriendo el array
for(let i = 0; i < mixto.length; i++){
  console.log(mixto[i]);
 }
 for(let i = 0; i < numeros.length; i++){
  console.log(numeros[i]);
 }

array.push("Juan",1,false);
console.log(array);
mixto.push(44);
console.log(mixto);
mixto.unshift('Hola');
console.log(mixto);
mixto.pop();
console.log(mixto);
mixto.shift();
console.log(mixto);
mixto.splice(2,1);
console.log(mixto); 

//console.log(numeros.join("\n"));
 const concatenado = mixto.concat(numeros);
console.log(concatenado);
console.log(mixto.indexOf('juan'));
console.log(mixto.indexOf(1));
console.log(mixto.indexOf('batman'));
console.log(concatenado.includes(3));
console.log(concatenado.includes(1)); 


//arrays de objetos
const arroz={nombre:"Gallo", peso:500, precio: 180}

const productos=[];

function Producto(nombre, precio, peso){
this.nombre= nombre;
this.precio= parseFloat(precio);
this.peso= peso;

this.sumarIva=()=>{
  this.precio = this.precio * 1.21;
}
}

const productoNuevo= new Producto('Azucar', 195, 1000);
const productoNuevo1= new Producto('Peras', 200, 1000);
console.log(productoNuevo.precio);
productoNuevo.sumarIva();
console.log(productoNuevo.precio);


function cargarProductos(producto){
 productos.push(producto);
}

cargarProductos(arroz);
cargarProductos(productoNuevo);
cargarProductos(productoNuevo1);

console.log(productos);
/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  console.log(element);
  
} 

for (const objeto of productos) {
  console.log(objeto);
}

