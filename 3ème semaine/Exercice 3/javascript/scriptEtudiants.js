let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];
let stories = ['You ran into this weird little creature ... it\'s intrigued by you, maybe she likes you... Oh wait she is about to bite you !!!!! Ruuuuun..! Oh no you died :(',
    'Once upon a time, an adventurer was on his way to a long lost village, but in their way they stumbled upon what will be one of their best friends, and adorable lowkey creepy creature.'];

// declaration d'une fonction qui retourne un nombre aleatoire entre 0 et un maximum.
// elle doit retourner un nombre entier
// pour cela, on vous donne l'entête de la fonction 
// et on décrit deux fonctions offertes par Javascript

// Math.random() renvoie un nombre aléatoire entre 0 et 1 (0 compris, 1 non compris)
// appel de fonction : let aleatoire = Math.random() et à l'intérieur d'aléatoire 
// un nombre aléatoire entre 0 et 1 (il change à chaque fois que vous rafraichissez la page)

// Math.floor() est une fonction qui supprime la partie décimal d'un nombre 
// exemple Math.floor(10.75) va renvoyer 10
function randomInt(max){
    // première étape : générer un nombre aléatoire entre 0 et 1
    let nbAleatoire = Math.random();
    console.log(nbAleatoire);
    // donc pour le moment, on a une valeur entre 0 et 1
    // pour qu'elle devienne une valeur entre 0 et max, il faut la multiplier par max
    nbAleatoire = nbAleatoire * max; 
    console.log(nbAleatoire);
    // on a à présent une valeur décimal, on a besoin  de la transformer en valeur entière
    // on va utiliser Math.floor()
    nbAleatoire = Math.floor(nbAleatoire);
    console.log(nbAleatoire);
    // dernière étape : retourner le nombre qu'on a généré
    return nbAleatoire;

    // return Math.floor(Math.random()* max);
}

// On teste le random :
console.log(randomInt(50));


// choisir un pokemon et une mini histoire aleatoirement.
// Pour cela, vous devez générer des indices aléatoires pour la liste pokemons et la liste stories 

let indicePokemon = randomInt(pokemons.length);
console.log(indicePokemon);
console.log(pokemons[indicePokemon]);
// on va sauvegarder le pokemon choisi 
let pokemonChoisi = pokemons[indicePokemon];

let indiceStory = randomInt(stories.length);
console.log(indiceStory);
console.log(stories[indiceStory]);
// on va sauvegarder la petite histoire chosiie
let storyChoisi = stories[indiceStory];


// récupérer le nom de l'utilisateur avec un prompt
let nom_utilisateur = prompt("Veuillez entrer votre nom");
console.log(nom_utilisateur);

// placer le nom de l'utilisateur dans les span avec la classe username
// première manière : on utilise les id 

let span1 = document.querySelector("#premier");
span1.textContent = nom_utilisateur;
let span2 = document.getElementById("deuxieme");
span2.textContent = nom_utilisateur;

// en utilisant les tableaux 
// on a deux éléments span, donc on utilise querySelectorAll

let spans = document.querySelectorAll(".username");
console.log(spans);
for(let indice=0; indice<spans.length; indice++){
    console.log(spans[indice]);
    spans[indice].textContent = nom_utilisateur;
}

// placer le nom du pokemon dans les span avec la classe pokemon-name

// première étape : récupérer avec document.querySelectorAll tous les éléments span qui ont la classe
// pokemon-name
let spansPokemon = document.querySelectorAll(".pokemon-name");
console.log(spansPokemon);

// deuxième étape : parcourir le tableau de span avec une boucle for 

for(let indice=0; indice<spansPokemon.length; indice++){
    // troisième étape : à l'intérieur de la boucle for, vous allez modifier le textContent 
    // pour la valeur du pokemonChoisi
    console.log(spansPokemon[indice]);
    spansPokemon[indice].textContent = pokemonChoisi;
}




// placer l'histoire dans le div avec l'id story
// on a stocké l'histoire qui a été choisie aléatoirement dans storyChoisi 

// première étape : récupérer la div avec un querySelector 
let divStory = document.querySelector("#story");
console.log(divStory);
// deuxième étape : assigner au textContent la variable storyChoisi
divStory.textContent = storyChoisi;

// placer l'image dans le div avec l'id image-spot
// première étape : récupérer la div avec id image-spot grâce à un querySelector 

let divImage = document.querySelector("#image-spot");
console.log(divImage);

// vu que l'image c'est de l'HTML, on va utiliser l'attribut innerHTML 

// on va créer une balise image 

let baliseImg = '<img src="assets/'+pokemonChoisi+'.png" />';

divImage.innerHTML = baliseImg;