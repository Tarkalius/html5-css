let but1 = document.querySelector("#btn1");
console.log(but1);

but1.addEventListener("click", function(){
    but1.textContent = "Boo !!!"
})


let but2 = document.querySelector("#btn2")

but2.addEventListener("click", function(){
    but2.outerHTML = '<img src="Capture.PNG">'
})


let but3 = document.querySelector("btn3")

but3.addEventListener("click", function(){
    but3.innerHTML = '<img src="Orc gneeeeh.gif">'
})


// récupérer le bouton 3 avec querySelector

let btn3 = document.querySelector("#but3");
console.log(btn3);

// on récupère nos éléments couplets et refrains 

let couplets = document.getElementsByClassName("couplet");
let refrains = document.querySelectorAll(".refrain");

console.log(refrains, couplets);

// on va placer les refrains AVANT les couplets
// donc mon élément de référence c'est le couplet
// et l'élément à déplacer c'est le refrain 

// premierCouplet.insertAdjacentElement('beforebegin', premierRefrain)



// on va ajouter l'évènement click sur notre bouton 

btn3.addEventListener("click", function(){
    // couplets[0].insertAdjacentElement('beforebegin', refrains[0]);
    // couplets[1].insertAdjacentElement('beforebegin', refrains[1]);
    // couplets[2].insertAdjacentElement('beforebegin', refrains[2]);

    for(let i=0; i<couplets.length; i++){
        couplets[i].insertAdjacentElement('beforebegin', refrains[i]);
    }
})