// choisir aléatoirement une image 
// l'afficher quand on clique un bouton

let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];

// pour récupérer un pokemon aléatoirement, on doit générer un id

// générer le chemin vers le pokemon 
// une concaténation sous la forme :
// "assets/"+nomDuPokemon+".png"

// sous forme de fonction 

function choisirPokemon(tableau){
    // générer un id aléatoire 
    // première étape : 
    // générer un nombre aléqatoire entre 0 et 1
    let nbAleatoire = Math.random();

    // il faut qu'on ait un nombre aléatoire entre 0 et le nombre de pokemons
    // le nombre de pokemons la longueur de notre tableau 

    nbAleatoire = nbAleatoire * tableau.length;

    // les indices d'un tableaux c'est des nombres entiers
    // donc pour passer de décimal à entrier, on va utiliser
    // Math.floor()

    nbAleatoire = Math.floor(nbAleatoire);

    // ici nbAleatoire représente l'indice généré aléatoirement
    // on va donc l'utiliser pour choisir un élément du tableau
    // qu'on a passé en paramètres

    let elementChoisi = tableau[nbAleatoire];

    // elementChoisi va representer notre pokemon
    // et on va choisir du coup une image
    // en se basant sur son chemin 
    // le chemin de l'image : 
    // assets/+nomDuPokemon+.png

    let cheminImg = "assets/"+elementChoisi+".png";
    console.log(cheminImg);
    // notre fonction elle va retourner le chemin de notre
    // image
    return cheminImg;
}

choisirPokemon(pokemons);


// mettre l'image à la place du boutton en utilisant this
// ajouter un eventListener
// vous allez utiliser la classe du bouton, pour que ce soit le même 
// traitement qui se passe sur tous les boutons 
// et vous allez utiliser la fonction html qu'on a vu hier
// pour mettre l'image en place



// on va sélectionner tous les boutons en utilisant 
// le nom de la balise
$("button");
console.log($("button"));
// ensuite, ce qu'on va faire 
// on ajoute l'eventListener pour le click (.on("click"...))
$("button").on("click", function(){
    // le chemin de notre image c'est le retour de notre fonction
    let cheminImage = choisirPokemon(pokemons);
    $(this).html('<img src="'+cheminImage+'" />');
})
// on va mettre une image qui va affecter tous les boutons 
// quand on clique : 
// on utilise donc ce code :
// $("button").html(ici vous allez écrire votre html pour l'image)

// sélectionner des éléments avec jquery : 

// $("element") et à la place d'élement on va mettre soit :
// le nom de la balise 
$("button")
// la classe précédée par un point 
$(".col-sm")
// l'id précédé par un #
$("#btn1")

// placer un eventListener : 
// un eventListener c'est un mécanisme qui permet de surveiller
// qu'une action ait lieu sur un élément en particulier 
// l'eventListener a deux paramètres :
// typeEvent : soit click, mouseover, submit, etc
// fonction qui gère l'évènement quand il a lieu 

// syntaxe : 
// $("element").on("typeEvent", function(){
    // on va écrire les instructions qui vont être executées
    // lorsque l'évènement a lieu
// })

$("#btn1").on("click", function(){
    // donc ici lorsque l'utilisateur clique sur le bouton
    // qui a l'id "btn1", on va afficher dans la console
    // l'élément btn1
    console.log($("#btn1"));
})

// les attributs :
// text() qui permet de récupérer le contenu textuel
// d'un élément 
// syntaxe: 
// $("element").text()
$("#btn1").text()
// on peut modifier le contenu textuel en ajoutant un paramètre
// à notre fonction text()
// ce paamètre c'est une chaine de caractères et elle représente
// le nouveau contenu textuel à afficher à l'intérieur de notre élément 
// syntaxe : 
// $("element").text("le texte qui va s'afficher")
$("#btn1").text("Je suis le bouton 1");


// html() permet de récupérer le contenu html d'un élément 
// syntaxe : 
// $("element").html()
$("div").html()
// on peut modifier le contenu html d'un élément 
// en ajoutant un paramètre à notre fonctionnalité html()
// ce paramètre va être une chaine de caracètre
// et à l'intérieur de la chaine, on va mettre
// des balises HTML 
// syntaxte :
// $("element").html("le contenu HTML à mettre")
$("div").html("<img src='pokemon.png' />")

// css() permet de récupérer et de modifier le CSS 
// css() prend un seul paramètre quand il s'agit de récupérer
// la valeur d'un attribut css
// syntaxe :
// $("element").css("attribut-css")
$("div").css("background-color") // va renvoyer la couleur du fond de la div
// css() prend deux paramètres quand il s'agit de modifier le css 
// syntaxe : 
// $("elemet").css("attribut-css", "valeur")
$("div").css("background-color", "white"); // mettre le fond en blanc

// THIS :
// c'est un mot clé dans js et jquery qui permet de référencer
// l'élément sur lequel une action a eu lieu 
// donc, dans les évènements, on peut imaginer
// qu'un utilisateur clique sur un bouton, 
// THIS va permettre de référencer le bouton sur lequel l'utilisateur a cliqué
// donc THIS permet de retrouver l'élement sur lequel l'action a eu lieu.
$(this)