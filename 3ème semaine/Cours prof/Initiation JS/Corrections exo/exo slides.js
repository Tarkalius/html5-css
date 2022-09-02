// console.log("bonjour je suis le texte", 12);

// bonjour je suis un commentaire 
/* dfjf
kfhjf
kdjf
g */

// let x = 10;
// let yasmine = 15;
// let zina = 20;
// console.log(x);
// console.log(typeof(x));

// exo 1 : additionner deux nombres et afficher dans la console 

// sol 1 
// let x = 3;
// let y = 4;
// console.log(x+y);

// sol 2
// let x = 3; 
// let y = 5;
// let z = x+y;
// console.log(z);

// sol 3
// console.log(4+5);

// let bool_1 = true;
// let bool_2 = false;
// console.log(typeof(bool_1));

// let texte = "Bonjour"; 
// let nom = "Yasmine";
// console.log(texte+" "+nom);
// console.log(typeof(texte));

// console.log("la longueur de Bonjour est "+ texte.length);

// console.log(texte[0]); // B
// console.log(texte.charAt(0)); // B

// let a = "true";
// let b = "let";
// console.log(typeof(a), typeof(b))

// let c = 100;
// let d = 1.210;
// let e = -100;
// console.log(typeof(c), typeof(d), typeof(e));

// let a = "Javascript";
// let b = false;
// let c = a+b;
// console.log(c);
// console.log(typeof(c));

// let a= null;
// console.log(typeof(a));

// const a=15;
// console.log(a);
// a=16; // une erreur ! 
// console.log(a);

// exo 2 
const nb_planetes = 9;
// const nb_electron_H = 1;
// let nb_personnes_attente = 12;
// let nb_satelittes_op = 1420;

// console.log("11"+2-2);
// console.log(("11"-2)+2);

// let a = 1;
// let c = 60;
// let b = 60;
// a<b // vrai 
// b>a // vrai
// a>b // faux 
// b<a // faux

// a != b // vrai 
// c != b // faux

// let premier = 10;
// let second = "10";

// let c = premier==second; 
// let d = premier===second;

// console.log(c, d);
// let age = prompt("Entrez votre âge pour voir si vous pouvez passer le permis");
// if(age<18){
//     // si la condition est égale à vrai
//     // on va exécuter ce qu'il y a à l'intérieur de ce bloc
//     //console.log("Vous avez "+age+" donc vous êtes trop jeune");
//     alert("Vous avez "+age+"ans donc vous êtes trop jeune")
// }
// else{
//     // si la condition est fausse, 
//     // on va exécuter ce qu'il y a à l'intérieur de ce bloc
//     // console.log("Vous pouvez passer le permis");
//     alert("Vous pouvez passer le permis");
// }

// let x = Number(prompt("entrez un nombre"));

// if(x>=0){
//     alert(x+" est positif");
// }
// else if(x<0){
//     alert(x+" est négatif");
// }
// else{
//     alert("C'est pas un numéro !")
// }

// let x = prompt("entrez un numéro");

// // nb négatif : -[quelquechose]

// if(x[0]=="-"){
//     alert("nombre négatif");
// }
// else{
//     alert("nombre positif");
// }    

// switch(expression){ // expression c'est la variable dont on veut voir les différents états
//     case 1: // 1 peut etre soit le nombre, 1 ou une variable, ou une chaine de caracètres 
//     /// des instructions 
//         break; // ce mot clé sert à sortir du switch 
//     case "Peugeot":
//         // instructions 
//         break;
//     case "Renault":
//         // instructions 
//         break;
//     default: // default c''est le cas par défaut quand ce n'est aucun des cas précisés ci-dessus 
//     // instructions 
//         break;

// }

// sauter directement ICI avec break  !!!!

// EXERCICE : 
// afficher le mois selon un nombre donné par l'utilisateur 

// let month = Number(prompt("Entrez le numéro du mois"));

// switch(month){
//     case 1:
//         alert("Janvier");
//         break;
//     case 2:
//         alert("Février");
//         break;
//     case 3: 
//         alert("Mars");
//         break;
//     // faire tous les mois (jusqu'à 12)
//     default:
//         alert("ce mois n'existe pas");
//         break;
// }

// for (let compteur = 0; condition ; compteur++) { // la condition se fait sur le compteur 
//     // ce qui veut dire soit il est supérieur ou inférieur ou égal à un certain nombre 
//     // ce nombre c'est le nombre fois qu'on va exécuter

//     // compteur++  ce que ça fait c'est que 
//     // a la fin de chaque execution des instructions 
//     // ça va rajouter un 1 à compteur 
//     // si compteur était à 0 ça va devenir 1
//     // si il était à 1 ça sera 2, etcc

//     // a l'intérieur on a tout plein d'instructions à répéter 

// }

// // EXERCICE : afficher dans la console les nombres entre 0 et 100 
// for(let i=0; i=<100; i++){
//     console.log(i);
// }
// // EXERCICE : afficher dans la console les nombres entre 120 et 0 de manière décroissante
// for(let i=120; i>=0; i--){
//     console.log(i);
// }




// si 17 module n est égal à 0 
// n va de 1 à 17 
// for(let i=1; i<=400; i++){

//     let premier = true;
//     for(let j=2; j<i; j++){
//         if(i%j==0)
//         {
//             premier = false;
//         }
//     }
//     if(premier==true){
//         console.log(i);
//     }
// }

// if(heure%2!=0){
//     // donner une réduction 
// }

// 17/1 ça, ça fonctionne
// 17/2 => si 17 modulo 2 == 0, ça veut dire que 17 est divisible par 2, ça veut dire que 17 n'est pad premier
// alors qu'un nombre premier est divisble seulement par 1 et le nombre
// 17/3  => si 17 modulo 3 == 0, ça veut dire que 17 est divisble par 3
// 17/4 
// // etc 
// 17/17 === ça, ça fonctionne



// on considère A = avoir une banane 
// on considère B = avoir une pomme

// tant que (a et b sont vrai) {
// je peux faire une salade de fruits
// }

// let a = true;
// let b = true;
// while(a==true&&b==true)
// {

//     console.log("possibilité de faire une salade de fruits");

// }

// // deux stocks de voiture 
// let stock_peugeot = 50;
// let stock_renault = 21;

// // tant que j'ai une peugeot et une renault 
// // je peux vendre les deux

// // tant que stock_peugeot > 0 ET stock_renault>0 
// // le ET : &&
// // le OU : || alt gr 6 pour windows
// // Sous Mac OS et OS X, elle s'obtient avec Alt + Maj + L .


// // l'égalité simple : == 6=="6" ça va donner vrai
// // l'égalité stricte : === 6==="6" ça va donner faux

// while(stock_peugeot>0&&stock_renault>0){
//     // vendre une peugeot et une renault 
//     stock_peugeot--;
//     stock_renault--;
// }

// EXERCICE : l'utlisateur rentre un mot de passe
// vous pouvez utilisez prompt() 
// prompt renvoie un string, on peut utiliser .length pour vérifier la longueur
// on vérifie si le mot de passe (sa longueur) est supérieur à 8 et inférieur à 32
// si c'est pas le cas, on demande à l'utilisateur de rentrer le mot de passe à nouveau 
// on revérifie etc

// écrire le script correspondant 

// let password = prompt("mot de passe entre 8 et 32 caractères");
// while(password.length<8 || password.length>32){
//     password = prompt("mot de passe entre 8 et 32 caractères");
// }


// do{
//     let password = prompt("mot de passe entre 8 et 32 caractères"); 
// }while(password.length<8 || password.length>32);

// EXERCICE 2 :
// Plus ou Moins 
// un jeu où on va générer un nombre aléatoire 
// ensuite l'utilisateur doit deviner le nombre aléatoire 
// on va comparer la réponse de l'utilisateur avec le nombre généré 
// et on va lui dire plus ou moins 
// il va rentrer une nouvelle réponse 
// on va comparer
// lui dire plus ou moins 
// etc 

// Math.random() // va renvoyer un nombre décimal entre 0 et 1
// Math.floor() // elle va enlever tous les nombres après la virgule

// let x = Math.floor(Math.random() * 100) // ce que ça va faire, c'est que 
// // ça va me renvoyer un nombre entre 0 et 1 
// // et du coup 0*100 = 0, 1*100 = 100, donc le nombre aléatoire sera entre 0 et 100
// // on sait que c'est un nombre décimal, ce qui est pas pratique pour le jeu 
// let essai_utilisateur;
// console.log(x);
// do{
//     essai_utilisateur=prompt("Essayez de deviner le nombre !");
//     if(essai_utilisateur>x){
//         alert(essai_utilisateur+" est plus grand, essaye moins !");
//     } else if(essai_utilisateur<x)
//     {
//         alert(essai_utilisateur+" est plus petit, essaye plus !");
//     }
//     else{
//         alert("bien joué "+essai_utilisateur+" était le bon nombre à trouve");
//     }
// }while(essai_utilisateur!=x);

// let tableau = ['10',10, true, false, 14];

// console.log(tableau);
// console.log(tableau[0]); // 10 en string
// console.log(tableau[1]); // 10

// première question : parcourir le vecteur de manière dynamique

let vec = ["Peugeot", "Renault", "BMW", "Maruti", "Toyota"];

// for(let i=0; i<vec.length; i++)
// {
//     console.log(vec[i]);
// }
// let i =0;

// while(i<vec.length){
//     console.log(vec[i]+" mais dans la boucle while");
//     i++;
// }

// do{
//     console.log(vec[i]+" mais dans la boucle do while");
//     i++;
// }while(i<vec.length)

// vec.forEach(element => {
//     // instructions pour chaque élément du tableau
//     console.log(element + " je suis dans la boucle forEach")
// })

// pour arranger les indentations : 
//windows : shift alt F 
//mac : shit option F
// ou utiliser l'extension beautify

// let matrice = [
//         ['Bonjour', 'Zina'],
//         ['Bonjour', 'Mary'],
//         ['Bonjour', 'Mireille']
// ];

// console.log(matrice[1][1]);

// for(let i=0; i<matrice.length; i++){
//     // vecteur = matrice[i];
//     // console.log(vecteur);    
//     // comment parcourir le tableau vecteur ?
//     for(let j=0; j<matrice[i].length; j++){
//         console.log(matrice[i][j]);
//     }

// }

// matrice.forEach(element => {
//     // console.log(element);
//     element.forEach(valeur => {
//         console.log(valeur);
//     })
// })

// // EXERCICE :

// let mat = [
//     [1,2,3],
//     [1,4,7],
//     [2,8,9]
// ];

// écrire le script qui permet de récupérer la diagonale de la matrice
// et de l'afficher dans la console

// mat[0][0]
// mat[1][1]
// mat[2][2]
// donc i==j

// for(let i=0; i<mat.length; i++){
//     console.log(mat[i][i]); // celle-ci est meilleure
//     // for(let j=0; j<mat[i].length; j++){
//     //     if(j==i){
//     //         console.log(mat[i][i]);
//     //     }
//     // }
// }

// function nomdelafonction(paramètres){
//     // toutes les instructions de la fonction
//     return résultat;
// }

// function addition(a, b){
//     return a+b;
// }

// let résultat = addition(5, 3);
// console.log(résultat);

// function afficher(a){
//     console.log(a+" mais dans la fonction afficher");
// }

// afficher(résultat);
// // exercice 1:
// // écrire la fonction qui concatènnent les valeurs d'un tableau 

// function concatener(tableau){
//     let variable_intermediare="";
//     let i= 1;
//     tableau.forEach(element=>{
//         // variable_intermediare+= element; // ce qui est équivalent à :
        
//         variable_intermediare = variable_intermediare + element;
//         console.log("itération "+i+": "+variable_intermediare);
//         i++;
//     })
//     return variable_intermediare;
// }

// let tab = ["un", "deux", "trois", "quatre"];
// console.log("résultat "+concatener(tab));

// // exercice 2 :
// // écrire la fonction qui renvoie la surface d'un rond pi*r^2 (r carré).

// function surfaceRond(r){
//     //return Math.PI*Math.pow(r,2);
//     return 3.14*r*r;
// }

// console.log(surfaceRond(5));

// Première manière de déclarer un objet : 
// on va utiliser le mot clé new Object 

// let mon_compte = new Object();

// mon_compte.prenom = "Yasmine";
// mon_compte.nom = "Bouamra";
// mon_compte.adresse = "yasmine.trainings@gmail.com";
// mon_compte.taille = 170;
// mon_compte.etat_de_connexion = false;


// utilisation d'un initialisateur 

let personne = {
    nom: "BOUAMRA",
    prenom: "Yasmine",
}

console.log(personne.prenom);

function Personne(nom, prenom, age, metier){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.metier = metier;
}

let yasmine = new Personne("BOUAMRA", "Yasmine", 20, "formatrice JS");
let Sammy = new Personne("", "Sammy", "", "3D");
console.log(Sammy);

function Animal(nom, race, age, taille, poids){
    this.nom = nom; 
    this.race = race; 
    this.age= age;
    this.poids= poids;
    this.taille = taille;
}

let lion = new Animal("Simba", "lion", 8, "1.5 tonne", "12 cm");
let chien = new Animal("dongo", "chien", 200, "12 gr", "3m");

console.log(lion, chien);