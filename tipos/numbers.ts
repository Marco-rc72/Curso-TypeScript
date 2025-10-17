(() => {

    let avengers: number = 10;


    console.log(avengers);

    const villiams: number = 20;

    if (avengers < villiams) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }


    avengers = Number('55A');


    console.log({ avengers });
})()