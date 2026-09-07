function trierTableau(tableau) {

    for (let i = 0; i < tableau.length; i++) {

        for (let j = 0; j < tableau.length - 1; j++) {

            if (tableau[j] > tableau[j + 1]) {

                let temporaire = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temporaire;
            }
        }
    }

    return tableau;
}

const nombres = [5, 2, 8, 1, 3];

console.log(trierTableau(nombres));