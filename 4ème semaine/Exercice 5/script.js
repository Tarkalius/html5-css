// sauvegarder au chargement de la page
// le contenu html qui existait dans ma div 

// je vais le sauvegarder dans une variable 

let sauvegardeDiv1 = $("#div1").html();
console.log(sauvegardeDiv1);

$("#div1").on("click", function(){
    // écrire les instructitons qui vont s'executer
    // lorsque l'utilisateur clique sur la div
    
    // si le contenu HTML au contenu de la variable de stockacge
    if($("#div1").html()==sauvegardeDiv1){
        // on va le modifier pour mettre une image
        $("#div1").html('<img src="https://media.giphy.com/media/PXpEPG4Ylek8MpvaIu/giphy.gif" />');
    }
    // sinon on va remttre le contenu de la variable de stockage
    // comme contenu HTML de notre div
    else{
        $("#div1").html(sauvegardeDiv1);
    }
});

// donc on va reprendre le même principe pour la div2

// sélectionne div2
$("#div2");
// on peut vérifier que ça nous récupère correctement notre div2 en faisant un console.log
console.log($("#div2"));

// on sait que ça sélectionne notre div2, on va ajouter l'eventListener pour le survol
// typeEvent : mouseover

// on va créer une variable de stockage qui permet de garder le contenu HTML de ma div 
let stockageDiv2 = $("#div2").html();
$("#div2").on("mouseover", function(){
    // on va donc écrire les instructions qui permettent de changer la valeur 
    // du contenu html quand on survole
    console.log($("#div2"));
    if($("#div2").html()==stockageDiv2){
        $("#div2").html('<img src="https://media.giphy.com/media/PXpEPG4Ylek8MpvaIu/giphy.gif" />');
    }
    else{
        $("#div2").html(stockageDiv2);
    }
})

// selectionner l'élément :
$("#premier");
console.log($("#premier"));

// ajouter un event : click

$("#premier").on("click", function(){
    // ici on a les instructions qui vont s'executer lorsque le clic a lieu 
    console.log($("#premier"));

    // fonction css
    // elle a deux paramètres :
    // attribut css : exemple font-family, color, display, etc..
    // la valeur

    // $("element").css("attribut css", "valeur");
    $("#premier").css("background-color", "blue");
})