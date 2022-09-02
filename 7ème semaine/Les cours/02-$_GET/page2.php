<h1>Page 2</h1>

<a href="page1.php">Retour page 1</a>

<?php
//$_GET est superglobale de php qui représente l'URL, il faudra ABSOLUMENT l'écrire en MAJUSCULE, sinon ca retournera une erreur

//TOUTES les superglobales de php retournent des arrays !!

echo "<pre>";
	print_r( $_GET );
echo "</pre><br>";

if( !empty( $_GET ) && isset( $_GET['article'], $_GET['couleur'], $_GET['prix'] ) ){
//SI $_GET N'EST PAS VIDE (c'est qu'il y a des infos passées dans l'URL) ET que les indices de l'array $_GET, article, couleur et prix EXISTENT, alors on affiche le valeurs

	echo 'Paramètre 1 : '. $_GET['article'] .'<br>'; //version concaténation 
	echo 'Paramètre 2 : '. $_GET['couleur'] .'<br>';

	echo "Paramètre 3 : $_GET[prix] <br>"; //Version avec guillemets où les variables sont interprétées
}

/*
	page2.php?article=jean&couleur=rouge&prix=123
<=>
	fichier.php?cle=valeur&cle2=valeur2&cle3=valeur3

Pour faire passer des informations dans l'URL, il faut commencer par un "?" et une suite on précise une 'clé' suivie du symbole égal '=' et de la valeur correspondante.
SI on souhaite passer plusieurs informations dans l'URL, il suffit de les séparer par un "&"

La superglobale $_GET est un array et donc pour récupérer une valeur, il faut préciser la "clé" (qui représente l'indice du tableau retourner par $_GET) entre crochets avec l'array $_GET !
*/
