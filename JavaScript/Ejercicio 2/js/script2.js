/*Dado el sueldo de un empleado, imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10%*/

/* let sueldo =prompt("Ingrese en valor del sueldo")
const psueldo =10/100;
const nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo);
alert ("El nuevo sueldo con el aumento es: "+nsueldo); */

/* Ejercicio 3 - Un vendedor que tiene su sueldo base, recibe una comisión del 30% del total de las ventas del mes, él quiere saber cuanto ganara en un mes que tuvo tres ventas */

/* let sueldo=prompt("Ingrese el valor del sueldo")
let ventas=prompt("Ingrese el total de sus ventas del mes")
const comisión=30/100;
const pventa=parseInt(ventas*comisión)
const nsueldo=parseInt(sueldo)+parseInt(pventa)
alert ("Su sueldo más la comisión es de: "+nsueldo); */

/* ACTIVIDAD */

/* Ejercicio 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea saber cuánto deberá pagar por su compra. */

/* let compra =prompt("Ingrese en valor de su compra")
const descuento =25/100;
const ncompra =parseInt(compra)- parseInt(compra*descuento);
alert ("El total a pagar es de: "+ncompra); */

/* Ejercicio 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganara después de un mes si el banco paga a razón de 2% mensual. */

/* let capital=prompt("Ingrese el valor de su capital")
const porcentaje=2/100
const ganancia=parseInt(capital*porcentaje);
alert("La ganancia después de un mes es de: "+ganancia); */

/* Ejercicio 3 - Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final. */

let calificación1=prompt("Ingrese su calificación 1")
let calificación2=prompt("Ingrese su calificación 2")
let calificación3=prompt("Ingrese su calificación 3")
const porcentaje=55/100
const resultado=parseInt(calificación1+calificación2+calificación3)
const presultado=parseInt(resultado*porcentaje)
alert("El rpomedio de sus calificaciones parciales es: "+presultado)