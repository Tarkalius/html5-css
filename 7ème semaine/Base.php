<!-- On peut écrire HTML dans un fichier avec l'extension '.php' MAIS L'INVERSE N'EST PAS POSSIBLE c'est à dire qu'écrire du php dans un fichier avec l'extension '.html' N'EST PAS POSSIBLE !! -->
<!DOCTYPE html>
<html lang='fr'>
<head>
	<meta charset="utf-8">
	<title>Cours PHP</title>
	<style>
		h1, h2{ 
			text-align: center; 
			color: orange;
			background: black;
		}
		body{ margin-bottom: 500px; }
	</style>
</head>
<body>
	<h1>Bases PHP</h1>
	<h2>Ecriture et affichage</h2>

<?php //Balise ouvrante d'un passage PHP

	//Ici ouvre un passage PHP pour y faire des traitements PHP

	/* 
		Commentaire sur
		plusieurs lignes
	*/

	// CHAQUE INSTRUCTION DOIT SE TERMINER PAR UN POINT VIRGULE !!! OBLIGATOIRE !!

?> <!-- balise fermante du passage php -->

<?php //Ouverture d'un nouveau passage PHP

	echo "Bonjour tout le monde";
	//l'instruction "echo" permet de faire un affichage

	print "<p> <strong>Salut</strong> la compagnie </p>";
	//l'instruction "print" permet aussi de faire un affichage

	//Nous pouvons y mettre des balises HTML qui seront interprétées par le navigateur

?>

<?php echo "<p>Hello</p>"; //affichage ?>

<?= '<p>Autre syntaxe plus courte pour faire un affichage</p>';  

//Ici, le '<?=' va remplacer '<?php echo', et qui permet de faire un affichage  ?> 

<h2> Les variables: type, declaration et affectation </h2>

<?php
//Une variable : est un espace nommé qui permet de conserver une ou pluiseurs valeurs

//Pour déclarer une variable, on utilise le symbole '$'
//Par convention, on ne doit pas nommer une variable en commecant par un underscore ( tiret 8 ) OU par un chiffre (qui n'est pas possible)

$a = 345; //Ici, on déclare une variable nommée '$a' et on lui affecte la valeur 345 ( grâce au symbole '=') qui est un nombre et qui s'écrira SANS QUOTES ou GUILLEMETS

echo $a; //On affiche le contenu de la variable $a
echo '<br>';
echo gettype( $a ); 
//gettype( argument ) : fonction interne de php qui permet de connaitre le type de la variable passée en argument. //retournera "integer" qui correspond à un nombre entier

//-----------------------------------------------
$a = "<p>Bonjour tout le monde</p>"; //Ici, on reaffecte la valeur de la variable $a. On écrase la valeur 345 et on la remplace par la chaine : "<p>Bonjour tout le monde</p>"
echo $a;
echo gettype( $a ); //string (=chaine de caractères)

//-----------------------------------------------
$a = '123'; //reaffectation 
echo "<br>";
echo $a;
echo '<br>';
echo gettype( $a ); //string car le nombre est entre quotes/guillemets
echo '<br>';

//-----------------------------------------------
$a = 1.34; //reaffecation, ici, un chiffre à virgule s'écrira le symbole point  (à la place de la virgule classique)
echo $a;
echo "<br>";
echo gettype( $a ); //double (=chiffre à virgule)
echo '<br>';

//-----------------------------------------------
$a = true; //reaffectation
echo gettype( $a ); //boolean

//---------------------------------------------------------------------
echo "<h2>La concaténation</h2>";
//On concatène des chaines de caractères avec des variables et/ou des fonctions php avec le symbole point '.'

$x = "Bonjour";
$y = 'tout le monde'; 

echo $x . " => " . $y . '<br>';

//----------------------------------------------
//les doubles quotes (guillemets) permettent d'interpréter les variables ALORS que les quotes simples (apostrophes) N'INTERPRETENT PAS les variables et renverra une chaine

echo ' C\'est avec des quotes simples : $x $y <br> '; //Affiche $x $y
	//=> QUOTES SIMPLES : les variables NE SONT PAS INTERPRETEES !!

	// Ici, le backslash permet de faire comprendre à l'interpréteur qu'il ne faut pas prendre en compte l'apostrophe qui suit

echo " C'est avec des guillemets : $x $y <br> "; //Affichage "Bonjour tout le monde"
	//QUOTES DOUBLES : Les vairbales SONT INTERPRETEES !!

//---------------------------------------------------------------------
echo "<h2>La concaténation lors de l'affectation</h2>";

$prenom = 'Marco'; //déclaration d'une variable nommée '$prenom' où lui affecte la valeur 'Marco'
echo $prenom . '<br>';//Affiche Marco

$prenom = 'Polo'; //reaffectation (ecrase et remplace)
echo $prenom . '<br>';//Affiche Polo

//---------------------------------------
$pseudo = "Anne";
echo $pseudo . '<br>'; //Affiche Anne

$pseudo .= '-Marie'; //Affectation de la valeur '-Marie' dans la variable '$pseudo' MAIS ca s'AJOUTE SANS REMPLACER la valeur initiale grâce à l'opérateur : '.='

echo $pseudo . '<br>'; //Affichage 'Anne-Marie'

//---------------------------------------------------------------------
echo "<h2>Constantes et constantes magiques</h2>";
//Une constante : est un espace n ommmé qui permet de conserver une/plusieurs valeur(s) SAUF QUE, comme son nom l'indique la valeur sera constante !

define( 'CAPITALE', 'Paris' );
//Par CONVENTION, une contante se déclare TOUJOURS EN MAJUSCULE
//define( arg1, arg2 )
	//arg1 : nom de la constante (MAJUSUCULE)
	//arg2 : valeur de la constante

echo CAPITALE . '<br>';

	//define( 'CAPITALE', 'Berlin' ); //ERROR: constante a déjà été déclarée

//---------------------------------------
//Constantes magiques : (constante internes de php)

echo __FILE__ . '<br>'; //retourne le chemin complet du fichier courant
echo __LINE__ . '<br>'; //retourne la ligne courante (ici, 145)
echo __DIR__ . '<br>'; //retourne le chemin complet du dossier courant

//---------------------------------------------------------------------
echo "<h2> EXERCICE </h2>";
//Affichez moi : 'vert - jaune - rouge' (avec les tirets) en faisant en sorte que chaque couleur soit dans une variable (3 variables)

$a = 'vert';
$b = 'jaune';
$c = 'rouge';

echo " $a - $b - $c <br>";
echo $a . ' - ' . $b . ' - ' . $c . '<br>';

$couleur = 'vert'; //vert
$couleur .= '-jaune'; //vert-jaune
$couleur .= '-rouge'; //vert-jaune-rouge

echo $couleur . '<br>';

//---------------------------------------------------------------------
echo "<h2> Opérateurs arithmétiques </h2>";

$a = 10;
$b = 2;

echo $a + $b . '<br>'; // 12
echo $a - $b . '<br>'; // 8
echo $a / $b . '<br>'; // 5
echo $a * $b . '<hr>'; // 20

//Opération et affectation :

$a += $b; //equivaut à : $a = $a + $b
//Ici, on va ajouter la valeur de $b à la variable $a
echo $a . '<br>'; //12 

$a -= $b; //equivaut à : $a = $a - $b
echo $a . '<br>'; //10

$a /= $b; //equivaut à : $a = $a / $b
echo $a . '<br>'; //5

$a *= $b; //equivaut à : $a = $a * $b
echo $a . '<br>'; //10

//---------------------------------------------------------------------
echo "<h2> Structures conditionnelles (if/else) </h2>";

//isset() et empty() : fonctions internes de php

	//isset() : teste si ca existe (si c'est défini) la fonction renverra soit true soit false

	//empty() : teste si c'est vide (0 ou non defini) la fonction renverra soit true soit false
	
$zero = 0;
$vide = '';

if( isset( $vide ) ){ //SI la variable '$vide' existe

	echo "La variable existe et est définie par rien <br>";
}

if( empty( $zero ) ){ //SI la variable '$zero' est vide, 0, ou non définie

	echo "La variable est vide, à la valeur zero ou n'est pas définie <br>";
}

//-------------------------------
//IF / ELSEIF / ELSE 
$dix = 10;
$cinq = 5;
$deux = 2; 

if( $dix > $cinq ){ //SI 10 est supérieur à 5, alors on exécute le code entre les accolades

	echo "10 est bien supérieur à 5 <br>";
}
else{ //SINON... (cas apr défaut)

	echo "Faux <br>";
}

/* Syntaxe d'une condition if/else :

	if( condition ){  

		...code a exécuter si la condition est vraie (true) ...
	}
	else{ 
		
		...Code a exécuter si la condition est fausse (false)...
	}
*/
//-------------------------------------------
// && ( = ET ) 
if( $dix > $cinq && $deux > $deux ){ //SI 10 est supérieur à 5 - ET - que 5 est supérieur à 2, alors on exécute le code entre les accolades

	echo "Ok pour les deux conditions <br>";
}

//-------------------------------------------
// || ( = OU ) raccrouci : PC : AltGr+6 | Mac : Alt+Maj+L
if( $dix == 9 || $cinq > $deux ){ //SI 10 est égale à 9 - OU - que 5 est supérieur à 2, alors on exécute le code entre les accolades

	echo "Ok pour au moins une des deux comparaisons <br>";
}
//-------------------------------------------
if( $dix == 8 ){ //SI la valeur de la variable est égale à 8

	echo "1 - la valeur de la variable est égale à 8 <br>";
}
elseif( $dix != 10 ){ //SINON SI la valeur de la variable est différente de 10

	echo "2 - la valeur des la variable est différente de 10 <br>";
} 
else{ //SINON.. (cas par défaut)

	echo "3 - Tout est faux ! <br>";
}

//-------------------------------------------
//VERSION TERNAIRE : forme contractée
//-------------------------------------------

//version classique :
if( $dix == 10 ){

	echo "La variable est égale à 10 <br>";
}
else{

	echo "Faux <br>";
}

//Version ternaire :
echo ( $dix == 10 ) ? "La variable est égale à 10 <hr>" : "Faux <br>";

//Ici, le '?' remplace le 'if' et les ':' remplacent le 'else'

// ( condition ) ? "code a exécuter si true"  :  "code a exécute si false";

//-------------------------------------------
//Comparaison :
$vara = 1; //integer (sans quotes/guillemets)
echo '$vara est de type : '. gettype( $vara ) . '<br>';

$varb = "1"; //string
echo '$varb est de type : '. gettype( $varb ) . '<br>';

if( $vara == $varb ){ //true

	echo "L'égalité est vrai car la valeur est la même !<br>";
}

//------------------------------------------
if( $vara === $varb ){ //false

	echo "L'égalité est vrai car la valeur est la même !<br>";
}
else{

	echo "L'égalité est fausse puisque le type est différent alors que la valeur la même !<br>";
}

/*
Avec le '===', le test ne fonctionne pas car les types des variables sont différents. L'un est un entier (INT) et l'autre est une chaine (STRING) donc ce n'est pas strictement égal !

	'='		: affectation
	'=='	: comparaison en valeur
	'==='	: comparaison STRICTE en valeur ET en type

Les opérateurs : Pour tester les variables, on peut utiliser TOUS les opérateurs de comparaison !

	- égalité : '==' renvoie TRUE si les opérandes sont égales
	- différent de : '!=' renvoie TRUE si les opérandes NE SONT PAS EGALES
	- strictement égal : '===' renvoie TRUE si les opérandes sont EGALES ET DU MEME TYPE
	- strictement différent : '!==' renvoie TRUE si les opérandes NE SONT PAS EGALES OU NE SONT PAS DU MEME TYPE
	- plus grand que : '>'
	- plus grand ou égal à : '>='
	- plus petit que : '<'
	- plus petit ou égal à : '<='

Les instructions dans la condition renvoient toujours TRUE ou FALSE et les instructions de la condition ne seront exécutées QUE si la valeur de la condition renvoie TRUE !
*/

//---------------------------------------------------------------------
echo "<h2> Condition SWITCH </h2>";

$couleur = 'bleu';

switch( $couleur ){ //Ici, on compare la valeur de la variable '$couleur' aux différents cas du switch() 

	case 'bleu':
		echo "Vous aimez le bleu <br>";
	break;

	case 'orange':
		echo "Vous aimez le orange <br>";
	break;

	case 'vert':
		echo "Vous aimez le vert <br>";
	break;

	default : //Cas par défaut si on ne rentre pas dans les cas précédents
		echo "Vous n'aimez pas la couleur <br>";
}

//EXERCICE : retranscrire la condition switch en condition if/else ( Pourquoi pas utiliser l'opérateur "OU" ) ou la version ternaire :
if( $couleur == 'bleu' ){

	echo "Vous aimez le bleu <br>";
}
elseif( $couleur == 'orange' ){

	echo "Vous aimez le orange <br>";
}
elseif( $couleur == 'vert' ){

	echo "Vous aimez le vert <br>";
}
else{
	echo "Vous n'aimez pas la couleur !<br>";
}

//Version ternaire :
echo ( $couleur == 'bleu' ) ? "Vous aimez le bleu <br>" : ( ( $couleur == 'orange' ) ? "Vous aimez le orange <br>" : ( ( $couleur == 'vert' ) ? "Vous aimez le vert <br>" : "Vous n'aimez pas la couleur !<br>" ) );

//Autre version "courte"
if( $couleur == 'bleu' || $couleur == 'orange' || $couleur == 'vert' ){

	echo "Vous aimez le $couleur <br> ";
}
else{

	echo "T'aimes pas la couleur <br>";
}

//version ternaire 'courte':
echo ( $couleur == 'bleu' || $couleur == 'orange' || $couleur == 'vert' ) ? "Vous aimez le $couleur <br>" : "T'aimes pas la couleur <br>";

//---------------------------------------------------------------------
echo "<h2> Fonctions prédéfinies </h2>"; //fonctions internes de php

echo 'Date : ' . date("d/m/Y - H:i:s") . '<br>';
//date( arg ) : retourne la date sous forme de chaine de caractères 
	//arg : le format de la date à retourner 

$mail = "jeremie@doranco.fr";

echo strlen( $mail ) . '<br>';
//strlen( arg ) : retourne la taille d'une chaine 
	//arg : la chaine où l'on souahite connaitre le nombre de caractères

$texte = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

echo substr( $texte, 0 , 21 ) . "...<a href='#'> Lire la suite </a> <br>";

//substr( arg1, arg2, arg3 ): retourne une partie d'une chaine
	//arg1 : La chaine que l'on souhaite couper
	//arg2 : la position de départ, où on commence la découpe ! ATTENTION, ici on commence à la position ZERO qui correspond à la première lettre de la chaine.
	//arg3 : la longueur de la découpe

//---------------------------------------------------------------------
echo "<h2> Fonctions utilisateurs </h2>"; 

//Déclaration d'une fonction nommée 'separation' prévue pour ne pas recevoir d'argument car les paranthèses (OBLIGATOIRES !!) sont vides
function separation(){ 

	echo "<hr><hr><hr>";
}

separation(); //Appel de la fonction TOUJOURS AVEC LES PARENTHESES pour pouvoir l'exécuter !!

//-------------------------------------------
/* 
	function nomDeLaFonction(){

		//traitements php a exécuter lors de l'appel de la fonction
 	}

 	nomDeLaFonction(); //Appel de la fonction pour l'exécuter
*/
//-------------------------------------------
//Déclaration d'une fonction prévue pour recevoir UN argument (ici, $prenom)
function bonjour( $prenom ){

	return "Bonjour " . $prenom . "<br>";
}

echo bonjour( 'Jeremie' ); //Appel et exécution de la fonction TOUJOURS AVEC LES PARENTHESES où ici, il faudra y préciser un argument ('Jeremie')
//Si la fonction est prévue pour recevoir un argument ALORS il faut lui envoyer UN argument en paramètre de la fonction, sinon on aura une ERROR FATAL !
//Quand il ya un "return" dans la fonction, il faudra faire un "echo" de la fonction, si l'on veut faire un affichage

//-------------------------------------------
function jour(){

	echo "Premier test d'affichage !! <br>"; //test d'un affichage lors de l'appel (donc de l'exécution de la fonction)

	$jour = 'mardi'; //Variable LOCALE

	return $jour; //la fonction va retourne quelquechose (ici, la valeur de la variable '$jour') et A CE MOMENT PRECIS, on quitte la fonction !!!

	echo "Second test d'affichage <br>"; //Cette ligne de code ne fonctionnera, elle ne sera pas interprétée car elle se trouve APRES le mot cle "return" et de ce fait on a déjà quitté la fonction
	//Donc ca ne sert à rien d'écrire du code apres un 'return'...
}

echo jour() . '<hr>'; //Affichage et appel de la fonction pour l'exécuter (toujours avec les parenthèses)

// echo $jour .'<br>'; //ERROR "undefined" car elle N'EST PAS définie dans l'espace global de nos traitements php MAIS uniquement dans le scope (espace LOCAL) de la fonction 

//-------------------------------------------
$ville = 'Paris'; //Déclaration d'une variable dans l'espace GLOBAL
echo $ville . '<br>'; //Paris

function afficheVille(){

	global $ville; //"global" permet de rappatrier dans un espace local ce qui se trouve dans l'espace global

	//$ville = 'Lille'; //Variable LOCALE. La ligne ci-dessous fonctionne si on déclare notre variable dans un espace local !! Meme si l'on a déclaré cette variable dans l'espace global.

	return $ville;
}

echo afficheVille() . '<br>'; //Affichage et appel de la fonction pour l'exécuter (toujours avec les parenthèses)

//-------------------------------------------
//EXERCICE : créer une fonction TVA qui attendra 2 arguments (le nombre, le taux) afin que l'on puisse afficher et calculer le nombre avec le taux de notre choix
	//Bonus : mettre un taux par défaut (1.2)

function tva( $nombre, $taux = 1.2 ){ //$taux = 1.2 correspondra à la valeur par défaut SI l'argument n'est pas précisé lors de l'appel de la fonction

	$result = $nombre * $taux;

	return "Tva demandée est de : $result <br>";
}

echo tva( 1000, 1.055 ); //Affichage et appel de la fonction (donc execution de la fonction) avec les paramètres prévus (un nombre et un taux) 

echo tva( 3000 ); //Ici, je ne précise pas le second argument, donc le taux et du coup il prendra la valeur par défaut que l'on a défini en paramètre de la fonction (1.2)
echo '<hr>';
//-------------------------------------------
//EXERCICE : Créer une fonction 'meteo' avec 2 arguments ( temperature et la saison ) et qui permet de retourner la phrase suivante : 

	//"Nous sommes en saison et il fait temperature degrés <br>"

	//EXERCICE : Gérer l'article 'au' SI la saison est 'printemps' ET il faudra gérer le 's' de degré Si on est strictement au dessus de 2° ou en dessous de -2° : ]-2:2[

function meteo( $saison, $temperature ){

	if( $saison == 'printemps' ){ //Si le paramètre $saison de la fonction est égal à 'printemps', on créer une variable avec la valeur 'au'

		$article = ' au ';
	}
	else{ //SINON, on crée une variable nommée de la manière '$article' avec la valeur 'en' (car si on rentre dans le 'else', c'est que c'est forcément 'ete', 'automne', 'hiver')

		$article = ' en ';
	}

	//Version ternaire :
	//$article = ( $saison == 'printemps' ) ? ' au ' : ' en '; 

	if( $temperature >= 2 || $temperature <= -2 ){ //SI le paramètre $temperature est supérieur égal à 2 -OU- que la $temperature est inférieur ou égale à -2, alors on éclare une variable avec 'degrés' au pluriel

		$deg = ' degrés';
	}
	else{ //SINON, c'est que l'on se trouve forcément dans l'inter ]-2:2[ et donc on déclare la variable nommée de la même manière avec la valeur 'degré' au singulier

		$deg = ' degré';
	}

	//Version ternaire :
	//$deg = ( $temperature >= 2 || $temperature <= -2 ) ? ' degrés' : ' degré';

	return "Nous sommes $article $saison et il fait $temperature $deg <br>";
	//return 'Nous sommes' . $article .' '. $saison.' et il fait '.$temperature .' '. $deg .' <br>';
}

echo meteo( 'ete', 10 );
echo meteo( 'automne', 1 );
echo meteo( 'hiver', -1.3 );
echo meteo( 'printemps', 34 );
echo '<hr><hr>';
//-------------------------------------------
function meteoBenoit($temp, $saison){

	if ( ($temp <=-2 || $temp >=2) && ($saison == "printemps") ){

		return "Nous sommes au $saison et il fait $temp degrés <br>";
	}
	else if ( ($temp <=-2 || $temp >=2) && ($saison != "printemps") ){

		return "Nous sommes en $saison et il fait $temp degrés <br>";
	}
	else if ( ($temp > -2 && $temp <2) && ($saison =="printemps") ){

		return "Nous sommes au $saison et il fait $temp degré <br>";
	}
	else{

		return "Nous sommes en $saison et il fait $temp degré <br>";
	}
}

echo meteoBenoit(24, "ete");
echo meteoBenoit(1, "printemps");
echo meteoBenoit(24, "automne");
echo meteoBenoit(-0.8, "hiver");

//---------------------------------------------------------------------
echo "<h2> Structures itératives </h2>"; 
//Une boucle : peremt de répéter une portion de code tant qu'une condition est réalisée !

//Boucle WHILE :
$i = 0; //initialisation

while( $i < 5 ){ //TANT QUE $i est inférieur à 5, on exécute le code entre les accolades

	echo "$i : ";

	$i++; //incrémentation  $i++ <=> $i = $i + 1 <=> $i +=1
}

echo '<hr>';
//--------------------------------------------------
//A la différence d'une boucle while, qui va répéter indéfiniment les instructions entre les accolades de la boucle TANT QUE la condition n'est pas réalisée. 
//LA boucle FOR va répéter un nombre de fois défini les instructions entre les accolades
//--------------------------------------------------
//Boucle FOR :
for( $i = 1; $i <= 10; $i++ ){ //Ici, on aura 10 tours de boucle
	// initialisation : "Où on commence
	// condition : "quand on s'arrête"
	// incrémentation : "De combien on augmente a chaque tour de boucle"

	echo "$i tour de boucle <br>";
}

//--------------------------------------------------
//EXERCICE : afficher un select options avec 31 options allant de 31 à 1 (dans le sens inverse) via une boucle 'for'
echo "<select name=''>";
	
	for( $i = 31; $i >= 1; $i-- ){

		echo "<option value='$i'> $i </option>";
	}

echo "</select><br>";
//Version ou on ajoute le php directement dans des balises <html>
?>
<select name=''>
<?php

	for( $i = 31; $i >= 1; $i-- ){

		echo '<option value="' . $i . '">' . $i . '</option>';
	}

?>
</select>
<?php
//--------------------------------------------------
//EXERCICE : afficher dans un tableau les chiffres allant de 1 à 10 via une boucle 'for' sur UNE SEULE LIGNE
echo "<table border='2'>";
	echo "<tr>";

		for( $i = 1; $i <= 10; $i++ ){ //10 tours de boucles

			echo "<td> $i </td>";
			//echo '<td> '. $i .' </td>';
		}

	echo "</tr>";
echo "</table>";

//--------------------------------------------------
//Exercice : (boucles imbriquées) créer un tableau avec 10 lignes contenant 10 cellules allant de 1 à 100

$compteur = 1; //initialisation d'une variable à 1 (pour le premier chiffre du tableau)

echo "<table border='5'>";
	for( $i = 1; $i <= 10; $i++ ){ //10 tours de boucle

		echo "<tr>";

			for( $j = 1; $j <= 10; $j++ ){ //10 tours de boucle

				echo "<td> $compteur </td>"; //Cette ligne de code s'exécute 100 fois
				$compteur++; //incrémentaion, on rajoute +1 à notre variable $compteur APRES l'avoir afficher juste au dessus
			}

		echo "</tr>";
	}
echo "</table>";

//-----------------------------------------------
//Version Vincent :
$j=1;

echo "<table border='1'>";
	for($i = 1; $i<=10 ; $i++){
		echo "<tr>";
			while($j <= 10*$i){
				echo "<td>$j</td>";
				$j++;
			}
		echo"</tr>";
	}
echo "</table>";

//---------------------------------------------------------------------
echo "<h2> Les arrays + la boucle foreach() </h2>"; 

//Création d'un array :
$tableau = ['pomme', 'poire', 'fraise', 'melon', 'banane', 'abricot', 'peche', 'kiwi', 'mangue'];

//echo $tableau; //ERROR ! IMPOSSIBLE, ON EN PEUT PAS AFFICHER UN TABLEAU ETL QUEL, pour cela il faudra parcourir les données du tableau pour les afficher

//--------------------------------------
//var_dump() et print_r() : fonctions internes de PHP qui permettent de se débuguer, retournent des informations contenues dans une variable (ici, un array)
echo "<pre>";

	var_dump( $tableau );
echo "<hr>";
	print_r( $tableau );

echo "</pre>";
//--------------------------------------
//Affichage de la valeur 'fraise' provenant du tableau :

echo $tableau[2] . '<br>'; //Pour afficher un élément précis d'un tableau, il faut appeler le tableau et préciser entre crochets l'indice de la valeur correspondante

//Ajouter une valeur à la fin du tableau :
$tableau[] = 'orange'; //pour ajouter un élément A LA FIN d'un tableau, il faut appeler le tableau et mettre des crochets VIDES et avec le symbole égal, on lui ajoute une nouvelle valeur

echo '<pre>';
	print_r( $tableau );
echo '</pre>';
echo '<hr>';
//--------------------------------------
//EXERCICE : Affichez TOUTES les infos (donc tous les fruits) du tableau (via une boucle 'for')

for( $i = 0; $i < 6; $i++ ){

	echo "Valeur de i : $i correspond à : ". $tableau[ $i ]  . '<br>';
}

//--------------------------------------
//count() et sizeof() : permettent de renvoyer la longueur d'un tableau (=nombre d'élément dans le tableau)

echo "<hr> Taille du tableau : ". count( $tableau ). '<br>';
echo "Taille du tableau : ". sizeof( $tableau ). '<hr>';

//--------------------------------------
//Affichage de TOUTES le sinfos du tableau de manière dynamique, c'est à dire que si l'on rajoute des éléments (des fruits) dans le tableau ($tableau) et bien toutes les infos seront parcourues
for( $i = 0; $i < sizeof( $tableau ); $i++ ){

	echo "Valeur de i : $i correspond à : ". $tableau[ $i ]  . '<br>';
}

//--------------------------------------
//Possibilite de choisir les indices d'un tableau et on peut également utiliser la fonction array() pour créer un tableau :
$couleur = array(
					'j' => 'jaune',
					'v' => 'vert',
					'o' => 'orange',
					'b' => 'bleu',
					'r' => 'rouge'
			);

echo '<pre>';
	print_r( $couleur );
echo '</pre>';

//Affiche la couleur 'vert' provenant du tableau '$couleur' :
echo $couleur[ "v" ] . '<hr>';

//----------------------------------------------------
//La boucle foreach() : FONCTIONNE UNIQUEMENT SUR LES ARRAYS (ou les objects).
//SI on tente d'exécuter une boucle foreach() avec une variable d'un autre type que array ou object cela retournera une ERREUR !

//Foreach() : permet de passer en revu toutes les données d'un array à chaque tour de boucle 
	//Dans cet exemple, indipensable car les indices de notre tableau sont de type 'string'

foreach( $couleur as $indice => $valeur ){

	echo "<p>Indice : $indice et sa valeur : $valeur</p>";
}

//Le premier argument ($couleur) de la boucle foreach() DOIT IMPERATIVEMENT etre un array (ou un object)
//Le mot clé "as" est OBLIGATOIRE, il fait parti de la boucle foreach() !!

//SI il y a DEUX variables en arguments APRES le mot clé "as", le premier ($indice) parcours la colonne des indices du tableau et le second argument ($valeur) parcours la colonne des valeurs du tableau.

//SI il n'y a QU'UNE SEULE VARIABLE APRES le mot clé "as", alors cette variable parcours unqiuement les valeurs du tableau :
foreach( $tableau as $value ){

	echo $value . ' / ';
}

echo '<hr>';
//----------------------------------------------
//Autre syntaxe : 
//Ici, l'accolade ouvrante est remplacée par les deux point ':' et l'accolade fermante est remplacée par 'endforeach' (fonction également, avec : for, while, if/else)
foreach( $couleur as $value ) :

	echo $value . ' / ';

endforeach;

//---------------------------------------------------------------------
echo "<h2> Les arrays multidimentionnels </h2>"; 
//Les arrays multi sont des arrays imbriqués dans un autre array

$multi = array(
				0 => array( 'prenom'=>'marco', 'nom'=>'polo' ),
				1 => array( 'prenom'=>'jean', 'nom'=>'jacques' ),
				2 => array( 'prenom'=>'toto', 'nom'=>'titi' )
			);

echo '<pre>';
	print_r( $multi );
echo "<hr>";
	print_r( $multi[1] ); //Ici pour voir ce que l'on a dans l'indice 1, qui est un Array() et on ne peut donc pas l'afficher tel quel avec un 'echo'
echo '</pre>';

//Affichage de la valeur 'Jacques' de notre tableau multidimentionnel : 
echo $multi[1]['nom'] . '<hr>';

//pour piocher dans un tableau multidimentionnel, il faut pour chaque palier préciser les indices entre crochets

//--------------------------------------
//EXERCICE : parcourir TOUTES les infos du tableau ($multi) grâce à des boucles foreach() :
foreach( $multi as $indice => $sousTableau ){

	echo "<br>L'indice $indice correspond à sous tableau suivant : <br>";

	// echo "<pre>";
	// 	print_r( $sousTableau );
	// echo "</pre>";

	foreach( $sousTableau as $reference => $valeur ){

		echo "<strong> $reference </strong> : $valeur <br>";
	}
}
//---------------------------------------------------------------------
echo "<h2> Les objets </h2>"; 




























?>

</body>
</html>