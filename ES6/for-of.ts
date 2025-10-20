(() => {

    type Carro = {
        año: number,
        color: string;
    }

    const spark: Carro = {
        año: 2016,
        color: 'rojo'
    }

    const mazda: Carro = {
        año: 2025,
        color: 'gris'
    }

    const honda: Carro = {
        año: 2024,
        color: 'blanco',
    }

    const carros: Carro[] = [spark, mazda, honda]

    for (const carro of carros) {
        console.log(carro.año, carro.color);
    }

})()