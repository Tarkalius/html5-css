let mdp = prompt("Entrez votre mot de passe")

if(mdp.length>8 && mdp.length<32){
    console.log("Mot de passe valide")
}

else{
    console.log("Mot de passe invalide")
}