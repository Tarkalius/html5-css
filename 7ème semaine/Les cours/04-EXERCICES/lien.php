<?php
//2 - Créer un fichier lien.php. Prévoir 4 liens <a href=""></a> avec le nom des fruits afin de faire en sorte que lorsque l'on clique dessus, le prix du fruit ( pour 1 kg) s'affiche DANS LA MEME PAGE grâce à la fonction calcul().
echo "<pre>";
	print_r( $_GET );
echo "</pre>";

require_once "fonction.inc.php"; //Inclusion du fichier 'fonction.inc.php' pour incorporer à cet endroit précis la fonction calcul()  et donc de pouvoir l'utiliser dans ce fichier et ainsi accéder au prix kg.

if( isset( $_GET['fruit'] ) ){	//SI il existe $_GET['fruit'], c'est que la clé 'fruit' est passée dans l'URL et donc ca signifie que l'on a cliqué sur un lien

	echo calcul( $_GET['fruit'], 1000 );
}

//------------------------------------------------------------
?>
<hr>
<a href="?fruit=pommes">Pomme</a><br>
<a href="?fruit=poires">Poires</a><br>
<a href="?fruit=bananes">Bananes</a><br>
<a href="?fruit=cerises">Cerises</a><br>
