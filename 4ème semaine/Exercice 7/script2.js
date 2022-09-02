// On va refaire ça dans l'eventListener de chacune des cases

// récupérer notre élément : 

$("#col1").on("mouseover", function(){
    // appeler la fonction qui permet de générer une couleur al"atoire 

    let color = genererCouleur();
    console.log(color);
    $("#col1").css("background-color", color);
})

$("#col2").on("mouseover", function(){
    let color = genererCouleur();
    $("#col2").css("background-color", color);
})

$("#col3").on("mouseover", function(){
    let color = genererCouleur();
    $("#col3").css("background-color", color);
})


// solution 2
for(let indice=1; indice<5; indice++){

    $("#col"+indice).on("mouseover", function(){
        let color = genererCouleur();
        $("#col"+indice).css("background-color", genererCouleur());
    });

}

// this est un mot clé qui permet de référence l'élément sur lequel
// l'action qui déclenche l'évènement a eu lieu
$(".col-sm").on("click", function(){
    let color = genererCouleur();
    $(this).css("background-color", genererCouleur());
})