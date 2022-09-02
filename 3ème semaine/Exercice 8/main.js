// Création de deux paragraphes :

let p1 = document.createElement("p");
p1.textContent="Je suis le paragraphe 1";
let p2 = document.createElement("p");
p2.textContent="Je suis le paragraphe 2"
let img = document.createElement("img");
img.src="Capture.PNG"

console.log(p1, p2, img);


// récupérer le body :

let body = document.querySelector("body");

// on peut lister les enfants d'un élément
// en utilisant children

console.log(body.children);

body.prepend(p1);

console.log(body.children);

body.append(p2);

console.log(body.children);

body.prepend(img);

body.append(img);

// insertAdjacentElement

// la syntaxe :

// elemntReference.insertAdjacentElement('position', elementAajouter)

// élément de référence : c'est à dire l'élément par rapport auxquel on va placer au dessus
//  ou en dessous

// elementAajout : élément qu'on a crée avec JS (ou qu'on a récupéré à travers JS),

// postion : un de 4 mots clés :
// beforebgin : pour placer avant l'élément de référence comme frère (ils auront le même parent)
// afterend : pour placer après l'élément de référence comme frère (ils ont le m^mee parent)

// Exemple
// on veut placer un élément H2 avant le H1
// on veut que le H2 soit un enfant de body (comme le H1)

// Créer le H2 :
let h2 = document.createElement("h2");
h2.textContent = "Bonjour je suis le H2 créé par JS"

// on va récupérer le H1 qui nous sert d'élément de référence
let h1 = document.querySelector("h1");

// on va insérer l'élément AVANT le H1 en utilisant beforebegin 

h1.insertAdjacentElement('beforebegin', h2);

// Exemple 2 :
// on veut ajouter un paragraphe en dessous du H1
// on veut que le paragraphe soit un enfant de body 

// on va utiliser afterend 

// créer le paragraphe 
let p3= document.createElement("p");
p3.textContent="Bonjour bonjour bonjour bonjour";

// le placer par rapport au H1

h1.insertAdjacentElement('afterend', p3);

// deux autres mots clés de position :
// afterbegin : ajouter l'élement comme premier enfant de l'élément de référence
// c'est à dire que c'est un équivalent de prepend

// beforeend : ajouter l'élément comme dernier enfant de l'élément de référence
// c'est à dire que c'est un équivalent de append

// Exemple :
// on va prendre une variable span qu'on veut ajouter à l'intérieur 
// du H1 à la fin

// on crée la variable span

let span = document.createElement("span");
span.textContent="Bonjour, je suis le span";

// on va utiliser beforeend

h1.insertAdjacentElement("beforeend", span);

