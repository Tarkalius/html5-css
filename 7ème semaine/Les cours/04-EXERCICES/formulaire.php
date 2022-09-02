<?php
// 3 - Créer un fichier formulaire.php et réaliser un formulaire permettant de selectionner (select) un fruit et saisir un poids.
// -> Affichez via la fonction calcul(), le resultat issue des infos du formulaire

// 	//A FAIRE EN DERNIER :
// 	-> bonus : faites en sorte de garder le dernier fruit sélectionné et le dernier poids saisie dans le formulaire lorsque celui-ci est validé.

echo '<pre>';
	print_r( $_POST );
echo '</pre>';

require_once "fonction.inc.php"; //inclusion de la fonction calcul()

if( $_POST ){ //SI on a validé le formulaire

	echo calcul( $_POST['fruit'], $_POST['poids'] );
}
//---------------------------------------------------------
?>
<hr>
<form method="post">

	<label>Fruits disponibles :</label><br>
	<select name="fruit">
		<option value="pommes">Pommes</option>
		<option value="cerises">Cerises</option>
		<option value="poires">Poires</option>
		<option value="bananes">Bananes</option>
	</select><br><br>

	<label>Saisissez un poids</label><br>
	<input type="text" name="poids"><br><br>

	<input type="submit" value="Affichez">
</form>