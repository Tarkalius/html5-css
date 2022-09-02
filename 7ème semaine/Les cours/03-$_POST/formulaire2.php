<!DOCTYPE html>
<html lang='fr'>
<head>
	<meta charset="utf-8">
	<title>Formulaire 2</title>
</head>
<body>
	<h1>Formulaire 2</h1>

	<a href="formulaire3.php">Aller sur le formulaire 3</a><hr>

	<form method="post" action="formulaire3.php" >
	<!-- Les traitements de ce formulaire s'effectueront sur le fichier formulaire3.php car nous l'avons préciser dans l'attribut action="" de la balise <form> -->
		<label>Pseudo *</label><br>
		<input type="text" name="pseudo"><br><br>

		<label>Email *</label><br>
		<input type="text" name="email"><br><br>

		<input type="submit" value="Envoyer">
	</form>

</body>
</html>