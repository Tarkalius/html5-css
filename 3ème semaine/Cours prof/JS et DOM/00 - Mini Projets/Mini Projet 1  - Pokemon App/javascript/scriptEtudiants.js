let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];
let stories = ['you ran into this weird little creature ... it\'s intrigued by you, maybe she likes you, Oh wait she is about to bite you !!!!! Ruuuuun ... oh No you died :)',
    'once upon a time, an adventurer was on his way to a long lost village, but in their way they stumbled upon what will be one of their best friends, and adorable lowkey creepy creature.'];

// declaration d'une fonction qui retourne un nombre aleatoire entre 0 et un maximum.
// faut retourner un nombre entier
function randomInt(max){
    return Math.floor(Math.random() * max);
}

// On teste le random :
console.log(randomInt(10));

// choisire un pokemon et une mini histoire aleatoirement.
// générer des indices aléatoires pour la liste pokemons et la liste stories 

// Syntaxe 1 :
let pokemonChoisi = pokemons[randomInt(pokemons.length -1)]; 
// Syntaxe :
let IndiceStory = randomInt(stories.length -1);
let storyChoisi = stories[IndiceStory];

console.log(pokemonChoisi);
console.log(storyChoisi);

// récupérer le nom de l'utilisateur
let username = prompt("Quel est ton nom, aventurier ?");
console.log(username);




// placer le nom de l'utilisateur dans les span avec la classe username
let span = document.getElementsByClassName("username");
console.log(span);
// on sait que span est une liste deux éléments 
// on veut placer le username dans les DEUX éléments de la liste 

// 1. parcourir la liste 
// 2. Pour CHAQUE élément de la liste, on va modifier soit HTML ou le contenu textuel (avec les attributs qu'on a vu) pour mettre 
// le nom d'utilisaeur 

// on sait que le nom d'utilisateur c'est du texte donc on va utiliser l'attribut innerText ou textContent 

// DONC ce qu'on doit faire c'est : 
// 1. parcourir le tableau de span
// on a besoin d'une boucle 
// tableau.length va nous dire combien d'élément y a dans le tableau
// comme notre variable tableau de span c'est 
// console.log(span[0]);
// console.log(span[1]);
// span[0].innerText=username;
// span[1].innerText=username;
// on va faire :
span.length
// 2. pour chaque élément de la liste, faire : element.innerText = username récupéré grâce au prompt 

// getElementsByClassName renvoie une collection HTML donc on utilise une boucle for ou une boucle while 

for(let i=0; i<span.length; i++){
    span[i].innerText = username;
}

// placer le nom du pokemon dans les span avec la classe pokemon-name

let span_pokemon = document.querySelectorAll(".pokemon-name");

span_pokemon.forEach(element => {
    element.innerText = pokemonChoisi;
})

// placer l'histoire dans le div avec l'id story
let div = document.querySelector("#story");
div.innerText = storyChoisi;

//placer l'image dans le div avec l'id image-spot

let image = document.getElementById("image-spot");
image.innerHTML='<img src="assets/'+ pokemonChoisi+'.png" />'


// Syntaxe alternative :
// let img = document.createElement("img");
// img.setAttribute('src', 'assets/' + pokemonChoisi + '.png')
// console.log(img);
// let divimg = document.querySelector('#image-spot');
// divimg.append(img);

// <img src='assets/nomDuPokemon.png' /> 
// on sait que le nomDuPokemon est stocké dans la variable pokemonChoisi 
// donc on va créer une chaine de caractères qui a la balise image et le nom du pokemonChoisi