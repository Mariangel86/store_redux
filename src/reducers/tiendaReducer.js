const inicioEstado= {
    productos:
    [
        {id: 1, nombre: "Producto c"},
        {id: 2, nombre: "Producto d"},
        {id: 3, nombre: "Producto e"},
        {id: 4, nombre: "Producto f"}
    ],
    carrito: [1,2,3]
}

const reducer = (estado= inicioEstado, accion) => {
    return estado;
    
  }
  
  export default reducer;