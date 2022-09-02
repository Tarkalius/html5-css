// La deuxième question :
// prendre une variable x (donc vous allez la définir avec un let)
// si cette vairbale est supérieur à 0 => afficher signe positif (+)
// si cette variable est inférieure à 0 => afficher signe négatif (-)

// On va utiliser deux fonctions
// prompt : qui va ouvrir une boite de dialogue (pop-up) dans laquelle
// l'utilisateur va pouvoir entrer une valeur 

// alert : qui va ouvrir une boite de dialogue dans laquelle on peut
// afficher le message de notre choix 

// alert : 

// alert("Bonjour, je m'appelle Yasmine"); // à l'intérieur des parenthèses on va écrire un message
// sous forme de chaine de caractères (entre guillements)

// prompt :

// prompt("Quel age as-tu ?"); // à l'intérieur des parenthèses, on peut écrire un message
// qui servira d'indication à l'utilisateur 
// sur la valeur à écrire dans le champ d'entrée

// puisqu'on est entrain de récupérer une donnée
// il faut la stocker dans une variable 
// donc la syntaxe d'un prompt c'est

// variableDeStockage = prompt("le message que je veux afficher");
// de cette manière, la valeur entrée par l'utilisateur va être stockée 
// dans ma variable

// on reprend donc l'exemple de notre exercice
// on veut prendre une variable x et définir si elle est positive ou négative
let x = prompt("Entrez une valeur");
console.log(x);

// si la variable x est supérieur à 0 => alors afficher le signe positif 
// le mot clé du si c'est if 
if(x>0){
    // ici dans le cas où la condition est vraie
    // on va afficher en utilisant une alert 
    alert("Positif ! (+)");
}
// sinon afficher le signe négatif
// le mot clé du sinon c'est else
else{
    // dans le cas où la condition est fausse
    // on va afficher en utilisant une alert
    alert("Négatif ! (-)");
}





