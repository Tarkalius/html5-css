// on va programmer un petit jeu
// l'utilisateur va entrer
// dans un prompt une valeur
// (qui est un mot)

// si le mot est celui qu'on a défini 
// au debut

let motAtrouve = "Fraise";

// on va afficher au niveau du H1
// le mot trouvé (c'est à dire fraise) (donc on va modifier la valeur textuel
// du H1)

// sinon, on va afficher en dessous du
// h1, au niveau de la div : PERDU

let motuti = prompt("Essaye de trouver le mot !");

// on veut pouvoir répéter jusqu'à ce que le mot entré par l'utilisateur
// soit égal au mot à deviner 

// On va avoir la condition de répétition :
// tant que l'utilisateur ne trouve pas le mot, je vais devoir REPETER
// l'affichage du prompt

while(motuti!=motAtrouve){
    $("div").text("Perdu !");
    motuti=prompt("perdu, entrez une nouvelle valeur !");
}
// quand la boucle arrête de s'executer, ça veut dire que l'utilisateur
// a réussi à trouver le mot à deviner
$("h1").text(motAtrouve);
$("div").text("Gagné !");

let couleur = prompt("quelle est ta couleur de cheveux?");
console.log(couleur);
let couleurAdeviner= "noir";
if(couleur==couleurAdeviner){
console.log("vrai");
$("h1").text(couleurAdeviner)
}
else{
console.log("faux");
$("div").text("perdu");
}