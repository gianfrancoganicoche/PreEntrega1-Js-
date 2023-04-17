let Nombre = prompt ("Ingrese su nombre");
while (Nombre == ""){
    alert ("Debes ingresar tu nombre");
    Nombre = prompt ("Ingrese su nombre");
}

//Presentación
alert ("Hola "+Nombre+", necesitaremos algunos datos más para simular un crédito...");

//La persona debe ser mayor de 18 años
let Edad = prompt ("Por favor "+Nombre+", ingresa tu edad (solo el número)");
    while ((Edad == null || /\D/.test(Edad) || Edad == "")) {
        alert ("Edad ingresada inválida, por favor, inténtalo de nuevo")
        Edad = prompt ("Por favor "+Nombre+", ingresa tu edad")
    }
    while (Edad < 18) {
        alert ("Para solicitar un préstamo debes ser mayor de 18 años");
        Edad = prompt (Nombre+", ingresa tu edad");
    }

//La persona debe ganar más de $U 10.000

    let Sueldo = prompt("Ingresa tu sueldo líquido en pesos uruguayos (solo el número)");
    while (Sueldo == null || /\D/.test(Sueldo) || Sueldo == "") {
        alert ("Debes ingresar tu sueldo líquido si quieres solicitar un préstamo, "+Nombre);
        Sueldo = prompt ("Ingresa tu sueldo líquido en pesos uruguayos (solo el número)");
    }
    while (Sueldo < 10000 || /\D/.test(Sueldo)) {
        alert ("Para solicitar un préstamo tu sueldo debe ser mayor a $U 10.000");
        Sueldo = prompt("Ingresa tu sueldo líquido en pesos uruguayos (solo el número)");
    }

//La persona tendrá de disponible su sueldo *2
    let Disponible = ((Sueldo) * 2);

    let Monto = prompt ("Perfecto, tienes $U "+Disponible+" disponibles para retirar, cuánto quieres solicitar?");
    while (Monto == null || /\D/.test(Monto) || Monto == "") {
        alert ("Debes ingresar el monto que quieres solicitar (solo el número)");
        Monto = prompt ("Tienes $U "+Disponible+" disponibles para retirar, cuánto quieres solicitar? (solo el número)");
    }

//El monto solicitado debe ser mayor al 40% del disponible
    while (Monto < (Disponible*0.4) || /\D/.test(Monto) || Monto == "") {
        alert ("El monto mínimo para solicitar el crédito son $U "+(Disponible*0.4));
        Monto = prompt ("Tienes $U "+Disponible+" disponibles para retirar, cuánto quieres solicitar? (solo el número)");
    }
    while (Monto > Disponible || /\D/.test(Monto)) {
        alert ("El monto a solicitar debe ser menor o igual a tu disponible de $U "+Disponible);
        Monto = prompt ("Tienes $U "+Disponible+" disponibles para retirar, cuánto quieres solicitar? (solo el número)");
    }

//La cantidad máxima de cuotas serán 12
    let CantidadCuotas = prompt ("Genial, en cuantas cuotas quieres pagar los $U "+Monto+" que solicitaste, "+Nombre+"? (solo el número)");
    while (CantidadCuotas == null || /\D/.test(CantidadCuotas) || CantidadCuotas == ""){
        alert ("Debe ingresar la cantidad de cuotas");
        CantidadCuotas = prompt ("Por favor "+Nombre+", ingresa la cantidad de cuotas (solo el número)");
    }
    while (CantidadCuotas > 12 || /\D/.test(CantidadCuotas)){
        alert ("La cantidad de cuotas debe ser menor a 12");
        CantidadCuotas = prompt ("Por favor "+Nombre+", ingresa la cantidad de cuotas (solo el número)");
    }

//La tasa de interes será del 20% y se devolverá el resultado
    let MontoCuota = ((Monto * 1.2) / CantidadCuotas);
    alert ("Su préstamo será de $U "+Monto+" y deberá pagarlo en "+CantidadCuotas+" cuotas de $U "+MontoCuota);
    let VolverAEmpezar = prompt ("Desea volver a simular otro crédito? Si / No");
