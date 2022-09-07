const productos=[];

function Producto(nombre, precio){
    this.nombre= nombre;
    this.precio= parseFloat(precio);    
}
const productoNuevo1= new Producto("Producto de Estudio", 1500);
const productoNuevo2= new Producto("Producto para el Hogar", 1800);
const productoNuevo3= new Producto("Producto de Hobby", 2000);
const productoNuevo4= new Producto("Productos Coleccionables", 2500);

function cargarProductos(producto){
    productos.push(producto);
   }
cargarProductos(productoNuevo1);
cargarProductos(productoNuevo2);
cargarProductos(productoNuevo3);
cargarProductos(productoNuevo4);


for (const objeto of productos) {
    console.log(objeto);
  }

  function saludar (usuario){
    alert("Hola" + " "+ usuario);
  };
  let usuario= prompt("Bienvenido a BD3D, ingrese su Usuario");
  saludar(usuario);

  function pago (cuota){
    alert("Tu producto sale" + " " + "$" +cuota);
}
let producto = prompt("Ingresa una opción \n 1-Producto de Estudio \n 2-Producto para el Hogar \n 3-Producto de Hobby \n 4-Productos Coleccionables ");
    if(producto==1){
        precio=1500;
        console.log(precio);
    }
    else if(producto==2){
        precio=1800;
        console.log(precio);
    }
    else if(producto==3){
        precio=2000;
        console.log(precio);
    }
    else if(producto==4){
        precio=2500;
        console.log(precio);
    }  
    else{
        alert("no elegiste un producto");
    }
    
let formadepago = prompt("Ingresa una opción \n 1-efectivo \n 2-transferencia bancaria \n 3-mercado pago ");
    if(formadepago==1){
        cuota=precio*.9;
        console.log(cuota);
    }
    else if(formadepago==2){
        cuota=precio*1.1;
        console.log(cuota);
    }
    else if(formadepago==3){
        cuota=precio*1.3;
        console.log(cuota);
    }
    else{
        alert("no elegiste un medio de pago");
    }
pago(cuota);