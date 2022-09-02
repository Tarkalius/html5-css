<?php
session_start();
//dans notre exemple : lorsque l'on effectue un session_start(), la session n'est pas recrée car existe déjà, grâce au session_start que l'on a déclenché dans le fichier session1.php

print "<pre>";
	print_r( $_SESSION ); 
print "</pre>";

//Ce fichier n'a rien a voir avec le fichier 'session1.php', nous n'avons pas d'inclusion, il pourrait se nommer n'importe comment , se trouver dans un autre dossier, les informations seraient toujours accessibles via la superglobale $_SESSION 
	//Ce qui est l'intéret et la puissance des sessions

echo $_SESSION['prenom'];
