// La première solution : 
// on peut récupérer nos éléments selon 
// le nom de la balise

// les types de balise qu'on a dans cet exerice sont :
// h1 (2 éléments)
// p (2 élements)
// div (1 élement)

// Pour récupérer, on va utiliser
// $("nomDeLaalise");
// Donc notre syntaxe ça va être :
// console.log($("nomDeLaBalise"));

// on applique pour le H1:
// nomDeLaBalise = h1
console.log($("h1"));

// on applique pour le p : 
// nomDeLaBalise = p
console.log($("p"));

// on applique pour la div :
// nomDeLaBalise = div 
console.log($("div"));

// Deuxième solution : 
// on va utiliser les id pour récupérer les éléments
// séparement les uns des autres

// notre syntaxe va être : 
// $("#id") avec id étant l'id de l'élément à récupérer
// ce qu'on va faire du coup : 
// console.log($("#id"));

// On va appliquer pour premierH
// id = premierH
console.log($("#premierH"));

// On va appliquer pour premierP
// id = premierP
console.log($("#premierP"));

// on va appliquer pour premiereDiv
// id = premiereDiv 
console.log($("#premiereDiv"));

// on va appliquer pour premierHDiv
// id = premierHDiv
console.log($("#premierHDiv"));

// on va appliquer pour premierPDiv
// id = premierPDiv
console.log($("#premierPDiv"));

// Troisième solution :
// on peut récupérer les éléments de la div ensemble
// en utilisant leur classe

// syntaxe : 
// $(.nomDeLaClasse);
// on va faire : 
// console.log($(".nomDeLaClasse"))

// on applique sur les éléments de la div 
// nomDeLaClasse = div1

console.log($(".div1"));
// on a une dernière alternative pour récupérer les
// éléments de la div ensemble 

// en fait, on peut mettre plusieurs paramètres de recherhce
// en jQuery 

// $("element1, element2, element3... etc")
// donc on peut chercher autant d'élément qu'on veut
// en les séparant par des virgules 

// On peut récupérer les 2 éléments de la div ENSEMBLE
// en utilisant leur id dans la même recherche

// console.log($(element1, element2))

console.log($("#premierHDiv, #premierPDiv"));