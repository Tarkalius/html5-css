// récupérer les éléments mots et changer la couleur de leur background quand on passe la souris dessus 
$(".mot").mouseover(function(){
    $(this).toggleClass("color");
})

// récupérer les éléments images et les faire apparaitre lorsqu'on clique sur le mot

$(".mot").click(function(){
    // en utilisant la classe :
    $(this).next().toggleClass('cache');
    // en utilisant un effet : 
    $(this).next().fadeToggle(1000);
})