(()=> {

    type Estudiantes = {
        nombre: string,
        edad: number,
        especialidad: string
        carrera: String,
        grado: number
        activo: boolean
    }


    const estudiantes:Estudiantes = {
        nombre: 'Marco Rocha',
        edad: 22,
        especialidad: "Desarrollo de software",
        carrera: "Ingenieria en Gestion y Desarrollo de software",
        grado: 10,
        activo: true
    }
    

    const printEstudiante = ({nombre, ...resto}:Estudiantes) =>{
        console.log(nombre,resto);
    }

    const avengersArr: [ string, boolean, number] = ['Capitan America', true, 150.15]

    const [capitan, ironman, seriaUnNumero] = avengersArr;
    // console.log({ironman, capitan})
})()