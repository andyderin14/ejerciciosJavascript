// let entrada = prompt("¿De que club de fútbol sos hincha?");
// let salida = "El club: " + entrada + ", es el mejor equipo del país!";
// alert(salida);


// let numero1 = Number(prompt("Cuántos goles le hizo River a Boca en la final de la Copa Libertadores de América del 2018 en Madrid?"));
// let goles = "Además de hacerle " + numero1 + " goles en esa final, River le ganó la Super Copa Argentina en Mendoza ese mismo año.";
// alert(goles)



// let nombre = prompt("Escribe tu nombre");
// let apellido = prompt("Escribe tu apellido");
// let edad = Number(prompt("¿Cuántos años tienes?"));
// let respuesta = prompt("Muchas gracias por contactarte con nosotros: " + nombre + " " + apellido + ". Tienes " + edad + " años y te vez genial. Seguí así!");
// alert(respuesta)



// const ciudad1 = "San Rafael, ";
// const ciudad2 = "Godoy Cruz, ";
// const ciudad3 = "Guaymallén, ";
// const ciudad4 = "Mar del Pata, ";
// const ciudad5 = "Playa del Carmen.";
// const ciudades= ("Ciudades en donde eh vivido: " + ciudad1 + ciudad2 + ciudad3 + ciudad4 + ciudad5 + " Todas muy lindas.");
// congole.log(ciudades);



// let nombreCompleto = "Andrés Julián Derin.";
// let fechaNacimiento = "5/3/1992.";
// let dni = "35.623.249.";
// let domicilio = "Sardi Este 620.";
// let nombreCiudad = "El Cerrito, San Rafael, Mendoza.";
// let pais = "Argentina."
// let infoCarnet = ("Tus datos personales son= Nombre completo: " + nombreCompleto + " Fecha de nacimiento: " + fechaNacimiento + " DNI: " + dni + " Tu domicilio es: " + domicilio + " Tu ciudad actual es: " + nombreCiudad + " País de recidencia: " + pais);
// console.log(infoCarnet);



// let numero1 = prompt("¿Cuántos años tienes?")
// if (numero1 == 100) {
//           alert("Estás bien.");
// }else{
//           alert("Estas viejo.");}



// let nombre2 = prompt("Escribe tu nombre: 👇");

// if (nombre2 == "Pedro") {
//           alert("Sos un chipuleke!");
// } else {
//           alert("Sos una vieja peluda!");
// }



// let nombre = prompt("Escribe tu nombre de usuario");
// if (nombre == " ") {
//           alert("No escribiste un nombre de usuario");
// } else {
// let usuario = ("El nombre de usuario que agregaste es: " + nombre + ".");
//           alert(usuario);
// }



// let precio = 10;
// if (precio < 50) {
// alert("El precio es menor a 50")
// }
// else if (precio > 50) {
// alert("El precio es mayor a 50")
// }


// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido")
// if ((nombreIngresado != " ") && (apellidoIngresado != " ")) {
//           alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//           alert("Error ingresar nombre y apellido");
// }


// let nombreIngresado = prompt("Escriba un nombre");
// if ((nombreIngresado == "Pedro") || (nombreIngresado == "pedro")) {
//           alert("Tenes pinta de ser cuervo.")
// } else {
//           alert("Menos mal que no sos cuervo, como Pedro.")
// }



// let nombreIngresado = prompt("Escribi tu nombre");
// if ((nombreIngresado !="") && ((nombreIngresado == "ANDRES") || (nombreIngresado == "andres"))) {
//           alert("Hola Andres");
// } else {
//           alert("Error: Ingresar nombre de nuevo");
// }



// let numeroIngresado= Number(prompt("Ingrese un número"));
// if ((numeroIngresado > 1000) || (numeroIngresado == 1000 )) {
// alert("El número ingresado es mayor o igual a 1000.");
// }
// else if (numeroIngresado < 1000); {
// alert("El número ingresado es menor a 1000.");
// }



// let numeroIngresado = Number(prompt("Ingrese un numero"));
// if ((numeroIngresado < 50) && (numeroIngresado > 10)) {
// alert("El numero ingresado está entre 10 y 50.");
// }
// else { ((numeroIngresado > 50 ) && (numeroIngresado < 10));
// alert ("El numero ingresado es menor a 10 o mayor a 50.")
// }


// for (let i = 1; i <= 10; i++ ) {
// alert(i);
// }


// tabla de multiplicar //
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// for (let i = 1; i <= 10; i++ ) {
// let resultado = ingresarNumero * i ;
// alert (ingresarNumero + " x " + i + " = " + resultado);
// }


// turnos con nombre del 1 al 20
// for (let i = 1; i <= 20; i++) {
//           let ingresarNombre = prompt("Ingresar nombre");
//           alert("Turno N°: " + i + " Nombre: " + ingresarNombre);
// }



// for (let i = 1; i <= 10; i++ ) {
// if (i == 8) {
//           continue;
// }
// alert(i);
// }


// let entrada = prompt('Ingrese un dato. (Finaliza escribiendo "esc")').toUpperCase();
// while (entrada != 'esc') {
//           alert ("El usuario ingredo: " + entrada);
//           entrada = prompt('Ingrese otro dato');
// }


// decremento de 10 a 1, sin mostrar el número 0 //
// for (let i = 10; i > 0; i--) {
//           alert(i);
// }


// tipo conteo de tantos en tenis //
// for (let i = 0; i => 45; i+=15) {
//           alert(i);
//           if (i === 45) {
//           break }
// }



// validación correo electrónico //
// let askAgain = true;
// do {
// let userEmail = prompt('Ingrese su correo:');
// let confirmUserEmail = prompt('Confirme su correo:');
// if (userEmail === confirmUserEmail) {
//           alert('El correo ' + userEmail + ' ha sido guardado con éxito.');
//           askAgain = false;
// } else {
//           alert('Los correos deben de ser iguales.');
// }
// } while (askAgain)



// switch
// let entrada = prompt('Ingresa un nombre').toLocaleUpperCase();
// while (entrada != 'ESC') {
//           switch (entrada) {
//                     case 'PEDRO':
//                               alert('Hola Pedro!');
//                     break;
//                     case 'ANDRES':
//                               alert('Hola Andy!');
//                     default:
//                     alert('¿Quién sos?');
//                     break;
//           }
//           entrada = prompt('Ingrese su nombre').toLocaleUpperCase();
// }




//Ingresar nombre y apellido de un alumno.
//Ingresar las notas de los diferentes exámenes de una materia dada.
//Ingresar la cantidad de ausentes que tuvo el alumno.
//Ingresar las diferentes notas del alumno.
//Devolver, por alerta, un texto con el nombre completo del alumno, el promedio de notas, si está aprobado o no y su calificación.
//Condiciones para aprobar:
// 1 - No tener más de 3 ausentes.
// 2 - Tener, como mínimo, un promedio de 6.
// Calificación (promedio):
// 0 - 3: Insuficiente -> Va a recuperatorio
// 3 - 5: Bajo -> Va a recuperatorio
// 5 - 6: Regular -> Pasa a resolver un problema en el pizarrón
// 6 - 8: Bueno -> Aprobó el cuatrimeste, le queda aprobar el exámen final.
// 8 - 10: Muy bueno -> Promovió la materia. No rinde exámen final.
// 10: Excelente -> Promovió la materia. No rinde exámen final.



// let nombreIngresado = prompt('Ingrese su nombre.');
// let apellidoIngresado = prompt('Ingrese su apellido.');
// let nombreCompleto = (nombreIngresado + " " + apellidoIngresado);
// let ausentes = parseInt(prompt('Ingrese los ausentes que tuvo en la cursada de Matemática.'));
// while (isNaN(ausentes) || ausentes > 3) {
//           ausentes = parseInt(prompt('Ingrese los ausentes que tuvo en la cursada de Matemática.'));
// }
// let notaTotal = 0;
// let cantidadNotas = 0;








//                     let equipoFavorito = '';
//                 let formacionIdeal = 0;
//                 let equipoIdeal = true;
//                 let jugadores = [];

//                 do {
//                     equipoFavorito = prompt('Escriba el nombre de su equipo favorito.');
//                     formacionIdeal = parseInt(prompt('Ingrese su formacion ideal.', 'Ej: 442, 433, 352, etc..'));
//                     while (isNaN(formacionIdeal) || formacionIdeal < 0) {
//                         formacionIdeal = parseInt(prompt('Ingrese su formacion ideal.', 'Ej: 442, 433, 352, etc..'));
//                     }

//                     for (let i = 0; i < 11; i++) {

//                         jugadores[i] = prompt('Ingresar el nombre de su jugador número ' + (i + 1));

//                     }

//                     equipoIdeal = confirm('¿Estás seguro que éste es tu equipo ideal?');

//                 } while (!equipoIdeal)

//                 alert(`
// Su equipo favorito es: ${equipoFavorito}.
// Su formacion ideal es: ${formacionIdeal}.
// Su 11 ideal es:
// N°1 ${jugadores[0]}.
// N°2 ${jugadores[1]}.
// N°3 ${jugadores[2]}.
// N°4 ${jugadores[3]}.
// N°5 ${jugadores[4]}.
// N°6 ${jugadores[5]}.
// N°7 ${jugadores[6]}.
// N°8 ${jugadores[7]}.
// N°9 ${jugadores[8]}.
// N°10 ${jugadores[9]}.
// N°11 ${jugadores[10]}.
// `)

//                 let finalizarEncuesta = confirm('¿Desea terminar con esta encuesta?');

//                 if (finalizarEncuesta) alert('Gracias por participar en esta encuesta.');


// Calculadora
// function calculadora(primerNumero, segundoNumero, operacion) {
//           switch (operacion) {
//                case '+':
//                     return primerNumero + segundoNumero;
//                     break;
//                case '-':
//                     return primerNumero - segundoNumero;
//                     break;
//                case '*':
//                     return primerNumero * segundoNumero;
//                     break;
//                case '/':
//                     return primerNumero / segundoNumero;
//                     break;
//                default:
//                     return 0;
//                     break;
//           }
// }
// console.log(calculadora(50,2,'/'));


// Función Calculadora
// function calculadora(primerNumero, segundoNumero, operacion) {
//           switch (operacion) {
//                     case '+':
//                               return primerNumero + segundoNumero;
//                     case '-':
//                               return primerNumero - segundoNumero;
//                     case '*':
//                               return primerNumero * segundoNumero;
//                     case '/':
//                               return primerNumero / segundoNumero;
//                     default:
//                               return 0;
//           }
// }


// let numero1 = parseInt(prompt('Ingrese el primer número:'));
// let numero2 = parseInt(prompt('Ingrese el segundo número:'));
// let operacion = prompt('Ingrese la operación a realizar:', 'EJ: "+", "-", "*", "/".');


// let resultado = calculadora(numero1, numero2, operacion);
// alert(resultado);






// 1er Desafío obligatorio (PRUEBA )- Simulador interactivo //

// function saludar() {
//           alert("Hola bienvenido a Guilbas Urban Wear");
// }
// saludar();

// const comprarProductos = () => {
//           let productoVerano = 0;
//           let productoInvierno = 0;
//           let cantidad = 0;
//           let precioProducto = 0;
//           let precioCompra = 0;
//           let seguirComprando = false;

//           do {
//                     let estacion = 0;
//                     do {
//                               estacion = parseInt(prompt('Seleccione la estación de la indumentaria que desee comprar:\n1) Verano;\n2) Invierno.'));
//                     } while (estacion != 1 && estacion != 2)
//                     if (estacion === 1) {
//                               do {
//                                         productoVerano = parseInt(prompt('Seleccione que indumentaria de verano desea comprar:\n1) Remera $2.500;\n2) Musculosa $2000;\n3) Bermuda $4.000.'));
//                               } while (productoVerano != 1 && productoVerano != 2 && productoVerano != 3);
//                               switch (productoVerano) {
//                                         case 1:
//                                                   precioProducto = 2500;
//                                                   break;
//                                         case 2:
//                                                   precioProducto = 2000;
//                                                   break;
//                                         case 3:
//                                                   precioProducto = 4000;
//                                                   break;
//                               }
//                     } else if (estacion === 2) {
//                               do {
//                                         productoInvierno = parseInt(prompt('Seleccione que indumentaria desea comprar:\n4) Campera de abrigo $15.000;\n5) Buzo de Polar $8.000;\n6) Jogging de Friza $5.500'));
//                               } while (productoInvierno != 4 && productoInvierno != 5 && productoInvierno != 6);
//                               switch (productoInvierno) {
//                                         case 4:
//                                                   precioProducto = 15000;
//                                                   break;
//                                         case 5:
//                                                   precioProducto = 8000;
//                                                   break;
//                                         case 6:
//                                                   precioProducto = 5500;
//                                                   break;
//                               }
//                     }
//                     cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//                     while (isNaN(cantidad)) {
//                               cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//                     }
//                     precioCompra += precioProducto * cantidad;
//                     seguirComprando = confirm("¿Querés agregar otra prenda?");
//           } while (seguirComprando)
//           return precioCompra;
// }

// const calcularEnvio = (precioCompra) => {
//           let envio = confirm('¿Querés envío a domicilio? (Gratis superando los $20.000 en tu compra, si no, costo adicional $500 en ciudad o alrededores.');
//           if (envio && precioCompra >= 20000) {
//                     alert('Tenes envío gratis a tu domicilio. El precio total de tu compra es de: $' + precioCompra + '.');
//           }
//           else if (envio && precioCompra < 20000 && precioCompra != 0) {
//                     alert('El envío hasta tu domicilio cuesta $500. El precio total de tu compra es de: $' + (precioCompra + 500) + '.');
//           } else {
//                     alert('El precio total de tu compra es de: $' + precioCompra + '.');
//           }
//           return precioCompra;
// }

// calcularEnvio(comprarProductos());

// alert('Desde Guilbas Urban Wear agradecemos tu compra, te esperamos pronto!');



// ejercicio de un compañero de la cursada - FUNCIONANDO

// let abonar = 0;

//         abonar = parseInt(prompt('Con cuanto dinero abona?'));
//  while (isNaN(abonar));
//             abonar = parseInt(prompt('Con cuanto dinero abona?'));
//           if (abonar < precioJuego){
//         alert('El abono es insuficiente');
//  }









// ejercicio de un compañero de la cursada - FUNCIONANDO
// let abonar = 0;
// let precioJuego = 500;
// let seguirComprando = false;
// do {
//           abonar = parseInt(prompt('¿Con cuanto dinero abona?'));

//           while (isNaN(abonar)) {
//                     abonar = parseInt(prompt('¿Con cuanto dinero abona?'));
//           } if (abonar < precioJuego) {
//                     alert('El abono es insuficiente');
//           } else if (abonar > precioJuego) {
//                     alert('Su vuelto es $' + (abonar - precioJuego));
//                     break;
//           } else if (abonar === precioJuego) {
//                     alert('Has abonado el precio justo de la compra');
//                     break;
//           }
//           seguirComprando = abonar;
// } while (seguirComprando);







// Ejemplo ejercicio Laica de Bel - FUNCIONANDO //

// function saludar() {
//           alert('Hola! Bienvenid@ a Laica')
// }
// saludar ();

// let cantidad = 0;
// let precioTotal = 0;
// let cantidadPrendas = 0;
// function comprarProductos () {
//           let precioArticulo = 0;
//           let seguirComprando = false;

//       do {
//           let articulo = 0;
//           do {
//           articulo = parseInt(prompt('¿Qué atuendo querés comprar?\nSeleccioná un número \n1~Vestido ($700)\n2~Remera ($500)\n3~Pollera ($400)\n4~Pantalón ($800)'));
//               }while (articulo != 1 && articulo != 2 && articulo != 3 && articulo != 4)
//                 switch (articulo) {
//                           case 1:
//                                     precioArticulo = 700;
//                           break;
//                           case 2:
//                                     precioArticulo = 500;
//                           break;
//                           case 3:
//                                     precioArticulo = 400;
//                           break;
//                           case 4:
//                                     precioArticulo = 800;
//                     }

//                 cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//                 while (Number.isNaN(cantidad)) {
//                           cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//           }
//       precioTotal += precioArticulo * cantidad;
//       cantidadPrendas += cantidad;
//       seguirComprando = confirm("¿Querés agregar otra prenda?");
//       } while (seguirComprando)
//       return precioTotal;
// }

// let cintura = 0;
// let pecho = 0;
// let piernas = 0;

// function medidasCuerpo () {
// let seguirMidiendo = false;

//           do {
//                     alert('En Laica hacemos las prendas a tu medida!\nAgarrá un centímetro y respondé tus medidas.');
//                     do {
//                               cintura = parseInt(prompt('Describa las medidas de su cintura:'));
//                     } while (isNaN(cintura))
//                     do {
//                               pecho = parseInt(prompt('Describa las medidas de su pecho:'));
//                     } while (isNaN(pecho))
//                     do {
//                               piernas = parseInt(prompt('Describa las medidas de sus piernas:'));
//                     } while (isNaN(piernas))

//                     seguirMidiendo = confirm('¿Estas segur@ de que esas son tus medidas?');
//           } while (!seguirMidiendo)
// }


// function chau(cantidadPrendas,cintura,piernas,pecho,precioTotal) {
//           alert('Has comprado ' + cantidadPrendas + ' atuendos de Laica. Tus medidas son: Cintura: ' + cintura + ' Pecho: ' + pecho + '. Piernas: ' + piernas + '. Tu compra fue de: $' + precioTotal + '.');
// }
// function hastaPronto() {
//           alert('Agradecemos tu compra en Laica, l@s esperamos pronto!');
// }

// comprarProductos();
// medidasCuerpo();
// chau(cantidadPrendas,cintura,pecho,piernas,precioTotal);
// hastaPronto();













// EJERCICIO DE UN COMPAÑERO - AUN HAY QUE ARREGLARLO

// voy a realizar un simulador de nota final para un alumno de secundaria:
// let alumno = '';
// let nota1 = 0;
// let nota2 = 0;
// let nota3 = 0;
// let promedio = 0;

// function saludar() {
//           alert(
//                     'Este es un simulador de promedios, a continuación podra escribir el nombre del alumno y sus notas de los tres trimestres.')
// }

//           const solicitarNombre = () => {
//                     do {
//                     alumno = prompt("Ingese el nombre del alumno:");
//                     } while (alumno === '' && alumno === isNaN)
//                               alert('El nombre del alumno es: ' + alumno);
//                     return alumno;
//           }

//           const solicitarNotas = () => {
//                     do {
//                               nota1 = parseInt(prompt("Primer trimestre:"));
//                               nota2 = parseInt(prompt("Segundo trimestre:"));
//                               nota3 = parseInt(prompt("Tercer trimestre:"));
//                               break;
//                     } while (nota1, nota2, nota3 != 0, "");
//                     promedio = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(2);
//                     alert("El promedio de " + alumno + " ha sido de " + promedio);
//                     return alumno;
//           }

//           let otroPromedio = 0;
//           const solicitarPromedio = () => {
//                     do {
//                               otroPromedio = prompt("¿Desea calcular otro promedio?\n1) Si;\n2) No.");
//                     } while (otroPromedio != 1 && otroPromedio != 2)
//                     if (otroPromedio === 1) {
//                               solicitarNombre();
//                               solicitarNotas();
//                     } else if (otroPromedio === 2) {
//                               alert("Los promedios solicitados fueron calcualdos correctamente, Gracias por usar nuestro simulador!");
//                     }
//           }
//           saludar ();

//           solicitarPromedio(solicitarNotas(solicitarNombre()));












// Desafío obligatorio - Simulador interactivo //


// function saludar() {
//           alert("Hola bienvenido a Guilbas Urban Wear");
//       }
//       saludar ();

//       const comprarProductos = () => {
//       let productoVerano = 0;
//       let productoInvierno = 0;
//       let cantidad = 0;
//       let precioProducto = 0;
//       let precioCompra= 0;
//       let seguirComprando = false;

//       do {
//           let estacion = 0;
//           do {
//           estacion = parseInt(prompt('Seleccione la estación de la indumentaria que desee comprar:\n1) Verano;\n2) Invierno.'));
//               }while (estacion != 1 && estacion != 2)
//                 if (estacion === 1) {
//                   do {
//                   productoVerano = parseInt(prompt('Seleccione que indumentaria de verano desea comprar:\n1) Remera $2.500;\n2) Musculosa $2000;\n3) Bermuda $4.000.'));
//                   } while (productoVerano != 1 && productoVerano != 2 && productoVerano != 3);
//                 switch (productoVerano) {
//                           case 1:
//                                     precioProducto = 2500;
//                           break;
//                           case 2:
//                                     precioProducto = 2000;
//                           break;
//                           case 3:
//                                     precioProducto = 4000;
//                           break;
//                       }
//               } else if (estacion === 2) {
//                   do {
//                       productoInvierno = parseInt(prompt('Seleccione que indumentaria desea comprar:\n1) Campera de abrigo $15.000;\n2) Buzo de Polar $8.000;\n3) Jogging de Friza $5.500'));
//                   }while (productoInvierno != 1 && productoInvierno != 2 && productoInvierno != 3);
//                   switch (productoInvierno) {
//                           case 1:
//                               precioProducto = 15000;
//                               break;
//                           case 2:
//                               precioProducto = 8000;
//                               break;
//                           case 3:
//                               precioProducto = 5500;
//                               break;
//                           }
//                 }
//                 cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//                 while (isNaN(cantidad)) {
//                           cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//                 }
//       precioCompra += precioProducto * cantidad;
//       seguirComprando = confirm("¿Querés agregar otra prenda?");
//       } while (seguirComprando)
//       return precioCompra;
//       }

//       let pago = 0;
//       let tarjeta = 0;
//       let descuento = 0;
//       let precioFinal =0;
//       const formaDePago = (precioCompra) => {
//           do {
//           pago = parseInt(prompt('Seleccione la forma de pago que desee:\n1) Efectivo (Descuento del 10% en compra superior o igual a $30.000.);\n2) Tarjeta (3 o 6 cuotas sin interés).'));
//               } while (pago != 1 && pago != 2);
//               if (pago === 2) {
//                     do {
//                     tarjeta = parseInt(prompt('Seleccione la opción según correponda a su prefeencia de cuotas a pagar:\n1) 3 cuotas sin interés;\n2) 6 cuotas sin interés.'));
//                      } while (tarjeta != 1 && tarjeta != 2);
//                      if (tarjeta === 1) {
//                               (alert('Su compra se realizó en 3 cuotas sin interés de $' + (precioCompra / 3).toFixed(2) + '.'));
//                      } else {
//                               (alert('Su compra se realizó en 6 cuotas sin interés de $' + (precioCompra / 6).toFixed(2) + '.'));
//                      }
//                      return precioCompra;
//               } else if (pago === 1 && precioCompra >= 30000) {
//                 descuento = precioCompra*0.10;
//                 precioFinal= (precioCompra - descuento);
//                     alert('Por su compra en efectivo de más de $30000, su descuento es de: $' + descuento + '. La compra se realizó en $' + precioFinal + '.');
//                     return precioFinal;
//               } else if (pago === 1 && precioCompra < 30000) {
//                     return precioCompra;
//               }
//       }

//       let envio = 0;
//       const calcularEnvio = (precioCompra, precioFinal) => {
//           do {
//           envio = parseInt(prompt('¿Querés envío a domicilio? (costo adicional $500 en ciudad o alrededores).\n1) Si;\n2) No.'));
//           }
//                 while (envio != 1 && envio != 2);
//                 if (envio === 1 && precioCompra >= 30000){
//                     return precioFinal;
//                           alert('El precio total de tu compra + el envío es de: $' + (precioFinal + 500) + '.');
//                 } else if (envio === 1){
//                     alert('El precio total de tu compra + el envío es de: $' + (precioCompra + 500) + '.');
//                 } else if (envio === 2 && precioCompra >=30000) {
//                         alert('El precio total de tu compra es de: $' + precioFinal + '.');
//                         return precioFinal;
//                 } else if (envio === 2) {
//                 alert('El precio total de tu compra es de: $' + precioCompra + '.');
//                 }
//       return precioCompra;
//       }

//       calcularEnvio(formaDePago(comprarProductos()));
//       alert('Desde Guilbas Urban Wear agradecemos tu compra, te esperamos pronto!');









//           function saludar() {
//           alert("Hola bienvenido a Guilbas Urban Wear");
//           }
//           saludar();

//           class Pedidos {
//           constructor(producto, precio, cantidad) {
//               this.producto = producto;
//               this.producto = producto;
//               this.precio = precio;
//               this.cantidad = cantidad;
//               this.envio;
//               this.subtotal;
//               this.total;
//           }
//           calcularSubTotal() {
//               this.subtotal = this.precio * this.cantidad;
//           }
//           calcularIva() {
//               return this.subtotal * 0.21;
//           }
//           calcularEnvio() {
//               if (this.subTotal >= 30000) {
//                   this.envio = 0;
//               } else {
//                   this.envio = 5000;
//               }
//           }
//           calcularTotal() {
//               this.total = this.subTotal + this.envio + this.calcularIva();
//           }
//       }

//       function comprarProductos () {
//           let productoVerano = 0;
//           let productoInvierno = 0;
//           let cantidadProducto = 0;
//           let precioProducto = 0;
//           // let precioCompra = 0;
//           let seguirComprando = false;

//           do {
//               let estacion = 0;
//               do {
//                   estacion = parseInt(prompt('Seleccione la estación de la indumentaria que desee comprar:\n1) Verano;\n2) Invierno.'));
//               } while (estacion != 1 && estacion != 2)
//               if (estacion === 1) {
//                   do {
//                       productoVerano = parseInt(prompt('Seleccione que indumentaria de verano desea comprar:\n1) Remera $2.500;\n2) Musculosa $2000;\n3) Bermuda $4.000.'));
//                   } while (productoVerano != 1 && productoVerano != 2 && productoVerano != 3);
//                   if (productoVerano === 1) {
//                       precioProducto = 2500;
//                   } else if (productoVerano === 2) {
//                       precioProducto = 2000;
//                   } else if (productoVerano === 3) {
//                       precioProducto = 4000;
//                   }
//               } else if (estacion === 2) {
//                   do {
//                       productoInvierno = parseInt(prompt('Seleccione que indumentaria desea comprar:\n1) Campera de abrigo $15.000;\n2) Buzo de Polar $8.000;\n3) Jogging de Friza $5.500'));
//                   } while (productoInvierno != 1 && productoInvierno != 2 && productoInvierno != 3);
//                   if (productoInvierno === 1) {
//                       precioProducto = 15000;
//                   } else if (productoInvierno === 2) {
//                       precioProducto = 8000;
//                   } else if (productoInvierno === 3) {
//                       precioProducto = 5500;
//                   }
//               }
//               cantidadProducto = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//               while (isNaN(cantidadProducto)) {
//                   cantidadProducto = parseInt(prompt('¿Cuántas prendas desea comprar?'));
//               }
//               seguirComprando = confirm("¿Querés agregar otra prenda?");
//           } while (seguirComprando)

//           const compra = new Pedidos(producto, precio, cantidad)
//           return compra;
//       }

//       const pedidos = comprarProductos();
//       console.log(pedidos);

//       // Actualizamos los valores con los métodos de la clase Pedidos
//       pedidos.calcularSubTotal();
//       pedidos.calcularEnvio();
//       pedidos.calcularTotal();

//       // Muestro por medio de alert() el detalle de la compra con los valores actualizados
//       alert("Detalle del pedido:\n\n" +
//           "- " + pedidos.productoVerano + pedidos.productoInvierno + " x " + pedidos.cantidadProducto + ": $" + pedidos.precio * pedidos.cantidadProducto + "\n" +
//           "- IVA 21%: $" + pedidos.calcularIva() + "\n" +
//           "- Costo de envío: $" + pedidos.envio + "\n\n" +
//           "Total = $" + pedidos.total
//       );




// nueva sintaxis class ES6
// class Productos {
//           constructor(nombre, precio) {
//                     this.nombre = nombre;
//                     this.precio = precio;
//           }
//                     saludo(){
//                               console.log('Has comprado una: ' + this.nombre + '.');
//                     };

// };
// const productoVer1 = new Productos('Remera', 2500);
// productoVer1.saludo();



// OPERADOR ... IN
// const persona = {
//           nombre: 'Andrés',
//           edad: 30,
//           calle: 'Sardi Este 620',
// }
// console.log ('calle' in persona);


// OPERADOR FOR ... IN
// for (const detalles in persona ) {
// console.log(detalles)
//           console.log(persona[detalles])
// }





// const productoVer1 = new Productos('Remera', 2500);
// const productoVer2 = new Productos('Musculosa', 2000);
// const productoVer3 = new Productos('Bermuda', 4000);
// const productoInv1 = new Productos('Campera de abrigo', 15000);
// const productoInv2 = new Productos('Buzo de polar', 8000);
// const productoInv3 = new Productos('Jogging de frisa', 5500);

// console.log(productoVer1)
// console.log(productoVer2)
// console.log(productoVer3)
// console.log(productoInv1)
// console.log(productoInv2)
// console.log(productoInv3)




// CLASES Y MÉTODOS
// Eejemplo del profe modificado a mi simulador "Guilbas Urban Wear" - (Pero no como yo quiero) //

// class Pedido {
//           constructor(producto, precio, cantidad) {
//                     this.producto = producto,
//                               this.precio = precio,
//                               this.cantidad = cantidad,
//                               this.envio = 0,
//                               this.subTotal = 0,
//                               this.total = 0
//           }
//           calcularSubTotal() {
//                     this.subTotal = this.precio * this.cantidad;
//           }
//           calcularIva() {
//                     return this.subTotal * 1.21;
//           }
//           calcularEnvio() {
//                     if (this.subTotal >= 30000) {
//                               this.envio = 0;
//                     } else {
//                               this.envio = 5000;
//                     }
//           }
//           calcularTotal() {
//                     this.total = this.subTotal + this.envio + this.calcularIva();
//           }
// }


// function comprarProducto() {
//           let producto = 0;
//           let cantidadProducto = 0;
//           let precio = 0;

//           while (!producto || producto == 0 || producto > 4) {
//                     producto = parseInt(prompt("¿Qué producto desea comprar?:\n1) Remera($2000)\n2) Musculosa($2000)\n3) Bermuda($4000)\n4) Campera de abrigo ($15000)\n5) Buzo de polar ($8000)\n6) Jogging de frisa ($5500)"));
//           }
//           switch (producto) {
//                     case 1:
//                               producto = "Remera";
//                               precio = 2500;
//                               break;
//                     case 2:
//                               producto = "Musculosa";
//                               precio = 2000;
//                               break;
//                     case 3:
//                               producto = "Bermuda";
//                               precio = 4000;
//                               break;
//                     case 4:
//                               producto = "Campera de abrigo";
//                               precio = 15000;
//                               break;
//                     case 5:
//                               producto = "Buzo de polar";
//                               precio = 8000;
//                               break;
//                     case 6:
//                               producto = "Jogging de frisa";
//                               precio = 5500;
//                               break;
//           }

//           while (!cantidadProducto || cantidadProducto == 0) {
//                     cantidadProducto = parseInt(prompt("Producto elegido: " + producto + "\n Introduzca la cantidad deseada.(sólo números)"));
//           }

//           const compra = new Pedido(producto, precio, cantidadProducto);

//           return compra;
// }

// alert("Bienvenida/o a la tienda");

// const pedido = comprarProducto();
// console.log(pedido);

// // Actualizamos los valores con los métodos de la clase Pedido
// pedido.calcularSubTotal();
// pedido.calcularEnvio();
// pedido.calcularTotal();

// // Muestro por medio de alert() el detalle de la compra con los valores actualizados
// alert("Detalle del pedido:\n\n" +
//           "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad + "\n" +
//           "- IVA 21%: $" + pedido.calcularIva() + "\n" +
//           "- Costo de envío: $" + pedido.envio + "\n\n" +
//           "Total = $" + pedido.total
// );






// push () --> AGREGAR ELEMENTOS "AL FINAL" DE UN ARRAY

// const miArray = ['marca', 4, 'palabra'];
// let otroValor = prompt('Agregue un dato:');
// miArray.push(otroValor);
// console.log(miArray);





//unshift () --> AGREGAR ELEMENTOS "AL INICIO" DE UN ARRAY

// const miArray = ['marca', 4, 'palabra'];
// let otroValor = prompt('Agregue un dato:');
// miArray.unshift(otroValor);
// console.log(miArray);




// pop () --> ELIMINA "EL ÚLTIMO" ELEMTO DE UN ARRAY

// const miArray = ['marca', 4, 'palabra','TYSON'];
// miArray.pop();
// console.log(miArray);





// shift () --> ELIMINA "EL PRIMER" ELEMENTO DE UN ARRAY

// const miArray = ['marca', 4, 'palabra', 'tyson'];
// miArray.shift();
// console.log(miArray);





// splice () -->  PERMITE ELIMINAR 1 O MÁS ELEMENTOS DE UN ARRAY

// const miArray = ['marca', 4, 'palabra', 456];
// miArray.splice (2,1);
// console.log(miArray);
// 'marca','4','456' //



// join () --> PERMITE GENERAR UN STRING CON TODOS LOS ELEMENTOS DEL ARRAY

// const nombres= ['juan', 'jose', 'felipe', 'patricio'];
// console.log (nombres.join(' # '))






// concat () --> COMBINA DOS ARRAY EN UN ÚNICO ARRAY

// const perros = ['pupi', 'pepe']
// const gatos = ['lala', 'lyla', 'lolito']
// const mascotas = perros.concat(gatos)
// console.log(mascotas)






// slice () --> COPIA UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY

// const nombres = ['juana', 'pepe', 'juan', 'rosa', 'maria']
// const masculinos = nombres.slice(1,3);
// console.log(masculinos)





// indexOf () --> NOS PERMITE OBTENER EL ÍNDICE DE UN ELEMENTO EN UN ARRAY.
// SI EL ELEMENTO NO EXISTE NOS RETORNARÁ EL VALOR -1

// const nombres = ['juana', 'pepe', 'juan', 'rosa', 'maria']
// console.log(nombres.indexOf('juana')) // 0
// console.log(nombres.indexOf('andres')) // -1
// console.log(nombres.indexOf('rosa')) // 3





// includes () --> NOS PERMITE SABER SI UN ELEMENTO EXISTE O NO DENTRO DE UN ARRAY

// const nombres = ['juana', 'pepe', 'juan', 'rosa', 'maria']
// console.log(nombres.includes('juana')) // TRUE
// console.log(nombres.includes('andres')) // FALSE
// console.log(nombres.includes('rosa')) // TRUE





// reverse () --> ORDENA EL ARRAY EN EL ORDEN CONTRARIO

// const nombres = ['juana', 'pepe', 'juan', 'rosa', 'maria']
// nombres.reverse();
// console.log(nombres);






// for of --> PERMITE RECORRER UN ARRAY

// const productos = [ {id: 1, producto: 'Arroz'},
//                     {id: 2, producto: 'Fideos'},
//                     {id: 3, producto: 'Pan'}];

// for (const producto of productos) {
//           console.log(producto.id);
//           console.log(producto.producto);
// }





// ARRAY DE OBJETOS

// const productos = {id: 1, producto: 'Remera'};
// const array = [productos, {id: 2, producto: 'Musculosa'}];
// array.push({id: 3, producto: 'Bermuda'});
// console.log(array);







// EJEMPLO APLICADO: OBJETOS, PRODUCTO Y ARRAY

// class Producto {
//           constructor(nombre,precio) {
//                     this.nombre = nombre;
//                     this.precio = Number(precio);
//                     this.vendido = false;
//           }
//           sumarIva() {
//                     this.precio = this.precio * 1.21;
//           }
//           vender() {
//                     this.vendido = true;
//           }
// }

// const productos = [];

// const producto1 = new Producto('Remera', 2500);
// const producto2 = new Producto('Musculosa', 2000);

// productos.push(producto1, producto2);

// // console.log(productos);

// for (const producto of productos) {
//           producto.sumarIva();
//           producto.vender();
// }
// console.log(productos)







// EJEMPLO PARA EL DESAFÍO COMPLEMENTARIO DE INCORPORAR ARRAYS - ¡¡¡FUNCIONANDO!!!

// function saludar() {
//           alert('Hola bienvenido a Guilbas Urban Wear.')
//       }
//       saludar();
      
//       class Productos {
//           constructor(id, estacion, nombre, precio) {
//                     this.id = id,
//                               this.estacion = estacion,
//                               this.nombre = nombre,
//                               this.precio = precio,
//                               this.vendido = false;
//           }
//           vender() {
//                     this.vendido = true;
//           }
//       }
//       function calcularEnvio(subTotal) {
//           if (subTotal >= 30000) {
//                     return 0;
//           } else {
//                     return 500;
//           }
//       }
//       function calcularTotal(envio, subTotal) {
//           return subTotal + envio;
//       }
      
//       const arrayProductos = [];
//       const producto1 = new Productos(1, 'Verano', 'Remera', 2500);
//       const producto2 = new Productos(2, 'Verano', 'Musculosa', 2000);
//       const producto3 = new Productos(3, 'Verano', 'Bermuda', 4000);
//       const producto4 = new Productos(4, 'Invierno', 'Campera de abrigo', 15000);
//       const producto5 = new Productos(5, 'Invierno', 'Buzo de polar', 8000);
//       const producto6 = new Productos(6, 'Invierno', 'Jogging de friza', 5500);
//       arrayProductos.push(producto1, producto2, producto3, producto4, producto5, producto6);
      
//       function comprarPrendas() {
//           let subTotal = 0;
//           let nombre = '';
//           let estacion = '';
//           let envio = 0;
//           let precio = 0;
//           let productoId = 0;
//           let cantidadProducto = 0;
//           let total = 0;
      
//           do {
//                     productoId = parseInt(prompt('Seleccione que indumentaria desea comprar:\nIndumentaria de verano:\n1- Remera ($2.500);\n2- Musculosa ($2.000);\n3- Bermuda ($4.000).\nIndumentaria de invierno:\n4- Campera de abrigo ($15.000)\n5- Buzo de polar ($8.000)\n6- Jogging de friza ($5.500).\nCosto de envío $500. Superando los $30.000, gratis.'));
//           } while (productoId != 1 && productoId != 2 && productoId != 3 && productoId != 4 && productoId != 5 && productoId != 6);
//           if (productoId === 1) {
//                     nombre = producto1.nombre;
//                     precio = producto1.precio;
//                     estacion = producto1.estacion;
//                     producto1.vender();
//           } else if (productoId === 2) {
//                     nombre = producto2.nombre;
//                     precio = producto2.precio;
//                     estacion = producto2.estacion;
//                     producto2.vender();
//           } else if (productoId === 3) {
//                     nombre = producto3.nombre;
//                     precio = producto3.precio;
//                     estacion = producto3.estacion;
//                     producto3.vender();
//           } else if (productoId === 4) {
//                     nombre = producto4.nombre;
//                     precio = producto4.precio;
//                     estacion = producto4.estacion;
//                     producto4.vender();
//           } else if (productoId === 5) {
//                     nombre = producto5.nombre;
//                     precio = producto5.precio;
//                     estacion = producto5.estacion;
//                     producto5.vender();
//           } else if (productoId === 6) {
//                     nombre = producto6.nombre;
//                     precio = producto6.precio;
//                     estacion = producto6.estacion;
//                     producto6.vender();
//           }
      
//           do {
//               cantidadProducto = parseInt(prompt('Producto elegido: ' + nombre + '.\nIntroduzca la cantidad deseada (sólo números).'));
//           } while (isNaN(cantidadProducto));
      
//           subTotal = precio * cantidadProducto;
//           envio = calcularEnvio(subTotal);
//           total = calcularTotal(envio, subTotal);
      
//           alert('Detalle de la compra en "Guilbas Urban Wear":\n- Indumentaria de estación: ' + estacion + '.\n- Producto: ' + nombre + '.\n- Cantidad de prendas: "' + cantidadProducto + '".\n- Costo del envío: $' + envio + '.\n- Total: $' + total + '.');
//       }
      
      
//       comprarPrendas();
//       console.log(arrayProductos);
      
//           alert('Desde Guilbas Urban Wear agradecemos tu compra, te esperamos pronto!');





// Callback --> Función que llama a otra función, o que recibe por parámetro a otra función.





// FUNCIONES DE ORDEN SUPERIOR


// forEach() --> Ayuda a recorrer cada elemento de un Array

// (Recibe un callback o función anónima como parámetro.)

// const numeros = [1, 2, 3, 4, 5, 6]
// numeros.forEach((num) => {
//     console.log(num)
// })
// ---------------------------------------
// const numeros = [1, 2, 3, 4, 5, 6]
// numeros.forEach (function (num) {
//     console.log(num);
// })
// ---------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];
// cursos.forEach( (curso) =>  {
//     console.log(curso.nombre);
//     console.log(curso.precio);
// } );




// find () --> Recibe una función de comparación por parametro.

// Recorre el array de objetos,y devuelve la primer coincidencia que encuentre si no devuelve undefined.

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === 'Javascript');
// const resultado2 = cursos.find ((el) => el.nombre === 'Desarrollo Web');

// console.log(resultado); // {nombre: 'Javascript', precio: 15000}
// console.log(resultado2); // undefined
// -------------------------------------------------------------------
// const numeros = [1, 2, 3, 4, 5];
// const resultado = numeros.find( numero => numero > 2); // devuelve el 1er numero mayor a 2 = 3
// console.log(resultado);
// -------------------------------------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ];
// const resultado = cursos.find(curso => curso.nombre === 'ReactJS');
// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}





// filter () --> Devuelve todas las coincidencias al igual que "find()", si no hay coincidencias retorna un array vacío.

// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const resultado = cursos.filter((el) => el.nombre.includes('JS'));
// const resultado2 = cursos.filter((el) => el.precio < 14000);

// console.log(resultado); //     {nombre: 'ReactJS', precio: 22000},
//                         //    {nombre: 'AngularJS', precio: 20000},
// console.log(resultado2); // Array vacío
// ------------------------------------------------------------------------
// const numeros = [1, 2, 3, 4, 5, 6];
// const cantidad = numeros.filter( numero => numero > 2);
// console.log(cantidad); // [3, 4, 5, 6]
// ------------------------------------------------------------------------
// const nombres = ['Ana', 'Pepe', 'Jose', 'Juancito', 'Karla'];
// const filtro1 = nombres.filter(nombre => nombre.includes('n'));
// console.log(filtro1); // ['Ana', 'Juancito']
// ------------------------------------------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];
// const resultado = cursos.filter(elementos => elementos.precio < 21000 );
// console.log(resultado); // {nombre: 'Javascript', precio: 18000}
//                         // {nombre: 'AngularJS', precio: 20000}
//                         // {nombre: 'Desarrollo Web', precio: 16000}
// ------------------------------------------------------------------------

// ESTE EJEMPLO PUEDO USAR PARA LA 1ER ENTREGA DEL PROYECTO FINAL

// const indumentaria = [
//     {estacion: 'Verano', nombre: 'Remera', precio: 2500},
//     {estacion: 'Verano', nombre: 'Musculosa', precio: 2000},
//     {estacion: 'Verano', nombre: 'Musculosa', precio: 4000},
//     {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000},
//     {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000},
//     {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500},
// ];
// const resultado1 = indumentaria.filter(precios => precios.precio < 10000 );
// const resultado2 = indumentaria.filter(estaciones => estaciones.estacion === 'Verano');
// console.log(resultado1);// {estacion: 'Verano', nombre: 'Remera', precio: 2500}
//                         // {estacion: 'Verano', nombre: 'Remera', precio: 2500}
//                         // {estacion: 'Verano', nombre: 'Musculosa', precio: 2000}
//                         // {estacion: 'Verano', nombre: 'Musculosa', precio: 4000}
//                         // {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000}
//                         // {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500}

// console.log(resultado2);// {estacion: 'Verano', nombre: 'Remera', precio: 2500}
//                         // {estacion: 'Verano', nombre: 'Remera', precio: 2500}
//                         // {estacion: 'Verano', nombre: 'Musculosa', precio: 2000}
// --------------------------------------------------------------------------------------------


// some() --> Devuelve true o false cuando encuentre un valor

// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];
// console.log(cursos.some(elemento => elemento.nombre === 'AngularJS')); // true
// console.log(cursos.some(elemento => elemento.nombre === 'Angular')); // false




// map() --> Permite obtener un nuevo array pero con una transformación

// const numeros = [1, 2, 3, 4, 5, 6]
// const porDos = numeros.map(numero => numero * 2);
// console.log(porDos); // [2, 4, 6, 8, 10, 12]
// ----------------------------------------------------------------------
// const numeros = [1, 2, 3, 4, 5, 6]
// const masCien = numeros.map(numero => numero + 100);
// console.log(masCien); // [101, 102, 103, 104, 105, 106]
// ----------------------------------------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const descuento = cursos.map( desc => desc.precio * 0.20);

// console.log(descuento); // [3600, 4400, 4000, 3200]
// ----------------------------------------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const materias = cursos.map( curso => curso.nombre);

// console.log(materias); // ['Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web']
// ----------------------------------------------------------------------------------
// const cursos = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const descuento = cursos.map( desc => (desc.precio - (desc.precio * 0.20)));
// const materia = cursos.map(materias =>materias.nombre);

// console.log(descuento); // [14400, 17600, 16000, 12800]
// console.log(materia); // ['Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web']
// ----------------------------------------------------------------------------------
// const carreras = [
//     {nombre: 'Javascript', precio: 18000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 20000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const materias = carreras.map( curso => {
//     return {
//         nombre: curso.nombre,
//         precio: (curso.precio - (curso.precio * 0.20)),
//     }
// });
// console.log(materias);
// -----------------------------------------------------------------------------------



// reduce() --> suma los números que se encuentran dentro de un array (carrito de compras)

// const numeros = [1, 2, 3, 4, 5, 6];
// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total); // 21
// ----------------------------------------------------------------------------------

// EJEMPLO CARRITO DE COMPRAS

//  const carritoDecompras = [
//         {estacion: 'Verano', nombre: 'Remera', precio: 2500, cantidad: 5},
//         {estacion: 'Verano', nombre: 'Musculosa', precio: 2000, cantidad: 2},
//         {estacion: 'Verano', nombre: 'Bermuda', precio: 4000, cantidad: 4},
//         {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000, cantidad: 3},
//         {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000, cantidad: 2},
//         {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500, cantidad: 2},
//  ];

//  const cantidadTotal = carritoDecompras.reduce( (acc, item) => acc + item.cantidad, 0);
//  const precioTotal = carritoDecompras.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);

//  console.log(cantidadTotal, precioTotal);
// -----------------------------------------------------------------------------------------------------

// sort () --> Ordena los número de manera creciente o decreciente
// ordena de mayo a menor / de la A a la Z


// const numeros = [40, 1, 5, 200];
// numeros.sort((a, b) => a - b );
// console.log(numeros); // [1, 5, 40, 200] Ascendente
// ------------------------------------------------------------------------------
// const numeros = [40, 1, 5, 200];
// numeros.sort((a, b) => b - a);
// console.log(numeros); // [200, 40, 5, 1] Descendente
// ----------------------------------------------------------------------
// const carritoDecompras = [
//             {estacion: 'Verano', nombre: 'Remera', precio: 2500, cantidad: 5},
//             {estacion: 'Verano', nombre: 'Musculosa', precio: 2000, cantidad: 2},
//             {estacion: 'Verano', nombre: 'Bermuda', precio: 4000, cantidad: 4},
//             {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000, cantidad: 3},
//             {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000, cantidad: 2},
//             {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500, cantidad: 2},
// ];

// carritoDecompras.sort((a, b) => a.precio - b.precio); // ( menor a mayor)


// console.log(carritoDecompras); // {estacion: 'Verano', nombre: 'Remera', precio: 2500, cantidad: 5}
                                // {estacion: 'Verano', nombre: 'Musculosa', precio: 2000, cantidad: 2}
                                // {estacion: 'Verano', nombre: 'Bermuda', precio: 4000, cantidad: 4}
                                // {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500, cantidad: 2}
                                // {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000, cantidad: 2}
                                // {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000, cantidad: 3}
// --------------------------------------------------------------------------------------------------------------------
// const carritoDecompras = [
//             {estacion: 'Verano', nombre: 'Remera', precio: 2500, cantidad: 5},
//             {estacion: 'Verano', nombre: 'Musculosa', precio: 2000, cantidad: 2},
//             {estacion: 'Verano', nombre: 'Bermuda', precio: 4000, cantidad: 4},
//             {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000, cantidad: 3},
//             {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000, cantidad: 2},
//             {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500, cantidad: 2},
// ];

// carritoDecompras.sort((a, b) => b.precio - a.precio); // ( mayor a menor)

// console.log(carritoDecompras); // {estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 15000, cantidad: 3}
                                    // {estacion: 'Invierno', nombre: 'Buzo de polar', precio: 8000, cantidad: 2}
                                    // {estacion: 'Invierno', nombre: 'Jogging de friza', precio: 5500, cantidad: 2}
                                    // {estacion: 'Verano', nombre: 'Bermuda', precio: 4000, cantidad: 4}
                                    // {estacion: 'Verano', nombre: 'Remera', precio: 2500, cantidad: 5}
                                    // {estacion: 'Verano', nombre: 'Musculosa', precio: 2000, cantidad: 2}
// -----------------------------------------------------------------------------------------------------------------------





// PRIMERA ENTREGA DEL PROYECTO FINAL

// function saludar() {
//     alert('Hola bienvenido a Guilbas Urban Wear.')
// }
// saludar();

// class Productos {
//     constructor(id, estacion, nombre, precio) {
//               this.id = id,
//                         this.estacion = estacion,
//                         this.nombre = nombre,
//                         this.precio = precio,
//                         this.vendido = false;
//     }
//     vender() {
//               this.vendido = true;
//     }
// }
// function calcularEnvio(subTotal) {
//     if (subTotal >= 30000) {
//               return 0;
//     } else {
//               return 500;
//     }
// }

// const arrayProductos = [];
// const producto1 = new Productos(1, 'Verano', 'Remera', 2500);
// const producto2 = new Productos(2, 'Verano', 'Musculosa', 2000);
// const producto3 = new Productos(3, 'Verano', 'Bermuda', 4000);
// const producto4 = new Productos(4, 'Invierno', 'Campera de abrigo', 15000);
// const producto5 = new Productos(5, 'Invierno', 'Buzo de polar', 8000);
// const producto6 = new Productos(6, 'Invierno', 'Jogging de friza', 5500);
// arrayProductos.push(producto1, producto2, producto3, producto4, producto5, producto6);

//     const ordenarMenorMayor = () => {
//     arrayProductos.sort((a,b) => a.precio - b.precio);
//     }

//     const ordenarMayorMenor = () => {
//     arrayProductos.sort((a,b) => b.precio - a.precio);
//     }

//     function filtrarEstacion () {
//               let estacionId = 0;
//               do {
//                         estacionId = parseInt(prompt('Seleccione la estación de la indumentaria que desee comprar:\n1- Verano.\n2- Invierno.'));
//               } while (estacionId !=1 && estacionId !=2);
//               return estacionId;
//     }

//     function consultarOrdenPrecio () {
//               let ordenPrecio = 0;
//               do {
//                         ordenPrecio = parseInt(prompt('Seleccione el orden de precios de los productos:\n1- Mayor a menor.\n2- Menor a mayor.'))
//               } while (ordenPrecio != 1 && ordenPrecio != 2);
//               return ordenPrecio;
//     }

//     function filtrarProductos (estacionId, ordenPrecio) {
//               let productosFiltrados;
//                         if (estacionId === 1) {
//                                   productosFiltrados = arrayProductos.filter(estaciones => estaciones.estacion === 'Verano');
//                         } else if (estacionId === 2) {
//                                   productosFiltrados = arrayProductos.filter(estaciones => estaciones.estacion === 'Invierno');
//                         }

//                         if (ordenPrecio === 1) {
//                                   productosFiltrados.sort((a,b) => b.precio - a.precio);
//                         } else if (ordenPrecio === 2) {
//                                   productosFiltrados.sort((a,b) => a.precio - b.precio);
//                         }
//                         return productosFiltrados;
//     }

//     function seleccionarProducto (productosFiltrados) {
//               let productoId;
//               let productoValido = true;
//               let mensaje = 'Lista de productos de '+productosFiltrados[0].estacion+'.\nIndique el código de la indumentaria que desea comprar:\n(Costo de envío $500. Superando los $30.000, gratis).\n\n';
//               productosFiltrados.forEach( (producto) => {
//                         mensaje += producto.id +'- ' + producto.nombre+ '. $'+producto.precio+'.\n';
//               });
//               do {
//                         productoId = parseInt(prompt(mensaje));
//                         productoValido = validar(productoId, productosFiltrados);
//                         } while (!productoValido);
//                         return productoId;
//               }

//     function validar(productoId, productosFiltrados) {
//               let valido = false;
//               productosFiltrados.forEach( (producto) => {
//                         if (producto.id === productoId) {
//                                   valido = true;
//                         }
//               });
//               return valido;
//     }

//     function comprarProducto(productosFiltrados, productoId) {
//               let subTotal = 0;
//               let envio = 0;
//               let cantidadProducto = 0;
//               let producto = productosFiltrados.find( p => p.id === productoId);

//               do {
//                         cantidadProducto = parseInt(prompt('Producto elegido: ' + producto.nombre + '.\nIntroduzca la cantidad deseada (sólo números).'));
//               } while (isNaN(cantidadProducto));

//               subTotal = producto.precio * cantidadProducto;
//               envio = calcularEnvio(subTotal);
//               total = subTotal + envio;

//               producto.vender();
//               alert('Detalle de la compra en "Guilbas Urban Wear":\n- Indumentaria de estación: ' + producto.estacion + '.\n- Producto: ' + producto.nombre + '.\n- Cantidad de prendas: "' + cantidadProducto + '".\n- Costo del envío: $' + envio + '.\n- Total: $' + total + '.');
//     }

//     let estacionid = filtrarEstacion();
//     let ordenPrecio = consultarOrdenPrecio();
//     let productosFiltrados = filtrarProductos(estacionid, ordenPrecio);
//     let productoId = seleccionarProducto(productosFiltrados);
//     comprarProducto(productosFiltrados, productoId);

//     console.log(productosFiltrados);

//     alert('Desde Guilbas Urban Wear agradecemos tu compra, te esperamos pronto!');

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// DOM (Modelo de Objetos del Documento) --> estructura de objetos que se genera en nuestro navegador, que es una representación se nuestro HTML



// getElementById() --> Sirve para acceder a un elemento de la estructura HTML, "utilizando su atributo ID como identificación".
// innerHTML --> Establece o devuelve el contenido HTML de un elemento.

// const div = document.getElementById('app');
// console.log(div.innerHTML);

// const parrafo = document.getElementById('parrafo1');
// console.log(parrafo.innerHTML);


// getElementByClassName() --> Sirve para acceder a un conjunto de elementos de la estrucura HTML, "utilizando su atributo class como identificación"
// (se retornara un Array de elementos con todas las coincidencias).

// const paises = document.getElementsByClassName('paises');
// console.log(paises);
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);


// getElementByTagName() --> Sirve para acceder a un conjunto de elementos de la estructura HTML, "utilizando su nombre de etiqueta como identificación".
// (esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML).

// const productos = document.getElementsByTagName('div');
// console.log(productos[0].innerHTML);
// console.log(productos[1].innerHTML);
// console.log(productos[2].innerHTML);


// HTML Collection cn FOR ... OF

// let paises = document.getElementsByClassName('paises');
// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// let productos = document.getElementsByTagName('div');
// for (const div of productos) {
//     console.log(div.innerHTML);
// }


// innerText --> Nos permite modificar su nodo de texto. (acceder y/o modiciar el contenido textual de algún elemento del DOM).

// let titulo = document.getElementById('titulo');
// console.log(titulo.innerText);

// titulo.innerText = '@Tyson.dev';
// console.log(titulo.innerText);


// const nombreUsuario = prompt('Hola man, ingresa tu nombre:');
// parrafo1.innerText = 'Hi my name is ' + nombreUsuario + '!!!!!!!!!!!';


// innerHTML

// let productos = document.getElementById('productosTyson');
// productos.innerHTML = '<h2>Hola Tyson!</h2><p>Look for your best version</>';


// className --> Podemos acceder al atributo class del mismo y defini cuáles van a ser sus clases.

// let productos = document.getElementById('productosTyson');
// productos.className = 'container row';


// document.createElement() --> Ayuda para que podamos crear un elemento HTML por medio del DOM
// (debe agregarse como hijofel nodo creaco con append() al body o  a otro nodo del domuento actual).

// let parrafo = document.createElement('p');
// parrafo.innerHTML = '<h2>Hola Tyson!!!</h2>';
// document.body.append(parrafo);


// remove() --> Permite eliminar un nodo seleccionado del DOM.

// let titulo = document.getElementById('titulo');
// titulo.remove();

// let paises = document.getElementsByClassName('paises');
// paises[1].remove();


// OBTENER DATOS DE INPUTS

// document.getElementById('name').value = 'Milton';
// document.getElementById('years').value = 20;




// Creando opciones desde un Array

// Obtenemos el nodo donde vamos a agregar los nuevos elementos.
// let container = document.getElementById('familia');

// Array con la información a agregar
// let familia = ['Pedro', 'Carmen', 'Andy', 'Santino', 'Dukecito'];

// Iteramos el array con for...of
// for (const family of familia) {

       // Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement('li');
//     li.innerHTML = family;
//     container.appendChild(li);
// }



// PLANTILLAS LITERALES

// let producto = { id: 1, estacion: 'Verano', nombre: 'Remera', precio: 2500 }

// let concatenando = 'ID: '+producto.id+'.\nEstación: '+producto.estacion+'.\nProducto: '+producto.nombre+'.\nPrecio: $'+producto.precio+'.';

// let plantilla = `ID: ${producto.id}. - Estación:  ${producto.estacion}. - Producto: ${producto.nombre}. - Precio: ${producto.precio}.`;

// console.log(plantilla);



// CREANDO ELEMENTOS DESDE OBJETOS

// const productos = [{ id: 1, estacion: 'Verano', nombre: 'Remera', precio: 2500 },
//                    { id: 2, estacion: 'Verano', nombre: 'Musculosa', precio: 2000 },
//                    { id: 3, estacion: 'Verano', nombre: 'Remera', precio: 2500 },
//                    { id: 4, estacion: 'Invierno', nombre: 'Campera de abrigo', precio: 2500 },
//                    { id: 5, estacion: 'Invierno', nombre: 'Buzo de polar', precio: 2500 },
//                    { id: 6, estacion: 'Invierno', nombre: 'Jogging de friza', precio: 2500 }];

// for ( const producto of productos) {
//     let div = document.createElement('div');

//     div.innerHTML = `<div class='container'>
//             <h2> ID: ${producto.id}</h2>
//             <h2> Estación: ${producto.estacion}</h2>
//             <h2> Producto: ${producto.nombre}</h2>
//             <h2> $ ${producto.precio}</h2>
//     </div>`;
//     document.body.appendChild(div);
// }



// EVENTOS  --> Controla las acciones de los usuarios y define un comportamiento de la página o aplicación cuándo se produzcan.

// addEventListener() --> Permite definir que evento escuchar sobre cualquier elemento selccionado.
// (el 1er parámetro corresponde al nombre del evento y el 2do a la función de respues.).

// EEJEMPLO-1
// <h2>Coder House</h2>
// <button id="btnPrincipal">Click</button>
// <script>
// let boton = document.getElementById("btnPrincipal")
// boton.addEventListener("click", respuestaClick)
// console.log("Respuesta evento");
// </script>


// const boton = document.getElementById('btnPrincipal');
// boton.addEventListener('click', respuesta);

// function respuesta() {
//     console.log('Respuesta al click');
// }

// -----------------------------------------------------------------------------------------------------------

// EJEMPLO-2
// Emplear una propiedad del "nodo" para definir la respuesta al evento.
// (Las propiedades se identifican con el nombre del evento y el prefijo on).
// (También es posible emplear funciones anónimas para definisr losmanejadores de eventos).

// <h2>Coder House</h2>
// <button id="btnPrincipal">Click</button>
// <script>
// let boton = document.getElementById("btnPrincipal")
// boton.onclick = () => {console.log("Respuesta 2")}
// </script>


// función anónima

// const boton = document.getElementById('btnPrincipal');
// boton.onclick = function () {
//     console.log('respuesta1');
// }

//          o también

// arrow function

// boton.onclick = () => {
//     console.log('respuesta1');
// }


// EJEMPLO-3 (No recomendado - mala práctica)
// SINTAXIS
// Determinar el evento especificando el manejador de evento en el atributo de una atiqueta HTML.
// (La denominación del atributo es idéntica al de la propiedad de la opción 2).
// La función puede declarar entre comillas o bien tomarse una referencia existente en el script.

// <input type=button" value="Click2" onclick="alert('Respuesta 3')"; />


// -------------------------------------------------------------------------------------------------------------------

// EJEMPLO CONTADOR

// const btnSuma = document.querySelector('.btnSuma');
// const btnResta = document.querySelector('.btnResta');
// const resultado = document.getElementById('resultado');

// let contador = 0;

// btnSuma.addEventListener('click', () => {
//     contador++;
//     actualizarContador();
// });


// btnResta.addEventListener('click', () => {
//     if (contador > 0)
//     contador--;
//     actualizarContador();

// });

// const actualizarContador = () => {
//     resultado.innerText = contador;
// };


// EVENTOS DEL MOUSE --> Se producen por la interacción del usuario con el mouse.
// 1- mousedown/mouseup: Se oprime/suelta el botón del ratón sobre un elemento.
// 2- mouseove/mouseout: El puntero del mouse se mueve sobre/sale del elemento.
// 3- mousemove: El movimiento del mouse sobre el elemento activa el evento.
// 4- click: Se activa después de "mousedown" o "mouseup" sobre un elemento válido.

// let boton = document.getElementById('btnMain');
// boton.onclick = () => {console.log('Click')};
// boton.onmousemove = () => {console.log('Move')};


// let boton = document.getElementById('btnMain');
// boton.onclick = () => {console.log('Click')};


// EVENTOS DEL TECLADO --> Se reproducen por la interaccióndel usuario con el teclado.
// 1- keydown: Cuando se presiona.
// 2- heyup: Cuando se suelta una tecla.

// let input1 = document.getElementById('name');
// let input2 = document.getElementById('years');
// input1.onkeyup = () => {console.log('keyUp')};
// input2.onkeydown = () => {console.log('keyDown')};




// EVENTO CHANGE --> sE ACTIVA CUANDO SE DETECTA UN CAMBIO EN EL VALOR DEL ELEMENTO.

// let input1 = document.getElementById('name');
// input1.addEventListener('change', () => {
//        console.log('Valor 1')
// });


// INFORMACIÓN DEL EVENTO

// Necesitamos obtener información contextual del evento para popder realizar acciones.
// Ej: ante el evento submit necesitamos prevenir el comportamiento por defecto para operar correctamente.
// Para esto existe en Javascript el "objecto event".


// let input1 = document.getElementById('name');
// input1.addEventListener('change', (e) => {
//        console.log(e.target.value);
// });


// let input2 = document.getElementById('years');
// input2.addEventListener('change', (e) => {
//        console.log(e.target.value);
// });



// EVENTO INPUT --> Detecta cada uno de los valores de forma individual caracter por caracter que el usuario ingresa sobre el input.

// const input1 = document.getElementById('name');
// input1.addEventListener('input', () => {
//        console.log(input1.value);
// });


// EVENTO SUBMIT --> Se activa cuando el formulario es enviado.
// Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o para abortar el envío y procesarlo con javascript.


// const form = document.getElementById('form');
// const formName = document.getElementById('formName');
// const formYears = document.getElementById('formYears');

// form.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const name = formName.value;
//       const years = formYears.value;

//       console.log(name, years);
// });



// (Usando la clase FromData)

// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const formulario = new FormData(form);
//       const name = formulario.get('formName');
//       const years = formulario.get('formYears');

//       console.log(name, years);
// });





// CALCULAR EDAD

const calcularEdad = (fecha) => {
       const fechaActual = new Date();
       const fechaNacimiento = new Date(fecha);
       const mesDiferencia = fechaActual.getMonth() - fechaNacimiento.getMonth();
       const diaDiferencia = fechaActual.getDate() < fechaNacimiento.getDate();
       let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

       // Si en el año actual todavía no cumplió años le restamos 1 a la edad

       if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia)) {
              edad--;
       };

       return edad;
};

// usar el elemento change

const fechaNacimiento = document.getElementById('fechaNacimiento');

fechaNacimiento.addEventListener('change', (e) => {
       const edadActual = calcularEdad(e.target.value);

       alert('Tu edad es: '+ edadActual + ' años.');
});


