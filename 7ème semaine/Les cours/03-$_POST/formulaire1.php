<?php

echo '<pre>';
	print_r( $_POST );
echo '</pre>';

if( $_POST ){ //SI il y a eu un post (donc un "submit"), c'est que l'on a validé le formulaire

	echo 'Prénom posté : '. $_POST['prenom'] .'<br>';

	echo "Description postée : $_POST[description] <br>";
}

/*
$_POST est superglobale de PHP et retournera donc un array et s'ecrira toujours en MAJSUCULE

Pour parcourir un Array, il faut préciser entre crochets les indices du tableau, ici qui correspondent aux attributs name="" des inputs

	Ex: $_POST['test'] où 'test'' correspond à l'attribut name="test" d'un input.

	D'où la nécessité de bien renseigner cet attribut pour récupérer les saisies de l'utilisateur
*/

//----------------------------------------------------------
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Formulaire 1</title>
</head>
<body>
<hr>
	<form method="post" action="" enctype="multipart/form-data">
	<!-- Les attributs de la balise <form>

		method="" : comment vont circuler données (post ou get(par défaut))

		action="" : URL de destination lors de la validation du formulaire

		enctype="multipart/form-data" : INDISPENSABLE pour pouvoir uploader des fichiers
	 -->

		<label for="prenom">Prenom</label><br>
		<input type="text" name="prenom" id="prenom"><br><br>
		<!-- NE SURTOUT PAS OUBLIER L'ATTRIBUT name="" DANS LES INPUTS D'UN FORMULAIRE 

		C'est ce qui va indéxer le tableau que va retourner la superglobale $_POST et donc de pouvoir récupérer les valeurs saisies de l'utilisateur
		-->

		<label>Description</label><br>
		<textarea name="description"></textarea><br><br>

		<input type="submit" value="Valider">
		<!-- TOUJOURS un input (ou button) de type="submit" pour valider l'envoie des infos du formulaire -->
	</form>

</body>
</html>
