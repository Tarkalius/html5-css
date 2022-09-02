// --------------------------------- VARIABLES 

// on a deux mots clés : let et var
// par convention, on utilise let 

let nomdelavariable = valeur;

// 5 types primitifs : 
// boolean : prend 2 valeurs : true or false
let vrai = true; 
let faux = false;
// string : les chaines de caractères
let texte = "ceci est une chaines"
// les chaines de caractères se mettent entre guillemets
// number : c'est tout type de nombre 
let a = 10;
let b = -1245;
let c = 10.2456972;
let d = 52.00;
// null 
// c'est quand on donne la valeur null manuellement à une variable 
let variable = null;
// undefined 
// quand on ne donne pas de valeur à une variable 
let variable;

// pour récupérer le type d'une variable on utilise : 
// typeof()

typeof(vrai) // == boolean
typeof(a) // == number 
typeof(texte) // == string

// pour afficher les variables dans la console on utilise :
// console.log()
console.log(vrai);
console.log(faux);
console.log(texte)

// on peut afficher dans la console des valeurs directement 
console.log("afficher ce texte");
console.log(11);
console.log(true);

// NOTE : 
// On a dit que le typage en javascript se fait de manière dynamique.
// ce que ça veut dire c'est qu'on ne déclare pas le type de la variable 
// mais JavaScript va le deviner directement

// ----------------------------------------------- Opérateurs arithémetiques 

// on a 4 opérateurs :
// l'addition + 
// la soustraction avec le - 
// la multiplacation avec le * 
// la division avec le / 

// Il y a un ordre de priorité entre ces opérateurs qui est le suivant : 
// 1. les parenthèses sont toujours les plus prioritaires
// 2. la division 
// 3. la multiplication 
// 4. l'addition 
// 5. la soustraction 

//--------------------------------------------------- Conversions implicites

// En JS, le typage est dynamique. 
// Grâceà cette fonctionnalité, on va parfois avoir des conversions qui se font de manière automatique. 
// Qu'est-ce qu'on veut dire par conversion ? 
// C'est tout simplement quand le type d'une variable change. 

// Les cas des conversions implicites : 
// PREMIER CAS : une chaine de caractères + [nimporte quelle variable]

// QUand on utilise l'opérateur + sur une chaine de caractères et n'importe quelle vairable cmme suit :

texte + a;

// ça va considérer le résultat de cet addition comme étant une chaine de caractères 
// et ça va mettre les deux valeurs bout à bout, collées 
// C'est ce qu'on appelle une concaténation 

// SECOND CAS : les nombres stockés sous forme de chaine de caractères 
// exemple : 
"6"
"8"
"15"
// Dans ce cas ci, si on utilise tout opérateur arithémetique en dehors du +
// le nombre va être considéré comme un number 
"6"+8 // le tout va devenir une chaine de caractères 
"68"
"6"-5 // 6 va être considéré comme étant un nombre 
1

// ------------------------------------------------ opérateurs logiques 

// Un opérateur logique c'est un outil qui nous permet de modéliser des conditions 
// les opérateurs logiques font des comparaisons et renvoient un résultat
// ce résultat est une valeur de vérité : soit vrai soit faux 

// On a vu 7 opérateurs logiques : 
// 1. ET : 
&& // voici son symbole 
// le ET renvoie vrai seulement lorsque les deux parties sont vraies
// 2. OU
|| // voici son symbole 
// il suffit que l'une des deux parties soit vrai pour que le OU renvoie vrai
// 3. NON
! // voici son symbole
// le NON renvoie l'inverse de la valeur de vérité (si c'est vrai, il renvoie faux, si c'est faux, il renvoie vrai)
// 4. Supérieur 
> // voici son symbole 
>= // supérieur ou égal 
// 5. Inférieur 
< // voici son symbole 
<= // voici son symbole
// 6. Inégalité
!= // voici son symbole 
// 7. Egalité
// Deux types d'égalité : 
// L'égalité simple : 
== // son symbole 
// l'égalité prend en compte les valeur uniquement 
// elle va renvoyer vrai si les deux valeurs sont les mêmes, quelque soit le type 
// L'égalité stricte :
=== // son symbole 
// l'égalité stricte prend en compte les valeurs et les types.
// Donc il ne suffit pas que les valeurs soient les mêmes, il faut que les types soient égaux également !

// ----------------------------------------------- CONDITIONS 

// Les conditions c'est des bouts de codes qui ne s'executent que lorsqu'une condition est vraie 
// La syntaxe est la suivante : 
if(condition){
    // faire les instructions écrites ici
}
else{
    // dans le cas où la condition est fausse, faites les instructions écrites ici
}

// on a vu qu'on peut imbriquer conditions 
// la syntaxe est la suivante : 
if(condition){
    // faires les instructions ici
}
else if(condition){
    // faire des instructions
}
else{
    // faire des instructions dans le cas où aucune condition n'est vraie
}

//------------------------------------------------------ SWITCH CASE 
// Le switch case ça va être une syntaxe simplifiée dans le cas où on a beaucoup de conditions 
// qui sont imbriquées
// Donc quand on a besoin de tester plusiers valeurs, au lieu d'utiliser les else if
// on va utiliser le switch case

// SYNTAXE :
switch(la_valeur_a_tester){
    case 1: // ici 1 représenter le premier cas, on remplace 1 par la valeur qu'on veut avoir 
        // des instructions
        break; // le break permet de sortir du switch case
    case 2: 
    // etc etc
    default : // default ça va être l'équivalent du else
    // dans le cas où aucun cas n'est vrai 
    // on va exécuter les instructions du default 
    break; // on oublie le break
}

//-------------------------------------------------- Les boucles : 

// la boucle for : 
// qui est une boucle qui fonctionne avec un compteur. 
// qu'est-ce que ça veut dire ? ça veut tout simplement dire que la condition d'arrêt de cette boucle 
// (elle arrête de répéter l'exécution des instructions) selon un compteur 
// soit le compteur arrive à 0, ou à un certain nombre, qu'on défini dans la condition 

// la syntaxe est la suivante :
for(let compteur = une_valuer; condition_sur_le_compteur; compteur++ ou compteur--){
    // compteur++ veut dire que le compteur s'incrémente de 1 à chaque itération 
    // compteur-- veut dire que le compteur décrmente de 1 à chaque itération 

    // entre les crochets on met toutes les instructions à répéter 
}

// la boucle while :
// la boulce while (ou tant que en français) fonctionne selon n'importe quelle condition.
// on crée une condition et tant que cette condition est vraie, les instructions vont se répéter 

while(condition){
    // exécuter les instructions ici
}

// une variante de la boucle while 
// ça va être la boucle do while 
// la boucle do while permet d'exécuter toutes les instructions UNE PREMIERE FOIS 
// avant de vérifier la condition de la boucle 

do{
    // les instructions qui sont ici vont toujours TOUJOURS toujours s'exécuter au moins une fois 
    // une fois que les instructions sont executés une fois, on va vérifier si la condition est vrai 
    // si elle est vrai, on va réexcuter
    // si elle est fausse, on va sortir de la boucle, et continuer notre programme

}while(condition)

// ------------------------------------------------------ les tableaux :

// les tableaux simples : des vecteurs 
// les vecteurs sont tout simplement une variable dans laquelle on peut mettre plusieurs valeurs 

let vect = [valeur, valeur2, valeur3, etc...]

// les valeurs sont séparées par des virgules 

//les matrices : des vecteurs de vecteurs 

let mat = [[premier_vecteur], [deuxieme_vecteur], [etc]];

// On a vu quelques attributs intéressants, notamment : 
// Pour récupérer une valeur d'un vecteur :
vect[indice_de_la_valeur];

// Pour récupérer une valeur d'une matrice :
mat[indice_de_la_ligne][indice_de_la_colonne] // sachant que la ligne, c'est un vecteur 
// donc soit le premier vecteur, soit le deuxième, soit le troisème, etc
// la colonne c'est une valeur DANS le vecteur 
// soit la première valeur soit la deuxième valeur, etc...

// On a une boucle pour les parcours des tableaux : 
vect.forEach(element => {
    // bloc d'('instructions)
}); 

// a noter qu'élément c'est une des valeurs DANS le vecteur. 

//------------------------------------------------------- les fonctions 

// les fonctions, ça va être des blocs d'instructions qui sont regroupés avec un nom 
// qu'on peut appeler dans différents endroits d'un programme

// Une fonction a : un nom
// des paramètres (optionnel, non obligatoire)
// des instructions
// un retour (optionnel, non obligatoire)

function nomDeLaFonction(paramètres){
    // bloc d'instructions 
    return résultat;
}