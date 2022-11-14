const productos=[];

function Producto(nombre, precio,stock){
    this.nombre= nombre;
    this.precio=parseFloat(precio);
    this.stock=(stock);    
}
const productoNuevo1= new Producto("Producto de Estudio", 1500,10);
const productoNuevo2= new Producto("Producto para el Hogar", 1800,20);
const productoNuevo3= new Producto("Producto de Hobby", 2000,15);
const productoNuevo4= new Producto("Productos Coleccionables", 2500,5);

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

const inventario= productoNuevo1.stock + productoNuevo2.stock + productoNuevo3.stock+ productoNuevo4.stock; 

console.log("El stock actual de tu inventario es:" + " " + inventario ); //tengo una duda aca, porque me lo toma al valor pero no me lo suma ...esta mal definido? o porque es?

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
        alert("no elegiste un producto valido");
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
        alert("no elegiste un medio de pago validp");
    }
pago(cuota);
