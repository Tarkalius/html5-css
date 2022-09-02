<?php
// 4.1 - Déclarer un tableau avec tous les fruits : pommes, cerises, poires, bananes
$tab_fruits = array( 'pommes', 'poires', 'cerises', 'bananes' );

// 4.2 - Déclarer un tableau avec tous les poids suivants : 100, 500, 1000, 2000, 5000
$tab_poids = [100, 500, 1000, 2000, 5000];

// 	4.3 - Affichez les 2 tableaux (faire un print_r() !!! )
echo "<pre>";
	print_r( $tab_fruits );
echo "<hr>";
	print_r( $tab_poids );
echo "</pre><hr>";

// 4.4 - Sortir le fruit 'cerise' avec le poids 500 via les tableaux créés pour les transmettre à la fonction calcul() et ainsi obtenir le prix

require_once 'fonction.inc.php'; //inclusion du fichier pour accéder à la fonction calcul()

echo $tab_fruits[2] .'<br>'; //cerises
echo $tab_poids[1] .'<br>'; //500

echo calcul( $tab_fruits[2], $tab_poids[1] ) . '<hr>';

// 4.5 - Sortir TOUS les prix pour les cerises avec tous les poids (boucle)

foreach( $tab_poids as $valeur ){

	echo calcul( $tab_fruits[2], $valeur );
}
//---------------------------------------
echo "<p>La taille du tableau des poids est de : ". sizeof( $tab_poids ) ."</p>";

for( $i = 0; $i < sizeof( $tab_poids); $i++ ){

	echo calcul( $tab_fruits[2], $tab_poids[ $i ] );
}

echo "<hr>";
// 4.6 - Sortir tous les prix pour tous les fruits avec tous les poids (boucles imbriquées)
foreach( $tab_fruits as $valeur_fruit ){

	echo "<h3> $valeur_fruit </h3>";

	foreach( $tab_poids as $valeur_poids ){

		echo calcul( $valeur_fruit, $valeur_poids );
	}
}
echo "<hr><hr>";
//-------------------------------------------------
for($i = 0; $i < sizeof($tab_fruits); $i++ ){

	echo "<h3> $tab_fruits[$i] </h3>";

	for( $j = 0; $j < count($tab_poids); $j++ ){

		echo calcul( $tab_fruits[$i], $tab_poids[$j] );
	}
}

echo "<hr>";
// 	4.7 - faire un affichage dans un tableau ('<table>') pour un affichage plus 'propre'
// 		les titres des colonnes seront les poids
// 		les titres des lignes seront les fruits

echo "<table border='1'>";
	echo "<tr>";
		echo "<td> &nbsp; </td>";
		foreach( $tab_poids as $poids ){

			echo "<th> $poids </th>";
		}
	echo "</tr>";

	foreach( $tab_fruits as $fruit ){

		echo "<tr>";
			echo "<th> $fruit </th>";

			foreach( $tab_poids as $poids ){

				echo "<td>". calcul( $fruit, $poids  ) ."</td>";
			}
		echo "</tr>";
	}
echo "</table>";

echo "<p style='margin-bottom:500px;'>-</p>";
