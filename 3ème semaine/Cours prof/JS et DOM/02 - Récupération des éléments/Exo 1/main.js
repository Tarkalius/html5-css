// on doit récupérer les éléments, dit créer des variables 
// et utiliser querySelector 

let doc = document.querySelector("html");
console.log(doc);

let p = document.querySelector("p");
console.log(p);
let h1 = document.querySelector("h1");
console.log(h1);
let img = document.querySelector("img");
console.log(img)
// le querySelector va toujours récupérer la première instance d'un élément 

// cibler chaque élément avec son sélecteur CSS
// quand on cible avec la classe, on va mettre un . 

document.querySelector(".nomDeLaClasse");
// Exemple :
let p1 =document.querySelector(".paragraph");
console.log(p1);

// cibler un élément avec son identifiant, on va mettre # 

document.querySelector("#identifiant")
let p2 = document.querySelector("#p2");
console.log(p2);

// une deuxième alternative, si on ne veut pas cibler un élément à la fois, 
// c'est d'utiliser querySelectorAll

document.querySelectorAll("nom de la balise");

let paragraphs = document.querySelectorAll("p.paragraph");
// ça va me renvoyer un tableau (appeler NodeListe ou liste de noeuds) qui contient TOUS 
// les éléments p 
console.log(paragraphs);

// Donc on peut cibler de manière encore PLUS précise en disant 
// je veux seulement les éléments de *telle balise* qui ont *telle classe*

document.querySelectorAll("nomDeLaBalise.nomDeLaClasse");
// je veux seulement les éléments de *telle balise* qui a *tel id*
document.querySelectorAll("nomDeLaBalise#id");

// ça s'applique au querySelectorAll et au querySelector

// Parcours : 

for(let i=0; i<paragraphs.length; i++){
    console.log(i, paragraphs[i]);
}

let i =0;

paragraphs.forEach(element => {
    console.log(i,element);
    i++;
})

// on peut également utiliser getElementsByClassName pour récupérer les élements d'une certaine classe
let p_1 = document.getElementsByClassName("paragraph");
console.log(p_1);
// Parcous : 
for(let i=0; i<p_1.length; i++){
    console.log(p_1[i]);
}
// ATTENTION : on ne peut pas utiliser un forEach
// et get elemensById pour récupérer un élément qui a un certain ID
let p_2 = document.getElementById("p2");
console.log(p_2);

