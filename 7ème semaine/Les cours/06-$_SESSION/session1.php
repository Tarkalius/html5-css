<?php

session_start();
//session_start() : fonction interne de php qui permet de créer un fichier de session OU de l'ouvrir s'il existe déjà

	// CE FICHIER SERA ENREGISTRE COTE SERVEUR !!

	// session_start() : sera TOUJOURS situer en haut et en premier avant tout traitements php !!!

print '<pre>';
	print_r( $_SESSION ); //superglobale php => Array
print '</pre>';

//Ici, on alimente notre fichier de session:
$_SESSION['prenom'] = 'Marco';
$_SESSION['nom'] = 'Polo';

//Affichage des infos enregistrées dans le fichier de session :
echo $_SESSION['prenom'] .'<br>';
echo $_SESSION['nom'] .'<br>';

unset( $_SESSION['nom'] );
//unset( $arg ) : fontion PHP qui permet de supprimer une variable ($arg) et donc finalement de vider une partie de la session (ici, le nom)

//session_destroy();
//session_destroy(); : fonction php qui permet de détruire/supprimer le fichier de session

	//A SAVOIR : cette fonction est lu par l'interpréteur PHP, gardé en mémoire puis exécuté A LA FIN du script

echo "j'affiche une info de la session : $_SESSION[prenom] <br>";
echo "Et nous sommes APRES le session_destroy()";
