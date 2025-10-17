type Carro = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: Carro;
declare const bumblebee: Carro;
type Villano = {
    nombre: string;
    edad: number;
    mutante: boolean;
};
declare const villanos: Villano[];
type Charles = {
    poder: string;
    estatura: number;
};
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const charles: Charles;
declare const apocalipsis: Apocalipsis;
declare let mystique: (Charles | Apocalipsis);
//# sourceMappingURL=app.d.ts.map