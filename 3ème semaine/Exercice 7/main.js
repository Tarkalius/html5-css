let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    // Vous allez ajouter l'évènement submit sur votre form 

    // le traitement à l'intérieur ça va être :

    // La première étape c'est récupérer chaque input (donc les champs de saisie)
    // on va vérifier leur contenu 
    // pour vérifier leur contenu on va utiliser l'attribue "value"

    let input_prenom = document.querySelector("#firstName");
    let valeurPrenom = input_prenom.value;
    let div = document.querySelector("#firstNameHelp");
    console.log(valeurPrenom);

    if(valeurPrenom==""){
        // Dans le cas du prénom et du nom 
        // si value est vide => afficher un message en dessous du champ de saisie
        // qui va demander à l'utilisateur d'entrer son prénom et/ou son nom
        // le message va s'afficher au niveau de la div firstNameHelp/lastNameHelp

        div.textContent = "Veuillez entrer un prénom !!";

        // Une autre possibilité c'est de mettre le message dans la case sous forme
        // de placeholder
        input_prenom.placeholder = "le message que vous voulez affiché";
    }
    else{
        div.textContent = "";  
    }

    let input_nom = document.querySelector("#lastName");
    let divNom = document.querySelector("#lastNameHelp");

    if(input_nom.value==""){
        divNom.textContent = "Veuillez entrer un nom!!";
    }
    else{
        divNom.textContent=""
    }

    // dernière étape :
    // récupérer l'input de mot de passe
    let input_password = document.querySelector("#js-password-input");
    // vérifier que le mot de passe qui a été entré est plus long
    // que 10 caractères
    let password_value = input_password.value;
    // on va récupérer la zone du message d'aide
    let divPassword = document.querySelector("#passwordHelp");
    // si ce n'est pas le cas => afficher un message qui
    if(password_value.length<10){
        divPassword.textContent="Veuillez entrer un mot de passe de plus de 10 caractères";
    }
    else{
        divPassword.textContent="";
    }

})

