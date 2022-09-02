// 1) modifier le texte des boutons 

let tab = document.querySelectorAll("button");

tab[0].innerText="Bonjour George"
tab[1].innerText="Moi je suis plus beau"
tab[2].innerText="Yas mine"


for(let i=0; i<tab.length; i++){
    tab[i].innerText="Nouveau Contenu";
}

tab.forEach(element => {
    element.innerText="Nouveau Contenu 2";
})

// 2) changer un bouton par une image en utilisant JS   
// 3) ajouter un gif à l'intérieur d'un bouton 
