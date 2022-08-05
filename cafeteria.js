const carrito = {
    _carrito: '',
    _precio: 0,
  
  /*prueba fallida
  carrito.articulo = '9',
  carrito.precio = 'enchiladas',
  console.log(menu); */
  
    set articulo(articuloToCheck) {
      if(typeof articuloToCheck === 'string'){
        return this._articulo = articuloToCheck
      }
    },
  
      set precio(precioToCheck) {
        if(typeof precioToCheck === 'number'){
          return this._precio = precioToCheck;
        }
      },
  
        get precioDelDia() {
      if (this._articulo && this._precio) {
        return `El precio de ${this._articulo} es de ${this._precio}!`
      } else {
        return `Articulo o precio incorrecto!`
    }
  }
    
  };
  
  /*typecheck
  menu.meal = 8;
  menu.price = 'Pizza';
  console.log(menu);
  */
  
  
  carrito.articulo = 'pizza';
  carrito.precio = 5;
  
  
  console.log(carrito.precioDelDia);