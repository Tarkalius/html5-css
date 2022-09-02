// ------------------------------------------------- ACCEDER A DES ELEMENTS :

// querySelector : 
// syntaxe :
document.querySelector("nomDeLaBalise");
// sachant que nomDeLaBalise représente tout simplement le nom de la balise élément qu'on veut récupérer 
document.querySelector("baliseParent baliseVoulue");

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

// on peut spécifier le type de la balise voulue : 
document.querySelector("baliseVoulue.Class");
document.querySelector("baliseVoulue#id");
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
// MODIFIER LE STYLE 
// pour modifier le style on va utiliser l'attribut style 

Element.style.attributCSS

// l'attribut CSS ça peut être n'importe quel attribut qui existe dans le CSS (color, border, fontSize, fontFamily)

// EVENTS
// un évènement c'est simplement une réaction à une action de l'utilisateur 
// faire des traitements et créer un certain dynamisme sur la page web 
// pour traiter des évènemes on a besoin d'eventListener 

// Un eventListener c'est une sorte de gai qui va surveiller l'action jusqu'à ce qu'elle se produise 
// et qui va nous prévenir quand elle se produit 
// quand il nous prévient on peut appliquer un certain traitement (une suite d'instructions)

Element.addEventListener('nomDeLEvent', function(){
    // une suite d'instructions à executer en cas de déclenchement de l'évènement
})

// y a différents évènements (à la place de nomDeLEvent on peut mettre click, ou submit, ou mouseover etc)
// certains évènement ont des comportements par défaut
// Un comportement par défaut c'est quoi ? c'est tout simplement une action qui se déclence AUTOMATIQUEMENT 
// dès que l'évènement est déclenché 

// C'est notamment le cas de submit 
// submit a pour comportement par défaut de rafraichir la page 

// Pour bloquer le comportement par défaut on doit :
// récupérer l'objet évènement qui se crée à chaque fois qu e l'évènement se déclenche 
// pour le récupérer on passe un paramètre à la fonction qui est à l'intérieur de notre EventListener 

Element.addEventListener('nomDelevent', function(objet_event){

})

// et on va appliquer une méthode qui s'appelle preventDefault sur l'objet évènement 

Element.addEventListener('nomDelevent', function(objet_event){
    objet_event.preventDefault();
})

// ---------------------------------------- NAVIGATION DANS LE DOM 

// parentNode :
// qui permet de récupérer le parent d'un élément quelque soit son type (que ce soit un élément ou pas). 
// syntaxe : 
element.parentNode;

// parentElement :
// qui permet de récupérer le parent d'un élément seulement si ce dernier est un élément 
// si ce n'est pas un élément, ça nous renvoie null 
// syntaxe :
element.parentElement; 

// childNodes :
// qui permet de récupérer TOUS les enfants d'un éléments, ce qui inclut les noeuds textes parasites 
// pour rappel, les noeurds textes parasites ça va être els retours à la ligne qu'on met dans notre fichier HTML pour aérer le code 
// syntaxe : 
element.childNodes;

// children 
// qui permet de récupérer TOUS les enfants ELEMENTS d'un élément (ça ne va pas inclure les noeuds parasites)
// syntaxe :
element.children; 

// accéder à des enfants précis :

// firstChild : qui permet de récupérer le premier enfant 
element.firstChild 
// lastChild : qui permet de récupérer le dernier enfant 

// sauf que ces deux méthodes prennent en compte tous les enfants même les noeufs textes parasites et les commentaires 

// pour mieux cibler on utilise :
// firstElementChild : qui permet de récupérer le premier enfant ELEMENT
element.firstElementChild
// lastElementChild : qui permet de récupérer le dernier enfant ELEMENT
element.lastElementChild

// pour naviguer entre les enfants, on utilise : 
// nextSibling : va récupérer l'enfant d'après 
// previousSibling : va récupérer l'enfant d'avant 
element.nextSibling;
element.previousSibling;

// nextElementSibling : va récupérer le prochain enfant ELEMENT
// previousElementSibling : va récupérer l'enfant ELEMENT précédent 
element.nextElementSibling;
element.previousElementSibling;

// MODIFICATION :

// créer un élément :
// syntaxe :
document.createElement('element qu"on veut créer');
// l'argement ("element qu'on veut créer") c'est le nom d'une balise 

// lui ajouter des attributs :
element.setAttribute("attribut", "valeur");
// l'attribut ça peut être n'importe quel attribut HTML (id, class, src, text alternative, etc)
// et la valeur, c'est la valeur qu'on veut donner à l'attribut 

// enlever des attributs : 
element.removeAttribute("attribut");
// l'attribut ça peut être n'importe quel attribut HTML (id, class, src, text alternative, etc)

// Placer des éléments dans le DOM :
// append : qui permet d'ajouter comme DERNIER enfant de l'élément sur lequel append est appliqué :
// syntaxe :
element.append(elementAplacer);
// append va prendre un paramètre c'est l'élément qu'on veut placer 

// prepend : qui permet d'ajouter comme PREMIER enfant de l'élément sur lequel preprend est appliqué :
element.prepend(elementAplacer);

// insertBefore() : qui permet d'insérer avant l'élément de référence:
// syntaxe :
parentElementDeRef.insertBefore(elementAplacer, elementDeRef);

// insertAdjacentElement() : qui permet d'insérer un élément à une position donnée par rapport à un autre élément :
// syntaxe : 
elementDeReference.insertAdjacentElement('placement', elementAPlacer);

// les placements, ça peut être : 
'beforebegin' // insérer le noeud juste avant l'élément de référence (comme insertBefore())
'afterend' // insérer le noeud après l'élément de référence
'afterbegin' // insérer le noeud comme étant le premier enfant de l'élément de référence (comme prepend)
'beforeend' // insérer le noeud comme étant le dernier enfant de l'élément de référence (comme append)

// Supprimer un élément : 
// remove() pour supprimer l'élement lui même 
element.remove()

// removeChild() pour supprimer un enfant de l'élément sur lequel removeChild est appliqué 

parent.removeChild(elementAsupprimer);
