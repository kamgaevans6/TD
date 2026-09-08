let continuer= "oui";
while( continuer==="oui"){

    const nombre1 = Number(prompt("Entrez le premier nombre :"));
    const operation = prompt("Choisissez une opération : +, -, * ou /");
    const nombre2 = Number(prompt("Entrez le deuxième nombre :"));

    let resultat;
    
    if( operation==="+"){
        resultat= nombre1+nombre2;
        } else if( operation==="-"){
            resultat=nombre1-nombre2;
        }else if( operation==="*"){
        resultat=nombre1*nombre2;
        }else if( operation==="/") {
        if( nombre2===0){
            resultat=" Erreur: division par zero !";
        } else {
            resultat= numbre1/numbre2
        }
        } else {
            resultat= " Opérateur non reconnu"
        }
        console.log(" le resultat est:" + resultat);
        continuer = prompt( " Voulez-vous contimuer ? (oui/non)")
    }


