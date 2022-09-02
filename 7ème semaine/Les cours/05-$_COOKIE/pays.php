<?php 
echo "<pre>";
	print_r( $_GET );
echo "<hr>";
	print_r( $_COOKIE );
echo "</pre>";

if( isset( $_GET['pays'] ) ){ //SI il existe 'pays' dans l'URL, c'est que l'on a cliqué sur un lien

	$pays = $_GET['pays']; //Ici, on récupère la valeur apssée dans l'URL (fr, it, es ou en) et on la stocke dans la variable '$pays'
}
elseif(  isset( $_COOKIE['langue_choisie'] ) ){ //SI il existe un cookie nommée 'langue_choisie'

	$pays = $_COOKIE['langue_choisie']; //Ici, on récupère la valeur du cookie et l'affecte à la variable '$pays'
}
else{ //SINON, c'est que c'est la première fois que l'on arrive sur la page et donc que l'on a pas cliqué sur un lien. Par défaut, on va affecter la valeur 'fr' à la variable '$pays'

	$pays = 'fr';
}
//-------------------------------
//print_r( time() ); //time() : retourne le timestamp = nombre de seconde depuis le 1er janvier 1970

$un_an = 365 * 24 * 60 * 60; //duree en seconde pour une année
	// 365jrs * 24h * 60min * 60sec
	//echo "<br>". $un_an;

setcookie( 'langue_choisie', $pays, time()+$un_an );
//Ici, on crée un cookie, qui sera crée dans tous les cas puisqu'ici, nous ne sommes pas dans une condition

	// UN COOKIE SERA ENREGISTRE COTE CLIENT !!!

//setcookie( arg1, arg2, arg3 ); //Fonction interne de php
	//arg1 : nom du cookie
	//arg2 : valeur du cookie
	//arg3 : durée de vie du cookie

//Pour accéder aux cookies (Chrome):
	//Cliquer sur : paramètre/
					//Confidentialité et sécurité/
						//Cookies et autres données de site/
							//Afficher l'ensemble des cookies et données de site/
								//Rechercher : 'localhost'
//-------------------------------
switch( $pays ){ //Ici, on compare la valeur de '$pays' aux différents cas du switch (donc si c'est : fr, it, es ou en) et on déclarera une variable '$titre' que l'on affichera dans le h1 avec la valeur de la langue choisie

	case 'fr' : $titre = "Bonjour La France"; break;
	case 'it' : $titre = "Bongiorno Italia"; break;
	case 'es' : $titre = "Hola Espana"; break;
	case 'en' : $titre = "Hello England"; break;
}

//----------------------------------------------------
?>
<h1> <?php echo $titre; //affichage ?> </h1>

<ul>
	<li><a href="?pays=fr">France</a></li>
	<li><a href="?pays=it">Italie</a></li>
	<li><a href="?pays=es">Espagne</a></li>
	<li><a href="?pays=en">Angleterre</a></li>
</ul>
