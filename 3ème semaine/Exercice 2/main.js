let h1 = document.querySelector("h1");
console.log(h1.textContent);


let b1 = document.querySelector("#b1");
console.log(b1.textContent);
b1.textContent = "J'ai changer !";

let btn2 = document.querySelector("#btn2");
btn2.outerHTML='<img id="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/260px-Smaug_par_David_Demaret.jpg" />';
// 3) ajouter un gif à l'intérieur d'un bouton 
let btn3 = document.getElementById("btn3");
btn3.innerHTML = '<img src="https://media.giphy.com/media/Phzg1XZgJTeZG/giphy.gif" />';

// La deuxième possibilité : utiliser des tableaux 

let boutons = document.querySelectorAll("button");
console.log(boutons);

console.log(boutons[0], boutons[1], boutons[2]);

// 1) modifier le texte des boutons 
for(let indice=0; indice<boutons.length; indice++){
    console.log(boutons[indice]);
    boutons[indice].textContent="Nouveau contenu";