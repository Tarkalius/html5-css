// Exo 1 :
// - afficher tous les nombres premiers existants entre 0 et 400.

// si le reste de la division n'est pas égal à 0, alors le nombre n'est pas divisible 
// % est équivalent au modulo en math 
for(let index=1; index<400; index++){
    let premier = true;
    let i=2;
    while(premier==true && i<index){
        if(index%i==0){
            premier=false;
        }
        i++;
    }
    if(premier==true){
        console.log(index+"est un nombre premier");
    }
}
// - écrire le programme qui permet à l'utilisateur d'entrer un nombre et qui fait la somme de tous les nombres entre 1 et le nombre entré. (Exemple : utilisateur entre 10, le résultat à afficher est 55, 1+2+3+4+5+6+7+8+9+10)
let nombre = prompt("entrez un nombre");
let somme = 0;
for(let i=1; i<=nombre; i++){
    somme = somme + i; // somme += i
}
alert("la somme est "+somme);
// - afficher la table de multiplication d'un nombre 

// Exo 2 :
// Concevoir le script qui affiche les nombres de 1 à 200.
//    - Afficher "Hello" à la place du nombre pour les multiples de 5 et "World" pour les multiples de 7.
//    - Les multiples de 5 et 7, devront afficher "HelloWorld".

for(let i=1; i<=200; i++){
    if(i%5==0 && i%7==0){
        console.log("HelloWorld")
    }
    else if(i%5==0){
        console.log("Hello")
    }
    else if(i%7==0){
        console.log("World")
    }
    else{
        console.log(i);
    }  
}