let usuario = prompt("Bienvenido a BD3D, ingrese su Usuario");
let password = 1234;

for (let i=1; i<=3;i++){
    let pass = parseInt(prompt("Ingresa tu Contraseña"));
    if(pass === password){
        console.log("Login Exitoso");
        break ;
    } 
    else 
    {
        console.log("Contraseña Incorrecta, te quedan " + (3-i) + "intentos");
    }
}