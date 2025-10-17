(() => {


    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getNombre?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Marco Rocha';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Antonio',
        age: 22,
        powers: [1]
    }
    console.log(typeof myCustomVariable);


})()