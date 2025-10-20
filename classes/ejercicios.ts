(() => {

    //?EJERCICIOS-PRACTICA
    // class Libro {
    //     constructor(
    //         public titulo: string,
    //         public autor: string,
    //         public añoPublicacion: number
    //     ) { }

    //     getDescripcion() {
    //         return `${this.titulo} por${this.autor}, publicado en ${this.añoPublicacion}`
    //     }
    // }

    // class LibroConCopia extends Libro {
    //     constructor(
    //         titulo: string,
    //         autor: string,
    //         añoPublicacion: number,
    //         private copiasDisponibles: number
    //     ) {
    //         super(titulo, autor, añoPublicacion)
    //     }

    //     public prestarCopia(): boolean {
    //         if (this.copiasDisponibles > 0) {
    //             this.copiasDisponibles--
    //             return true
    //         }
    //         return false
    //     }

    //     public devolverCopia(): void {
    //         this.copiasDisponibles++
    //     }

    //     public getCopiasDisponibles(): number {
    //         return this.copiasDisponibles
    //     }

    // }


    // const miLibro = new Libro('Cien alos de soledad', 'Gabriel García Márquez', 1967);
    // console.log(miLibro.getDescripcion());

    // const libroPrestamo = new LibroConCopia('El Principito', 'Antoine de Saint-Exupéry', 1943, 2)
    // console.log('Copias disponibles:', libroPrestamo.getCopiasDisponibles());
    // console.log('¿Se pudo prestar?', libroPrestamo.prestarCopia());
    // console.log('Copias disponibles:', libroPrestamo.getCopiasDisponibles());





    //?EJERCICIO 2
    class ItemBiblioteca {
        id: number;
        titulo: string;
        estaPrestado: boolean = false;


        constructor(id: number, titulo: string) {
            this.id = id;
            this.titulo = titulo;
        }


        public prestar(): void {
            this.estaPrestado = true;
        }


        public devolver(): void {
            this.estaPrestado = false;
        }



        public getEstado(): string {
            if (this.estaPrestado) {
                return 'Prestado';
            } else {
                return 'Disponible';
            }
        }

    }

    class Revista extends ItemBiblioteca {
        numero: number;

        constructor(id: number, titulo: string, numero: number) {
            super(id, titulo);
            this.numero = numero;
        }
        prestar(): void {
            console.log('Lo siento, las revistas no se prestan');
        }
    }

    class DVD extends ItemBiblioteca {
        director: string;
        constructor(id: number, titulo: string, director: string) {
            super(id, titulo);
            this.director = director;
        }
    }

    const revista = new Revista(1, "National Geographic", 255);
    const dvd = new DVD(2, "El Viaje de Chihiro", "Hayao Miyazaki");

    console.log(revista.getEstado()); // "Disponible"
    revista.prestar(); // "Lo siento, las revistas no se prestan."
    console.log(revista.getEstado()); // "Disponible"

    console.log(dvd.getEstado()); // "Disponible"
    dvd.prestar();
    console.log(dvd.getEstado()); // "Prestado"




    //?Ejercicio 3
    class CuentaBancaria {
        private _saldo: number = 0;

        get saldo():number {
            return this._saldo;
        }

        set saldo(nuevoSaldo: number) {
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

    try{
        miCuenta.saldo = -500;
    }catch (error){
        if(error instanceof Error)
        console.error(error.message);
    }
    console.log(miCuenta.saldo);


})()