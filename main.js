"use strict";
(() => {
    class ItemBiblioteca {
        constructor(id, titulo) {
            this.estaPrestado = false;
            this.id = id;
            this.titulo = titulo;
        }
        prestar() {
            this.estaPrestado = true;
        }
        devolver() {
            this.estaPrestado = false;
        }
        getEstado() {
            if (this.estaPrestado) {
                return 'Prestado';
            }
            else {
                return 'Disponible';
            }
        }
    }
    class Revista extends ItemBiblioteca {
        constructor(id, titulo, numero) {
            super(id, titulo);
            this.numero = numero;
        }
        prestar() {
            console.log('Lo siento, las revistas no se prestan');
        }
    }
    class DVD extends ItemBiblioteca {
        constructor(id, titulo, director) {
            super(id, titulo);
            this.director = director;
        }
    }
    const revista = new Revista(1, "National Geographic", 255);
    const dvd = new DVD(2, "El Viaje de Chihiro", "Hayao Miyazaki");
    console.log(revista.getEstado());
    revista.prestar();
    console.log(revista.getEstado());
    console.log(dvd.getEstado());
    dvd.prestar();
    console.log(dvd.getEstado());
    class CuentaBancaria {
        constructor() {
            this._saldo = 0;
        }
        get saldo() {
            return this._saldo;
        }
        set saldo(nuevoSaldo) {
            if (nuevoSaldo < 0) {
                throw new Error('No se puede establecer un saldo negativo');
            }
            this._saldo = nuevoSaldo;
        }
    }
    const miCuenta = new CuentaBancaria();
    console.log(miCuenta.saldo);
    miCuenta.saldo = 1000;
    console.log(miCuenta.saldo);
    try {
        miCuenta.saldo = -500;
    }
    catch (error) {
        if (error instanceof Error)
            console.error(error.message);
    }
    console.log(miCuenta.saldo);
})();
//# sourceMappingURL=main.js.map