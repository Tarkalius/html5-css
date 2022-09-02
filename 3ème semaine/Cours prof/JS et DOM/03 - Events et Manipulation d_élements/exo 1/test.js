let a = "Yasmine";
let b ="Bouamraaa";
// console.log(a+b); // YasmineBouamra
// console.log(a+" "+b); // Yasmine Bouamra
// console.log(a+"\t"+b); // Yasmine
// // Bouamra

// console.log(a+b); 
// console.log(a, b);
// console.log(a.length, b.length);
// console.log(a.length + b.length);

// console.log(a[4], a[5]);
// console.log(a.charAt(4), a.charAt(5));
// let c="";
// console.log(c);

// const pi=3.14;
// let r=4;
// let res=pi*r*r-5;
// console.log(res);
// let res2=5*4*2-1-(7+2);
// console.log(res2/0);
// console.log(typeof(res), typeof(res2));

// console.log("11"+"5"+2);
// console.log(typeof("11"+"5"+2));

// let c= -0&&true;
// console.log(c);

// let age = prompt("Bonjour \n Quel est votre âge ?");

// if (age>=18 && age<80){
//     alert("possibilité d'avoir le permis");
// }
// else if(age>80)
// {
//     alert("Vous ne pouvez plus passer votre permis, vous avez plus de 80 ans");
// }
// else {
//     alert("vous êtes trop jeune, vous avez" + age+ "attendre" + (18-age) + " ans");
// }

// let x =prompt ("votre valeur : "); // x = "-5" / x="5" / x="2"
// // x.charAt(indice) ou bien x[indice]
// // si le nombre est négatif, son inidice 0 sera forcément -
// // si l'utilisateur entre -5, à l'indice 0 il y aura -
// // sinon c'est un nombre positif
// // soit l'utilisateur va rentrer +5 ou 5 mais quoi qu'il en soit
// // ça sera pas un - donc on met dans le else
// // on va !!!tester!!! si le premier caractère est un -
// // si c'est le cas ça veut dire valeur négative 
// // sinon ça veut dire valeur positive
// if (x[0]  =="-" ) { // on peut aussi écrire if(x.charAt(0) == "-")
//     alert (" Valeur  négatif  " +x ); 
//     // on doit faire une concaténation sinon la deuxième variable est ignorée
// }
// else {
// alert (" Valeur positif   " +x );
// }


// let x= prompt("choisissez un jour de la semaine ");
// x = parseInt(x, 10);
// console.log(x);

// switch(x){
//     case 1:
//         console.log("lundi");
//         break;
//     default:
//         console.log("error")
// }


// for (let index = 100; index> 0; index--) {
//     if((index%2)!=0){ // pour les nombres impairs
//         console.log(index);
//     }
// }
// for (let index = 100; index> 0; index--) {
//     if((index%2)==0){ // pour les nombres pairs
//         console.log(index);
//     }
// }

// for(let i=100; i>=0;i--)
// {
//     if(i==0)
//     {
//         alert("bravo");
//     }
//     else{
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 200; i++) {   
//     if (i%5==0 && i%7==0) {
//         console.log("helloWorld")
//     }
//     else if (i%7==0) {
//         console.log("world")
//     }
//     else if (i%5==0) {
//         console.log("hello")
//     }
//     else {
//         console.log(i)
//     }
// }

// let password = prompt("entrez un mdp");
// console.log(password.length);
// while((password.length<8  || password.length>32) && password!=null)
// {
//      console.log("je suis dans la boucle");
//      password = prompt("Entrez un mot de passe valide (entre 8 et 32 caractès");
//      console.log(password);
//  }

// let i=100;
// while(i>=0)
// {
//     if(i==0)
//     {
//          alert("bravo");
//     }
//     else{
//          console.log(i);
//       }
//       i--; // i=i-1;
// }


// on a une première boucle qu'on va utiliser pour itérer entre 0
// et 400 et vérifier que le nombre n'est pas premier 

// on a un nombre premier n 
// et on a une boucle for ou while 
// on a besoin de diviser sur tous les indices 
// pour pouvoir vérifier qu'il est premier 
// il est premier seulement si il n'est pas divisible. 

// on va stocker si il est divisible ou pas dans un boolean 
// on va nommer notre boolean premier 
// premier = true si il est premie 
// premier = false si il n'est pas premier 

// si n%i==0 > premier = false 
// si n%i!=0 > premier = true 
// for (let n = 1; n <= 400; n++) {
//     let i=2;
//     let premier = true;
//     while(premier===true && i<n)
//     {
//         // dès que n est divisble par i, on s'arrête
//         if(n%i==0)
//         {
//             premier=false;
//         }
//         i++;
//     }
//     if(premier===true){
//         console.log(n);
//     }
// }


// let objet = new Object;
// objet.utilite="Je sers de boite";
// objet.taille="j'ai une taille qui change, tu peux mettre autant d'infos que tu veux !";

// console.log(objet.utilite);
// console.log(typeof(objet.utilite));
// console.log(objet.utilite.length);

// let objet = {
//     utilite: "je sers de boite",
//     taile: "j'ai une taille non définie"
// };

let animal = new Animal("lion", "1.2m",[100, 150]);

function Animal(name, tail, poid){
    this.nom = name;
    this.taille = tail;
    this.poids = poid;
}

console.log(animal);

let animal2 = new Animal("gazelle", "1.7m", 150);
console.log(animal2);