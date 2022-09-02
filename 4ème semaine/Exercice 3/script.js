// sélectionner chacune des divs
// les afficher dans la console lorsqu'on survole 
// donc l'évènement utilisé ici
// ça sera mouseover


// sélectionner la première div

$("#1").on("mouseover", function(){
    // on vaut pouvoir afficher notre élément au survol 
    console.log($("#1"));
});

// selectionner la deuxième div 

$("#2").on("mouseover", function(){
    // ici on écrit le traitement à faire lorsque l'évent se déclenche
    console.log($("#2"));
})

// sélectionner la troisième div 

$("#3").on('mouseover', function(){
    console.log($("#3"));
});

$("#4").on('mouseover', function(){
    console.log($("#4"));
});

// lorsqu'on utilise text() sans paramètres, on va
// aficher le contenu textuel d'un élément
console.log($("#1").text());

//si on veut modifier le contenu textuel d'un élément, 
// il suffit de passer une chaine de caracètres en 
// paramètres à text()

$('#1').text("Div 123456");

// lorsqu'on clique sur un élément
// on va afficher son contenu textuel 

// évènement : click
// afficher le contenu textuel avec text()

// ma première div a l'id 1
// donc pour récupérer la première div je vais
// faire $("#1"), on met le # parce que c'est un id 

console.log($("#1"));

// maintenant qu'on sait qu'on peut 
// récupérer la première div, on ajoute
// l'évènement click en faisant 
// on

// typeEvent = click

$("#1").on("click", function(){
    // donc ici on va écrire
    // les instructions qui vont se 
    // s'executer quand l'évènement
    // a lieu
    // c'est à dire quand on clique 
    // sur la première div

    console.log($("#1").text());
})

// je refais le même principe pour la deuxième div 

// récupérer la div en faisant $("#2")
// #2 car c'est l'id de la deuxième div

// ensuite on va ajouter l'evenement en faisant on
// typeEvent = click
$("#2").on("click", function(){
    // quand on clique sur la deuxième div
    // on va executer les instructions qui sont écrites
    // ici
    console.log($("#2").text());
})

$("#3").on("click", function(){
    // quand on clique sur la deuxième div
    // on va executer les instructions qui sont écrites
    // ici
    console.log($("#3").text());
})

$("#4").on("click", function(){
    // quand on clique sur la deuxième div
    // on va executer les instructions qui sont écrites
    // ici
    console.log($("#4").text());
})