// Comment afficher du texte/ ou n'importe quelle
// données au niveau de notre console avec
// console.log 

console.log() // entre parenthèses, on va 
// écrire ce qu'on veut afficher,
// ça peut être du texte (on le met entre "")
// ça peut être un nombre
// ça peut être un nom de variable (on verra ça plus tard)

// Exemple : nombre
console.log(10)
// on est pas obligés de se contenter de nombres
// entiers
// on peut mettre des réels 
console.log(10.2142)

// Exemple : texte
console.log("Ceci est un exemple de texte")

// TESTEZ CHEZ VOUS :
// afficher le nombre 3
// afficher le nombre 124.41
// afficher le texdte : bonjour, je m'appelle *votre prénom*


// un commentaire

/* commentaire en plusieurs lignes : 
une ligne
deux lignes
trois lfdsqkdsf
etc
*/

// ctrl + / pour le raccourci commentaire sur VSC

// définition de variable

// on va créer une variable qui a le nom "variable_exemple", qui va 
// contenir le nombre 10 et qui sera de type number (car elle contient un nombre)

// on va commencer par utiliser le mot clé var, puis le nom, puis le contenu

var variable_exemple = 10;

// pour définir une variable avec le mot clé let,
// on va procéder de la même manière qu'avec le mot clé var, c'est à dire
// on va utiliser le mot clé let, puis donner un nom, puis le contenu

let deuxieme_exemple = 24;

// typeof nous permet de récupérer le type d'une donnée
// on met entre parenthèses soit :
// une donnée brute, c'est à dire un nombre, du texte, une valeur de vérité
// etc, exemple 
typeof(10.24);
// le nom d'une variable :
typeof(deuxieme_exemple);

// vu qu'on veut afficher le type pour pouvoir le lire
// on va mettre le typeof A L'INTERIEUR du console.log
console.log(typeof(deuxieme_exemple));
console.log(typeof("12455"));


// TESTEZ VOUS MÊME

// créez deux variables locales
// 1) la variable nbPersonnes, qui aura la valeur 32
let nbPersonnes = 32;
// 2) la variable disponibilite, qui aura la valeur True (pour vrai)
let disponibilite = true;
// 3) la variable present, qui aura la valeur "absent"
let present = "absent";

// affichez chacune de ces variables en utilisant console.log()
console.log(nbPersonnes);
console.log(disponibilite);
console.log(present);
// affichez le type de chacune de ces variables en utilisant console.log()
// et typeof()
console.log(typeof(nbPersonnes));
console.log(typeof(disponibilite));
console.log(typeof(present));


// pour définir un number, on va définir une variable
// et on va lui assigner une valeur numérique 

// exemple : nombre entier 
let exemple1 = 10;

// exemple : nombre réel 
let exemple2 = 152.2458;

// exemple : nombre négatif
let exemple3 = -Infinity;

console.log(exemple1, typeof(exemple1));
console.log(exemple2, typeof(exemple2));
console.log(exemple3, typeof(exemple3));


// exercice : addition de deux nombres entiers

// la première méthode

console.log(2+7);

// la deuxième méthode 

let addition = 1+6;
console.log(addition);

// la troisième méthode

let op1 = 3;
let op2 = 7;
console.log(op1+op2);

// dernière méthode

let nb1 = 12;
let nb2 = 5;
let addition_nbs = nb1+nb2;
console.log(addition_nbs);

// TESTEZ VOUS-MÊME : 
// la multiplication, qui sera l'opérande *

let a = 2;
let b = 4;
console.log(a*b)


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


// TESTEZ VOUS MÊME

// créez 3 variables :
// prénom
// nom 
// métier 
let prenom = "Yasmine";
let nom = "Bouamra";
let metier = "Formatrice";
console.log(prenom, nom, metier);
// récupérer la cinquième lettre de chacune de 
// ces chaines de caractère et l'afficher dans 
// la console

console.log(prenom[4], nom[4], metier[4]);

// testez l'opérateur + entre les trois variables

console.log(prenom+" "+nom+metier);


// définition d'une variable "undefined"

let test;

console.log(typeof(test));

test = "Yasmine";

console.log(typeof(test));

// les constantes ont le mot clé "const
// pour définir une constante on a besoin 
// de déclarer le mot clé const, 
// puis de lui donner un nom (comme pour les variables)
// et lui donner une valeur.

const PI = 3.14;


// une concaténation c'est le fait d'utiliser 
// l'opérateur + pour coller bout à bout 
// plusieurs chaines de caractère 

// exemple : 
console.log(prenom+nom+metier);

// lorsqu'on utilise des opérateurs arithmétiques
// sur des nombres stockés sous forme de chaine de caractères
// on va avoir ce qu'on appelle une conversion implicite
// du type string vers le type number

console.log("112"-2, typeof("112"), typeof(2), typeof("112"-2));
console.log("110"*5, typeof("110"), typeof(5), typeof("110"*5));

// cas spécial d'addition entre string + number / string + boolean
console.log("114"+3, typeof("114"), typeof(3), typeof("114"+3));

// Les opérateurs logiques :

// Les opérateurs de comparaison :
// supérieur et inférieur 

let v1 = 2;
let v2 = 6;

console.log(2<6);   
console.log(6<2);
console.log(2>6);   
console.log(6>2);

// l'égalité et l'inégalité 

// l'inégalité nous donne vraie dans le cas où la variable a N'IMPORTE quelle valeur sauf
// la valeur précisée

let notZero = 0;
console.log(notZero != 0);

// l'égalité :

// dans le cas de l'égalité on va avoir l'égalité simple
// et on va voir l'égalité stricte

// l'égalité simple a le signe ==
// c'est une égalité qui va comparer les valeurs
// et seulement les valeurs 

console.log("5"==5)

// l'égalité stricte a pour signe ===
// c'est une égalité qui va comparer les valeurs et 
// les types

console.log("5"===5);

// on va commencer par le ET :

// on va prendre condition_A = mdp > 8 caractères
// on va prendre condition_B = mdp < 24 caractères

let mdp = "dfhdjor";
console.log(mdp.length);

let condition_A = mdp.length>8;
let condition_B = mdp.length<24;
console.log(condition_A, condition_B);

// quand je fais le ET, ça va nous donner vraie
// le signe du ET : &&

console.log(condition_A && condition_B);

// on va continuer avec le OU :
// le signe du OU ça va être les deux barres
// alt gr + 6  

console.log(condition_A || condition_B);

// il nous reste le non :
// le non a pour signe !

console.log(condition_A, !condition_A);

// TESTEZ VOUS MÊME

// On a un médecin qui ouvre de 9h à 17h. 
// si le nombre de personnes dans sa salle d'attente est supérieur à 20,
// il ferme la porte (ne peut plus recevoir de patients)
// si le nombre de personnes dans sa salle d'attente est inférieur à 10,
// il ne commence pas à travailler 

// définir les cas où le médecin va travailler en 
// formalisant les deux conditions 

// condition A : nb_patients > 20
// condition B : nb_patients < 10 

// opérateur de liaison : ET
let nb_patients = 12;
conditionA = nb_patients > 20;
conditionB = nb_patients < 10;

console.log(conditionA && conditionB);






let age = 16;

let difference = 18-age;

console.log(difference)

if(age>=18){
    console.log("Vous avez l'âge d'avoir le permis.")
}

else{
    console.log("Vous n'avez pas l'âge d'avoir le permis. Revenez dans "+difference+" ans.")
}