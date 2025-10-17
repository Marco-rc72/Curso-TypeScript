"use strict";
(function () {
    var Libro1 = {
        id: 223355,
        titulo: 'Pequeño libro del estoicismo',
        author: 'Jonas Salzgeber',
        fechaDePublicacion: '01-10-2021',
        editorial: 'Ediciones Urano México',
        status: 'Disponible',
        EnPrestamo: function () {
            this.status = 'Disponible';
            console.log("El Libro ".concat(this.titulo, " esta disponible!"));
        },
        ActualizarEstado: function (NuevoEstado) {
            this.status = NuevoEstado;
            console.log("El libro ".concat(this.titulo, " esta ").concat(NuevoEstado));
        }
    };
    var Libro2 = {
        id: 223356,
        titulo: 'Aprendiendo Ts',
        author: 'Marco Antonio Rocha Cauich',
        fechaDePublicacion: '17-10-2025',
        editorial: 'ABC Consultores',
        status: 'Agotado',
        EnPrestamo: function () {
            this.status = 'Agotado';
            console.log("El Libro ".concat(this.titulo, " esta disponile!"));
        },
        ActualizarEstado: function (NuevoEstado) {
            this.status = NuevoEstado;
            console.log("El libro ".concat(this.titulo, " del autor ").concat(this.author, " esta ").concat(NuevoEstado));
        }
    };
    Libro1.EnPrestamo();
    Libro1.ActualizarEstado('Agotado');
    Libro2.EnPrestamo();
    Libro2.ActualizarEstado('En reimpresion');
})();
//# sourceMappingURL=libreriaEjercicio.js.map