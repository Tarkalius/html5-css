<?php

// SQL : 4 requetes à savoir :

// CRUD 
// 	create		=> requête INSERT (insertion en bdd)
// 	update		=> requête UPDATE (modification en bdd)
// 	delete		=> requête DELETE (suppression en bdd)

// 	read		=> requête SELECT (lire/récupérer les infos en bdd)

//----------------------------------------------------------------
//----------------------------------------------------------------

/*	PDO : PHP DATA OBJECT : Représente une connexion entre PHP et un serveur de base de données.

=> EXEC() :

	=> INSERT, UPDATE, DELETE :
		exec() est utilisé pour la formulation de requêtes ne retournant pas de résultat !
		exec() renvoi le nombre de lignes affectées par la requêtes

	Valeur de retour : 
		ECHEC : false
		SUCCES : 1 (ce nombre varie selon le nombre d'enregisrement affecté par la requête)

//-------------------------------------------------------------------
=> QUERY() :

	=> SELECT : Au contraire d'exec(), query() est utilisé pour la formulation de requêtes retournant un ou plusieurs résultats.

	Valeur de retour :
		ECHEC : false
		SUCCES : PDOStatement (objet)

//-------------------------------------------------------------------
=> PREPARE() puis EXECUTE() :

	SELECT, INSERT, UPDATE, DELETE :
		
		prepare() : permet de préparer sans exécuter
		execute() : permet d'exécuter la requête préparée

	Valeur de retour : 
		prepare() : renvoie TOUJOURS un PDOStatement (objet)
		execute() : ECHEC : false
					SUCCES : PDOStatement

=> Les requêtes préparées sont à préconiser si vous exécuter plusieurs fois la même requête et ainsi éviter de répéter le cycle (analyse/interprétation/exécution)
=> Les requêtes préparées sont souvent utilisées pour assainir les données (ex : prepare() / bindValue() / execute() )

exemple : pourquoi requêtes préparées :

	select * from employes; => 3cycles (analyse/interprétation/exécution)
	select * from employes; => 3cycles
	select * from employes; => 3cycles
	select * from employes; => 3cycles => 12 cycles 

	prepare : $req = select * from employes; => 2cycles (analysée et interprétée)

		-> execute($req); 1cycle (exécution)
		-> execute($req); 1cycle
		-> execute($req); 1cycle
		-> execute($req); 1cycle => 6 cycles
*/
//-------------------------------------------------------------------
echo "<h2 style='background:#eee'> Connexion à la BDD </h2>";

$pdo = new PDO(

	'mysql:host=localhost;dbname=entreprise',
	'root',
	'',
	array( 	PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING,
			PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES UTF8" 
		) 
);

//L'instante (=objet) PDO : représente la connexion à la BDD (ici, 'entreprise')

	//Arguments de PDO !
		//arg1 : serveur + BDD 
		//arg2 : identifiant
		//arg3 : mot de passe (ici, en local pour MAC, il faudra certainament préciser le mdp 'root')
		//arg 4 : options (facultatif)(ici, la gestion des erreurs et encodage UTF8)

var_dump( $pdo ); //Object PDO

echo "<pre>";
	print_r(  get_class_methods( $pdo )  );
echo "</pre>";

//-------------------------------------------------------------------
echo "<h2 style='background:#eee'> EXEC() / INSERT / UPDATE / DELETE </h2>";

//INSERTION :
$resultat = $pdo->exec(" 

	INSERT INTO employes( prenom, nom, sexe, service, date_embauche, salaire ) 

			VALUES ('jean', 'jacques', 'm', 'informatique', '2022-01-01', 1244)
");
//Ici, nous faisons une insertion dans la table 'employes' pour les champs ( prenom, nom, sexe, service, date_embauche, salaire )  avec les valeurs correspondantes (DANS LE BON ORDRE) à insérer.

//On applique la méthode exec() VIA l'objet '$pdo' (=qui représente la connexion avec la BDD) pour lui faire faire une requête d'insertion

// echo "Nombre d'enregistrement affecté par la requête : $resultat <br>";

// echo "Dernier id généré : " . $pdo->lastInsertId() . '<br>';

//------------------------------------------------------



















echo "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";