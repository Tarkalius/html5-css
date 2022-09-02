// Première étape : générer une couleur aléatoire
// comme on va générer une couleur aléatoire 9 fois, une fois par case
// on va utiliser une fonction 

// définir une fonction qui permet de générer une couleur aléatoire
// générer une couleur aléatoire, ça revient à :
// générer trois nombres entre 0 et 256 

// créer une fonction qui génère un nombre entre 0 et 256 

function genererValeur(){
    // générer un nombre aléatoire entre 0 et 1
    // pour se faire on utilise math.random()
    let valeur = Math.random();
    // quand on a notre valeur entre 0 et 1
    // on doit la multiplier par 256 piur avoir une valeur entre 0 et 256
    valeur = valeur * 256;
    // maintenant on a une valeur qui est entre 0 et 256 mais qui est en décimale
    // nous on a besoin d'un nombre entier
    // donc on doit supprimer les nombres décimaux en utilisant Math.floor()
    valeur = Math.floor(valeur);
    // on va retourner la valeur qu'on a généré
    return valeur;
}

// et les concatener sous la forme
// "RGB("+premierNombreAleatoire+","+deuxiemeNombreAleatoire+","+troisiemeNombreAleatoire+")";

// créer notre fonction qui génère trois valeurs et les concatènes

function genererCouleur(){
    // on doit générer trois valeurs entre 0 et 256 car
    // on a une valeur RGB c'est à dire
    // une valeur de rouge
    // une valeur de vert (green)
    // une valeur de bleu

    let valeurR = genererValeur();
    let valeurG = genererValeur();
    let valeurB = genererValeur();

    // les concaténer sous la forme donnée ci-dessus 

    // on a la première partie c'est à dire RGB(les valeurs à l'intérieur)
    let valeurRGB = valeurR+","+valeurG+","+valeurB;
    let stringRGB = "RGB("+valeurRGB+")";

    console.log(stringRGB);
    return stringRGB;
}
genererCouleur();