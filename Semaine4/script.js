function chargerDonnee(succes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (succes) {
                resolve("Donnees chargees avec succes !");
            } else {
                reject("Erreur : impossible de charger les donnees.");
            }
        }, 2000);
    });
}

chargerDonnee(true)
    .then((resultat) => {
        console.log(resultat);
    })
    .catch((erreur) => {
        console.error(erreur);
    });

chargerDonnee(false)
    .then((resultat) => {
        console.log(resultat);
    })
    .catch((erreur) => {
        console.error(erreur);
    });    