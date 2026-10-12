// 1. Sélectionner les éléments HTML
const statut = document.querySelector("#statut");
const question = document.querySelector("#question");
const reponse = document.querySelector("#reponse");
const bouton = document.querySelector("#actualiser");

// 2. Créer une fonction asynchrone
async function recupererBlague() {

    try {
        // Afficher le chargement
        statut.textContent = "Chargement...";
        question.textContent = "";
        reponse.textContent = "";

        // 3. Appeler l'API
        const resultat = await fetch(
            "https://v2.jokeapi.dev/joke/Any?lang=fr "
        );

        // 4. Vérifier la réponse HTTP
        if (!resultat.ok) {
            throw new Error(`Erreur HTTP : ${resultat.status}`);
        }

        // 5. Convertir la réponse en JSON
        const donnees = await resultat.json();

        // 6. Afficher les données dans le HTML
        statut.textContent = "Voici une blague :";
        question.textContent = donnees.setup;
        reponse.textContent = donnees.punchline;

    } catch (erreur) {

        // 7. Gérer les erreurs
        statut.textContent = "Une erreur est survenue.";
        question.textContent = "Impossible de charger la blague.";
        reponse.textContent = "Vérifie ta connexion et réessaie.";

        console.error("Erreur :", erreur);
    }
}

// 8. Charger une blague au démarrage
recupererBlague();

// 9. Charger une nouvelle blague au clic
bouton.addEventListener("click", recupererBlague);