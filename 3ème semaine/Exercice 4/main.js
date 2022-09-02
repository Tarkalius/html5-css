// pour modifier le style on accéde à l'attribut style
// puis à l'élément qu'on veut modifier en particulier

// Les éléments CSS composés sont transformés ainsi
// font-family => fontFamily
// background-color => backgroundColor 
// font-weight => fontWeight


//1ère méthode

let refrain = document.querySelectorAll(".refrain");
console.log(refrain);


//2ème méthode


let refrain2 =document.getElementsByClassName("refrain");
console.log(refrain2)


//Récupérer et afficher le couplet 2 dans la console

let couplet2 = document.querySelector("#coup2")
console.log(couplet2, couplet2.textContent)


//Modifier la couleurs des refrains pour le mettre en bleu

for(let indice=0; indice<refrain.length; indice++){
    refrain[indice].style.color ="blue";
}


//Changer la police des couplets

let couplets = document.querySelectorAll(".couplet");

for(let indice=0; indice<couplets.length;indice++){
    couplets[indice].style.fontFamily ="Comic Sans MS";
}

// Mettre les refraisn en rouge quand on clique sur le bouton 
// Première étape : on va récupérer le bouton 

let but1 = document.querySelector("#but1");
console.log(but1);

// Pour ajouter l'évènement click, on utilise un eventListener

but1.addEventListener("click", function(){
    // écrire le traitement qui aura lieu lorsqu'on clique sur le bouton but1
    let refrains = document.getElementsByClassName("refrain");
    console.log(refrains);

    // refrains[0].style.color="blue";
    // refrains[1].style.color="blue";
    // refrains[2].style.color="blue";

    for(let indice=0; indice<refrains.length; indice++){
        refrains[indice].style.color="blue";
    }

});

// mettre les couplets en rouge quand on clique sur le bouton 

// première étazpe : on récupère le bouton but2

let but2 = document.getElementById("but2");
console.log(but2);

// on ajoute l'évènement click en utilisant addEventListener

but2.addEventListener("click", function(){
    // faire le traitement qui permet de mettre les couplets en rouge 

    // première étape : récuperer les couplets
    let couplets = document.querySelectorAll(".couplet");
    console.log(couplets);

    for(let indice=0; indice<couplets.length;indice++){
        couplets[indice].style.color="red";
    }
});

// changer la police du deuième couplet quand on clique dessus 

// couplets[1]

let coup2 = document.querySelector("#coup2");

coup2.addEventListener("click", function(){
    coup2.style.fontFamily = "Comic Sans MS";
});

// mettre le refrain en italique lorsque l'on clique dessus 

let ref3 = document.getElementById("ref3");

// ajouter l'eventListener

ref3.addEventListener("click", function(){
    ref3.style.fontStyle="italic";
})

// récupérer le bouton 3 avec querySelector

let btn3 = document.querySelector("#but3");
console.log(btn3);

// on récupère nos éléments couplets et refrains 

let couplet = document.getElementsByClassName("couplet");
let refrains = document.querySelectorAll(".refrain");

console.log(refrains, couplet);

// on va placer les refrains AVANT les couplets
// donc mon élément de référence c'est le couplet
// et l'élément à déplacer c'est le refrain 

// premierCouplet.insertAdjacentElement('beforebegin', premierRefrain)



// on va ajouter l'évènement click sur notre bouton 

btn3.addEventListener("click", function(){
    // couplets[0].insertAdjacentElement('beforebegin', refrains[0]);
    // couplets[1].insertAdjacentElement('beforebegin', refrains[1]);
    // couplets[2].insertAdjacentElement('beforebegin', refrains[2]);

    for(let i=0; i<couplet.length; i++){
        couplet[i].insertAdjacentElement('beforebegin', refrains[i]);
    }
})

let btnSupp = document.createElement("button");
btnSupp.textContent= "Supprimer refrains";
console.log(btnSupp);

btn3.insertAdjacentElement('afterend', btnSupp);