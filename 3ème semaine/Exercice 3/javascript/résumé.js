// ------------------------------------------------- ACCEDER A DES ELEMENTS :

// querySelector : 
// syntaxe :
document.querySelector("nomDeLaBalise");
// sachant que nomDeLaBalise représente tout simplement le nom de la balise élément qu'on veut récupérer 

// cibler avec des sélecteurs CSS :
// récupérer un élément selon sa classe : 
// syntaxe : 
document.querySelector(".nomDeLaCasse");
// sachant que nomDeLaClasse représente le nom de la classe de l'élément qu'on veut récupérer 
// on utilise le . pour dire à JS que c'est une classe qu'il est entrain de chercher 

// récupérer un élément selon son id : 
// syntaxe : 
document.querySelector("#id");
// sachant que l'id ça va être l'id de l'élément u'on veut récupérer 
// et on utilise le # pour dire que c'est un id qu'on est entrain de chercher 

// NOTE IMPORTANTE : querySelector ne va sélectionner que la première instance d'un élément correspondant. 

// querySelectorAll :
// syntaxe : 
document.querySelectorAll("nomDeLaBalise");
// sachant que nomDeLaBalise c'est l'élément qu'on veut récupérer

// cibler avec des sélecteurs CSS :
// récupérer un élément selon sa classe : 
// syntaxe : 
document.querySelectorAll(".nomDeLaCasse");
// sachant que nomDeLaClasse représente le nom de la classe de l'élément qu'on veut récupérer 
// on utilise le . pour dire à JS que c'est une classe qu'il est entrain de chercher 

// récupérer un élément selon son id : 
// syntaxe : 
document.querySelectorAll("#id");
// sachant que l'id ça va être l'id de l'élément u'on veut récupérer 
// et on utilise le # pour dire que c'est un id qu'on est entrain de chercher 

// querySelectorAll va renvoyer une NodeList (une liste de noeuds).
// on peut la parcourir avec une boucle forEach comme on avait fait pour les tableaux (ou simplement une boucle for/while)

// getElementsByClassName :
// qui permet de récupérer tous les éléments qui ont une certaine classe 
// syntaxe : 
document.getElementsByClassName("nomDeLaClasse");

// avec getElementsByClassName, on a pas besoin  de mettre le . pour dire qu'on cherche une classe
// cette méthode cherche forcément une classe

// getElementsByClassName renvoie une collection HTML 
// on ne peut pas utiliser de boucle forEach pour les collections HTML

// getElementById :
// qui permet de récupérer l'élément à l'id sélectionné 
// syntaxe : 
document.getElementById("id");
// dans getElementById on a pas besoin de mettre # pour dire qu'on cherche un ID.

//--------------------------------------------------------- MANIPULER LE CONTENU 

// innerHTML :

// innerHTML prend l'HTL qui se trouve entre la balise ouvrante et la balise fermante d'un élément 
// syntaxe : 
element.innerHTML
// element est n'importe quel élément récupéré avec querySelector/getElementsByClassName/getEelementById

// outerHTML :
// outerHTML prend l'intégralité de l'HTML d'un élément, ce qui inclut la balise ouvrante et la balise fermante de l'élément 
// syntaxe : 
element.outerHTML 

// textContent : 
// textContent va prendre le contenu textuel d'un élément tel qu'il est dans le code 
// syntaxe : 
element.textContent 

//innerText :
// innerText va prendre le contenu textuel tel qu'il s'affiche à l'écran 
// syntaxe : 
element.innerText