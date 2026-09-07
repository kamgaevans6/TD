const bouton = document.querySelector("#btnAjouter");
const liste = document.querySelector("#maListe");

bouton.addEventListener("click", function() {

    const nouvelElement = document.createElement("li");

    nouvelElement.textContent = "Nouvel élément";

    liste.appendChild(nouvelElement);
});