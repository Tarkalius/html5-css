for(let chiffre=0; chiffre<=400;chiffre++){
    
    if(chiffre%5==0 && chiffre%7==0){
        console.log("Hello World")
    }
    
    else if(chiffre%5==0){
        console.log("Hello")
    }
    
    else if(chiffre%7==0){
        console.log("World")
    }

    else{
        console.log(chiffre)
    }
}