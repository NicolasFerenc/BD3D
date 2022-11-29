const productos = [];
const carrito = [];

const catalogo = document.querySelector("#catalogo");
const carritoDiv= document.querySelector('.carrito');

class Producto {
    constructor(id, tipo, precio, url) {
        this.id = id;
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.url = url;
    }
    sumarIva() {
        return this.precio *= 1.21;
    }
}

function cargarProductos() {
    productos.push(new Producto(1, "Producto de Estudio", 1500,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJk6xsq373zW3yedNKw0zHufyAa9k93QpHw&usqp=CAU"))
    productos.push(new Producto(2, "Producto para el Hogar", 1800, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeg8IIdQ6eZqhO4gF0vW3bBfgbuVuKu5iNr1VcjSISJQ_Cxl1cgkKwI9meSJm9uhe5fLE&usqp=CAU"));
    productos.push(new Producto(3, "Producto coleccionable", 6000, "https://bitfab.io/wp-content/uploads/2020/01/funko-venom.jpg"));
}

cargarProductos();

console.log(productos);

function crearCards() {
    for (const prod of productos) {
        prod.sumarIva()
        let div = document.createElement('div')
        div.className = "carta"
        div.innerHTML = `<section id="container" class="containercards">
                           <h3>${prod.tipo}</h3>
                           <p>$${prod.precio}</p>
                           <img class="cartaimg" src="${prod.url}" alt="">
                           <button class="btnCarrito" id="btn-agregar${prod.id}" >Comprar</button>
                         </section>
                         `  
        catalogo.append(div)
    }
    agregarFuncionAlBoton();
}

function agregarFuncionAlBoton(){
    productos.forEach(productos => {
       document.querySelector(`#btn-agregar${productos.id}`).addEventListener("click",()=>{
        agregarAlCarrito(productos)
       })
    });
}

function agregarAlCarrito(productos){ 
   
   let existe =carrito.some(prds=>prds.id === productos.id);
   if(existe===false){
    productos.cantidad = 1;
    carrito.push(productos);
   }
   else{
     let productoFind = carrito.find(prds=>prds.id === productos.id)
     productoFind.cantidad++;
   }
   console.log(carrito);
   renderizarCarrito();
}

function renderizarCarrito(){
    carritoDiv.innerHTML="";
     carrito.forEach(prds =>{
        carritoDiv.innerHTML += `<div id="container" class="containercards">
                           <h3>${prds.tipo}</h3>
                           <h3>CANTIDAD: ${prds.cantidad}</h3>
                           <p>$${prds.precio}</p>
                           <img class="cartaimg" src="${prds.url}" alt="">
                           <button class="btnCarrito" id="btn-borrar${prds.id}" >Borrar</button>
                         </div>
                         `  
     })
     borrarProducto()
}

function borrarProducto(){
    carrito.forEach(productos => {
        document.querySelector(`#btn-borrar${productos.id}`).addEventListener("click",()=>{
          let indice = carrito.findIndex(e=>e.id===productos.id)
          carrito.splice(indice,1)
          renderizarCarrito()
        })
     });
}

function total(){
    let total = document.getElementById("total")
    let resultado = carrito.reduce((acc,el)=> acc + el.precio, 0)
    total.innerText = resultado.toFixed(2)
}
total();

crearCards();