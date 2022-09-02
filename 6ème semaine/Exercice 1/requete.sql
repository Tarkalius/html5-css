-- Les Requetes SQL ne sont pas sensibles à la casse, mais par convention, il faut indiquer les mots clés du langage SQL en MAJUSCULE.

-- /!\ CHAQUE REQUETE SE TERMINERA TOUJOURS PAR UN POINT VIRGULE ';' /!\

-- --------------------------------------------------------------------------------
-- Pour se connecter à la console de mysql :

	-- Version WINDOWS :

		mysql -u root -p

			-- pour "Windows", il n'y a pas de mot de passe donc on clique sur "Entrée" lors de la demande du mdp

	-- Version MAC :

		/Applications/MAMP/Library/bin/mysql -u root -p

			-- pour "MAC", il faut renseigner le mdp 'root' puis cliquer sur "Entrée" 

-- -------------------------c--------------------------------------------------------------
CREATE DATABASE doranco; -- creation d'une nouvelle base de données (ici, nommée 'doranco')

SHOW DATABASES; -- permet d'afficher toutes les BDD existantes sur notre serveur (local)

USE doranco; -- permet de sélectionner une BDD et donc de pouvoir intéragir avec

DROP DATABASE doranco; -- permet de supprimer une BDD ( ici, celle nommée 'doranco')
	
	-- DROP : permet de faire une suppression
	-- exemple : DROP TABLE nom_de_la_table_a_supprimer; -- permettrait de supprimer une table

TRUNCATE nom_de_la_table_a_vider; -- permet de vider le contenu d'une table sans la supprimer

-- ---------------------------------------------------------------------------------------
-- Il existe 4 types de requêtes : SELECT, INSERT, DELETE, UPDATE 

-- REQUETE SELECT (affichage) :

-- Pour commencer il faut sélectionner la bdd sur laquelle on souahtie travailler :
USE entrepise; -- Je sélectionne la bdd 'entreprise' et je peux donc désormais intéragir avec

SELECT id_employes, prenom, nom, sexe, date_embauche, service, salaire FROM employes;
-- SELECTIONNE MOI les champs (prenom, nom, sexe, date_embauche, service, salaire) PROVENANT de la table nommée 'employes'

SELECT * FROM employes;
-- SELECTIONNE MOI TOUTES (*) les colonnes PROVENANT de la table 'employes'

-- --------------------------------------------
-- DISTINCT : permet d'éliminer les doublons :

SELECT service FROM employes;
-- Affichage de TOUS les services de la table 'employes'

SELECT DISTINCT service FROM employes;
-- Affichage des différents services de la table 'employes'

-- --------------------------------------------
-- WHERE : condition 

-- Affichez les employés du service 'informatique'
SELECT prenom, nom, service 
FROM employes 
WHERE service = 'informatique' ;
-- SELECTIONNE les champs: nom, prenom et service PROVENANT dela table 'employes' A CONDITION que dans la colonne 'service', ce soit égal à 'informatique'

-- --------------------------------------------
-- BETWEEN : (entre quelque chose et quelque chose)

-- Affichage des employés ayant été recrutés entre 2015 et aujourd'hui
SELECT prenom, nom, date_embauche
FROM employes
WHERE date_embauche BETWEEN '2015-01-01' AND "2022-08-16";

	-- CURDATE() : fonction SQL qui permet de retourner la date courante (CURRENT DATE)
	SELECT CURDATE();
	
	SELECT prenom, nom, date_embauche
	FROM employes
	WHERE date_embauche BETWEEN '2015-01-01' AND CURDATE();

-- --------------------------------------------
-- PAS DE DIFFERENCE entres les quotes et les guillemets 
-- Lorsque il y a des apostrophes, on priviligiera les guillemets
-- En revanche s'il s'agit d'un nombre, ON NE DOIT PAS LES METTRE

-- --------------------------------------------
-- LIKE : valeur approchante 

-- Affichage des employés ayant un prénom commencant par la lettre "s" :
SELECT prenom FROM employes WHERE prenom LIKE 's%';

	-- % : signifie : "peu importe la suite"

-- Affichage des employés ayant un prénom se terminant par la lettre "s" :
SELECT prenom FROM employes WHERE prenom LIKE '%s';

-- Affichage des employés ayant un prénom contenant un tiret '-' :
SELECT prenom FROM employes WHERE prenom LIKE '%-%';

-- --------------------------------------------
-- Affichage de TOUS les employes SAUF les informaticiens :
SELECT * FROM employes WHERE service != 'informatique';
SELECT * FROM employes WHERE service <> 'informatique';

	-- != : différent de (NOT equal)
	-- <> : différent de

-- --------------------------------------------
-- Affichage de TOUS les employés ayant un salaire supérieur à 3000€
SELECT * FROM employes WHERE salaire > 3000;

-- --------------------------------------------
-- ORDER BY : (tri)

-- Affichez les prénoms par ordre alphabétique :
SELECT prenom FROM employes ORDER BY prenom ASC;
	-- ASC : ascendant = ordre croissant

-- Affichez les salaires par ordre décroissant :
SELECT * FROM employes ORDER BY salaire DESC;
	-- DESC : descendant = ordre décroissant

-- Affichage des salaires par ordre décroissant ET les prénoms par ordre croissant :
SELECT salaire, prenom FROM employes ORDER BY salaire DESC, prenom ASC;

-- --------------------------------------------
-- LIMIT : (pagination)

-- Affichage des 10 premiers résultats (triés par ordre alphabétique)
SELECT * FROM employes ORDER BY prenom LIMIT 10;

	-- BONNE PRATIQUE, il est conseillé d'utiliser ORDER BY lorsque l'on souhaite utilisé la clause LIMIT (pour etre sur de ne pas avoir des résultats erronés)

	-- Affichage des employés 3 par 3 :
	SELECT * FROM employes ORDER BY prenom ASC LIMIT 0, 3;
		-- Affiche l'élément 0, 1 et 2

	SELECT * FROM employes ORDER BY prenom ASC LIMIT 3, 3;
		-- Affiche l'élément 3, 4 et 5

	SELECT * FROM employes ORDER BY prenom ASC LIMIT 6, 3;
		-- Affiche l'élément 6, 7 et 8

		-- LIMIT x, y   (=> MYSQL)
			-- x : "d'où on commence" (ATTENTION : le premier de la liste aura l'offset ZERO !!)
			-- y : "combien on en affiche"

	-- -------------------------------------------------------
	-- Affichage des employés 3 par 3 :
	SELECT * FROM employes ORDER BY prenom ASC LIMIT 3 OFFSET 0;
		-- Affiche l'élément 0, 1 et 2

	SELECT * FROM employes ORDER BY prenom ASC LIMIT 3 OFFSET 3;
		-- Affiche l'élément 3, 4 et 5

	SELECT * FROM employes ORDER BY prenom ASC LIMIT 3 OFFSET 6;
		-- Affiche l'élément 6, 7 et 8

		-- LIMIT x OFFSET y   (=> PostGreSQL ET MYSQL !!)
			-- x : "combien on en affiche" (ATTENTION : le premier de la liste aura l'offset ZERO !!)
			-- y : "d'où on commence"

	-- Bon à savoir : pour une bonne compatibilité, MySQL accepte également la syntaxe LIMIT nombre OFFSET nombre. En conséquent, dans la conception d’une application utilisant MySQL il est préférable d’utiliser cette syntaxe car c’est potentiellement plus facile de migrer vers un autre système de gestion de base de données sans avoir à ré-écrire toutes les requêtes.

-- --------------------------------------------
-- AS = alias : permet de renommer un champ

-- Affichage des employés avec leur salaire annuel :
SELECT prenom, salaire*12 FROM employes;

SELECT prenom, salaire*12 AS "salaire_annuel" FROM employes;

-- --------------------------------------------
-- SUM() : somme

-- Affichage de la masse salariale de l'entreprise sur une année :
SELECT SUM( salaire*12 ) AS "masse_salariale" FROM employes;

-- --------------------------------------------
-- AVG() : moyenne

-- Affichage du salaire moyen :
SELECT AVG( salaire ) AS "salaire_moyen" FROM employes;

-- --------------------------------------------
-- ROUND() : arrondi

-- Affichage du salaire moyen à 1 chiffre apres la virgule
SELECT ROUND( AVG( salaire ) , 1 ) AS "salaire_moyen" FROM employes;
-- Ici, le chiffre 1 correspond à UN chiffre apres la virgule. 
-- SI on ne précise pas de second argument alors ROUND() arrondira à l'entier prêt !

	-- SELECT ROUND( 12.9 ); -- arrondi 13 (à l'entier supérieur)
	-- SELECT ROUND( 12.4 ); -- arrondi 12 (à l'entier inférieur)

-- --------------------------------------------
-- COUNT() : compte le NOMBRE DE LIGNE DE RESULTAT !!!

-- Affichage du nombre de femmes dans l'entreprise :
SELECT COUNT( sexe ) FROM employes WHERE sexe = 'f';
	-- Affiche le chiffre 9 !

	SELECT prenom, nom, sexe FROM employes WHERE sexe = "f";
	-- Affiche les 9 lignes de résultats

-- --------------------------------------------
-- ATTENTION de ne pas mettre d'espace entre les parenthèses et le nom de la fonction  !!

-- --------------------------------------------
-- MIN() / MAX()

-- Affichage du salaire le plus bas :
SELECT MIN( salaire ) FROM employes; -- 1390

-- Affichage du salaire le plus haut :
SELECT MAX( salaire ) FROM employes; -- 5000

-- Affichage du prenom de la personne qui a le salaire le plus bas :
	SELECT prenom, MIN(salaire) FROM employes; 
	-- FAUX INCOHERENCE TOTALE, ce n'est pas Jean-Pierre (5000) qui gangne le salaire le plus bas mais Julien (1390)

	SELECT prenom, salaire FROM employes WHERE salaire = MIN(salaire);
	-- ERROR => ON NE PEUT PAS UTILISER DES FONCTIONS DANS LA CLAUSE "WHERE"

-- Version "simple" ( SANS imbrication car ici, nous sommes sur une seule table)
SELECT prenom, salaire FROM employes ORDER BY salaire ASC LIMIT 1;
-- Ici, je SELECTIONNE le prenom et le salaire PROVENANT de la table 'employes' TRIES PAR salaire dans l'ORDRE CROISSANT et j'en affiche UN SEUL (donc les infos de celui qui a le salaire le plus bas)

-- Version imbriquées :
SELECT prenom, salaire FROM employes WHERE salaire = 
-- SELECTIONNE le prenom et le salaire PROVENANT de la table 'employes' A CONDITION que dans la colonne salaire ce soit EGAL A :

	( SELECT MIN(salaire) FROM employes );
	-- SELECTIONNE la valeur MINIMALE dans la colonne salaire PROVENANT de la table 'employes'

-- ------------------------------------------------------------
-- IN : 

-- Affichage des employés travaillant dans les services 'compta' et 'info' :
SELECT prenom, service
FROM employes
WHERE service IN ( 'informatique', 'comptabilite') ;

	-- IN : permet d'INCLURE PLUSIEURS valeurs
	--  = : permet d'INCLURE UNE SEULE valeur

-- Affichage des employés NE travaillant PAS dans les services 'compta' et 'info' :
SELECT prenom, service
FROM employes
WHERE service NOT IN ( 'informatique', 'comptabilite') ;

	-- NOT IN : permet d'EXCLURE PLUSIEURS valeurs
	--     != : permet d'EXCLURE UNE SEULE valeur

-- ----------------------------------------------------
-- AND : ajouter des conditions supplémentaires

-- Affichage des commerciaux gagnant un salaire inférieur a 2000€
SELECT prenom, service, salaire
FROM employes
WHERE service = 'commercial'
AND salaire <= 2000;

-- ----------------------------------------------------
-- OR : l'un ou l'autre

-- Affichage des prenoms des commerciaux travaillant pour un salaire de 1900€ OU de 2300€ OU 1800€
SELECT prenom, service, salaire
FROM employes
WHERE service = 'commercial'
AND salaire = 1900 OR salaire = 2300 OR salaire = 1800;

-- ----------------------------------------------------
-- GROUP BY : permet de regrouper des informations

-- Affichage du nombre d'employé PAR service 
SELECT service, COUNT( prenom ) AS "Nombre_employe_par_service"
FROM employes
GROUP BY service;

-- Affichage des services où il y a plus de 2 personnes dans le service :
SELECT service, COUNT( prenom ) AS "Nombre_employe_par_service"
FROM employes
GROUP BY service 
HAVING COUNT( service ) > 2;

	-- CAS PARTICULIER : On utilisera "HAVING" dans le cas d'un "GROUP BY" pour appliquer une condition (à la place de 'WHERE' pour les regroupements)
	-- la clause "WHERE" s'utilisera AVANT le regroupement ("GROUP BY") si on veut d'abord y mettre des conditions

-- ----------------------------------------------------
-- REQUETE INSERTION : INSERT

INSERT INTO employes VALUES ( NULL, 'marco', 'polo', 'm', 'voyageur', '2022-01-01', 1234 );
-- Ici, on INSERE DANS la table 'employes' LES VALEURS SUIVANTES (qui correspondent à TOUS les champs de la table)

	-- SELECT * FROM employes; -- test de l'insertion

	-- TOUJOURS PENSER DE BIEN RESPECTER L'ORDRE DANS LEQUEL LES CHAMPS SONT DECLARES DANS LA TABLE dans les "VALUES"

-- ---------------------------
INSERT INTO employes ( sexe, prenom, date_embauche, salaire, nom, service )

			VALUES ( 'f', 'marilyn', '2022-01-01', 2345, 'monroe', 'chanteuse' );

	-- TOUJOURS PENSER DE BIEN RESPECTER L'ORDRE DANS LEQUEL NOUS AVONS NOMME LES CHAMPS A INSERER

-- ----------------------------------------------------
-- REQUETE DE MODIFICATION : UPDATE

	-- SELECT * FROM employes; -- Affichage initial

UPDATE employes SET salaire = 1111 WHERE id_employes = 991;
-- MODIFICATION de la table 'employes', la colonne 'salaire' avec la nouvelle valeur (1111) A CONDITION que dans la colonne 'id_employes' ce soit égale à 991

	-- SELECT * FROM employes; -- Vérification de la modificatin

	-- ATTENTION de bien préciser la clause "WHERE" sinon, les modifications seront effectives pour TOUTES les données de la table !!! 

		-- EXEMPLE: 
		-- UPDATE employes SET salaire = 1000; Cet exemple appliquerait dans la colonne salaire la valeur de 1000 pour TOUS les employes car nous n'avons pas précise sur quel employé en particulier nous voulons appliquer la modification (pas de clause 'WHERE')

UPDATE employes SET salaire = 2222, service = 'test', nom = "patate" WHERE id_employes = 991;
-- Pour faire plusieurs modifications, on sépare APRES le mot cle "SET" chaque champ et sa nouvelle valeur (champ=newVal) par une virgule

	-- -----------------------------
	-- CLAUSE REPLACE : (obsolete?) se comportera comme un UPDATE si il y a une corresopndance avec une 'id' dans la table, SINON, il se comportera comme un INSERT 

	-- Insertion d'une nouvelle ligne :
	-- INSERT INTO employes VALUES ( 2000, 'test', 'test', 'f', 'service', '2011-01-01', 1111 );

	-- REPLACE INTO employes VALUES( NULL, 'momo', 'momo', 'f', 'momo', '2011-01-01', 9999 );
		-- INSERTION

	-- REPLACE INTO employes VALUES( 2000, 'popo', 'popo', 'f', 'popo', '2011-01-01', 7777 );
		-- MODIFICATION

-- ----------------------------------------------------
-- REQUETE DE SUPPRESSION : DELETE	

DELETE FROM employes WHERE id_employes = 2002;
-- Suppression dans la table 'employes' de la ligne qui a comme"id" la valeur 2002

DELETE FROM employes WHERE prenom = "marilyn";
-- SUPPRESSION de l'employé ayant le prénom 'marilyn'
-- C'est un exemple donc c'est OK ca fonctionne MAIS ce serait plus prudent d'utiliser l'id_employes (qui est UNIQUE) car si il y avait plusieurs 'marilyn' dans la table, et bien elles seraient TOUTES SUPPRIMEES !

	-- -----------------------------------------
	-- NE SURTOUT PAS FAIRE !!

	-- DELETE FROM employes ; 
	-- Cette requete supprimerait TOUTES les données de la table (revient a faire un TRUNCATE : vider la table)

	-- ATTENTION de BIEN PRECISER LA CLAUSE "WHERE" LORS D'UNE SUPPRESSION car la suppression est définitive !

	-- -----------------------------------------

-- On supprime TOUS les informaticiens SAUF celui possède l'id 701 
DELETE FROM employes WHERE service = 'informatique' AND id_employes != 701;

-- SUPPRESSION de 2 employes qui n'ont pas de point commun :
DELETE FROM employes WHERE id_employes = 350 OR id_employes = 417;

	-- Ici, il s'agit d'un "OR" et non pas d'un "AND" car 1 employés NE PEUT PAS AVOIR 2 id_employes en meme temps !
