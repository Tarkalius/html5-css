// le pseudo code : 
// première étape : générer un nombre aléatoire 
// pour générer un nombre aléatoire on peut utiliser la fonction random (qu'on a déjà fait auparavant)
// on va créer une variable à laquelle on va affecter le nombre généré 
// nombreGénéré <= random()

// récupérer l'input field 
// on a besoin d'utiliser un querySelector 
// document.queryselector(inputfield)
// on va le stocker dans une variable 
// donc ça va être :
// input <= document.querySelector()

// pour récupérer la valeur, on va utiliser l'attribut value 
// input.value

// on a le bouton pour entrer la proposition 
// quand l'utilisateur rentre une proposition 
// on va la comparer avec le nombre généré 
// donc si(proposition<nombreGénérer) => afficher plus !
// si(proposition>nombreGénérer) => afficher moins !
// sinon afficher c'est gagné !

// l'affichage va se faire dans une zone de texte en desosus de l'input field
// on va récupérer la zone de texte
// zoneText <= document.querySelector(zoneDeTexte)
// on va affecter à son contenu textuel (donc innerText) ce qu'il faut afficher (plus ou moins ou c'est gagné)!


// Correction
// génération d'un nombre random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let max = 100;
let nbAdeviner = getRandomInt(max);
let compteur = 3;

// Première instruction : lorsque l'utilisateur clique sur le bouton, on récupère la supposition 
// Pour se faire, on va utiliser l'attribut value des input field 
// on récupère le bouton et on le stock dans une variable (let button <= querySelector)
let button = document.querySelector("button");
// on lui ajoute un EventListener (button.addEventListener('click','fonction'));
button.addEventListener('click', function (){
// la fonction va consister à récupérer la valeur de input field 
// on va déclarer une variable input (let input = querySelector())
let input = document.querySelector("input");
// on va ensuite lui assigner la valeur à l'intérieur de l'input (input = input.value)
let temp = input.value;
input.value = "";
compteur=compteur-1;
let reponse = plusOuMoins(temp, nbAdeviner, compteur);
pushToDom(reponse);
});

// Deuxième instruction, il faut voir si la valeur récupérer est supérieur ou inférieur au nombre généré aléatoirement 
// pour cela, il faut créer une fonction plusOuMoins 
function plusOuMoins(x, random, compteur){
    // elle prend en entrée la valeur (input)
    // et retourne en sortie un string "plus" si la valeur input est inférieure au nombre généré
    if (compteur==0){
        return "tu as perdu";
    }
    else if (x<random){
        return "plus";
    }
    else if(x==random){
        return "tu as trouvé !";
    }
    else {
        return "moins";
    }
    // et retourne en string "moins" si la valeur input est supérieure au nombre généré 
}


// Troisième instruction, il faut écrire une fonction pushToDom qui prend en entrée un string 
function pushToDom(chaine){
    let p = document.querySelector("#reponse-js");
    console.log(p);
    p.innerText=chaine;
}
// (plus ou moins, que nous renvoie la fonction plusOuMoins)
// elle va récupérer le champ texte vide et le stocker dans une variable (let texte = querySelector())
// elle va mettre plus ou moins dans son text en utilisant l'attribut (innerText)

// les fonctions plusOuMoins et pushToDom sont appelées dans la fonction de l'EventListener.
// donc dans la fonction eventListener 
// à la suite de input = input.value 
// on va faire let plusMoins = plusOuMoins(input) // appeler la fonction plusOuMoins qui va retourner si la valeur est plus grande ou plus petite 
// puis on va faire pushToDom(plusOuMoins) qui va écrire dans le champ de texte plus ou moins.



// 1. ajouter un compteur 
// le compteur va servir à limiter le nombre d'essais que l'utilisateur a 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let nbGenere = getRandomInt(100);
let compteur = 5;
let input = document.querySelector("input");
document.querySelector("button").addEventListener("click", function(objetEvent){
    console.log(objetEvent);
    if(compteur>0){
        if(input.value<nbGenere){
            document.querySelector("#plus-ou-moins-spot").innerText="Plus"
        }
        else if(input.value>nbGenere){
            document.querySelector("#plus-ou-moins-spot").innerText="Moins"
        }
        else{
            document.querySelector("#plus-ou-moins-spot").innerText="Tu as trouvé !"
        }
    }
    else{
        document.querySelector("#plus-ou-moins-spot").innerText="Tu as perdu !"
    }
   
    compteur = compteur -1;
})

// 2. quand l'utilisateur tape entrer, on doit afficher plus/moins/egal
// on va utiliser uné vènement différent, ça va être keyUp
console.log(nbGenere);
input.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        if(compteur>0){
            if(input.value<nbGenere){
                document.querySelector("#plus-ou-moins-spot").innerText="Plus"
            }
            else if(input.value>nbGenere){
                document.querySelector("#plus-ou-moins-spot").innerText="Moins"
            }
            else{
                document.querySelector("#plus-ou-moins-spot").innerText="Tu as trouvé !"
            }
        }
        else{
            document.querySelector("#plus-ou-moins-spot").innerText="Tu as perdu !"
        }
       
        compteur = compteur -1;
    }
});