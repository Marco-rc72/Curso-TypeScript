(() => {


    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getNombre?: () => string
    }


    let Spiderman: Hero = {
        name: 'Peter Parker',
        age: 25,
        powers: [1,2]
    }

    let Superman: Hero = {
        name: 'Clark Kent',
        age: 52,
        powers: [1],
        getNombre() {
            return this.name;
        },
    }


})()