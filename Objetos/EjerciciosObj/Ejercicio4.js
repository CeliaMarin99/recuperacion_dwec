class Jarra{
    constructor(capacidad,cantidad){
        this._capacidad=capacidad;
        this._cantidad=cantidad;
    }

    set cantidad(cantidad){
        if(cantidad<0){
            throw new Error("La cantiad debe ser mayor a 0");
        } else if (cantidad > this._capacidad){
            this._cantidad = this._capacidad;
        }else{
            this._cantidad = cantidad;
        }

        llenar() {
            this._cantidad = this._capacidad;
        }

        vaciar() {
             this._cantidad = 0;
        }

        llenarDesde(otraJarra) {
          let espacioDisponible = this.capacidad - this.cantidad;
          let cantidadATransferir = Math.min(otraJarra.cantidad, espacioDisponible);
          this.cantidad += cantidadATransferir;
          otraJarra.cantidad -= cantidadATransferir;
        }

    }

    static comparar(jarra1,jarra2){
        if(jarra1.cantidad>jarra2.cantidad){
            return jarra1;
        }else{
            return jarra2;
        }
    }

    jarrasConMasCantidad(...jarras){
        let jarrasMayores = [];
        for(let i=0;i<jarras.length;i++){
            if(this._cantidad<jarras[i].cantidad){
                jarrasMayores.push(jarras[i]);
            }
        }
        return jarrasMayores;
    }
}