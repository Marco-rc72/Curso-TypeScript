(() => {

    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.groupCollapsed(avenger.charAt(0))

    console.groupCollapsed((avenger as string).charAt(0));



    avenger = 150.329145;
    console.log(<number>avenger.toFixed(2))


    console.log(exists);
    console.log(power);
})()