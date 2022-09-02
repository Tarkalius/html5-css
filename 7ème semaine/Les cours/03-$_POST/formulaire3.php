<h1>Formulaire 3</h1>

<a href="formulaire2.php"> Retour formulaire 2</a>

<?php
//------------------------------------------------------------
echo '<pre>';
	print_r( $_POST );
echo '</pre>';

//EXERCICE: Affichez les données issues du formulaire2.php et faites en sorte d'informer l'internaute que le prenom ET le mail sont obligatoires (donc dans le cas où le champ est vide affiche un message d'erreur)

	//empty() : teste si c'est une variable est vide !

	//2 solutions :
		//message personnalisé :   => les champs sont obligatoires
								// => le prenom est obligatoire
								// => l'email est obligatoire

		//message global => "les champs sont obligatoires"

	//Bonus : la version ternaire !

if( $_POST ){ //SI il a eu validation du formulaire2.php

	//Ici, je stocke les valeurs renseignées par l'utilisateur dans des variables
	$pseudo = $_POST['pseudo'];
	$email = $_POST['email'];

	if( empty( $pseudo ) && empty( $email ) ){ //SI l'input 'pseudo' -ET- l'input 'email' SONT VIDES

		echo "<p style='color:red;'> Vous devez renseigner votre pseudo ET votre email </p>";
	}
	elseif( empty( $pseudo ) ){ //SINON SI l'input 'pseudo' EST VIDE

		echo "<p style='color:red;'> Vous devez renseigner votre pseudo </p>";
	}
	elseif( empty( $email) ){

		echo "<p style='color:red;'> Vous devez renseigner votre email </p>";
	}
	else{

		echo "<p>Votre pseudo est : $pseudo <br> Votre email est : $email</p>";
	}

	//---------------------------------------
	if( empty( $pseudo) || empty( $email) ){ //SI l'input 'pseudo' -OU- si l'input 'email' (ou les deux) EST VIDE 
	 	
		echo "<p style='color:darkred;'> Vous devez renseigner tous les champs </p>";
	}
	else{ //SINON , c'est que les deux champs du formulaire ont été rempli correctement

		echo "<p>Votre pseudo est : $pseudo <br> Votre email est : $email</p>";
	}

	//---------------------------------------
	//version ternaire (avec msg global)
	echo ( empty( $pseudo ) || empty( $email ) ) ? "<p style='color:orange;'> Vous devez renseigner tous les champs </p>" : "<p>Votre pseudo est : $pseudo <br> Votre email est : $email</p>";
}

