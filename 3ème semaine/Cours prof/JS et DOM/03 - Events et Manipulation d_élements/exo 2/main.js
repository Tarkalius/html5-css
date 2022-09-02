// let couplet = document.getElementById("coup1");
// console.log(couplet);

// let refrain = document.getElementsByClassName("refrain");
// console.log(refrain);

// let refrains = document.querySelectorAll(".refrain");
let refrains = document.getElementsByClassName("refrain");
console.log(refrains);
let couplet_2 = document.getElementById("coup2");
// let couplet_2 = dpcument.querySelector("#coup2");
console.log(couplet_2);
console.log(couplet_2.innerText);   

for(let i=0; i<refrains.length; i++){
    changeColor(refrains[i], 'red');
}
let couplets = document.querySelectorAll(".couplet");
couplets.forEach(element => {
    element.style.fontFamily = "Comic Sans MS";
});
function changeColor(element, couleur){
    element.style.color = couleur;
}
