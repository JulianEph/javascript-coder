//// Carrito de compras de componentes de pc (motherboard, tarjeta graficas, etc)

let precio_final = 0

let mostrar_promps = "Datos ingresados: \n"

let respuesta_usuario = ""

//Aca estoy haciendo el cuestionario y el bucle 

do{
    let compra_producto = prompt("Ingres el nombre del componente:")
    let precio_producto = Number(prompt("Ingres el precio del producto:"))

    precio_final = precio_final + precio_producto + calcular_iva_argentina(precio_producto)

    mostrar_promps = mostrar_promps + "\n"+compra_producto+"\t$"+ (precio_producto + calcular_iva_argentina(precio_producto))

    respuesta_usuario = prompt("¿Desea seguir añadiendo producto al carrito? (Escriba no en caso negativo)")

}while(respuesta_usuario != "no")

function calcular_iva_argentina(precio_producto){
    return precio_producto * 0.21 
}

// Aca buscamos que si el precio es mayor a 5000 no paga envio (10% menos)

if (precio_final >= 5000){
    let precioSinEnvio = precio_final * 0.90

    alert(mostrar_promps
        +"\n\nTotal: $" + precio_final
        +"\n\nTotal sin envio: $" + precioSinEnvio)
}else{
    alert(mostrar_promps
        +"\n\nTotal: $" + precio_final)
}