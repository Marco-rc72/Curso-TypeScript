(() => {




    // Tipo personalizado
    type Carro = {
        brand: string,
        age: number,
        model?: string,
        color: string
        getBrand?: () => string,
    }
    // Objeto basico
    let Spark: Carro = {
        brand: 'Chevrolet',
        age: 2016,
        color: 'Rojo',
        getBrand() {
            return this.brand;
        },
    };

    // Objeto con metodo
    let Hulk: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Hulk el hombre más fuerte del mundo',
        age: 36,
        powers: ['Súper Fuerza', 'Súper resistencia']
    }

    Hulk = {
        name: 'Eliverto',
        age: 52,
        powers: ['Súper Borracho'],
        getName() {
            return this.name;
        },
    }

    // console.log(Hulk.getName)


    // Tipo personalizado
    type Person = {
        name: string;
        age?: number;
        grado: number;
        especialidad?: string;
        getAge?: () => number;
    }

    // Objeto basico
    let Doctor: Person = {
        name: 'Mr Doctor',
        // age: 53,
        grado: 18,
    }
    // Objeto basico
    let Programador: Person = {
        name: 'Marco Antonio',
        age: 22,
        grado: 10,
        especialidad: 'Desarrollo Weeb',
        getAge() {
            const age = 22
            return age;
        }
    }
    // Variable con multiples tipos permitidos
    let myCustomVariable: string | number | Person | Carro = 'Marco Rocha';
    // console.log(typeof myCustomVariable);

    myCustomVariable = 22;
    // console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Antonio',
        age: 22,
        grado: 10,
        especialidad: 'Desarrollador Full Stack',
    }
    // console.log(myCustomVariable);

    myCustomVariable = {
        brand: 'Honda',
        age: 2026,
        color: 'Black',
        model: 'HRV'
    }
    // console.log(myCustomVariable);

    type ID = string | Number;
    type Status = 'active' | 'inactive' | 'pending';

    const userID: ID = 2551;
    const userStatus: Status = 'pending';

    // console.log(userID)
    // console.log(userStatus)

    //?Ejercicio Creativo 1  


    type EstadoTarea = 'Pendiente' | 'En progreso' | 'Completada';

    type Tarea = {
        id: number,
        titulo: string,
        descripcion: string,
        status: EstadoTarea,
        fechaDeVencimiento?: string,
        marcaCompletada: () => void;
        actualizarEstado: (EstadoNuevo: EstadoTarea) => void;
    };


    const tarea1: Tarea = {
        id: 1,
        titulo: 'Aprender TypeScript',
        descripcion: 'Estudiar y practicar todos los días!!',
        status: 'En progreso',
        marcaCompletada: function () {
            this.status = 'En progreso';
            console.log(`Tarea ${this.titulo} en progreso!`);
        },
        actualizarEstado: function (EstadoNuevo: EstadoTarea) {
            this.status = EstadoNuevo;
            console.log(`Tarea ${this.titulo} ahora esta: ${EstadoNuevo}`);
        }
    };

    tarea1.marcaCompletada();
    tarea1.actualizarEstado('Completada');

    //?Ejercicio 2
    type CuentaDeBanco = {
        numeroDecuenta: string,
        saldo: number;
        deposito: (cantidad: number) => void;
        retirar: (cantidad: number) => boolean;
        consultarSaldo: () => string;
    };

    const miCuenta: CuentaDeBanco = {
        numeroDecuenta: "6969-2854-5633",
        saldo: 1000000,

        deposito: function (cantidad: number) {
            this.saldo += cantidad;
            console.log(`Depositado $${cantidad}`);
        },

        retirar: function (cantidad: number): boolean {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                console.log(`Retirado $${cantidad}`);
                return true;
            }
            console.log('Fondos insuficientes');
            return false;
        },

        consultarSaldo: function (): string {
            return `Saldo actual: $${this.saldo}`;
        }
    };

    miCuenta.deposito(600000);
    miCuenta.retirar(100000);
    console.log(miCuenta.consultarSaldo());
}) ()
