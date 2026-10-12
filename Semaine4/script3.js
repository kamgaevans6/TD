const citationElement = document.querySelector("#citation");
const auteurElement = document.querySelector("#auteur");
const boutonActualiser = document.querySelector("#actualiser");


async function recupererCitation() {

    try {

        // État : chargement
        citationElement.textContent = "Chargement...";
        auteurElement.textContent = "";

        // Appel de l'API
        const reponse = await fetch(
            "https://api.oss117quotes.xyz/v1/random"
        );

        // Vérification de la réponse HTTP
        if (!reponse.ok) {

            throw new Error(
                `Erreur HTTP : ${reponse.status}`
            );

        }

        // Conversion en JSON
        const donnees = await reponse.json();

        console.log(donnees);

        // Affichage dans la page
        citationElement.textContent = `"${donnees.content}"`;

        auteurElement.textContent = `— ${donnees.author}`;

    } catch (erreur) {

        console.error(
            "Impossible de récupérer la citation :",
            erreur
        );

        citationElement.textContent =
            "Impossible de récupérer la citation.";

        auteurElement.textContent =
            "Veuillez réessayer.";

    }
}


boutonActualiser.addEventListener("click", recupererCitation);


// Charger automatiquement une citation au démarrage
recupererCitation();