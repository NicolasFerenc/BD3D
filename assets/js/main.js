function saludar (usuario){
    alert("Hola" + " "+ usuario);
};
let usuario= prompt("Bienvenido a BD3D, ingrese su Usuario");
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
}  
saludar(usuario);

function pago (producto, formadepago){
    alert("Tu producto sale" + " " +cuota);
}
let producto = prompt("Ingresa una opción \n 1-Producto de Estudio \n 2-Producto para el Hogar \n 5- Cotizar");
    if(producto==1){
        precio=1500;
        console.log(precio);
    }
    else if(producto==2){
        precio=1800;
        console.log(precio);
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
    


pago(producto,formadepago);