"use strict";
(function () {
    // Objeto basico
    var Spark = {
        brand: 'Chevrolet',
        age: 2016,
        color: 'Rojo',
        getBrand: function () {
            return this.brand;
        },
    };
    // Objeto con metodo
    var Hulk = {
        name: 'Hulk el hombre más fuerte del mundo',
        age: 36,
        powers: ['Súper Fuerza', 'Súper resistencia']
    };
    Hulk = {
        name: 'Eliverto',
        age: 52,
        powers: ['Súper Borracho'],
        getName: function () {
            return this.name;
        },
    };
    // Objeto basico
    var Doctor = {
        name: 'Mr Doctor',
        // age: 53,
        grado: 18,
    };
    // Objeto basico
    var Programador = {
        name: 'Marco Antonio',
        age: 22,
        grado: 10,
        especialidad: 'Desarrollo Weeb',
        getAge: function () {
            var age = 22;
            return age;
        }
    };
    // Variable con multiples tipos permitidos
    var myCustomVariable = 'Marco Rocha';
    // console.log(typeof myCustomVariable);
    myCustomVariable = 22;
    // console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Antonio',
        age: 22,
        grado: 10,
        especialidad: 'Desarrollador Full Stack',
    };
    // console.log(myCustomVariable);
    myCustomVariable = {
        brand: 'Honda',
        age: 2026,
        color: 'Black',
        model: 'HRV'
    };
    var userID = 2551;
    var userStatus = 'pending';
    var tarea1 = {
        id: 1,
        titulo: 'Aprender TypeScript',
        descripcion: 'Estudiar y practicar todos los días!!',
        status: 'En progreso',
        marcaCompletada: function () {
            this.status = 'En progreso';
            console.log("Tarea ".concat(this.titulo, " en progreso!"));
        },
        actualizarEstado: function (EstadoNuevo) {
            this.status = EstadoNuevo;
            console.log("Tarea ".concat(this.titulo, " ahora esta: ").concat(EstadoNuevo));
        }
    };
    tarea1.marcaCompletada();
    tarea1.actualizarEstado('Completada');
    var miCuenta = {
        numeroDecuenta: "6969-2854-5633",
        saldo: 1000000,
        deposito: function (cantidad) {
            this.saldo += cantidad;
            console.log("Depositado $".concat(cantidad));
        },
        retirar: function (cantidad) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                console.log("Retirado $".concat(cantidad));
                return true;
            }
            console.log('Fondos insuficientes');
            return false;
        },
        consultarSaldo: function () {
            return "Saldo actual: $".concat(this.saldo);
        }
    };
    miCuenta.deposito(600000);
    miCuenta.retirar(100000);
    console.log(miCuenta.consultarSaldo());
})();
//# sourceMappingURL=Ejercicios.js.map