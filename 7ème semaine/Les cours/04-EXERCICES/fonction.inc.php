<?php
/*1 - Créer un fichier fonction.inc.php : et créer une fonction calcul() qui va recevoir 2 arguments (fruit, poids) et qui va retourner la phrase :

 => utiliser une condition : qui selon le fruit sélectionné, on créera une variable $prix_kg
		=> ex: si c'est pomme c'est 2€ 
		=> ex: si c'est poires c'est 3€ 

	"Les 'fruit' coutent ... € pour un poids de 'poids' grammes" 

	=> pommes, bananes, cerises, poires (retournent un prix au kg)
*/

function calcul( $fruit, $poids ){

	switch( $fruit ){

		case 'pommes' : $prix_kg = 1; break;
		case 'bananes' : $prix_kg = 2; break;
		case 'cerises' : $prix_kg = 3; break;
		case 'poires' : $prix_kg = 4; break;
	}

		// if( $fruit == 'pommes' ) {
		// 	 $prix_kg = 1; 
		// } 
		// elseif( $fruit == 'poires' ){
		// 	 $prix_kg = 2; 
		// } 
		// elseif( $fruit == 'bananes' ){
		// 	 $prix_kg = 3; 
		// } 
		// elseif( $fruit == 'cerises' ){
		// 	 $prix_kg = 4; 
		// } 

	//calcul pour avoir le prix en fonction du poids :
	$prix_total = $poids * $prix_kg / 1000;

	return "Les $fruit coutent $prix_total € pour un poids de $poids grammes<br>" ;
}

// echo calcul( 'pommes', 1500 );
// echo calcul( 'cerises', 3000 );