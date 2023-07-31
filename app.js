class Producto{
    //Creo la clase y su constructor
    constructor(codigo,nombre, precio, cantidad){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
    //Metodo para aumentar la cantidad del producto
    incrementarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }
    //Metodo para mostrar la descripcion del producto
    descripcion(){
        return  "codigo: " + this.codigo+
                "\nnombre: " + this.nombre+
                "\nprecio: " + this.precio
    }
    //Metodo para mostrar la lista con cantidad
    descripcionDeCompra(){
        return  "nombre: " + this.nombre+
                "\nprecio: " + this.precio+
                "\ncantidad: "+ this.cantidad
    }
}
//Creo el carrito de compras
class CarroCompras{
    //Creo la clase y su constructor
    constructor(){
        this.listaCarrito = []
    }
    //Metodo para agregar producto al carrito
    agregar(producto,cantidad){
        //Tengo que comprobar la existencia del producto
        let comprobacionExiste = this.listaCarrito.some( existe => existe.codigo == producto.codigo)
        if(comprobacionExiste){
            producto.incrementarCantidad(cantidad)
        }else{
            producto.incrementarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }
    }
    //Metodo para mostrar la lista de producto agregados al carrito
    mostrarProductos(){
        let ticket = "Lista de productos en el carrito:\n"
        this.listaCarrito.forEach( producto => {
            ticket = ticket + producto.descripcionDeCompra() + "\n---------------------\n"
        })
        alert(ticket)
    }
        //Metodo para calcular el total del carrito
        calculoTotal(){
            return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad ,0)
        }
        //Metodo para calcular el iva
        calculoIVA(){
            return this.calculoTotal() * 1.21
        }
}

//Con esta clase controlo los productos
class ControladorProducto{
    //Creo la clase y su constructor
    constructor(){
        this.listaProductos = []
    }
    //Agrego un producto a la lista
    agregar(producto){
        this.listaProductos.push(producto)
    }
    //Metodo para buscar producto por codigo
    buscarProducto(codigo){
        return this.listaProductos.find(producto => producto.codigo == codigo)
    }
    //Metodo para mostrar los productos del carrito
    mostrarProductos(){
        let ticket = ""
        this.listaProductos.forEach( producto => {
            ticket = ticket + producto.descripcion() + "\n---------------------\n"
        })
        alert(ticket)
    }
}
//Defino una constante para la funcion de CarroCompras
const CARRITO = new CarroCompras()
//Defino una constante para la funcion de ControladorProducto
const PO = new ControladorProducto()

//Creo los productos usando new
PO.agregar(new Producto(1,"motherboard", 250, 0))
PO.agregar(new Producto(2,"ram", 350, 0))
PO.agregar(new Producto(3,"procesador", 400, 0))

//Creo el corte para el while
let respuestaUsuario 

//Creo el simulador interactivo 
do{
    //Muestro los productos 
    PO.mostrarProductos()
    //Le pido al usuario que ingrese el codigo del articulo
    let opcion = Number(prompt("Ingrese el código del producto que desea agregar"))
    //Busco el producto por el codigo de producto
    let producto = PO.buscarProducto(opcion)
    //Le pido al usuario que ingrese la cantidad del producto que desea
    let cantidad = Number(prompt("Ingrese la cantidad del producto seleccionado que desea"))
    //Agrego al carrito los productos y las cantidades de cada uno
    CARRITO.agregar(producto,cantidad)
    //Le aviso al usuario que el producto o los productos fueron agregados exitosamente
    alert("El producto fué añadido exitosamente: ")
    //Le muestro el ticket al usuario
    CARRITO.mostrarProductos()
    //Le pregunto al usuario si desea continuar, en caso contrario escribe "ESC"
    respuestaUsuario = prompt("Ingrese 'ESC' para salir").toUpperCase()
    //Corto el simulador
}while(respuestaUsuario != "ESC")

//Aca le muestro al usuario el precio final
alert("El total de su compra es de: "+ CARRITO.calculoTotal())
//Aca le muestro al usuario el precio final con iva
alert("El total de su compra con IVA es de: "+ CARRITO.calculoIVA())
