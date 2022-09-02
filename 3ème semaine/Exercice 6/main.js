let div1 = document.querySelector("#div1");
console.log(div1);

// ajouter l'eventListener   mouseover 

function changeColor(element, couleur){
    element.style.backgroundColor= couleur;
}

// version 1 : utiliser le timeOut
// div1.addEventListener("mouseover", function(){
//     changeColor(div1, "blue");
//     setTimeout(function () {changeColor(div1, "white")}, 1000);
// });

// version 2 : utiliser une condition
div1.addEventListener("mouseover", function(){
    if(div1.style.backgroundColor!="blue"){
        changeColor(div1, "blue");
    }
    else{
        changeColor(div1, "white");
    }
});

// version 3 : on met une couleur aléatoire à chaque fois qu'on survole

// générer une couleur aléatoire grâce à la fonction randomInt
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
}

// notre couleur c'est RGB(valeurRouge, valeurVert, valeurBleu)

// on va créer nos couelurs aléatoires dans une fonction
function createColor(){
    let valeurRouge = randomInt(256);
    let valeurVert = randomInt(256);
    let valeurBleu = randomInt(256);
    let couleur = "RGB("+valeurRouge+","+valeurVert+","+valeurBleu+")";
    return couleur;
}

// on va créer l'eventListener  

div1.addEventListener("mouseover", function(){
    changeColor(div1, createColor());
});