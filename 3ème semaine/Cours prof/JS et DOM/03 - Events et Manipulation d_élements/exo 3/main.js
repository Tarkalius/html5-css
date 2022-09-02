let couplet = document.getElementById("coup1");
console.log(couplet);

let refrain = document.getElementsByClassName("refrain");
console.log(refrain);

function test(){
    console.log("je teste !");
}



// Question 1
// récupérer les boutons avec querySelector 
// les stocker dans des variables 
let but1 = document.querySelector('#but1');
let but2 = document.getElementById("but2")
// ajouter un EventListener avec addEventListener 
// il va prendre en entrée les paramètres : 
// click et la fonction qui va permettre de changer le style 
// dans la fonction pour changer le style, on doit 
// accéder à la couleur de l'élement et la mettre à rouge/bleu 
but1.addEventListener('click', function(){
    let refrains = document.querySelectorAll(".refrain");
    refrains.forEach(element => {
        element.style.color='blue';
    })
})
but2.addEventListener('click', function(){
    let couplet = document.getElementsByClassName("couplet");
    for(let i=0; i<couplet.length; i++){
        if(couplet[i].style.color=='red'){
            couplet[i].style.color='black';
        }else{
            couplet[i].style.color="red";
        }

    }
})

// Question 2 
// récupérer le couplet 2 avec querySelector 
let coup2 = document.querySelector("#coup2");
// le stocker dans une variable 
// accéder au style 
// et changer la police pour la police de votre choix 
coup2.style.fontFamily = "Comic Sans MS";

// Question 3
// récupérer le dernier refrain 
let dernier_refrain = document.getElementById("ref3");
dernier_refrain.style.fontStyle ="italic";
// alternative 
refrain[length-1].style.fontStyle = "italic";
//le stocker dans une variable 
// accéder au style 
// le mettre en italique

let couplets = document.querySelectorAll(".couplet");
let refrains = document.querySelectorAll(".refrain");
let boutton3 = document.querySelector("#but3");
boutton3.addEventListener('click', function(){
        for(let i=0; i<couplets.length; i++){
        let inter = couplets[i].innerText;
        couplets[i].innerText = refrains[i].innerText;
        refrains[i].innerText = inter;
    }
    
})


// la création du bouton
let but3 = document.createElement("button");
// lui attribuer un id #but3
but3.setAttribute("id", "but3");
// lui donner un contenu 
but3.textContent="inverser les couplets et les refrains"
but2.insertAdjacentElement('afterend', but3);

but3.addEventListener('click', function(){
	if(document.querySelector("p").getAttribute('class')=='couplet'){
		invert(couplets, refrains);
	}
	else{
		invert(refrains, couplets);
	}

	couplets.forEach((element, index) => {
		//document.body.insertBefore(refrain[index], element);
		element.insertAdjacentElement('beforebegin', element.nextElementSibling);
	})
})


function invert(premier, deuxieme){
	premier.forEach((element, index) => {
		//document.body.insertBefore(refrain[index], element);
		element.insertAdjacentElement('beforebegin', deuxieme[index]);
	})
}

let erase_coup = document.createElement("button");
let erase_ref = document.createElement("button");

erase_coup.innerText="Supprimer les couplets"
erase_ref.innerText="Supprimer les refrains"

but3.insertAdjacentElement("afterend", erase_coup);
erase_coup.insertAdjacentElement('afterend', erase_ref);

erase_coup.addEventListener('click', function(){
    if(document.querySelector('.couplet')==null){
        couplets.forEach((element, i)=>{
            document.body.insertBefore(element, refrain[i]);
        })
    }else{
        couplets.forEach(element => {
            element.remove();
        })
    }
    
    console.log(document.querySelector('.couplet'));
});


