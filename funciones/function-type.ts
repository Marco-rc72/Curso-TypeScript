(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const theWorldIsYours = () => 'El mundo es tuyo';


    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(5, 8));


    //? myFunction = greet;
    //? console.log(myFunction('Marco'));


    myFunction = theWorldIsYours;
    console.log(myFunction());






    const addMoney = (pesos:number , dolares:number) => pesos + dolares;

    let miFuncion = addMoney
    miFuncion = addMoney;
    
    console.log(miFuncion(500,520));

})()