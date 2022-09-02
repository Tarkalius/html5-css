<?php
//EXERCICE : Créer un menu avec des liens 'hommes', 'femmes', 'enfants'.
//Faites en sorte d'afficher dans un <h1> SUR LA MEME PAGE la valeur passée dans l'URL lorsque l'on clique sur le lien

print '<pre>';
	print_r( $_GET );
print '</pre>';

if( isset( $_GET['type'] ) ){ //SI il existe 'type' dans l'URL (c'est que l'on a cliqué sur un lien)

	$titre = $_GET['type']; //On récupère la valeur passée dans l'URL et on la stocke dans une variable '$titre'
}
else{ //SINON, par défaut on affectera la valeur "accueil" à la variable '$type' pour quelle soit déclaré (c'est à dire la premère fois que l'on arrive sur la page)

	$titre = "accueil";
}
//----------------------------------------------------------------------
?>
<hr>
<nav>
	<ul>
		<li><a href="exercice.php?type=homme">Hommes</a></li>
		<li><a href="exercice.php?type=femme">Femmes</a></li>
		<li><a href="exercice.php?type=enfant">Enfants</a></li>
	</ul>
</nav>

<h1> <?php echo ucfirst( $titre ); //ouverture d'un passage php pour faire l'affichage de la variable '$titre' provenant des traitements php effectués AVANT l'affichage html 
//ucfirst( $arg ) : permet de passer la première lettre d'une chaine ($arg) en MAJUSUCULE ?> </h1>
