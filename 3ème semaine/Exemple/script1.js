// Comment afficher du texte ou n'importe quel donnée au niveau de notre console avec console.log

console.log(); // Entre parenthèse, on va écrire ce qu'on veut afficher, ça peut être du texte (à mettre entre des ""), ça peut être un nombre, ou même une variable.


//Exemple : nombre
console.log(10);

//On est pas obliger de se contenter de nombres entier, on peut mettre des réels.
console.log(10.58436);

//Exemple : texte
console.log("Ceci est un exemple de texte.")

console.log(3);
console.log(124.41);
console.log("Bonjour, je m'appelle Alexandre THIBAULT");

//On va créer une variable qui a le nom "variable_exemple" qui va contenir le nombre 10 et qui sera de type number (car elle contient un chiffre)

//On va commencer par le mot clé var, puis le nom, puis le contenu.

var variable_exemple = 10;

//Pour définir une variable avec le mot clé let, on va procéder de la même manière qu'avec le mot clé var, c'est à dire on va utiliser le mot clé let, puis donner un nom, puis le contenu.

let deuxième_exemple = 24;

//typeof nous permet de récupérer le type d'une donnée. On met entre parenthèse soit : une donnée brute, c'est à dire un nombre, un texte,

let nbPersonnes = 32;
let disponibilité = true;
let present = "absent";

console.log(nbPersonnes);
console.log(typeof(nbPersonnes));

console.log(disponibilité);
console.log(typeof(disponibilité));

console.log(present);
console.log(typeof(present));

let nb1 = 124;
let nb2 = -72;
console.log(nb1-nb2)

// définir des variables booléennes 

let mon_boolean = true;
console.log(mon_boolean, typeof(mon_boolean));
let mon_boolean2 = false;
console.log(mon_boolean2, typeof(mon_boolean2));


// définir des variables string 

let machaine = "une phrase 21354 +!^!éù";
console.log(machaine, typeof(machaine));

console.log(machaine[0])
console.log(machaine[1])
console.log(machaine[2])
console.log(machaine[3])

console.log(machaine.length);


let prenom ="Alexandre";
let nom ="THIBAULT";
let métier ="Équipier polyvalent";

console.log(prenom[4]);
console.log(nom[4]);
console.log(métier[4]);

console.log(prenom[4]+nom[4]+métier[4]);

const solaire ="Le système solaire est constitué de 9 planètes";


console.log(solaire);

const hydrogène ="L'hydrogène a un électron";

console.log(hydrogène)

