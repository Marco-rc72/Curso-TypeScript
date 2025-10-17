(() => {

    type EstadoDelLibro = 'Disponible' | 'Agotado' | 'En reimpresion' | 'Descatalogado';

    type Libro = {
        id: number,
        titulo: string,
        author: string,
        fechaDePublicacion?: string,
        editorial: string,
        status: EstadoDelLibro,
        EnPrestamo: () => void;
        ActualizarEstado: (NuevoEstado: EstadoDelLibro) => void;
    };

    const Libro1: Libro = {
        id: 223355,
        titulo: 'Pequeño libro del estoicismo',
        author: 'Jonas Salzgeber',
        fechaDePublicacion: '01-10-2021',
        editorial: 'Ediciones Urano México',
        status: 'Disponible',
        EnPrestamo: function () {
            this.status = 'Disponible';
            console.log(`El Libro ${this.titulo} esta disponible!`);
        },
        ActualizarEstado:function (NuevoEstado: EstadoDelLibro) {
            this.status = NuevoEstado;
            console.log(`El libro ${this.titulo} esta ${NuevoEstado}`);
        }
    };


    const Libro2:Libro = {
        id: 223356,
        titulo: 'Aprendiendo Ts',
        author: 'Marco Antonio Rocha Cauich',
        fechaDePublicacion: '17-10-2025',
        editorial: 'ABC Consultores',
        status: 'Agotado',
        EnPrestamo:function () {
            this.status = 'Agotado';
            console.log(`El Libro ${this.titulo} esta disponile!`);
        },
        ActualizarEstado: function (NuevoEstado: EstadoDelLibro) {
            this.status = NuevoEstado;
            console.log(`El libro ${this.titulo} del autor ${this.author} esta ${NuevoEstado}`);
        }
    };

    Libro1.EnPrestamo();
    Libro1.ActualizarEstado('Agotado');
    Libro2.EnPrestamo();
    Libro2.ActualizarEstado('En reimpresion');


})()