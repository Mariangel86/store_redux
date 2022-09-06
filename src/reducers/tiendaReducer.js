const inicioEstado= {
    productos:
    [
        {id: 1, nombre: "Producto 1"},
        {id: 2, nombre: "Producto 2"},
        {id: 3, nombre: "Producto 3"},
        {id: 4, nombre: "Producto 4"}
    ],
    carrito: []
}

const reducer = (estado= inicioEstado, accion) => {
    switch (accion.type){
    case 'AGREGAR_PRODUCTO_AL_CARRITO':
        const {idProductoAAgregar,nombre}= accion;
        // Si el carrito no tiene elementos agreguemos 1
		if (estado.carrito.length === 0){
			return {
            ...estado,
            carrito:[{id: idProductoAAgregar, nombre: nombre, cantidad: 1}] 
        }
        } else {
            //si tiene el producto actualizar el valor
            //si no tiene el producto debe agregarse
    
            //para poder editar el arreglo debo clonarlo
            const nuevoCarrito= [...estado.carrito];
            //comprobar si el carrito ya tiene el id del producto a agregar
            const yaEnCarrito = nuevoCarrito.filter((productoDeCarrito)=>{
                return productoDeCarrito.id === idProductoAAgregar
            }).length > 0;
            if(yaEnCarrito){
                //para ello tenemos que buscarlo y obtener posicion en el arreglo
    
                nuevoCarrito.forEach((productoDeCarrito,index) => {
                if (productoDeCarrito.id === idProductoAAgregar){
                    const cantidad = nuevoCarrito[index].cantidad;
                    nuevoCarrito[index] = {
                         id: idProductoAAgregar, 
                         nombre:nombre, 
                         cantidad: cantidad + 1 
                         }
                    }	
            
                });
            } else {
                nuevoCarrito.push(
                    {
                        id: idProductoAAgregar,
                        nombre: nombre,
                        cantidad: 1
                    }
                );
            }

        return {...estado,
        carrito: nuevoCarrito
            }
        }
        default:
    return estado;
    }
  }
  
  export default reducer;