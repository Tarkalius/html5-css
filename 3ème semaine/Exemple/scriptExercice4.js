//Ecrire une fonction capable de calculer la surface d'un disque

function surface(r){
    const pi = 3.14;
    let surf = pi * r * r;
    return surf;
}

let surfR4 = surface(4);
let surfR7 = surface(7);
console.log(surfR4, surfR7)

//Ecrire une fonction qui fait la multiplication de 2 éléments

function multiplication(prix1, prix2){
    let somme = prix1 * prix2;
    return somme;
}

let somme = multiplication(4, 8);
console.log(somme);


let i = 100;
do{
    i = i - 1;
    console.log("Hello")
} while(i > 0)

let x ="678"+2;
console.log(x)