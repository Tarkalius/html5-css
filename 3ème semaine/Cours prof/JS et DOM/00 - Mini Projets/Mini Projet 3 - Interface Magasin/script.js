// Nous souhaitons implémenter une interface pour la gestion des stocks d'un magasin. 

// Question 1 : Ajouter les éléments du tableau produits à la page (ils doivent s'ajouter à chaque chargement)
// porduit est un tableau d'objets
let produits=[
    {
        prduit:"Salade",
        stock:100,
        prix:"1 euro",
        emplacement:'allée 2'
    },
    {
        prduit:"Tomate",
        stock:200,
        prix:"2 euro",
        emplacement:'allée 6'
    },
    {
        prduit:"Boeuf",
        stock:10,
        prix:"6 euro",
        emplacement:'allée 8'
    },
]

// Aide : Pour cela, créer une fonction qui va créer une ligne 
// on va utiliser le nombre de lignes pour la valeur numéro
let nblignes =0;
function createLine(){
    // la fonction va faire : 
    // création d'un élément ligne 
    // une ligne est un élément tr
    // utiliser createElement()
    let line = document.createElement("tr");
    // la fonction retourne la nouvelle ligne
    return line;
}

// il faut ensuite ajouter les valeurs à la ligne dans les colonnes
// on va alors écrire une fonction addColumn 
 // la fonction prend en entrée la ligne dans laquelle il faut ajouter les colones 
 // ainsi que la valeur des columns 

function addColumn(objetProduit, nblignes){
    // créer une colonne par valeur 
    // la création d'une colonne se fait avec CreateElement()
    // créer une colone pour chaque valeur
    // une colonne est un élément th
    // mettre la valeur dans la colonne en utilisant un attribut (innerText ou textContent)
    colonnes = []
    let nb = document.createElement("th");
    nb.innerText = nblignes;
    colonnes.push(nb);
    let produit = document.createElement("th");
    produit.innerText = objetProduit.prduit;
    colonnes.push(produit);
    let stock = document.createElement("th");
    stock.innerText = objetProduit.stock;
    colonnes.push(stock);
    let prix = document.createElement("th");
    prix.innerText = objetProduit.prix;
    colonnes.push(prix);
    let emplacement = document.createElement("th");
    emplacement.innerText = objetProduit.emplacement;
    colonnes.push(emplacement);
    // Rappel : on accéde à un attribut d'un objet en faisant : 
    // objet.attribut
    return colonnes;
}

// on va ensuite créer une fonction init qui va se lancer à chaque chargement :
// elle prend en entrée le nombre de lignes et les valeurs qui doivent être mis à chaque chargement dans un tableau
function init(nb_lignes, les_produits){
    // IMPORTANT : le traitement suivant doit se faire pour toutes les valeurs du tableau les_produits !!!!!!
    // elle va créer une nouvelle ligne 
    for(let i=0; i<les_produits.length; i++){
    	let newLine = createLine();
	    // incrémenter le nombre de lignes 
	    nb_lignes++;
	    // elle va ensuite ajouter les colonnes  
	    let colonne = addColumn(les_produits[i], nb_lignes);
	    console.log(colonne)
	    // ajouter la ligne dans tbody 
	    document.querySelector('tbody').append(newLine);
	    for(let i=0; i<colonne.length; i++){
	    	newLine.insertAdjacentElement('beforeend', colonne[i]);
	    }
    }

    // elle retourne le nombre de lignes mis à jour
    return nb_lignes;
}

// on va appeler init() pour qu'elle se lance à chaque chargement 
nblignes = init(nblignes, produits);


