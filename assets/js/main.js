function saludar(nombre, producto, formadepago) 
    {
        alert("Hola " + nombre + " " + "selecionaste el producto:" + " " + producto + " y te sale:" + formadepago); 
    };
  let ingresarNombre = prompt("ingresa tu nombre");
  let ingresarproducto = prompt("Ingresa una opción \n 1-Producto de Estudio \n 2-Producto para el Hogar \n 3-Producto de Hobby \n 4-Productos Coleccionables \n 5- Cotizar");
    switch (ingresarproducto) {
        case "1":
        alert("Seleccionaste Producto de Estudio");
        break;
        case "2":
        alert("Seleccionaste Producto para el Hogar");
        break;
        case "3":
        alert("Seleccionaste Producto de Hobby");
        break;
        case "4":
        alert("Seleccionaste Productos Coleccionables");
        break;
        case "5":
        alert("Seleccionaste Cotizar");
        default:
        alert("Opción no válida");
        break;
    };
  let ingresarformadepago = prompt("Ingresa una opción \n 1-efectivo \n 2-transferencia bancaria \n 3-mercado pago ");
    switch (ingresarformadepago) {
        case "1":
        alert("Seleccionaste efectivo");
        break;
        case "2":
        alert("Seleccionaste transferencia bancaria");
        break;
        case "3":
        alert("Seleccionaste mercado pago");
        break;
        default:
        alert("Opción no válida");
        break;
    };

  saludar(ingresarNombre, ingresarproducto, ingresarformadepago);